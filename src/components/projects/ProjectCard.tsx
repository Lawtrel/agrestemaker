import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  image: string;
  title: string;
  tags: string[];
  summary: string;
}

export function ProjectCard({ image, title, tags, summary }: ProjectCardProps) {
  return (
    <article className="group relative bg-agreste-grafite border border-agreste-prata/10 rounded-xl overflow-hidden hover:border-agreste-led-mandacaru/30 transition-colors duration-300">
      <div className="relative h-56 overflow-hidden bg-agreste-carvao">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-agreste-grafite via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-agreste-areia mb-2">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>

        <p className="text-sm text-agreste-prata/80 leading-relaxed">
          {summary}
        </p>
      </div>
    </article>
  );
}
