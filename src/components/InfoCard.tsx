import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  accent?: "warm" | "sage" | "primary";
}

const accentStyles = {
  warm: "border-l-secondary bg-warm-light/40",
  sage: "border-l-sage bg-sage-light/40",
  primary: "border-l-primary bg-muted/40",
};

const InfoCard = ({ title, children, icon, accent = "warm" }: InfoCardProps) => (
  <div className={`card-warm border-l-4 ${accentStyles[accent]} p-6`}>
    <div className="flex items-start gap-3 mb-3">
      {icon && <span className="text-secondary mt-1 shrink-0">{icon}</span>}
      <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
    </div>
    <div className="font-body text-muted-foreground leading-relaxed text-sm">
      {children}
    </div>
  </div>
);

export default InfoCard;
