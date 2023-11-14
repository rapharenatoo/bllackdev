"use client";

import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import { Project } from "@/app/types/projects";
import Image from "next/image";
import { HiDesktopComputer } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className='h-[580px] rounded-lg flex flex-col gap-6 p-3 bg-violet-900/10 overflow-hidden border-2 border-gray-800 hover:border-violet-500 opacity-70 hover:opacity-100 transition-all group'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.15, delay: index * 0.2 }}
      >
        <motion.div
          className='w-full h-[200px] sm:h-[300px] lg:w-max-[320px]'
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image
            width={420}
            height={304}
            src={project.thumbnail.url}
            alt={`Thumbnail do projeto ${project.title}`}
            className='rounded-lg w-full h-full object-cover group-hover:scale-110 duration-500 transition-all'
          />
        </motion.div>

        <div className='flex-1 lg:py-[18px] w-max-[340px]'>
          <motion.h3
            className='flex items-center gap-3 font-medium text-lg text-gray-50'
            {...fadeUpAnimation}
            transition={{ duration: 0.7 }}
          >
            <HiDesktopComputer className='text-violet-500' size={24} />
            {project.title}
          </motion.h3>
          <motion.p
            className='text-gray-400 my-4 text-justify'
            {...fadeUpAnimation}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            {project.shortDescription}
          </motion.p>

          <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]'>
            {project.technologies.map((tech, i) => (
              <TechBadge
                key={`${project.title}-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.3, delay: 0.5 * i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
