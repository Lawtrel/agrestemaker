interface BadgeProps {
  label: string;
}

const tagColorMap: Record<string, string> = {
  "Modelagem 3D":
    "bg-agreste-terracota/20 text-agreste-terracota border-agreste-terracota/30",
  "Fusion 360":
    "bg-agreste-caatinga/20 text-agreste-caatinga border-agreste-caatinga/30",
  "PLA/PETG": "bg-agreste-barro/20 text-agreste-barro border-agreste-barro/30",
  "Design Paramétrico":
    "bg-agreste-areia/10 text-agreste-areia border-agreste-areia/20",
  IoT: "bg-agreste-led-mandacaru/10 text-agreste-led-mandacaru border-agreste-led-mandacaru/30",
  ESP32: "bg-agreste-led-mandacaru/10 text-agreste-led-mandacaru border-agreste-led-mandacaru/30",
  React: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/30",
  Arduino:
    "bg-agreste-terracota/20 text-agreste-terracota border-agreste-terracota/30",
  Python: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  "Engenharia Reversa":
    "bg-agreste-cobre/20 text-agreste-cobre border-agreste-cobre/30",
  Soldering:
    "bg-agreste-barro/20 text-agreste-barro border-agreste-barro/30",
  "Console Modding":
    "bg-agreste-terracota/20 text-agreste-terracota border-agreste-terracota/30",
  "Raspberry Pi":
    "bg-red-500/10 text-red-400 border-red-500/30",
  Dashboards:
    "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Instrumentação:
    "bg-agreste-caatinga/20 text-agreste-caatinga border-agreste-caatinga/30",
  Sensores:
    "bg-agreste-led-mandacaru/10 text-agreste-led-mandacaru border-agreste-led-mandacaru/30",
  Agricultura:
    "bg-agreste-caatinga/20 text-agreste-caatinga border-agreste-caatinga/30",
  default: "bg-agreste-prata/10 text-agreste-prata border-agreste-prata/20",
};

export function Badge({ label }: BadgeProps) {
  const colorClasses = tagColorMap[label] ?? tagColorMap.default;

  return (
    <span
      className={`inline-block text-xs font-mono px-2 py-0.5 rounded border ${colorClasses}`}
    >
      {label}
    </span>
  );
}
