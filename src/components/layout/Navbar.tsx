"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Laboratório", href: "#laboratorio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Quem Somos", href: "#equipe" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-agreste-carvao/95 backdrop-blur-md border-b border-agreste-prata/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#hero" className="font-display font-bold text-lg">
          <span className="text-agreste-areia">agreste</span>
          <span className="text-agreste-led-mandacaru">.maker</span>
        </Link>

        <ul className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-mono text-sm transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-agreste-led-mandacaru"
                    : "text-agreste-prata hover:text-agreste-areia"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="sm:hidden text-agreste-prata hover:text-agreste-areia transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden bg-agreste-carvao/95 backdrop-blur-md border-b border-agreste-prata/10 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-mono text-sm block py-2 transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-agreste-led-mandacaru"
                      : "text-agreste-prata hover:text-agreste-areia"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
