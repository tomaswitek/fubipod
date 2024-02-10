import React from "react";
import NextImage, {ImageProps} from "next/image";

interface Props extends ImageProps {
  //   children: React.ReactNode;
  //   className?: string;
}

export function Image(props: Props) {
  const src = `${process.env.NEXT_PUBLIC_API_URL}/assets/${props.src}`;
  return (
    <NextImage {...props} src={src}>
      {props.children}
    </NextImage>
  );
}

export default Image;
