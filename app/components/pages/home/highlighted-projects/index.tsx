import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const HighlightedProjects = () => {
  return (
    <section className='container py-16'>
      <SectionTitle subtitle='destaques' title='Projetos em destaque' />
      <HorizontalDivider className='mb-16' />

      {Array.from({ length: 3 }).map((_, index) => (
        <div>
          <ProjectCard
            key={index}
            title='Projeto'
            description='Descrição do projeto'
            image='/images/projects/project.png'
            href='/'
          />
          <HorizontalDivider className='my-16' />
        </div>
      ))}
      <p className='flex items-center gap-1.5'>
        <span className='text-gray-400'>Se interessou?</span>
        <Link href='/projects' className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
        </Link>
      </p>
    </section>
  );
};
