"use client";

type Props = { currencySymbol?: "€" | "$" | "£" };
const formatPrice = (amount: number, currency: Props["currencySymbol"]) =>
  `${currency}${amount.toLocaleString("de-DE")}`;

export default function SolvageLanding({ currencySymbol = "€" }: Props) {
  const c = currencySymbol;
  return (
    <div className="min-h-screen text-white bg-neutral-950">
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/80 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-300 animate-[pulse_12s_linear_infinite]" />
            <span className="font-semibold tracking-wide uppercase text-sm">Solvage Studio</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a href="#leistungen" className="hover:text-white">Leistungen</a>
            <a href="#pakete" className="hover:text-white">Pakete</a>
            <a href="#prozess" className="hover:text-white">Ablauf</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
          </nav>
          <a href="#kontakt" className="px-4 py-2 rounded-xl bg-white text-neutral-900 font-medium hover:opacity-90">Projekt anfragen</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(80%_55%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-20 relative">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-4 py-1 text-xs text-neutral-300 uppercase tracking-[0.2em]">
              Digitale Auftritte, die verkaufen
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Moderne Websites, die Leads bringen –
              <span className="text-cyan-400"> One Pager ab {formatPrice(999, c)}</span>
            </h1>
            <p className="text-lg text-neutral-300">
              Wir konzipieren und entwickeln performante Webseiten für Coaches, Agenturen und Unternehmen.
              Schlanke One Pager starten bei {formatPrice(999, c)}. Maßgeschneiderte Projekte mit Add-ons wie SEO, Automationen oder
              Buchungssystemen beginnen bei {formatPrice(2500, c)}.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#kontakt" className="px-5 py-3 rounded-xl bg-cyan-400 text-neutral-900 font-semibold hover:brightness-95">
                Kostenfreie Ersteinschätzung
              </a>
              <a href="#pakete" className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40">
                Pakete entdecken
              </a>
            </div>
            <p className="text-sm text-neutral-400">
              5–10 Werktage Launch. Flexible Zahlungspläne. Arbeiten auf Deutsch & Englisch.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-300 pt-4">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Full-Service: Design, Texte, Technik</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Conversion-Optimierung & Tracking</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Launch + 30 Tage Support inklusive</div>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="border-y border-white/10 bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3 text-sm text-neutral-300">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold text-white">Strategie & Story</h3>
            <p>Positionierung, Messaging und Seitenstruktur auf Basis eurer Ziele.</p>
            <ul className="space-y-2 text-neutral-400">
              <li>• Zielgruppen-Workshop & Keyword-Quick-Research</li>
              <li>• Copywriting & Value Proposition</li>
              <li>• UX-Wireframes mit Fokus auf Conversion</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold text-white">Design & Entwicklung</h3>
            <p>Individuelle UI, responsives Layout und Highspeed-Umsetzung.</p>
            <ul className="space-y-2 text-neutral-400">
              <li>• Animierte Sections & Microinteractions</li>
              <li>• CMS-Setup (WordPress, Webflow oder Headless)</li>
              <li>• DSGVO-konformes Tracking & Formulare</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 space-y-3">
            <h3 className="text-lg font-semibold text-white">Skalierbare Add-ons</h3>
            <p>Erweitert eure Seite jederzeit mit Automationen und Marketing-Bausteinen.</p>
            <ul className="space-y-2 text-neutral-400">
              <li>• SEO & Content Hubs</li>
              <li>• Terminbuchung, Member-Bereich, Shop</li>
              <li>• CRM-Workflows, E-Mail-Automation, AI-Chatbots</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pakete" className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Unsere Website-Pakete</h2>
          <p className="mt-2 text-neutral-400">
            Transparente Preise, klare Leistungen. Alle Pakete beinhalten Kickoff, Design, Entwicklung, Launch und 30 Tage Support.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 p-6 flex flex-col">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">Einstieg</span>
              <h3 className="mt-3 text-xl font-semibold">One Pager</h3>
              <p className="mt-3 text-neutral-300">
                Für neue Angebote oder schnelle Kampagnen. Fokus auf klare Story und Conversion.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                <li>• Bis zu 5 Sektionen</li>
                <li>• Responsives Design & Copy</li>
                <li>• Tracking, Formulare & Grund-SEO</li>
              </ul>
            </div>
            <p className="mt-6 text-3xl font-semibold text-cyan-300">ab {formatPrice(999, c)}</p>
            <a href="#kontakt" className="mt-6 inline-flex justify-center rounded-xl border border-cyan-400/60 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-400 hover:text-neutral-900 transition">
              Projekt sichern
            </a>
          </div>

          <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-500/20 via-neutral-900/80 to-neutral-900/40 p-6 flex flex-col shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">Beliebt</span>
              <h3 className="mt-3 text-xl font-semibold text-white">Business Website</h3>
              <p className="mt-3 text-neutral-200">
                Mehrseitige Präsenz mit modularer Struktur, CMS und skalierbaren Add-ons.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-200/80">
                <li>• Bis zu 8 Seiten & Inhaltsvorlagen</li>
                <li>• CMS & Blog/Case Studies</li>
                <li>• Performance-Optimierung & Launch Support</li>
              </ul>
            </div>
            <p className="mt-6 text-3xl font-semibold text-white">ab {formatPrice(2500, c)}</p>
            <a href="#kontakt" className="mt-6 inline-flex justify-center rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-neutral-900 hover:brightness-95 transition">
              Angebot anfordern
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 p-6 flex flex-col">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">Add-ons</span>
              <h3 className="mt-3 text-xl font-semibold">Growth Module</h3>
              <p className="mt-3 text-neutral-300">
                Erweiterungen, die eure Website zur Lead-Maschine machen – frei kombinierbar.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                <li>• SEO & Content-Pakete {formatPrice(490, c)}+</li>
                <li>• Automatisierte Funnels & E-Mail-Flows {formatPrice(690, c)}+</li>
                <li>• Terminbuchung, Shop, Mitgliederbereich {formatPrice(590, c)}+</li>
              </ul>
            </div>
            <p className="mt-6 text-3xl font-semibold text-cyan-300">Individuelle Kalkulation</p>
            <a href="#kontakt" className="mt-6 inline-flex justify-center rounded-xl border border-white/20 px-4 py-2 text-sm font-medium hover:border-white/50 transition">
              Add-ons auswählen
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          Alle Preise netto zzgl. USt. Ratenzahlung über Klarna, PayPal 30 Tage oder Überweisung möglich.
        </p>
      </section>

      <section id="prozess" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold">So läuft unser gemeinsames Projekt</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-4 text-sm">
            {["Kickoff & Zielbild", "UX & Copy", "Design & Entwicklung", "Launch & Optimierung"].map((title, i) => (
              <div key={title} className="rounded-2xl border border-white/10 p-5 bg-neutral-900/60">
                <div className="h-8 w-8 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <h4 className="mt-3 font-medium text-white">{title}</h4>
                <p className="mt-2 text-neutral-300">
                  {
                    [
                      "Workshop (remote), Zieldefinition, Moodboards & Timings.",
                      "Inhalte, Seitenstruktur und Conversion-Flows werden ausgearbeitet.",
                      "Visuelle Ausarbeitung, Entwicklung & Testing auf allen Devices.",
                      "Launch, Performance-Check, Hand-off & Option auf laufende Betreuung."
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-3">
          {[
            {
              q: "Wie schnell könnt ihr starten?",
              a: "Wir blocken nach dem Kickoff direkt Kapazitäten. Meist geht es innerhalb von 5 Werktagen los und der Launch erfolgt nach 2–3 Wochen." 
            },
            {
              q: "Muss ich Inhalte liefern?",
              a: "Wir übernehmen Copywriting, strukturieren bestehende Inhalte und erstellen neue Texte. Ihr liefert nur Kerninfos, Bilder oder Logos." 
            },
            {
              q: "Welche Tools nutzt ihr?",
              a: "Je nach Bedarf: Webflow, WordPress (mit Headless-Setup), Next.js oder Shopify. Tracking via GA4, Matomo, HubSpot, Make u.v.m." 
            },
            {
              q: "Gibt es Wartung & Support?",
              a: "Ja, auf Wunsch übernehmen wir laufende Updates, SEO-Monitoring und Kampagnen – individuell oder in Paketen." 
            }
          ].map((item, i) => (
            <details key={i} className="rounded-xl border border-white/10 p-5 bg-neutral-900/40">
              <summary className="cursor-pointer list-none font-medium text-white">{item.q}</summary>
              <p className="mt-2 text-sm text-neutral-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-900/20 p-6 md:p-10">
          <h2 className="text-2xl font-semibold">Lasst uns über eure neue Website sprechen</h2>
          <p className="mt-2 text-neutral-300 text-sm">
            Keine Telefonpflicht. Schreibt uns kurz, was ihr benötigt – wir melden uns mit Ideen, Zeitplan & Angebot.
          </p>
          <form className="mt-6 grid md:grid-cols-2 gap-4" action="mailto:ddsolvage@gmail.com" method="post" encType="text/plain">
            <input className="rounded-xl bg-neutral-950 border border-white/10 px-4 py-3" placeholder="Name" name="name" required />
            <input className="rounded-xl bg-neutral-950 border border-white/10 px-4 py-3" placeholder="E-Mail" type="email" name="email" required />
            <input className="rounded-xl bg-neutral-950 border border-white/10 px-4 py-3 md:col-span-2" placeholder="Unternehmen / Website (optional)" name="company" />
            <textarea className="rounded-xl bg-neutral-950 border border-white/10 px-4 py-3 md:col-span-2" rows={5} placeholder="Was soll die Website erreichen?" name="message" />
            <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <button className="px-5 py-3 rounded-xl bg-cyan-400 text-neutral-900 font-semibold hover:brightness-95" type="submit">
                Anfrage senden
              </button>
              <p className="text-xs text-neutral-400">Schneller Draht via WhatsApp: +49 123 4567890</p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>© {new Date().getFullYear()} Solvage Studio · Alle Rechte vorbehalten</p>
          <p>Kontakt: ddsolvage@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
