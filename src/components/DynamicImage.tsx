import React from "react";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";

const DynamicImage = async ({ src }: { src: string }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      alt="film backdrop"
      width={1920}
      height={1080}
      priority={true}
      className="w-full h-full object-cover rounded-t-2xl rounded-b-[10%]"
      placeholder="blur"
      blurDataURL={base64}
    />
  );
};

export default DynamicImage;
