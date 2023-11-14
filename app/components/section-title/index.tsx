"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { TbCode } from "react-icons/tb";

type SectionTitlePros = {
  title: string;
  visibleIcon?: boolean;
  className?: string;
};

export const SectionTitle = ({
  title,
  visibleIcon = true,
  className,
}: SectionTitlePros) => {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <motion.h3
        className='flex items-center gap-3 text-3xl font-medium'
        {...animProps}
        transition={{ duration: 0.5 }}
      >
        {visibleIcon && <TbCode className='text-violet-400' size={30} />}
        {title}
      </motion.h3>
    </div>
  );
};
