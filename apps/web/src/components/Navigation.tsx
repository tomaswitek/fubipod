import React from "react";
import {Link} from "@/components/Link";
import {LinkButton} from "@/components/LinkButton";
import {NavigationItem} from "types/navigation";
import {clsx} from "clsx";
import {imageSrc} from "@/components/Image";

interface NavigationItemProps {
  slug: string;
  item: NavigationItem;
}

function NavItem(props: NavigationItemProps, index: number) {
  const {item, slug} = props;
  const Component = item.icon ? LinkButton : Link;
  const className = clsx(
    "leading-6 text-white hover:text-gray-300 uppercase py-3 text-2xl",
    slug.includes(item.page?.slug) && "underline"
  );
  let href = "/";

  switch (item.type) {
    case "page":
      href = item.page?.slug;
      break;

    case "url":
      href = item.url;

    case "file":
      href = imageSrc(item.file);
  }

  console.log("item", item);

  return (
    <Component
      className={className}
      key={item.title}
      href={href}
      target={item.open_in_new_tab ? "_blank" : undefined}
    >
      {item.title}
    </Component>
  );
}

interface NavigationProps {
  items: NavigationItem[];
  slug: string;
}

export function Navigation(props: NavigationProps) {
  const {items, slug} = props;

  return (
    <>
      <div className="hidden lg:flex lg:gap-x-6 box-content">
        {items.map((item, index) => (
          <NavItem key={index} item={item} slug={slug} />
        ))}
      </div>
    </>
  );
}

export default Navigation;
