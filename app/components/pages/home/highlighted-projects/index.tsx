import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type HighlightedProjectsProps = {
  projects: Project[];
};

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className='container py-16'>
      <SectionTitle title='Projetos em destaque' />
      <HorizontalDivider className='mb-16' />

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, i) => (
          <div key={project.slug} >
            <ProjectCard index={i} project={project} />
          </div>
        ))}
      </div>

      <p className='flex justify-center items-center gap-1.5 w-full mt-6'>
        <span className='text-gray-400'>Se interessou?</span>
        <Link href='/projects' className='inline-flex text'>
          Veja mais aqui
          <HiArrowNarrowRight size={16} />
        </Link>
      </p>
    </section>
  );
};
