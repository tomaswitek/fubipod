import {Metadata} from "next";
import {client} from "api";
import {ImageProps} from "next/image";

export function imageSrc(src: ImageProps["src"]) {
  return `${process.env.NEXT_PUBLIC_API_URL}/assets/${src}`;
}

export async function generateMetadataFromSlug(
  slug: string
): Promise<Metadata> {
  const page = await client.getPage(slug);

  if (!page?.seo) {
    return {
      title: page?.title,
    };
  }

  const {seo} = page;

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      images: seo.og_image ? [{url: imageSrc(seo.og_image)}] : [],
    },
  };
}
