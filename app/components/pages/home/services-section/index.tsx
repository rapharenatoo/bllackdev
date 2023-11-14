"use client";

import { SectionTitle } from "@/app/components/section-title";
import { Service as IService } from "@/app/types/services";
import { motion } from "framer-motion";
import { Service } from "./service";

type ServicesProps = {
  services: IService[];
};

export const ServicesSection = ({ services }: ServicesProps) => {
  return (
    <section className='container py-16'>
      <SectionTitle title='Serviços' />

      <div className='grid grid-cols-[repeat(auto-fit,minmax(324px,1fr))] gap-6 mt-[60px] justify-center'>
        {services?.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <Service service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
