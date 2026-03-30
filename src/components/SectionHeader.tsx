import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

const SectionHeader = ({ title, subtitle, icon }: SectionHeaderProps) => (
  <div className="text-center mb-12">
    {icon && <div className="flex justify-center mb-4 text-secondary">{icon}</div>}
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-secondary" />
  </div>
);

export default SectionHeader;
