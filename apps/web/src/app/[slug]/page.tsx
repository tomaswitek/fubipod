import React from "react";
import {Hero} from "@/components/Hero";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {CallToAction, Columns, Pricing} from "@/components/blocks";
import {ButtonVariant} from "@/components/blocks/CallToAction";

interface Props {}

const blocks = [
  // {
  //   component: CallToAction,
  //   props: {
  //     id: "scan-n-go",
  //     title: "Scan n' go",
  //     headline: '<span class="text-white">O</span> FUBI',
  //     buttons: [
  //       {
  //         label: "scan n' go v samoobslužném obchodě",
  //         href: "/fubi-coworking-hub",
  //         image: "/hero1.png",
  //         variant: ButtonVariant.primary,
  //       },
  //     ],
  //     content: `
  //         text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkttext vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující produkt,text vysvětlující
  //       `,
  //   },
  // },
  {
    component: Pricing,
    props: {
      id: "pricing",
      headline: '<span class="text-white">FUBI</span> APP',
      content: `
        popis pro si pořídit aplikaci, přínos, využití, atd. a základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis apli aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis apli
      `,
      rows: [
        {
          title: "scan AND go",
          price: 123123,
          price_currency: "Kč + DPH",
          price_description:
            "cena za software a podporu - bez skrytých nákladů",
          content: `
       základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace,    
          `,
          href: "/scan-and-go",
        },
        {
          title: "coworking",
          price: 123123,
          price_currency: "Kč + DPH",
          price_description:
            "cena za software a podporu - bez skrytých nákladů",
          content: `
       základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace, základní popis aplikace,    
          `,
          href: "/coworking",
        },
      ],
    },
  },
];

function Page(props: Props) {
  const {} = props;

  return (
    <main>
      <div
        style={{
          background:
            'url("https://fubipod.com/img/modely/12_09_2023_7247.jpg") no-repeat top',
        }}
      >
        <Header />
        <Hero />
        {blocks.map((block) => (
          <block.component key={block.props.id} {...(block.props as any)} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default Page;
