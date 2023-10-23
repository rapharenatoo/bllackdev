import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
  return (
    <section className='container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row'>
      <div className='max-w-[420px]'>
        <SectionTitle
          subtitle='experiências'
          title='Experiência Profissional'
        />
        <p className="text-gray-400 mt-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          molestias amet nisi expedita tempora voluptatum illo officia maiores
          neque corrupti magnam recusandae, officiis provident doloremque ut rem
          itaque debitis quos.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};
