import React from "react";
import Image from "@/components/Image";
import {HeroBlock} from "types/blocks";

interface Props extends HeroBlock {}

const categories = [
  {
    title: "FUBI POD",
    subtitle: "Potřebujete prostor pro práci, relax a život?",
    description:
      "FUBI POD je pro Vás to pravé, pokud potřebujete rychle prostor navíc. Stavba se obejde bez stavebního povolení.",
    imageUrl: "/pod.svg",
  },
  {
    title: "FUBI HOUSE",
    subtitle: "Toužíte po designovém bydlení?",
    description:
      "FUBI HOUSE je plnohodnotný dům, kam se můžete nastěhovat za pár měsíců.",
    imageUrl: "/house.svg",
  },
  {
    title: "FUBI SHOP",
    subtitle: "Hledáte inpiraci pro své podnikání?",
    description:
      "FUBI SHOP 24/7 je bezobslužná prodejna s moderní technoologií, elegantním designem a šlapající ekonomikou",
    imageUrl: "/shop.svg",
  },
  {
    title: "FUBI APP",
    subtitle: "Potřebujete automatizovat Váš byznys?",
    description:
      "FUBI APP Vám umožní běhém pár minut vytvořit vlastní bezobslužnou prodejnu. Stačí nainstalovat chytrý zámek a můžete otevřít.",
    imageUrl: "/app.svg",
  },
];

const hero = {
  categories,
  title: "Technologie a design",
};

export function Hero(props: Props) {
  // console.log("hero", hero);
  console.log("props", props);

  return (
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pb-10">
      <h2
        className="lg:text-5xl text-3xl text-white bg-bg m-10 inline-block px-10 py-5 bg-opacity-50"
        style={{letterSpacing: 12}}
      >
        {hero.title}
      </h2>
      <ul
        role="list"
        className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
      >
        {categories.map((category) => (
          <li
            key={category.title}
            className="bg-bg px-8 py-5 border-2 border-gray-300 bg-opacity-55 hover:border-white hover:bg-opacity-85 hover:border-gray-200 cursor-pointer"
          >
            <Image
              className="mx-auto w-56 object-cover"
              src={category.imageUrl}
              width={500}
              height={200}
              alt=""
            />
            <h3 className="text-5xl leading-7 tracking-tight text-white">
              {category.title}
            </h3>
            {/* <p>{category.subtitle}</p> */}
            <p className="text leading-6 text-gray-300 mt-6">
              {category.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hero;
