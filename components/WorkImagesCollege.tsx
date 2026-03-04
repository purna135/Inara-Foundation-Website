"use client";
import React, { useState } from "react";
import Image from "next/image";

type CollageImage = { src: string; alt: string };

const WORK_IMAGES: CollageImage[] = [
  { src: "/collage-image/image-1.jpg", alt: "Volunteers engaging with children during community outreach" },
  { src: "/collage-image/image-2.jpg", alt: "Inara Foundation team at a cancer shelter visit" },
  { src: "/collage-image/image-3.jpg", alt: "Students participating in an Inara educational workshop" },
  { src: "/collage-image/image-4.jpg", alt: "Volunteers distributing supplies during Project Amrit" },
  { src: "/collage-image/image-5.jpg", alt: "Children creating art during a hospital creativity session" },
  { src: "/collage-image/image-6.jpg", alt: "Inara volunteers celebrating Holi with Sahaya kids" },
  { src: "/collage-image/image-7.jpg", alt: "Community engagement during a Day of Service event" },
  { src: "/collage-image/image-8.jpg", alt: "Volunteers crafting Rakhis at the Raksha Bandhan workshop" },
  { src: "/collage-image/image-9.jpg", alt: "Inara Foundation team bonding at a community event" },
  { src: "/collage-image/image-10.jpg", alt: "Children smiling during a storytelling session" },
  { src: "/collage-image/image-11.jpg", alt: "Volunteers serving refreshments during summer relief" },
  { src: "/collage-image/image-12.jpg", alt: "Raja festival celebration with underprivileged children" },
  { src: "/collage-image/image-13.jpg", alt: "Inara volunteers at a tree plantation drive" },
  { src: "/collage-image/image-14.jpg", alt: "Group photo of Inara Foundation volunteers" },
  { src: "/collage-image/image-15.png", alt: "Volunteers interacting with residents at a care home" },
  { src: "/collage-image/image-16.jpg", alt: "Children enjoying games during a community activity" },
  { src: "/collage-image/image-17.jpg", alt: "Inara Foundation volunteers spreading smiles" },
];

export default function WorkImagesCollege() {
  const [hovered, setHovered] = useState<number | null>(null);

  const imageStyles: Array<{
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width: string;
    rotate: string;
    zIndex: number;
  }> = [
    { top: "8%", left: "5%", width: "8%", rotate: "0deg", zIndex: 1 },
    { top: "32.5%", left: "5%", width: "8%", rotate: "0deg", zIndex: 1 },

    { top: "3%", right: "70.5%", width: "8%", rotate: "0deg", zIndex: 1 },
    { top: "27.5%", right: "70.5%", width: "16%", rotate: "0deg", zIndex: 1 },
    { top: "75.5%", right: "70.5%", width: "8%", rotate: "0deg", zIndex: 1 },

    { top: "10%", right: "54%", width: "16%", rotate: "0deg", zIndex: 1 },
    { top: "57.5%", right: "54%", width: "8%", rotate: "0deg", zIndex: 1 },

    { top: "10%", left: "46.5%", width: "8%", rotate: "0deg", zIndex: 1 },
    { top: "34.5%", left: "46.5%", width: "8%", rotate: "0deg", zIndex: 1 },

    { top: "6%", right: "37%", width: "8%", rotate: "0deg", zIndex: 1 },
    { top: "6%", right: "28.5%", width: "8%", rotate: "0deg", zIndex: 1 },
    { top: "30.5%", right: "28.5%", width: "16.5%", rotate: "0deg", zIndex: 1 },

    { top: "10%", left: "72%", width: "16%", rotate: "0deg", zIndex: 1 },
    { top: "57.5%", left: "72%", width: "8%", rotate: "0deg", zIndex: 1 },

    { bottom: "34.5%", right: "3.5%", width: "8%", rotate: "0deg", zIndex: 1 },
    { bottom: "10%", right: "3.5%", width: "8%", rotate: "0deg", zIndex: 1 },
  ];

  const dots = [
    { top: "8%", left: "18%", color: "#FFA500" },
    { top: "70%", left: "5%", color: "#FFA500" },
    { top: "66%", left: "52%", color: "#FFA500" },
    { top: "5%", left: "87%", color: "#000" },
    { top: "70%", left: "85%", color: "#FFA500" },
    { top: "80%", left: "34%", color: "#000" },
    { top: "85%", left: "65%", color: "#000" },
  ];

  return (
    <div className="p-0 md:p-4 md:mt-8 md:mt-0">
      <div className="absolute -bottom-185 md:-bottom-70 inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/odisha-map.png"
          alt="Map of Odisha highlighting Inara Foundation's areas of work"
          aria-hidden={true}
          fill
          className="object-contain opacity-8 grayscale"
          sizes="100vw"
        />
      </div>

      <div className="relative w-full h-[160px] md:h-[380px]">
        {dots.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className="absolute rounded-full"
            style={{
              top: dot.top as string,
              left: dot.left as string,
              width: "8px",
              height: "8px",
              backgroundColor: dot.color as string,
            }}
          />
        ))}

        {WORK_IMAGES.slice(0, imageStyles.length).map((image, index) => (
          <div
            key={index}
            className="absolute shadow-lg"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              top: imageStyles[index].top,
              bottom: imageStyles[index].bottom,
              left: imageStyles[index].left,
              right: imageStyles[index].right,
              width: hovered === index ? "20%" : imageStyles[index].width,
              transform: `rotate(${imageStyles[index].rotate})`,
              zIndex: hovered === index ? 9999 : imageStyles[index].zIndex,
              transition:
                "width 300ms ease, transform 300ms ease, box-shadow 300ms ease",
              willChange: "width, transform",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-lg border-3 border-brand-300 transition-all duration-300 grayscale hover:grayscale-0"
              sizes="(max-width: 768px) 20vw, 16vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
