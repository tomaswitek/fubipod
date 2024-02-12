import React from "react";
import {Link} from "@/components/Link";
import {LinkButton} from "@/components/LinkButton";
import {NavigationItem} from "types/navigation";
import {clsx} from "clsx";

interface Props {
  items: NavigationItem[];
  slug: string;
}

export function Navigation(props: Props) {
  const {items, slug} = props;

  return (
    <>
      <div className="hidden lg:flex lg:gap-x-6 box-content">
        {items.map((item) => {
          const Component = item.icon ? LinkButton : Link;
          const className = clsx(
            "leading-6 text-white hover:text-gray-300 uppercase py-3 text-2xl",
            slug === item.page?.slug && "underline"
          );
          return (
            <Component
              className={className}
              key={item.title}
              href={item.page?.slug || "/"}
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
