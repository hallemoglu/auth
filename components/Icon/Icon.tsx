import { icons } from "lucide-react";

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size, className }) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;