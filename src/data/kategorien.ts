/**
 * Die sechs Leistungskategorien der blickmacherei.
 *
 * `slug` muss dem Ordnernamen unter `src/bilder/<slug>/` entsprechen —
 * darüber werden Galerie-Bilder automatisch der richtigen Kategorie zugeordnet.
 * `icon` enthält den Innen-Code eines 24×24-Stroke-SVGs (Lucide-Stil).
 */
export interface Kategorie {
  slug: string;
  label: string;
  kurz: string;
  beschreibung: string;
  punkte: string[];
  icon: string;
}

export const KATEGORIEN: Kategorie[] = [
  {
    slug: 'personen-avatare',
    label: 'KI-Personen & Avatare',
    kurz: 'Personen & Avatare',
    beschreibung:
      'Ein Gesicht, das Ihre Marke trägt — fotorealistisch, wiedererkennbar und jederzeit verfügbar für neue Kampagnen.',
    punkte: [
      'Marken-Avatare für Firmen — das wiederkehrende Gesicht Ihrer Kampagnen',
      'Virtuelle Influencer & Models für E-Commerce und Mode',
      'Sprechende Video-Avatare mit Lip-Sync für Erklär-, FAQ- und Schulungsvideos',
    ],
    icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  },
  {
    slug: 'foto-optimierung',
    label: 'Foto-Optimierung für Privatpersonen',
    kurz: 'Foto-Optimierung',
    beschreibung:
      'Der beste erste Eindruck — für Bewerbung, Business-Profil oder das Dating-Profil, das endlich zu Ihnen passt.',
    punkte: [
      'Dating-Profil-Optimierung (Tinder, Bumble & Co.)',
      'Business-Headshots & Bewerbungsfotos in Studioqualität',
      'Social-Media-Porträts, Retusche, Hintergrundwechsel, Foto-Restaurierung',
    ],
    icon: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  },
  {
    slug: 'werbung-print',
    label: 'Werbe- & Print-Design',
    kurz: 'Werbung & Print',
    beschreibung:
      'Vom Aushang bis zum Messestand — auffällige Gestaltung, die verkauft, produktionsfertig für die Druckerei.',
    punkte: [
      'Werbeplakate & Banner mit Blickfang-Garantie',
      'Speisekarten für Restaurants & Cafés',
      'Flyer & Aushänge für lokale Aktionen und Saisonangebote',
      'Messestände & Rollup-Banner — produktionsfertig für die Druckerei',
    ],
    icon: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  },
  {
    slug: 'marke-web',
    label: 'Marke & Web-Präsenz',
    kurz: 'Marke & Web',
    beschreibung:
      'Ein stimmiger Auftritt von Logo bis Website — damit Ihre Marke überall professionell wirkt.',
    punkte: [
      'Logo & komplettes Brand-Kit: Farben, Typografie, Logovarianten',
      'Websites: Landingpages, Unternehmensauftritte, Portfolio- & Referenzseiten, Redesigns',
      'Social-Media-Vorlagenpakete für Instagram, Facebook & LinkedIn',
    ],
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  },
  {
    slug: 'video-animation',
    label: 'Video & Animation',
    kurz: 'Video & Animation',
    beschreibung:
      'Bewegtbild, das hängen bleibt — kurz, professionell und auf den Punkt produziert für Web und Social Media.',
    punkte: [
      'Kurze Werbeclips & Reels für Social Media',
      'Produktvideos, die Ihr Angebot ins beste Licht rücken',
      'Professionelle Animationen für Web & Ads',
    ],
    icon: '<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  },
  {
    slug: 'individuell',
    label: 'Individuelle Wünsche & Anforderungen',
    kurz: 'Individuell',
    beschreibung:
      'Ihr Projekt passt in keine Schublade? Umso besser — maßgeschneiderte Lösungen sind meine Lieblingsaufgabe.',
    punkte: [
      'Maßgeschneiderte Projekte jenseits der Standardkategorien',
      'Kombinierte Pakete über mehrere Bereiche hinweg',
      'Beratung und Umsetzung nach individueller Absprache',
    ],
    icon: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
  },
];
