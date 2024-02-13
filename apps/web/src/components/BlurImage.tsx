"use client";
import {useState} from "react";
import {Image, imageSrc} from "@/components/Image";

interface BlurImageProps {
  src: string;
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function BlurImage({src}: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={imageSrc(src)} target="_blank" className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 border-4 border-bg-light overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={src}
          fill
          className={cn(
            "group-hover:opacity-75 duration-700 ease-in-out object-cover",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </a>
  );
}
