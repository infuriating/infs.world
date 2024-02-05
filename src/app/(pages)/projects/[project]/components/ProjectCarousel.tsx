"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProjectCarousel({
  project,
}: {
  project: {
    images: string[];
    title: string;
  };
}) {
  const [selectedImage, setSelectedImage] = useState(-1);

  const fullscreenImage = (idx: number) => setSelectedImage(idx);

  return (
    <>
      <Carousel className="ml-8 flex w-[300px] items-center lg:ml-4 lg:w-[500px] xl:w-[600px]">
        <CarouselContent>
          {project.images.map((image, i) => (
            <CarouselItem key={image}>
              <Image
                onClick={() => fullscreenImage(i)}
                src={image}
                alt={project.title}
                className="h-[169px] w-[300px] cursor-pointer rounded-xl border object-cover object-center lg:h-[281px] lg:w-[500px] xl:h-[337px] xl:w-[600px]"
                height="300"
                width="550"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {project.images.length > 1 && (
          <>
            <CarouselNext />
            <CarouselPrevious />
          </>
        )}
      </Carousel>
      {selectedImage >= 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <Image
            src={project.images[selectedImage]}
            alt={project.title}
            height="800"
            width="1200"
          />
          <Button
            onClick={() => fullscreenImage(-1)}
            className="absolute right-4 top-4"
          >
            Close
          </Button>
        </motion.div>
      )}
    </>
  );
}
