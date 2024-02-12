import React, {PropsWithChildren} from "react";
import Link from "./Link";
import {clsx} from "clsx";

interface Props extends PropsWithChildren {
  href: string;
  className?: string;
}

export function LinkButton(props: Props) {
  const {href, children} = props;
  const className = clsx(
    "bg-primary p-2 hover:text-black hover:opacity-85",
    props.className
  );

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );

  return null;
}

export default LinkButton;
