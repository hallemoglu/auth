import { icons } from "lucide-react";

const colorPalette = {
  red: "#dc2626",
  yellow: "#c99905",
  green: "#16a34a",
  gray: "#374151",
  brown: "#493f3f"
}

interface IconProps {
  name: keyof typeof icons;
  color?: keyof typeof colorPalette | undefined;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size, className }) => {
  const LucideIcon = icons[name];

  const selectedColor = color && colorPalette[color] ? colorPalette[color] : undefined;

  return LucideIcon ? <LucideIcon color={selectedColor} size={size} className={className} /> : null;
};

export default Icon;
