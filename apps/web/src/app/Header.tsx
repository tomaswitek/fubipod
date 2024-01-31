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

const mainNavigation = [
  {title: "FUBI APP", slug: "/app"},
  {title: "FUBI SHOP", slug: "/shop"},
  {title: "FUBI POD", slug: "/pod"},
  {title: "FUBI HOUSE", slug: "/house"},
  {title: "Poptávka", slug: "/poptavka", button: true},
  {title: "Katalog", slug: "/katalog", button: true},
];

export async function Header(props: Props) {
  const {} = props;
  // const categories = await client.getCategories();

  return (
    <header className="z-50">
      <div className="bg-white lg:flex p-6 lg:px-8 py-4 justify-between hidden">
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
        className="flex items-center justify-between p-6 lg:px-8 bg-bg opacity-90"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo dark />
        </div>
        <MobileNavigation items={mainNavigation} />
        <Navigation items={mainNavigation} />
      </nav>
    </header>
  );
}

export default Header;
