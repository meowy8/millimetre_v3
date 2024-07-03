import { getPlaiceholder } from "plaiceholder";
import { NextResponse } from "next/server";

const fetchImage = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${url}`);
  }
  const blob = await response.blob();
  const buffer = await blob.arrayBuffer();
  return Buffer.from(buffer);
};

export async function POST(req: Request) {
  const { imageUrl } = await req.json();

  try {
    const image = await fetchImage(imageUrl);
    const { base64 } = await getPlaiceholder(image);

    return NextResponse.json({ base64 });
  } catch (error: unknown) {
    //error handling
    if (error instanceof Error)
      return NextResponse.json({ error: error.message });
    else if (error && typeof error === "object" && "message" in error)
      return NextResponse.json({ error: error.message as string });
    else if (typeof error === "string")
      return NextResponse.json({ error: error });
    else return NextResponse.json({ error: "Unexpected error!" });
  }
}
