import {Hero} from "./Hero";
import {CallToAction} from "./CallToAction";
import {Columns} from "./Columns";
import {Steps} from "./Steps";
import {Team} from "./Team";
import {Pricing} from "./Pricing";
import {Testimonials} from "./Testimonials";
import {Richtext} from "./Richtext";
import {Gallery} from "./Gallery";
import {Product} from "./Product";
import {BlockCollection} from "types";

export const BLOCK_COMPONENTS = {
  [BlockCollection.Hero]: Hero,
  [BlockCollection.Testimonials]: Testimonials,
  [BlockCollection.CallToAction]: CallToAction,
  [BlockCollection.Columns]: Columns,
  [BlockCollection.Steps]: Steps,
  [BlockCollection.Team]: Team,
  [BlockCollection.Pricing]: Pricing,
  [BlockCollection.Richtext]: Richtext,
  [BlockCollection.Gallery]: Gallery,
  [BlockCollection.Product]: Product,
};
