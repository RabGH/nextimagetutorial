import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
}

const DefaultBlur = ({ src }: Props) => {
  return (
    <div className="container">
      <p>Blur</p>
      <div className="w-[250px] h-[300px] relative">
        <Image
          src={src}
          alt="image"
          fill
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default DefaultBlur;
