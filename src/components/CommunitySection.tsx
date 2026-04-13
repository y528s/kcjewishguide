import SectionHeader from "./SectionHeader";
import { GraduationCap, Building, Droplets, ExternalLink } from "lucide-react";
import InfoCard from "./InfoCard";

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
  >
    <span>{children}</span>
    <ExternalLink size={13} className="shrink-0 opacity-50" />
  </a>
);

const SmallExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs inline-flex items-center gap-1 hover:text-primary transition-colors"
  >
    <span>{children}</span>
    <ExternalLink size={11} className="shrink-0 opacity-50" />
  </a>
);

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          title="Schools, Mikvahs & Organizations"
          subtitle="Resources for families, students, and community members of all ages."
          icon={<GraduationCap size={32} />}
        />

        {/* Schools & Mikvahs — 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoCard title="Schools" icon={<GraduationCap size={20} />} accent="primary">
            <p><ExtLink href="https://www.hbha.edu/"><strong>HBHA</strong></ExtLink>: K-12 pluralistic Jewish day school with dual curriculum including Orthodox and egalitarian programs.</p>
            <p className="mt-2"><strong>Hebrew Schools:</strong> Beth Shalom, Chabad of Leawood, KI, B'nai Jehudah, Beth Torah</p>
            <p className="mt-1"><strong>Preschools:</strong> Beth Shalom, <ExtLink href="https://www.thejkc.org/about-the-cdc/">Child Development Center (CDC) at the J</ExtLink>, B'nai Jehudah Child Development Center (CDC), Gan Chabad</p>
          </InfoCard>

          <InfoCard title="Mikvahs" icon={<Droplets size={20} />} accent="sage">
            <ul className="space-y-1.5">
              <li>
                <ExtLink href="https://www.kansasmikvah.org/">The Kansas City Community Mikvah (located at KI)</ExtLink>
              </li>
              <li>Chabad of Indian Creek</li>
              <li>
                <ExtLink href="https://www.torahkc.org/mikvah">TLC Woman's Mikveh</ExtLink>
              </li>
              <li>Chabad of Leawood</li>
            </ul>
          </InfoCard>
        </div>

        {/* Key Organizations — full width, sub-grouped into 2-col grid */}
        <h3 className="font-display font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
          <Building size={22} className="text-secondary" />
          Key Organizations
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <InfoCard title="Community Institutions" accent="warm">
            <ul className="space-y-3">
              <li>
                <ExtLink href="https://kcrabbi.org/"><strong>Rabbinical Association</strong></ExtLink>
              </li>
              <li>
                <ExtLink href="https://vaadkc.org"><strong>Vaad Hakashrut of Kansas City</strong></ExtLink>
              </li>
              <li>
                <ExtLink href="https://www.thejkc.org/"><strong>Jewish Community Center of Greater Kansas City</strong></ExtLink> (known as "the J")
                <p className="text-xs mt-0.5 text-muted-foreground">Sports, fitness, summer and winter camps, the Heritage Center, Jewish Experiences, the White Theatre</p>
              </li>
              <li>
                <ExtLink href="https://www.jewishkansascity.org/"><strong>Jewish Federation of Greater Kansas City</strong></ExtLink>
                <p className="text-xs mt-0.5 text-muted-foreground flex items-center gap-1 flex-wrap">
                  <SmallExtLink href="https://www.kcjc.com/">The Jewish Chronicle</SmallExtLink>
                  <span>· Young Adult Division (YAD), Ben Gurion Society, Sasone, PJ Library, Jewish War Veterans (JWV)</span>
                </p>
              </li>
              <li>
                <ExtLink href="https://www.jcfkc.org/"><strong>Jewish Community Foundation of Greater Kansas City (JCF)</strong></ExtLink>
                <p className="text-xs mt-0.5 text-muted-foreground">J-LEAD</p>
              </li>
              <li>
                <ExtLink href="https://communitykollel.org"><strong>Torah MiTzion Kansas City</strong></ExtLink>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title="Social Services & Advocacy" accent="sage">
            <ul className="space-y-3">
              <li>
                <ExtLink href="https://jfskc.org/"><strong>Jewish Family Services (JFS) of Greater Kansas City</strong></ExtLink>
                <p className="text-xs mt-0.5 text-muted-foreground">Food pantry, mental health support, The JFS Navigator / Priya program</p>
              </li>
              <li>
                <ExtLink href="https://jvskc.org/"><strong>Jewish Vocational Service (JVS) of Greater Kansas City</strong></ExtLink>
                <p className="text-xs mt-0.5 text-muted-foreground">Refugee support, rehousing, job training, career services</p>
              </li>
              <li>
                <ExtLink href="https://jcrbajc.org/"><strong>Jewish Community Relations Bureau | American Jewish Committee (JCRB | AJC)</strong></ExtLink>
                <p className="text-xs mt-0.5 text-muted-foreground">Advocacy, combating antisemitism, interfaith and civic engagement</p>
              </li>
              <li>
                <ExtLink href="https://mchekc.org/"><strong>Midwest Center for Holocaust Education (MCHE)</strong></ExtLink>
                <p className="text-xs mt-0.5 text-muted-foreground">Holocaust education, teacher training, exhibits and archives</p>
              </li>
              <li>
                <ExtLink href="https://kansascity.section.ncjw.org/"><strong>National Council of Jewish Women (NCJW) Kansas City Section</strong></ExtLink>
                <p className="text-xs mt-0.5 text-muted-foreground">Social justice advocacy, community programs, volunteer initiatives</p>
              </li>
              <li>
                <ExtLink href="https://www.torahkc.org/koshermeals"><strong>Kosher Meals on Wheels</strong></ExtLink> (TLC)
              </li>
              <li>
                <ExtLink href="https://www.mitzvahgardenkc.com/"><strong>Mitzvah Garden</strong></ExtLink> (B'nai Jehudah, HBHA)
              </li>
              <li>
                <strong>Jewish Scouting Troops</strong>
              </li>
            </ul>
          </InfoCard>
        </div>

        {/* Teen Programming & College Students — 2 columns */}
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title="Teen Programming" accent="primary">
            <ul className="space-y-2.5">
              <li>
                <span>NCSY / JSU & Jr NCSY</span>
                <span className="ml-2 inline-flex items-center gap-1.5 flex-wrap">
                  <SmallExtLink href="https://midwest.ncsy.org/chapters/kansas-city/">Website</SmallExtLink>
                  <span className="text-muted-foreground text-xs">·</span>
                  <SmallExtLink href="https://www.instagram.com/kc_jsu_ncsy/">Instagram</SmallExtLink>
                  <span className="text-muted-foreground text-xs">·</span>
                  <SmallExtLink href="https://chat.whatsapp.com/KAN0MoyPsz06zIdAMSjEh0">WhatsApp</SmallExtLink>
                </span>
              </li>
              <li>
                <span>BBYO</span>
                <span className="ml-2 inline-flex items-center gap-1.5 flex-wrap">
                  <SmallExtLink href="https://bbyo.org/bbyo-near-you/regions/mid-america-region-kansas-city-council">Website</SmallExtLink>
                  <span className="text-muted-foreground text-xs">·</span>
                  <SmallExtLink href="https://www.instagram.com/kcbbyo/">Instagram</SmallExtLink>
                </span>
              </li>
              <li>
                <span>KCteen</span>
                <span className="ml-2 inline-flex items-center gap-1.5 flex-wrap">
                  <SmallExtLink href="https://www.kcjewishteens.org/">Website</SmallExtLink>
                  <span className="text-muted-foreground text-xs">·</span>
                  <SmallExtLink href="https://www.instagram.com/kcteen/">Instagram</SmallExtLink>
                </span>
              </li>
              <li>B'nai Tzedek (through JCF)</li>
              <li>
                <span>USY</span>
                <span className="ml-2 inline-flex items-center gap-1.5">
                  <SmallExtLink href="https://bethshalomkc.org/engaging/young-families-and-youth/usy-high-school/">Website</SmallExtLink>
                </span>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title="College Students" accent="sage">
            <ul className="space-y-2">
              <li>
                <ExtLink href="https://www.kuhillel.org/">KU Hillel</ExtLink>
              </li>
              <li>
                <ExtLink href="https://jewishku.com">Chabad at KU</ExtLink>
              </li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
