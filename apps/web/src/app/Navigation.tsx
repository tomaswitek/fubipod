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
      <div className="hidden lg:flex lg:gap-x-12">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-white"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          className="flex text-sm font-semibold leading-6 text-white justify-between"
        >
          <span>Kontakt</span>
          <EnvelopeIcon height={24} className="ml-2" />
        </a>
      </div>
    </>
  );
}

export default Navigation;
