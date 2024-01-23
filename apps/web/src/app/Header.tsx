import React from "react";
import {Navigation} from "./Navigation";
import {MobileNavigation} from "./MobileNavigation";
import {Logo} from "./Logo";
import {Hero} from "./Hero";

interface Props {}

const navigation = [
  {name: "FUBI POD", href: "#"},
  {name: "FUBI HOUSE", href: "#"},
  {name: "FUBI SHOP", href: "#"},
  {name: "FUBI APP", href: "#"},
  // {name: "Spolupráce", href: "#"},
  // {name: "Reference", href: "#"},
];

export function Header(props: Props) {
  const {} = props;

  return (
    <header className="z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo dark />
        </div>
        <MobileNavigation items={navigation} />
        <Navigation items={navigation} />
      </nav>
    </header>
  );
}

export default Header;
