"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
      <Carousel className="px-8">
        <CarouselContent>
          {project.images.map((image, i) => (
            <CarouselItem className="overflow-hidden" key={image}>
              <Image
                onClick={() => fullscreenImage(i)}
                src={image}
                alt={project.title}
                className="h-[169px] w-full cursor-pointer rounded-xl border object-cover object-center transition-all duration-300 hover:scale-105 lg:h-[281px] xl:h-[337px]"
                height="300"
                width="1000"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {project.images.length > 1 && (
          <>
            <CarouselNext className="absolute -right-2" />
            <CarouselPrevious className="absolute -left-2" />
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
