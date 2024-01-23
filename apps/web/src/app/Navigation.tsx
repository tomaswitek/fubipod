import React from "react";
import {EnvelopeIcon} from "@heroicons/react/24/outline";

export interface Item {
  name: string;
  href: string;
}

interface Props {
  items: Item[];
}

export function Navigation(props: Props) {
  const {items} = props;

  return (
    <>
      <div className="hidden lg:flex lg:gap-x-12 border-b-2 box-content">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="font-semibold leading-6 border-b-2 border-transparent text-black hover:border-black"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
        <a
          href="#"
          className="flex font-semibold leading-6 justify-between text-black hover:underline"
        >
          <EnvelopeIcon height={24} className="mr-2" />
          <span>KONTAKT</span>
        </a>
      </div>
    </>
  );
}

export default Navigation;
