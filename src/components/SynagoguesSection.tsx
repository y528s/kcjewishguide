import SectionHeader from "./SectionHeader";
import { Building2, ExternalLink } from "lucide-react";

interface ShulGroup {
  denomination: string;
  shuls: { name: string; url?: string }[];
}

const shulGroups: ShulGroup[] = [
  {
    denomination: "Modern Orthodox",
    shuls: [{ name: "Beth Israel Abraham & Voliner (BIAV)", url: "https://biav.org" }],
  },
  {
    denomination: "Traditional",
    shuls: [{ name: "Kehilath Israel Synagogue (KI)", url: "https://kisyn.org/" }],
  },
  {
    denomination: "Chabad Lubavitch",
    shuls: [
      { name: "Torah Learning Center (TLC)", url: "https://www.torahkc.org/" },
      { name: "Chabad of Leawood", url: "https://www.kansasjewish.com/" },
      { name: "Chabad of the Plaza", url: "https://plazachabad.com/" },
      { name: "Chabad of Olathe", url: "https://www.jewisholathe.org/" },
    ],
  },
  {
    denomination: "Conservative",
    shuls: [{ name: "Congregation Beth Shalom", url: "https://bethshalomkc.org/" }],
  },
  {
    denomination: "Reform",
    shuls: [
      { name: "The Temple, Congregation B'nai Jehudah", url: "https://bnaijehudah.org/" },
      { name: "Congregation Beth Torah", url: "https://beth-torah.org" },
      { name: "New Reform Temple", url: "https://thenewreformtemple.com/" },
    ],
  },
  {
    denomination: "Independent / Progressive",
    shuls: [
      { name: "Congregation Kol Ami", url: "https://www.kolamikc.org/" },
    ],
  },
];

const outsideKC: ShulGroup["shuls"] = [
  { name: "Chabad Jewish Center at KU (Chabad)", url: "https://www.jewishku.com/" },
  { name: "Lawrence Jewish Community Congregation (Egalitarian)", url: "https://ljcc.shulcloud.com/" },
  { name: "Temple Adath Joseph – St. Joseph (Reform)", url: "https://www.templeadathjoseph.org/" },
  { name: "Temple Beth Sholom – Topeka (Reform)", url: "https://www.tbstopeka.org/" },
];

const ShulList = ({ shuls }: { shuls: ShulGroup["shuls"] }) => (
  <ul className="space-y-2">
    {shuls.map((shul) => (
      <li key={shul.name} className="font-body text-foreground flex items-start gap-2">
        <span className="text-secondary mt-1.5 text-xs">●</span>
        {shul.url ? (
          <a
            href={shul.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <span>{shul.name}</span>
            <ExternalLink size={13} className="shrink-0 opacity-50" />
          </a>
        ) : (
          <span>{shul.name}</span>
        )}
      </li>
    ))}
  </ul>
);

const SynagoguesSection = () => {
  return (
    <section id="shuls" className="section-padding bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          title="Synagogues & Congregations"
          subtitle="A diverse range of congregations serving every tradition and denomination."
          icon={<Building2 size={32} />}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shulGroups.map((group) => (
            <div key={group.denomination} className="card-warm p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-semibold uppercase tracking-wider mb-4">
                {group.denomination}
              </span>
              <ShulList shuls={group.shuls} />
            </div>
          ))}
        </div>

        <h3 className="font-display font-semibold text-xl text-foreground mt-12 mb-6">
          Outside Kansas City
        </h3>
        <div className="card-warm p-6">
          <ShulList shuls={outsideKC} />
        </div>
      </div>
    </section>
  );
};

export default SynagoguesSection;
