import { MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import eruvMap from "@/assets/eruv-map.png";

const EruvSection = () => (
  <section id="eruv" className="section-padding bg-muted/30">
    <div className="container max-w-4xl mx-auto">
      <SectionHeader
        title="Eruv"
        subtitle="The Overland Park Eruv boundary."
        icon={<MapPin size={32} />}
      />
      <Dialog>
        <DialogTrigger asChild>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
            <img src={eruvMap} alt="KC Eruv boundary map" className="w-full" />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogTitle className="sr-only">Eruv Map</DialogTitle>
          <img src={eruvMap} alt="KC Eruv boundary map" className="w-full rounded-md" />
        </DialogContent>
      </Dialog>
      <p className="mt-6 text-center text-sm text-muted-foreground font-body">
        More details about the eruv can be found on the{" "}
        <a
          href="https://www.biav.org/community/local-eruv/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:opacity-80"
        >
          BIAV website
        </a>
        .
      </p>
    </div>
  </section>
);

export default EruvSection;
