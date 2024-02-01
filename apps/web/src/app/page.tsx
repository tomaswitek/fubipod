import {Hero} from "./Hero";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {CallToAction, Columns, Steps, Team} from "@/components/blocks";
import {ButtonVariant} from "@/components/blocks/CallToAction";

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
  {
    component: Steps,
    props: {
      headline: '<span class="text-white">Průběh</span> spolupráce',
      steps: [
        {
          title: "Client needs",
          content: `
          Neustále se snažíme překonávat a posunovat hranice technologie a designu. Naše nabídka produktů je směsicí inovací, estetiky a udržitelnosti. Chceme být průkopníky ve vývoji ekologicky šetrných a energeticky úsporných řešení, která zároveň poskytují pohodlí a kvalitu.
          `,
          image: "/app.svg",
        },
        {
          title: "Client needs",
          content: "Nulla one sapienu tincie miss oviverra odio sen enma matis",
          image: "/app.svg",
        },
        {
          title: "Client needs",
          content: "Nulla one sapienu tincie miss oviverra odio sen enma matis",
          image: "/app.svg",
        },
        {
          title: "Client needs",
          content: "Nulla one sapienu tincie miss oviverra odio sen enma matis",
          image: "/app.svg",
        },
      ],
    },
  },
  {
    component: Team,
    props: {
      headline: '<span class="text-white">FUBI</span> tým',
      members: [
        {
          name: "Tomáš Funk",
          job_title: "CEO",
          image: "/team/tf.jpeg",
        },
        {
          name: "Kateřina Funková",
          job_title: "CEO",
          image: "/team/kf.jpeg",
        },
        {
          name: "Jiří Kozák",
          job_title: "Operation manager",
          image: "/team/jk.jpeg",
        },
        {
          name: "Tomáš Witek",
          job_title: "CTO",
          image: "/team/tw.jpeg",
        },
        {
          name: "Zuzana Gucklerová",
          job_title: "Business development & PM",
          image: "/team/zg.jpeg",
        },
        {
          name: "Naděžda Gränzerová",
          job_title: "Office Manager",
          image: "/team/na.jpeg",
        },
        {
          name: "Lukáš Adámek",
          job_title: "Quality manager",
          image: "/team/la.jpeg",
        },
        {
          name: "Join our Team!",
          // image: "/team/jk.jpeg",
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
