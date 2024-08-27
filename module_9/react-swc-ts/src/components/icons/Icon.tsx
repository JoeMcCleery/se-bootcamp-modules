interface IIconProps {
  icon: string;
  className?: string;
  filled?: boolean;
}

export default function Icon({ icon, className, filled }: IIconProps) {
  return (
    <span className={`${className} ${filled && "symbol-filled"} font-symbols`}>
      {icon}
    </span>
  );
}
