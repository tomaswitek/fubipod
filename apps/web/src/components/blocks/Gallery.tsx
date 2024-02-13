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
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {gallery_items.map((item, index) => (
            <BlurImage src={item.directus_files_id} key={index} />
          ))}
        </div>
      </div>
    </BlockWrapper>
  );
}

export default Gallery;
