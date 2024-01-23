import React from "react";

interface Props {}

const categories = [
  {
    title: "FUBI POD",
    subtitle: "Potřebujete prostor pro práci, rleax a život?",
    description:
      "FUBI POD je pro Vás to pravé, pokud potřebujete rychle prostor navíc. Stavba se obejde bez stavebního povolení.",
    imageUrl: "https://fubipod.com/img/modely/02_10_2023_3131.jpg",
  },
  {
    title: "FUBI HOUSE",
    subtitle: "Toužíte po designovém bydlení?",
    description:
      "FUBI HOUSE je plnohodnotný dům, kam se můžete nastěhovat za pár měsíců.",
    imageUrl: "https://fubipod.com/produkty/30_09_2022_9429.jpg",
  },
  {
    title: "FUBI SHOP",
    subtitle: "Hledáte inpiraci pro své podnikání?",
    description:
      "FUBI SHOP 24/7 je bezobslužná prodejna s moderní technoologií, elegantním designem a šlapající ekonomikou",
    imageUrl: "https://fubipod.com/galerie/21_08_2023_3295.jpg",
  },
  {
    title: "FUBI APP",
    subtitle: "Potřebujete automatizovat Váš byznys?",
    description:
      "FUBI APP Vám umožní běhém pár minut vytvořit vlastní bezobslužnou prodejnu. Stačí nainstalovat chytrý zámek a můžete otevřít.",
    imageUrl: "https://fubipod.com/galerie/12_09_2023_7203.png",
  },
];

export function Hero(props: Props) {
  const {} = props;

  return (
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pb-10">
      <ul
        role="list"
        className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
      >
        {categories.map((category) => (
          <li
            key={category.title}
            className="rounded-2xl bg-black px-8 py-10 border-2 border-gray-800 md:px-14 opacity-85 hover:border-white hover:opacity-100 cursor-pointer"
          >
            <img
              className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 object-cover"
              src={category.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
              {category.title}
            </h3>
            <p>{category.subtitle}</p>
            <p className="text-sm leading-6 text-gray-400">
              {category.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hero;
