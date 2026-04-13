import SectionHeader from "./SectionHeader";
import { Sparkles, Trophy, ExternalLink } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const activities = [
  { name: "Worlds of Fun", url: "https://www.worldsoffun.com/", desc: "Theme park with roller coasters and water park (Oceans of Fun)" },
  { name: "Science City", url: "https://unionstation.org/sciencecity/", desc: "Interactive science museum inside Union Station" },
  { name: "Wonderscope", url: "https://wonderscope.org/", desc: "Hands-on children's museum focused on creative learning" },
  { name: "Nelson-Atkins Museum of Art", url: "https://nelson-atkins.org/", desc: "World-class art museum famous for its sculpture park and giant shuttlecocks" },
  { name: "Crown Center", url: "https://www.crowncenter.com/", desc: "Family complex with shops, restaurants, Legoland, and Sea Life Aquarium" },
  { name: "Hallmark Kaleidoscope", url: "https://hallmarkkaleidoscope.com/", desc: "Free creative art studio for kids by Hallmark" },
  { name: "Deanna Rose Children's Farmstead", url: "https://www.opkansas.org/recreation-fun/deanna-rose-childrens-farmstead/", desc: "Outdoor farm-themed park with animals, playgrounds, and fishing pond" },
  { name: "Kansas City Zoo & Aquarium", url: "https://kansascityzoo.org/", desc: "Major zoo with African animals, aquarium exhibits, and safari experiences" },
  { name: "Johnson County Arts & Heritage Center", url: "https://www.jcprd.com/1835/Arts-Heritage-Center", desc: "Arts center with the JoCo Museum and KidScape children's exhibit" },
  { name: "Andretti Indoor Karting & Games", url: "https://andrettikarting.com/kansas-city", desc: "Indoor kart racing, arcade, and family entertainment complex" },
];

const legends = [
  { name: "Kansas City Chiefs", url: "https://www.chiefs.com/", desc: "Super Bowl-winning NFL team" },
  { name: "Kansas City Royals", url: "https://www.mlb.com/royals", desc: "Major League Baseball team and 2015 World Series champions" },
  { name: "Sporting Kansas City", url: "https://www.sportingkc.com/", desc: "Major League Soccer club at Children's Mercy Park" },
  { name: "Kansas City Current", url: "https://www.kansascitycurrent.com/", desc: "Women's pro soccer with the first purpose-built NWSL stadium" },
  { name: "The Roasterie Coffee Company", url: "https://theroasterie.com/", desc: "Local coffee roaster known for its airplane-topped roastery" },
  { name: "Boulevard Brewing Company", url: "https://www.boulevard.com/", desc: "One of the largest craft breweries in the Midwest" },
  { name: "J. Rieger & Co.", url: "https://www.jriegerco.com/", desc: "Historic distillery famous for Kansas City whiskey" },
  { name: "Negro Leagues Baseball Museum", url: "https://nlbm.com/", desc: "Smithsonian-level museum preserving the history of Black baseball" },
];

const ActivitiesSection = () => {
  return (
    <section id="explore" className="section-padding bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          title="Explore Kansas City"
          subtitle="Family fun, local legends, and everything that makes KC special."
          icon={<Sparkles size={32} />}
        />

        <TooltipProvider delayDuration={200}>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
                <Sparkles size={20} className="text-secondary" /> Fun Activities
              </h3>
              <div className="flex flex-wrap gap-3">
                {activities.map((a) => (
                  <Tooltip key={a.name}>
                    <TooltipTrigger asChild>
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-warm-light text-warm-foreground font-body text-sm font-medium border border-secondary/20 hover:bg-secondary/20 transition-colors"
                      >
                        {a.name}
                        <ExternalLink size={12} className="shrink-0 opacity-50" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs text-center">
                      {a.desc}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
                <Trophy size={20} className="text-primary" /> Local Legends & Treasures
              </h3>
              <div className="flex flex-wrap gap-3">
                {legends.map((l) => (
                  <Tooltip key={l.name}>
                    <TooltipTrigger asChild>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {l.name}
                        <ExternalLink size={12} className="shrink-0 opacity-50" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs text-center">
                      {l.desc}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default ActivitiesSection;
