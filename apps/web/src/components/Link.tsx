import React from "react";
import NextLink, {LinkProps} from "next/link";

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function Link(props: Props) {
  return <NextLink {...props}>{props.children}</NextLink>;
}

export default Link;
