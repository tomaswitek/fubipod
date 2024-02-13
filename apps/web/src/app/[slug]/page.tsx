import {Page} from "@/components/Page";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {client} from "api";

export async function generateStaticParams() {
  const pages = await client.getPages();
  return pages.map(({slug}) => ({slug}));
}

export default function SlugPage(props: {params: {slug: string}}) {
  const {params} = props;
  const slug = params.slug || "home";
  return (
    <>
      <Header slug={slug} />
      <main>
        <Page {...props} slug={slug} />
      </main>
      <Footer />
    </>
  );
}
