# blickmacherei.de

Statische Onepage-Portfolio-Website (Astro) — dunkles, cinematisches Theme mit
Indigo-Akzent, lokal eingebundenen Schriften (DSGVO-freundlich, keine externen
Requests) und automatisch optimierten Bildern.

## Befehle

| Befehl            | Wirkung                                        |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Abhängigkeiten installieren (einmalig)         |
| `npm run dev`     | Entwicklungsserver auf http://localhost:4321   |
| `npm run build`   | Fertige Website in den Ordner `dist/` bauen    |
| `npm run preview` | Gebaute Website lokal testen                   |

## Eigene Bilder einfügen

Alle Galerie-Bilder liegen in **`src/bilder/`** — ein Unterordner pro Kategorie:

```
src/bilder/
  personen-avatare/     → KI-Personen & Avatare
  foto-optimierung/     → Foto-Optimierung für Privatpersonen
  werbung-print/        → Werbe- & Print-Design
  marke-web/            → Marke & Web-Präsenz
  video-animation/      → Video & Animation
  individuell/          → Individuelle Wünsche
```

**So geht's:**

1. Bild (JPG, PNG oder WebP) in den passenden Kategorie-Ordner legen.
2. Dem Dateinamen einen sprechenden Namen geben — er wird automatisch zum
   Alt-Text und zur Bildunterschrift: `business-headshot-anwaltskanzlei.jpg`
   → „Business Headshot Anwaltskanzlei".
3. Die mitgelieferten `*.svg`-Platzhalter löschen, sobald echte Bilder da sind.
4. Fertig — Galerie, Filter und Hero-Collage aktualisieren sich beim nächsten
   Build automatisch. Astro erzeugt daraus moderne, komprimierte Formate.

**Videos:** `.mp4`-Dateien funktionieren genauso — einfach in den
Kategorie-Ordner legen (empfohlen: H.264, unter ~20 MB).

**Tipp:** Bilder vor dem Hochladen auf max. ~2000 px Kantenlänge verkleinern,
das hält den Build schnell.

Die drei Bilder der **Hero-Collage** sind die (alphabetisch) ersten drei
Dateien aus `src/bilder/personen-avatare/`.

## Kontaktformular freischalten (Formspree)

1. Kostenloses Konto auf [formspree.io](https://formspree.io) anlegen und ein
   neues Formular erstellen.
2. Die Formular-ID (z. B. `mqkvnzyw`) in
   [src/components/Kontakt.astro](src/components/Kontakt.astro) eintragen:
   `const FORMSPREE_ID = 'mqkvnzyw';`
3. Bis dahin zeigt das Formular beim Absenden einen Hinweis und verweist auf
   den E-Mail-Link.

Die Kontakt-E-Mail-Adresse steht ebenfalls oben in `Kontakt.astro` (`EMAIL`).

## Inhalte anpassen

- **Leistungs-Texte & Kategorien:** [src/data/kategorien.ts](src/data/kategorien.ts)
- **Hero-Texte:** [src/components/Hero.astro](src/components/Hero.astro)
- **Über-mich & Ablauf:** [src/components/Ueber.astro](src/components/Ueber.astro)
- **Farben, Schriften, Abstände:** [src/styles/global.css](src/styles/global.css) (Design-Tokens oben)
- **Domain (SEO/Sitemap):** `site` in [astro.config.mjs](astro.config.mjs)
- **Impressum / Datenschutz:** [src/pages/impressum.astro](src/pages/impressum.astro),
  [src/pages/datenschutz.astro](src/pages/datenschutz.astro) — Platzhalter ersetzen!

## Veröffentlichen

`npm run build` erzeugt den Ordner `dist/` — dessen Inhalt kann bei jedem
statischen Hoster (z. B. Netlify, Cloudflare Pages, IONOS Webspace, Hetzner)
hochgeladen werden. Es gibt kein Backend und keine Datenbank.
