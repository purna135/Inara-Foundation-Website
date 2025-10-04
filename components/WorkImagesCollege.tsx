"use client";
import React, { useState } from "react";

type CollageImage = { src: string };

const WORK_IMAGES: CollageImage[] = [
  { src: "/dummy-images/image-1.jpg" },
  { src: "/dummy-images/image-2.jpg" },
  { src: "/dummy-images/image-3.jpg" },
  { src: "/dummy-images/image-4.jpg" },
  { src: "/dummy-images/image-5.jpg" },
  { src: "/dummy-images/image-6.jpg" },
  { src: "/dummy-images/image-7.jpg" },
  { src: "/dummy-images/image-8.jpg" },
  { src: "/dummy-images/image-9.jpg" },
  { src: "/dummy-images/image-10.jpg" },
  { src: "/dummy-images/image-11.jpg" },
  { src: "/dummy-images/image-12.jpg" },
  { src: "/dummy-images/image-13.jpg" },
  { src: "/dummy-images/image-14.jpg" },
  { src: "/dummy-images/image-15.png" },
  { src: "/dummy-images/image-16.jpg" },
  { src: "/dummy-images/image-17.jpg" },
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
    <div className="p-0 md:p-4 mt-8 md:mt-0">
      <div className="absolute -bottom-185 md:-bottom-70 inset-0 -z-10 pointer-events-none">
        <img
          src="/images/odisha-map.png"
          alt=""
          aria-hidden
          className="h-full w-full object-contain opacity-8 grayscale"
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
            <img
              src={image.src}
              alt={`Collage image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg border-3 border-brand-300 transition-all duration-300 grayscale hover:grayscale-0"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
