import {
  Block,
  TestimonialsBlock,
  ColumnsBlock,
  StepsBlock,
  GalleryBlock,
} from "types/blocks";

export const BLOCK_FIELDS = [
  // common
  "*",
  "item.*",
  "item.translations.*",
  "seo.*",
  // testimonials
  "item.testimonials.*",
  "item.testimonials.testimonial.*",
  "item.testimonials.testimonial.translations.*",
  // cta
  "item.page.*",
  // columns
  "item.rows.*",
  "item.rows.translations.*",
  // steps
  "item.steps.*",
  "item.steps.translations.*",
  // gallery
  "item.gallery_items.*",
];

export function mapBlock(block: Block, locale: string = "cs-CZ") {
  const getTranslation = (translations: any[] = []) => {
    return translations.find((t) => t.languages_code === locale);
  };

  if (!block.item) {
    return block;
  }

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

    case "block_columns":
    case "block_pricing":
    case "block_product":
      blockItem = block.item as unknown as ColumnsBlock;

      item = {
        ...item,
        rows: blockItem.rows.map((row: any) => {
          return {
            ...row,
            ...getTranslation(row.translations),
          };
        }),
      };
      break;

    case "block_steps":
      blockItem = block.item as unknown as StepsBlock;

      item = {
        ...item,
        steps: blockItem.steps.map((step: any) => {
          return {
            ...step,
            ...getTranslation(step.translations),
          };
        }),
      };
      break;

      blockItem = block.item as unknown as GalleryBlock;

      item = {
        ...item,
        steps: blockItem.steps.map((step: any) => {
          return {
            ...step,
            ...getTranslation(step.translations),
          };
        }),
      };
      break;
  }

  return {...block, item};
}
