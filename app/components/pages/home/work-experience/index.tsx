import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className='container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row'>
      <div className='max-w-[420px]'>
        <SectionTitle title='Experiência' />
        <p className='text-gray-400 mt-6'>
          Estou constantemente em busca de novos desafios e projetos
          empolgantes. Estou pronto para unir forças e colaborar com você na
          criação de soluções excepcionais para impulsionar o sucesso de sua
          empresa. Vamos trabalhar juntos para transformar ideias em realidade e
          alcançar resultados surpreendentes!
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
