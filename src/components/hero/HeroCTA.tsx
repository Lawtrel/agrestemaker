import { Button } from "@/components/ui/Button";

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button variant="primary" href="#projetos">
        Ver Projetos →
      </Button>
      <Button variant="secondary" href="#laboratorio">
        Conhecer o Laboratório
      </Button>
    </div>
  );
}
