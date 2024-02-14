import {Page} from "@/components/Page";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {client} from "api";
import {ResolvingMetadata, Metadata} from "next";

export async function generateStaticParams() {
  const pages = await client.getPages();
  return pages.map(({slug}) => ({slug}));
}

type Props = {
  params: {slug: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {slug} = params;

  const page = await client.getPage(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: page?.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
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
