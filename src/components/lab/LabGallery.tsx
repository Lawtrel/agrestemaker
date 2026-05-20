import Image from "next/image";

interface LabImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
  span: string;
}

const labImages: LabImage[] = [
  {
    src: "/images/lab/fatiando-futuro.svg",
    alt: "Estudante configurando parâmetros de fatiamento no Cura frente ao monitor",
    caption: "Fatiando o futuro",
    description:
      "Modelos 3D ganham forma no slicer enquanto o Agreste espera a próxima camada.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/lab/camada-por-camada.svg",
    alt: "Impressora 3D Klipper em operação imprimindo peça funcional",
    caption: "Camada por camada",
    description:
      "Impressoras de alta velocidade depositando filamento onde antes havia apenas um arquivo .STL.",
    span: "",
  },
  {
    src: "/images/lab/estanho-calor-precisao.svg",
    alt: "Mãos soldando componentes eletrônicos em placa de prototipagem",
    caption: "Estanho, calor e precisão",
    description:
      "Na bancada, cada solda é uma declaração: o hardware também é nosso.",
    span: "",
  },
  {
    src: "/images/lab/segunda-chance.svg",
    alt: "Estudante reparando placa de circuito com multímetro e ferro de solda",
    caption: "Segunda chance para cada placa",
    description:
      "Recuperar eletrônicos é engenharia reversa com propósito. Menos lixo, mais autonomia.",
    span: "",
  },
  {
    src: "/images/lab/codigo-que-acende.svg",
    alt: "Estudante programando microcontrolador ESP32 conectado via USB",
    caption: "Código que acende LED",
    description:
      "Do VS Code ao microcontrolador: compilamos firmware com a mesma seriedade que deployamos API.",
    span: "md:col-span-2",
  },
  {
    src: "/images/lab/espaco-prototipo.svg",
    alt: "Vista panorâmica do laboratório maker com impressoras e bancadas",
    caption: "O espaço inteiro é protótipo",
    description:
      "Mesas compartilhadas, filamentos organizados, ferramentas ao alcance. O maker não precisa de luxury — precisa de funcional.",
    span: "",
  },
];

export function LabGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
      {labImages.map((img) => (
        <figure
          key={img.src}
          className={`group relative overflow-hidden rounded-lg cursor-pointer bg-agreste-grafite ${img.span}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-agreste-carvao/90 via-agreste-carvao/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div>
              <p className="font-display font-bold text-agreste-areia text-lg">
                {img.caption}
              </p>
              <p className="text-sm text-agreste-prata/80 mt-1 line-clamp-2">
                {img.description}
              </p>
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
}
