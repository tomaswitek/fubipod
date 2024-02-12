import {Translation} from "types";
import {Block, TestimonialsBlock} from "types/blocks";
import {Testimonial} from "types/testimonials";

export function mapBlock(block: Block, locale: string = "cs-CZ") {
  const getTranslation = (translations: any[] = []) => {
    return translations.find((t) => t.languages_code === locale);
  };

  let item = {
    ...block.item,
    ...getTranslation(block.item.translations),
  };

  let blockItem;

  switch (block.collection) {
    case "block_testimonials":
      blockItem = block.item as TestimonialsBlock;

      item = {
        ...item,
        testimonials: blockItem.testimonials.map((testimonial: any) => {
          // testimonial is junction object
          const t = testimonial.testimonial;
          return {
            ...t,
            ...getTranslation(t.translations),
          };
        }),
      };
      break;
  }

  return {...block, item};
}
