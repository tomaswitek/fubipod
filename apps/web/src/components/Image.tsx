import React from "react";
import NextImage, {ImageProps} from "next/Image";

interface Props extends ImageProps {
  //   children: React.ReactNode;
  //   className?: string;
}

export function Image(props: Props) {
  return <NextImage {...props}>{props.children}</NextImage>;
}

export default NextImage;
