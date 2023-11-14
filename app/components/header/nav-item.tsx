import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbCode } from "react-icons/tb";

type NavItemProps = {
  href: string;
  label: string;
};

export const NavItem = ({ href, label }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-gray-400 flex items-center gap-2 font-medium font-mono",
        isActive && "text-gray-50"
      )}
    >
      <TbCode className='text-violet-400' size={18} />
      {label}
    </Link>
  );
};
