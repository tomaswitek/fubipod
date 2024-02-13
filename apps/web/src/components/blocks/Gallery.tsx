import React from "react";
import {GalleryBlock} from "types";
import BlockTitle, {BlockWrapper} from "../Block";
import {BlurImage} from "../BlurImage";

interface GalleryProps extends GalleryBlock {}

export function Gallery(props: GalleryProps) {
  const {headline, gallery_items = []} = props;

  return (
    <BlockWrapper>
      <BlockTitle title={headline} />
      <div className="max-w-2xl mx-auto py-16 sm:py-24 sm:px-6 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {gallery_items.map((item, index) => (
            <BlurImage src={item.directus_files_id} key={index} />
          ))}
        </div>
      </div>
    </BlockWrapper>
  );
}

export default Gallery;
