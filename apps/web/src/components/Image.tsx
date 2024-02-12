import React from "react";
import NextImage, {ImageProps} from "next/image";

interface Props extends ImageProps {}

export function imageSrc(src: ImageProps["src"]) {
  return `${process.env.NEXT_PUBLIC_API_URL}/assets/${src}`;
}

export function Image(props: Props) {
  const src = imageSrc(props.src);
  return (
    <NextImage {...props} src={src}>
      {props.children}
    </NextImage>
  );
}

export default Image;
