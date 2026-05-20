import { HeroSection } from "@/components/hero/HeroSection";
import { LabSection } from "@/components/lab/LabSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { TeamSection } from "@/components/team/TeamSection";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AnimatedSection>
        <LabSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <TeamSection />
      </AnimatedSection>
    </>
  );
}
