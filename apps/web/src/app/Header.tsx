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
      <div className="bg-white flex px-3 py-4 justify-between">
        <div className="align">ENG / CZ</div>
        <div className="flex">
          <div className="flex">
            <div>E: hello@fubipod.com</div>
            <div>T: +420 735 122 241</div>
          </div>
          <div className="flex">
            <div>f</div>
            <div>i</div>
            <div>in</div>
          </div>
        </div>
      </div>
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
