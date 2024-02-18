import {Page} from "@/components/Page";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {generateMetadataFromSlug} from "@/lib";
import {Metadata} from "next";

const SLUG = "home";

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromSlug(SLUG);
}

export default function HomePage() {
  return (
    <>
      <Header slug={SLUG} />
      <main>
        <Page slug={SLUG} />
      </main>
      <Footer />
    </>
  );
}
