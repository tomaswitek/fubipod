import {Block, TestimonialsBlock, ColumnsBlock} from "types/blocks";

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

    case "block_columns":
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
  }

  return {...block, item};
}
