import { NextResponse } from "next/server";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import User from "@/models/User";
import connectDB from "@/utils/db";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(fileBuffer, fileName) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;
}

async function deleteFileFromS3(fileName) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
  };

  const command = new DeleteObjectCommand(params);
  await s3Client.send(command);
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const username = formData.get("username");

    if (!file || !username) {
      return NextResponse.json(
        { error: "File and username are required." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${username}/${file.name}`;
    const fileUrl = await uploadFileToS3(buffer, fileName);

    await connectDB();

    const user = await User.findOne({ username });

    if (user && user.profileImage) {
      const oldFileName = user.profileImage.split("/").pop();
      if (oldFileName) {
        await deleteFileFromS3(`${username}/${oldFileName}`);
      }
    }

    // Update user's profile picture in the database
    if (user) {
      user.profileImage = fileUrl;
      await user.save();
    }

    return NextResponse.json({ success: true, fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { message: "Error uploading file", error: error.message },
      { status: 500 }
    );
  }
}
