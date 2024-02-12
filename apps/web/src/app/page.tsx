import {Page} from "@/components/Page";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
interface Params {
  slug?: string;
}

interface Props {
  locale: string;
  params: Params;
}

export default async function Home(props: Props) {
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
