"use client";

import { Button } from "@/app/components/button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { TechBadge } from "@/app/components/tech-badge";
import { HomePageInfo } from "@/app/types/page-info";
import { TbCode } from "react-icons/tb";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animations";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='w-full lg:h-[855px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]'>
      <div className='container flex items-center justify-center '>
        <motion.div
          className='w-full lg:max-w-[730px] flex flex-col justify-center items-center'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-5xl font-medium'>Bllackdev</h2>
          <p className='font-mono text-violet-400 mt-2 lg:text-xl text-center'>
            Desenvolvimento de Sites e Aplicativos
          </p>

          <div className='text-gray-400 my-8 text-sm text-center sm:text-base'>
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[540px] justify-center'>
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                key={`intro-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className='flex flex-col justify-center items-center mt-6 lg:mt-10 sm:items-center sm:gap-5'>
            <Button
              className='w-max shadow-lg shadow-violet-400/40'
              onClick={handleContact}
            >
              <TbCode className='text-gray-50' size={18} />
              Entre em contato
              <TbCode className='text-gray-50' size={18} />
            </Button>

            <div className='text-2xl text-gray-600 flex items-center h-20 gap-3'>
              {homeInfo.socials.map((social) => (
                <a
                  href={social.url}
                  key={social.url}
                  target='_blank'
                  className='hover:text-violet-500 transition-colors'
                >
                  <CMSIcon icon={social.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
