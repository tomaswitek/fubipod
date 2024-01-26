import React from "react";
import {Navigation} from "./Navigation";
import {MobileNavigation} from "./MobileNavigation";
import {Logo} from "./Logo";
import {client} from "api";

interface Props {}

export async function Header(props: Props) {
  const {} = props;
  const categories = await client.getCategories();

  return (
    <header className="z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo dark />
        </div>
        <MobileNavigation categories={categories} />
        <Navigation categories={categories} />
      </nav>
    </header>
  );
}

export default Header;
