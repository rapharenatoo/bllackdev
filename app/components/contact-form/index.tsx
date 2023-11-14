"use client";

import { TbCode } from "react-icons/tb";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";
import { Social } from "@/app/types/page-info";
import { CMSIcon } from "../cms-icon";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

type ContactSectionProps = {
  contactInfo: Social[];
};

export const ContactForm = ({ contactInfo }: ContactSectionProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch {
      toast.error(
        "Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde."
      );
    }
  };

  return (
    <section
      id='contact'
      className='py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950'
    >
      <div className='w-full max-w-[420px] mx-auto'>
        <SectionTitle
          title='Vamos trabalhar juntos? Entre em contato'
          visibleIcon={false}
          className='items-center text-center'
        />

        <motion.form
          className='mt-12 w-full flex flex-col gap-4'
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            type='text'
            placeholder='Nome'
            className='w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-700'
            {...register("name")}
          />
          <input
            type='email'
            placeholder='E-mail'
            className='w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-700'
            {...register("email")}
          />
          <textarea
            placeholder='Mensagem'
            className='resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-violet-700'
            maxLength={500}
            {...register("message")}
          />

          <div className='flex flex-col justify-center items-center mt-6 lg:mt-10 sm:items-center sm:gap-2'>
            <Button
              className='w-max mx-auto shadow-lg shadow-violet-400/40'
              disabled={isSubmitting}
            >
              <TbCode className='text-gray-50' size={18} />
              Enviar mensagem
              <TbCode className='text-gray-50' size={18} />
            </Button>
            <div className='text-2xl text-gray-600 flex items-center h-20 gap-3'>
              {contactInfo.map((social) => (
                <a
                  href={social.url}
                  target='_blank'
                  className='hover:text-violet-500 transition-colors'
                >
                  <CMSIcon icon={social.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
