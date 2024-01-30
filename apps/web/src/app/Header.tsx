import React from "react";
import {Navigation} from "./Navigation";
import {MobileNavigation} from "./MobileNavigation";
import {Logo} from "./Logo";
import {client} from "api";

interface Props {}

const languages = [
  {name: "ENG", code: "en"},
  {name: "CZ", code: "cz"},
];

const contacts = [
  {label: "E", value: "hello@fubipod.com"},
  {label: "T", value: "hello@fubipod.com"},
];

const socials = [{icon: "f"}, {icon: "i"}, {icon: "in"}];

export async function Header(props: Props) {
  const {} = props;
  const categories = await client.getCategories();

  return (
    <header className="z-50">
      <div className="bg-white flex px-3 py-4 justify-between">
        <div className="align">{languages.map((l) => l.name).join(" / ")}</div>
        <div className="flex">
          <div className="flex">
            {contacts.map((c) => (
              <div key={c.label} className="mx-2">
                {c.label}: {c.value}
              </div>
            ))}
          </div>
          <div className="flex mx-2">
            {socials.map((s, i) => (
              <div key={i} className="mx-2">
                {s.icon}
              </div>
            ))}
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
