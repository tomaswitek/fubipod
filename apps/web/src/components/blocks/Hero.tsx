import React, {Suspense} from "react";
import {Image} from "@/components/Image";
import {HeroBlock} from "types/blocks";
import {client} from "api";
import {Link} from "@/components/Link";
import {assetsUrl} from "@/lib";

interface HeroProps extends HeroBlock {}

export async function Hero(props: HeroProps) {
  const {headline, image, title, video, video_url} = props;
  const navigation = await client.getNavigation("categories");

  const videoSrc = video ? assetsUrl(video) : video_url;

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pb-10">
        <h2
          className="lg:text-5xl text-3xl text-white bg-bg m-10 inline-block px-10 py-5 bg-opacity-50"
          style={{letterSpacing: 12}}
        >
          {headline}
        </h2>
        <ul
          role="list"
          className={`mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-8 lg:grid-cols-${navigation?.items.length}`}
        >
          {navigation?.items.map((item, index) => (
            <li
              key={index}
              className="bg-bg px-8 py-5 border-2 border-gray-300 bg-opacity-55 hover:border-white hover:bg-opacity-85 hover:border-gray-200 cursor-pointer"
            >
              <Link href={item.page?.slug || "#"}>
                <Image
                  className="mx-auto w-56 object-cover"
                  src={item.image}
                  width={500}
                  height={200}
                  alt=""
                />
                <h3 className="text-5xl leading-7 tracking-tight text-white">
                  {item.title}
                </h3>
                {/* <p>{category.subtitle}</p> */}
                <p className="text leading-6 text-gray-300 mt-6">
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {image && (
        <Image
          fill
          src={image}
          alt={title}
          className="w-full object-cover mb-10 absolute top-0 left-0 h-full -z-10"
        />
      )}
      {videoSrc && (
        <Suspense>
          <video
            className="w-full h-full absolute object-cover top-0 left-0 -z-10"
            src={videoSrc}
            autoPlay
            muted
            loop
          ></video>
        </Suspense>
      )}
    </div>
  );
}

export default Hero;
