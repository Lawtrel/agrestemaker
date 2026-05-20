import { HeroTitle } from "./HeroTitle";
import { HeroSubtitle } from "./HeroSubtitle";
import { HeroCTA } from "./HeroCTA";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { PCBPattern } from "@/components/ui/PCBPattern";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <PCBPattern className="absolute inset-0 opacity-[0.04] pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-br from-agreste-carvao via-agreste-grafite to-agreste-carvao" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#39FF1408_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <HeroTitle />
        <HeroSubtitle />
        <HeroCTA />
      </div>

      <ScrollIndicator />
    </section>
  );
}
