import React from "react";
import {Link} from "@/components/Link";
import {Button} from "@/components/Button";

interface Props {
  items: any[];
}

export function Navigation(props: Props) {
  const {items} = props;

  return (
    <>
      <div className="hidden lg:flex lg:gap-x-6 box-content">
        {items.map((item) => {
          const Component = item.button ? Button : Link;
          return (
            <Component
              className="leading-6 text-white hover:text-gray-300 uppercase py-3 text-2xl"
              key={item.title}
              href={item.slug}
            >
              {item.title}
            </Component>
          );
        })}
      </div>
    </>
  );
}

export default Navigation;
