const CAREER_PROFILES = [
  {
    id: "it",
    title: "IT va raqamli texnologiyalar",
    signals: ["technology", "signs", "automated", "gnostic", "modern"],
    examples: ["Dasturchi", "Web-dasturchi", "Data-analitik", "Tizim administratori", "AI mutaxassisi"]
  },
  {
    id: "engineering",
    title: "Muhandislik va texnika",
    signals: ["technology", "mechanized", "manual", "transform"],
    examples: ["Muhandis", "Mexanik", "Texnolog", "Avtomobil diagnostikasi"]
  },
  {
    id: "creative",
    title: "Dizayn va ijod",
    signals: ["artistic", "manual", "transform", "modern"],
    examples: ["Grafik dizayner", "UX/UI dizayner", "Illyustrator", "Content creator"]
  },
  {
    id: "education",
    title: "Ta’lim va tarbiya",
    signals: ["people", "functional", "gnostic"],
    examples: ["O‘qituvchi", "Metodist", "Online ta’lim mutaxassisi", "Murabbiy"]
  },
  {
    id: "health_nature",
    title: "Tabiat, biologiya va salomatlik",
    signals: ["nature", "people", "manual", "search"],
    examples: ["Agronom", "Ekolog", "Biolog", "Hamshira", "Green energy mutaxassisi"]
  },
  {
    id: "analytics",
    title: "Tahlil va axborot",
    signals: ["signs", "gnostic", "automated", "functional"],
    examples: ["Buxgalter", "Data-analitik", "Iqtisodchi", "Biznes-analitik"]
  },
  {
    id: "social",
    title: "Ijtimoiy va xizmat",
    signals: ["people", "demanding", "functional", "search"],
    examples: ["HR mutaxassisi", "Psixolog", "SMM", "Mijozlar bilan ishlash"]
  }
];

function rankCareers(signals) {
  const counts = {};
  (signals || []).forEach(s => { counts[s] = (counts[s] || 0) + 1; });
  return CAREER_PROFILES.map(p => {
    let score = 0;
    p.signals.forEach(s => { if (counts[s]) score += counts[s]; });
    return { ...p, score };
  }).filter(p => p.score > 0).sort((a, b) => b.score - a.score);
}
