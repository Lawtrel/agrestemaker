import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamMemberCard } from "./TeamMemberCard";
import { Button } from "@/components/ui/Button";

const teamMembers = [
  {
    name: "Membro 1",
    role: "Firmware · Impressão 3D",
    bio: "Compila C para microcontrolador antes do café e modela peças depois do almoço.",
    avatar: "/images/team/membro-1.svg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Membro 2",
    role: "Full-Stack · IoT",
    bio: "Sobe API de manhã e desce pra bancada soldar sensor à tarde. Código que vira hardware.",
    avatar: "/images/team/membro-2.svg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Membro 3",
    role: "Modelagem 3D · Design Paramétrico",
    bio: "Fusion 360 aberto 24/7. Transforma problema estrutural em arquivo .STL antes do almoço.",
    avatar: "/images/team/membro-3.svg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Membro 4",
    role: "Eletrônica · Engenharia Reversa",
    bio: "Rastreia trilhas de PCB como quem rastreia soluções: com paciência e multímetro.",
    avatar: "/images/team/membro-4.svg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Quem Somos"
          subtitle="Não somos apenas desenvolvedores — somos engenheiros que constroem com código E com as mãos."
        />
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
          <p className="text-agreste-prata/80 leading-relaxed">
            Somos estudantes de Engenharia de Software que recusaram ficar só na
            camada de abstração.
          </p>
          <p className="text-agreste-prata/80 leading-relaxed">
            No Agreste Maker, aplicamos o que a universidade nos ensina —
            arquitetura de sistemas, engenharia de requisitos, testes unitários,
            controle de versão, integração contínua — mas aplicamos no mundo
            real: no firmware que roda num ESP32, no g-code que fatia um modelo,
            na API que recebe dados de um sensor de umidade no meio do sertão.
          </p>
          <p className="text-agreste-prata/80 leading-relaxed">
            Nosso código sobe pra nuvem e também pra placa. Nosso deploy é pro
            microcontrolador e pro container. Nosso Git guarda scripts de
            automação e arquivos .STL.
          </p>
          <p className="text-agreste-areia font-display font-bold text-lg leading-relaxed">
            A cultura maker nos ensinou que software sozinho não conserta o
            mundo. O Agreste nos ensinou que não existe inovação sem
            resiliência. Nós somos essa interseção.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-agreste-prata/80 mb-4">
            Quer colaborar, pedir uma peça ou visitar o lab?
          </p>
          <Button variant="primary" href="mailto:contato@agrestemaker.com">
            Fale Conosco →
          </Button>
        </div>
      </div>
    </section>
  );
}
