import React, {PropsWithChildren} from "react";
import Link from "./Link";
import {clsx} from "clsx";

interface Props extends PropsWithChildren {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: Props) {
  const {href, onClick, children} = props;
  const className = clsx(
    "bg-primary p-2 hover:text-black hover:opacity-85",
    props.className
  );

  if (onClick) {
    return <button className={className}>{children}</button>;
  }

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return null;
}

export default Button;
