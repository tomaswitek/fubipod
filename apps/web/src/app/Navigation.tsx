import React from "react";

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
  );
}

export default Navigation;
