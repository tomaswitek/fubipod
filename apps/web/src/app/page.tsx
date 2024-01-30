import {Hero} from "./Hero";
import {Header} from "./Header";
import {Footer} from "./Footer";
// import type {InferGetStaticPropsType, GetStaticProps} from "next";

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
      </div>
      <Footer />
    </main>
  );
}
