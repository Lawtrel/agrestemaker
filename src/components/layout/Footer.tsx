import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-agreste-carvao border-t border-agreste-prata/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#hero" className="font-display font-bold text-xl">
              <span className="text-agreste-areia">agreste</span>
              <span className="text-agreste-led-mandacaru">.maker</span>
            </Link>
            <p className="text-sm text-agreste-prata/60 mt-2 leading-relaxed">
              Onde a caatinga encontra o circuito.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-agreste-areia mb-3 text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#laboratorio"
                  className="text-sm text-agreste-prata/60 hover:text-agreste-led-mandacaru transition-colors"
                >
                  Laboratório
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  className="text-sm text-agreste-prata/60 hover:text-agreste-led-mandacaru transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#equipe"
                  className="text-sm text-agreste-prata/60 hover:text-agreste-led-mandacaru transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-agreste-areia mb-3 text-sm uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contato@agrestemaker.com"
                  className="text-sm text-agreste-prata/60 hover:text-agreste-led-mandacaru transition-colors"
                >
                  contato@agrestemaker.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-agreste-prata/60 hover:text-agreste-led-mandacaru transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-agreste-prata/60 hover:text-agreste-led-mandacaru transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-agreste-prata/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-agreste-prata/40">
            &copy; {new Date().getFullYear()} Agreste Maker. Inovação e Resiliência em Cada Camada.
          </p>
          <p className="text-xs text-agreste-prata/40 font-mono">
            Feito com código, filamento e resiliência &lt;/&gt;
          </p>
        </div>
      </div>
    </footer>
  );
}
