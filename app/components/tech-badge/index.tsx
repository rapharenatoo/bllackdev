
type TechBadgeProps = {
    name: string;
};

export const TechBadge = ({name}: TechBadgeProps) => {
    return (
        <span className="text-violet-400 bg-violet-900/30 text-sm py-1 px-3 rounded-lg">{name}</span>
    )
};