import { ReactNode } from "react";
import { Service as IService } from "@/app/types/services";
import { CMSIcon } from "@/app/components/cms-icon";

type ServiceProps = {
  service: IService;
};

export const Service = ({ service }: ServiceProps) => {
  return (
    <div className='p-6 rounded-lg flex flex-col bg-violet-900/10  text-gray-500 gap-2 hover:text-violet-500 hover:bg-violet-600/20 transition-all group'>
      <div className='flex flex-col items-center justify-between gap-3'>
        <div className="text-4xl">
          <CMSIcon icon={service.iconSvg} />
        </div>

        <h3 className='font-medium text-2xl'>{service.title}</h3>
        <p className='font-medium text-md text-center group-hover:text-gray-50' >{service.description}</p>
      </div>
    </div>
  );
};
