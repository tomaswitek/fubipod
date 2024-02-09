import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Page} from "@/components/Page";

export default async function Home() {
  return (
    <main>
      <div
        style={{
          background:
            'url("https://fubipod.com/img/modely/12_09_2023_7247.jpg") no-repeat top',
        }}
      >
        <Header />
        <Page slug="home" />
      </div>
      <Footer />
    </main>
  );
}
