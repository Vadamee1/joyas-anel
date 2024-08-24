import { titleFont } from "@/config/font";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Title({ title, className, subtitle }: Props) {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold my-10`}
      >
        {title}
      </h1>
      {subtitle && <h3 className="text-xl mb-10">{subtitle}</h3>}
    </div>
  );
}
