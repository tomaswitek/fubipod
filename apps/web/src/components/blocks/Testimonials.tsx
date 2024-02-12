"use client";
import React from "react";
import Image from "@/components/Image";
import {BlockContent} from "@/components/Block";
import {ColumnTitle} from "@/components/ColumnTitle";
import {client} from "api";
import {TestimonialsBlock} from "types";

interface Props extends TestimonialsBlock {}

export async function Testimonials(props: Props) {
  const {title} = props;
  const categoryNavigation = await client.getNavigation("categories");

  // TODO: make slider
  const randomIndex = Math.floor(Math.random() * props.testimonials.length);

  const testimonial = props.testimonials[randomIndex];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:pt-32">
      <div
        className="relative"
        style={{
          background:
            'url("https://fubipod.com/img/modely/12_09_2023_7247.jpg") no-repeat bottom',
        }}
      >
        <div className="grid md:grid-cols-2 pt-28 pb-9">
          <div>Play</div>
          <div className="flex justify-center">
            <div className="bg-bg text-gray-300 w-96 p-10 z-50 lg:relative">
              <ColumnTitle title={title!} />
              <BlockContent content={testimonial.content} className="py-10" />
              <div className="text-primary">{testimonial.company}</div>
              <div>{testimonial.subtitle}</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 bg-bg-light md:absolute bottom-0 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto">
            {categoryNavigation?.items.map((item) => (
              <a
                key={item.id}
                href={item.page?.slug || "#"}
                className="flex items-center justify-center p-4"
              >
                <Image src={item.image} width={100} height={100} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;