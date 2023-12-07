import React from "react";
import Image, { StaticImageData } from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

interface Props {
  src: string;
}

const PlaiceholderBlur = async ({ src }: Props) => {
  const buffer = await fs.readFile(`./public${src}`);
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <div className="container">
      <p>Plaiceholder Blur</p>
      <div className="w-[250px] h-[300px] relative">
        <Image
          src={src}
          alt="image"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
    </div>
  );
};
export default PlaiceholderBlur;
