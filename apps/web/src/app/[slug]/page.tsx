import {Page} from "@/components/Page";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function Home(props: {params: {slug: string}}) {
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
