import React from "react";

interface Props {
  dark?: boolean;
}

export function Logo(props: Props) {
  const src = props.dark
    ? "https://fubipod.com/img/logo/fubipod_black.svg"
    : "https://fubipod.com/img/logo/fubipod_white.svg";
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">FUBI</span>
      <img className="h-8 w-auto" src={src} alt="" />
    </a>
  );
}

export default Logo;
