import { ComponentProps } from "react";
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";

type RichTextProps = ComponentProps<typeof CMSRichText>;

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className='text-gray-50 font-medium'>{children}</b>
        ),
        ul: ({ children }) => (
          <ul className='list-disc list-inside pl-2 flex flex-col gap-1'>
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            className='hover:text-violet-500 transtion-colors underline'
          >
            {children}
          </a>
        ),
      }}
    />
  );
};
