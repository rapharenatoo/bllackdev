import { cn } from "@/app/lib/utils";

type SectionTitlePros = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitlePros) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span className='font-mono text-sm text-violet-400'>{`../${subtitle}`}</span>
      <h3 className='text-3xl font-medium'>{title}</h3>
    </div>
  );
};
