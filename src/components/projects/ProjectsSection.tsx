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
    title: "Meliponicultura com impressão 3D",
    tags: [ "Agricultura", "Modelagem 3D", "Sustentabilidade"],
    summary:
      "O projeto une sustentabilidade e tecnologia ao aprimorar o manejo de abelhas sem ferrão em ambientes urbanos. Utilizando componentes funcionais e duráveis impressos em 3D (PET-G), o sistema otimiza caixas de madeira padrão com sensores de monitoramento ambiental e de saúde das colmeias, promovendo a biodiversidade, a polinização e a educação ambiental nas cidades.",
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
