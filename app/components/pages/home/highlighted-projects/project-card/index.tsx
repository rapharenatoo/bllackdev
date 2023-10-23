import { Link } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  href,
}: ProjectCardProps) => {
  return (
    <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
      <div className='w-full h-full'>
        <Image
          width={420}
          height={304}
          src='https://www.github.com/rapharenatoo.png'
          alt='Thumbnail do projeto'
          className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg'
        />
      </div>

      <div>
        <h3 className='flex items-center gap-3 font-medium text-lg text-gray-50'>
          <Image
            width={20}
            height={20}
            alt='Ícone do projeto'
            src='/images/icons/project-title-icon.svg'
          />
          Nome do projeto
        </h3>
        <p className='text-gray-400 my-6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, vel
          voluptates odit, numquam eaque perferendis alias, quaerat recusandae
          veritatis incidunt suscipit assumenda voluptas nostrum. Saepe qui at
          veritatis sequi sit aliquam, ipsam a quae corporis aspernatur
          temporibus illum enim eligendi porro voluptatum iure vitae magnam
          voluptates nulla officia maiores harum.
        </p>

        <div className='flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]'>
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
        </div>

        <Link href='/projects/book-wise'>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
