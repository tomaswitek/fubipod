import React from "react";
import {clsx} from "clsx";

interface Props {
  value: number;
  className?: string;
}

export function Number(props: Props) {
  const {value} = props;

  const number = value < 10 ? `0${value}` : value;

  const className = clsx("text-gray-300 text-5xl", props.className);

  return <div className={className}>{number}</div>;
}

export default Number;
