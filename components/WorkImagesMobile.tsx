"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const MOBILE_IMAGES = [
  { src: "/collage-image/image-4.jpg", alt: "Team collaboration" },
  { src: "/collage-image/image-3.jpg", alt: "Project impact" },
  { src: "/collage-image/image-5.jpg", alt: "Community engagement" },
  { src: "/collage-image/image-6.jpg", alt: "Social initiative" },
  { src: "/collage-image/image-7.jpg", alt: "Outreach programs" },
  { src: "/collage-image/image-8.jpg", alt: "Cultural events" },
  { src: "/collage-image/image-9.jpg", alt: "Educational activities" },
  { src: "/collage-image/image-10.jpg", alt: "Support programs" },
  { src: "/collage-image/image-11.jpg", alt: "Volunteer training" },
  { src: "/collage-image/image-12.jpg", alt: "Community bonding" },
  { src: "/collage-image/image-13.jpg", alt: "Project initiatives" },
  { src: "/collage-image/image-14.jpg", alt: "Team building" },
  { src: "/collage-image/image-16.jpg", alt: "Social welfare" },
  { src: "/collage-image/image-17.jpg", alt: "Community impact" },
];

export default function WorkImagesMobile() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-8 lg:hidden">
      {/* Main Featured Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 shadow-lg">
        <Image
          src={MOBILE_IMAGES[activeIndex].src}
          alt={MOBILE_IMAGES[activeIndex].alt}
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur">
          {activeIndex + 1} / {MOBILE_IMAGES.length}
        </div>
      </div>

      {/* Thumbnail Grid - Scrollable */}
      <div className="mt-4 -mx-4 px-4 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {MOBILE_IMAGES.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all flex-shrink-0 w-16 h-16 ${
                activeIndex === index
                  ? "ring-2 ring-brand-500 scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="64px"
                quality={70}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {MOBILE_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === index
                ? "w-6 bg-brand-500"
                : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe Hint */}
      <p className="mt-3 text-center text-xs text-neutral-500">
        Scroll and tap thumbnails to view all {MOBILE_IMAGES.length} images
      </p>
    </div>
  );
}

