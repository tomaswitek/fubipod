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

  return null;

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        {/* <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              We’re a dynamic group of individuals who are passionate about what
              we do.
            </p>
          </div> */}
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-gray-800 px-8 py-10"
            >
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {/* <img
        src="https://fubipod.com/img/modely/12_09_2023_7247.jpg"
        alt=""
        className="inset-0 -z-10 w-full object-cover"
      /> */}
      {/* <div
        className="inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      {/* <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
    </div>
  );
}

export default Hero;
