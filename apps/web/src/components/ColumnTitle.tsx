import React from "react";
import {clsx} from "clsx";

interface Props {
  title: string;
  className?: string;
}

export function ColumnTitle(props: Props) {
  const {title} = props;
  const className = clsx(
    "text-gray-300 text-xl tracking-widest",
    props.className
  );

  return (
    <>
      <div className={className}>{title}</div>
      <div className="inline-block w-20 h-px bg-primary" />
    </>
  );
}

export default ColumnTitle;
