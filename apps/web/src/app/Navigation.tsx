import React from "react";
import {EnvelopeIcon} from "@heroicons/react/24/outline";
import {client} from "api";

interface Props {}

export async function Navigation(props: Props) {
  const categories = await client.getCategories();

  return (
    <>
      <div className="hidden lg:flex lg:gap-x-12 border-b-2 box-content">
        {categories.map((item) => (
          <a
            key={item.title}
            href={item.slug}
            className="font-semibold leading-6 border-b-2 border-transparent text-black hover:border-black"
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
        <a
          href="#"
          className="flex font-semibold leading-6 justify-between text-black hover:underline"
        >
          <EnvelopeIcon height={24} className="mr-2" />
          <span>KONTAKT</span>
        </a>
      </div>
    </>
  );
}

export default Navigation;
