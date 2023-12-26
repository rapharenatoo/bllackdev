"use client";

import { ProjectSection } from "@/app/types/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";

type ProjectSectionProps = {
  sections: ProjectSection[];
};

export const ProjectSections = ({ sections }: ProjectSectionProps) => {
  return (
    <section className='container my-16 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6'>
      {sections.map((section) => (
       
          <motion.div
            key={section.title}
            className='flex flex-col items-center gap-6 md:gap-12'
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-2xl md:text-3xl font-medium text-gray-300'>
              {section.title}
            </h2>
            <Image
              src={section.image.url}
              alt={`Imagem da sessão ${section.title}`}
              width={880}
              height={472}
              className='w-full aspect-auto rounded-lg object-cover'
              unoptimized
            />
          </motion.div>
      ))}
    </section>
  );
};
