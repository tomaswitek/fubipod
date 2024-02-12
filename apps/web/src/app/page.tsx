import {Page} from "@/components/Page";

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
  return <Page {...props} slug={slug} />;
}
