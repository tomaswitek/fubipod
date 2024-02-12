import {Page} from "@/components/Page";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function Home() {
  const slug = "home";

  return (
    <>
      <Header slug={slug} />
      <main>
        <Page slug={slug} />
      </main>
      <Footer />
    </>
  );
}
