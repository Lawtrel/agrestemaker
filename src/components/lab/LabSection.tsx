import { SectionHeading } from "@/components/ui/SectionHeading";
import { LabGallery } from "./LabGallery";

export function LabSection() {
  return (
    <section id="laboratorio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="O Laboratório"
          subtitle="Cada superfície aqui é uma bancada de experimentação. Cada erro, uma iteração. Cada protótipo, um passo mais perto da solução."
        />
        <LabGallery />
        <p className="text-center text-sm text-agreste-prata/60 mt-8 max-w-xl mx-auto italic">
          Nosso laboratório não é um ateliê de vitrine. É um espaço de trabalho
          — com poeira de filamento, cheiro de fluxo de solda e a tela do
          terminal sempre aberta.
        </p>
      </div>
    </section>
  );
}
