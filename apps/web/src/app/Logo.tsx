import React from "react";

interface Props {}

export function Logo() {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">FUBI</span>
      <img
        className="h-8 w-auto"
        src="https://fubipod.com/img/logo/fubipod_white.svg"
        alt=""
      />
    </a>
  );
}

export default Logo;
