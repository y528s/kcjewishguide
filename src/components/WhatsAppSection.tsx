import SectionHeader from "./SectionHeader";
import { MessageCircle } from "lucide-react";

const whatsappGroups = [
  {
    name: "Community Events",
    url: "https://jewisheventskc.com",
  },
];

const WhatsAppSection = () => (
  <section id="connect" className="section-padding bg-muted/30">
    <div className="container max-w-3xl mx-auto">
      <SectionHeader
        title="Stay Connected"
        subtitle="Join these WhatsApp groups to stay in the loop with community news and events."
        icon={<MessageCircle size={32} />}
      />
      <div className="flex justify-center">
        {whatsappGroups.map((g) => (
          <a
            key={g.name}
            href={g.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-warm p-6 flex items-center gap-4 group hover:border-secondary transition-colors"
          >
            <span className="shrink-0 w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
              <MessageCircle size={22} />
            </span>
            <div>
              <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{g.name}</p>
              <p className="text-sm text-muted-foreground font-body">Request to join →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default WhatsAppSection;
