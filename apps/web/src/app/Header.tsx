import React from "react";
import {Navigation} from "./Navigation";
import {MobileNavigation} from "./MobileNavigation";
import {Logo} from "./Logo";

interface Props {}

const navigation = [
  {name: "FUBI POD", href: "#"},
  {name: "FUBI HOUSE", href: "#"},
  {name: "FUBI SHOP", href: "#"},
  {name: "FUBI APP", href: "#"},
  {name: "Spoluprace", href: "#"},
  {name: "Reference", href: "#"},
];

export function Header(props: Props) {
  const {} = props;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <MobileNavigation items={navigation} />
        <Navigation items={navigation} />
      </nav>
    </header>
  );
}

export default Header;
