import {Hero} from "./Hero";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {CallToAction, Columns} from "@/components/blocks";
import {
  ButtonVariant,
  Props as CallToActionProps,
} from "@/components/blocks/CallToAction";

const blocks = [
  {
    component: CallToAction,
    props: {
      id: "fubi-coworking-hub",
      title: "O fubi",
      headline: '<span class="text-white">O</span> FUBI',
      buttons: [
        {
          label: "FUBI coworking HUB",
          href: "/fubi-coworking-hub",
          image: "/hero1.png",
          variant: ButtonVariant.primary,
        },
      ],
      content: `
          <p class="mb-4">Naše vize vychází z motta “more with less” - “méně je více”.</p>  
          <p class="mb-4">Neustále se snažíme překonávat a posunovat hranice technologie a designu. Naše nabídka produktů je směsicí inovací, estetiky a udržitelnosti. Chceme být průkopníky ve vývoji ekologicky šetrných a energeticky úsporných řešení, která zároveň poskytují pohodlí a kvalitu.</p>
          <p>naší misí je přetvářet sny našich zákazníků v životní realitu.</p>
        `,
    },
  },
  {
    component: Columns,
    props: {
      id: "fubi-coworking-hub",
      headline: '<span class="text-white">Naše</span> služby',
      rows: [
        {
          id: "app",
          title: "Aplikace scan n' go / coworking",
          image: "/app.svg",
          content: `
KDYŽ SE ŘEKNE FUBI APP PŘEDSTAVTE SI APLIKACI, KTERÁ JE ŠITÁ NA MÍRU PRO KONCEPT SAMOOBSLUŽNÝCH PRODEJEM NEBO COWORKINGU. JEDNA APLIKACE VYLADĚNÁ DO POSLEDNÍHO DETAILU, S NÍŽ SI OTEVŘETE DVEŘE NEBO ZAPLATÍTE ZA NÁKUP V SAMOOBSLUŽNÉ PRODEJNĚ.
            `,
        },
        {
          id: "shop",
          title: "24/7 samoobslužná prodejna",
          image: "/shop.svg",
          content: `
KDYŽ SE ŘEKNE FUBI APP PŘEDSTAVTE SI APLIKACI, KTERÁ JE ŠITÁ NA MÍRU PRO KONCEPT SAMOOBSLUŽNÝCH PRODEJEM NEBO COWORKINGU. JEDNA APLIKACE VYLADĚNÁ DO POSLEDNÍHO DETAILU, S NÍŽ SI OTEVŘETE DVEŘE NEBO ZAPLATÍTE ZA NÁKUP V SAMOOBSLUŽNÉ PRODEJNĚ.
            `,
        },
        {
          id: "pod",
          title: "výstavba dřevostaveb",
          image: "/pod.svg",
          content: `
KDYŽ SE ŘEKNE FUBI APP PŘEDSTAVTE SI APLIKACI, KTERÁ JE ŠITÁ NA MÍRU PRO KONCEPT SAMOOBSLUŽNÝCH PRODEJEM NEBO COWORKINGU. JEDNA APLIKACE VYLADĚNÁ DO POSLEDNÍHO DETAILU, S NÍŽ SI OTEVŘETE DVEŘE NEBO ZAPLATÍTE ZA NÁKUP V SAMOOBSLUŽNÉ PRODEJNĚ.
            `,
        },
      ],
    },
  },
  {
    component: Columns,
    props: {
      id: "fubi-coworking-hub",
      headline: '<span class="text-white">Proč</span> FUBI?',
      rows: [
        {
          id: "realizace",
          title: "rychlá realizace",
        },
        {
          id: "naklady",
          title: "nízké náklady",
        },
        {
          id: "duvody",
          title: "doplnit důvody",
        },
        {
          id: "naklady",
          title: "doplnit důvody",
        },
        {
          id: "naklady",
          title: "doplnit důvody",
        },
        {
          id: "naklady",
          title: "doplnit důvody",
        },
        {
          id: "naklady",
          title: "doplnit důvody",
        },
        {
          id: "naklady",
          title: "doplnit důvody",
        },
        {
          id: "naklady",
          title: "doplnit důvody",
        },
        {
          id: "naklady",
          title: "doplnit důvody",
        },
      ],
    },
  },
];

export default function Home() {
  return (
    <main>
      <div
        className="border-b-2 border-gray-800"
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
