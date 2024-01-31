import {Hero} from "./Hero";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {CallToAction} from "@/components/blocks";
import {ButtonVariant} from "@/components/blocks/CallToAction";
// import type {InferGetStaticPropsType, GetStaticProps} from "next";

export default function Home() {
  const blocks = [
    {
      compomnent: CallToAction,
      props: {
        id: "fubi-coworking-hub",
        title: "O fubi",
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
  ];
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
          <block.compomnent key={block.props.id} {...block.props} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
