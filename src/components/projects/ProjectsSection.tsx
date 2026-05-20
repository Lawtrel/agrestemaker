import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    image: "/images/projects/pecas-funcionais.svg",
    title: "Robotmotion",
    tags: ["Modelagem 3D", "IoT", "ESP32", "Arduino", "Mascote", "Interatividade"],
    summary:
      "Um mascote eletrônico autônomo que une nostalgia e tecnologia, reagindo ao ambiente com expressões visuais e controle via interface web. Com um design inspirado em brinquedos clássicos, o Robotmotion é uma peça funcional que traz vida e personalidade à bancada, mostrando que a inovação pode ser divertida e acessível.",
  },
  {
    image: "/images/projects/caatinga-conectada.svg",
    title: "Robo Oto",
    tags: ["IoT", "ESP32", "Modelagem 3D", "Robô", "Sensores", "Arduino"],
    summary:
      "O Otto é um robô bípede open-source e imprimível em 3D, focado no ensino de robótica e programação. Compatível com Arduino, ele é capaz de caminhar, dançar e desviar de obstáculos com sensores ultrassônicos. É uma plataforma acessível que utiliza programação em blocos ou código C++, amplamente adotada em projetos educacionais ao redor do mundo.",
  },
  {
    image: "/images/projects/hardware-renascido.svg",
    title: "Abelhas sem Ferrão",
    tags: [ "Agricultura"],
    summary:
      "Um projeto de apicultura urbana que utiliza caixas de abelhas sem ferrão, adaptadas para ambientes urbanos. Com um design funcional e sustentável, as caixas são equipadas com sensores para monitoramento ambiental e saúde das colmeias, promovendo a biodiversidade e a polinização em áreas urbanas, além de oferecer uma fonte local de mel e educação ambiental.",
  },
  {
    image: "/images/projects/ferramentas-digitais.svg",
    title: "Box",
    tags: ["Python", "Raspberry Pi", "Dashboards", "Instrumentação"],
    summary:
      "",
  },

  {
    image: "/images/projects/ferramentas-digitais.svg",
    title: "Tabuleiro de Mesa",
    tags: ["Modelagem 3D", "Impressão 3D", "Design Funcional", "Personalização"],
    summary:
      "",
  }
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 px-6 bg-agreste-carvao">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projetos"
          subtitle="Cada projeto nasce de um problema real. Cada solução carrega o DNA do Agreste: funcional, adaptável e feito para durar."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
