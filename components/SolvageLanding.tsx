"use client";
type Props = { currencySymbol?: "$" | "£" };
const price = (n: number, s: Props["currencySymbol"]) => `${s}${n}`;

export default function SolvageLanding({ currencySymbol = "$" }: Props) {
  const s = currencySymbol;
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400" />
            <span className="font-semibold tracking-wide">Solvage™</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#pricing" className="hover:text-white">Support Plans</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-white text-neutral-900 font-medium hover:opacity-90">Get a Quote</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">One partner. <span className="text-cyan-400">Unlimited digital solutions.</span></h1>
            <p className="mt-6 text-lg text-neutral-300">Websites, SEO, branding, ads, and smart automation—delivered fast, affordably, and tailored to your goals.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-cyan-400 text-neutral-900 font-semibold hover:brightness-95">Start in 24h</a>
              <a href="#services" className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40">Browse services</a>
            </div>
            <p className="mt-6 text-sm text-neutral-400">Flexible payments: instalments, PayPal 30 Days, Klarna, Amex & more.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-neutral-300">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400"/>Quick turnaround</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400"/>Transparent pricing (from {price(199, s)})</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400"/>Bundle discounts for multi-service projects</div>
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400"/>One-time projects or monthly plans</div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">What we can do for you</h2>
        <p className="mt-2 text-neutral-400">Each item shows a base price. Click to learn what’s included.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Online Presence & Growth</h3>
            <div className="mt-4 space-y-3">
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Website design, redesign & optimization (WordPress, Shopify, Wix)</span><span className="text-cyan-400 font-medium">from {price(499,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Conversion-focused sites or landing pages with fast load times, mobile optimisation, and basic on-page SEO. We can also revamp your current site.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>SEO audits, optimization & keyword ranking</span><span className="text-cyan-400 font-medium">from {price(349,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Technical & on-page fixes, keyword research, content recommendations, and a clear roadmap to grow organic traffic.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Local SEO & Google My Business optimization</span><span className="text-cyan-400 font-medium">from {price(299,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Get found in local searches and Maps. We optimise your profile, categories, services, photos, and review strategy.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>E-commerce store setup (Shopify, WooCommerce)</span><span className="text-cyan-400 font-medium">from {price(799,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Store build, essential apps, payments, shipping, and a clean product template so you can start selling fast.</p>
              </details>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Branding & Creative Design</h3>
            <div className="mt-4 space-y-3">
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Logo design & full brand kits (fonts, colors, templates)</span><span className="text-cyan-400 font-medium">from {price(199,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Memorable logos plus colour palette, typography, and social templates so your brand looks consistent everywhere.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Social media graphics, reels & content calendars</span><span className="text-cyan-400 font-medium">from {price(249,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Monthly content plans, ready-to-post visuals, and short video edits to keep your profiles active and engaging.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Video ads (short-form or professional promos)</span><span className="text-cyan-400 font-medium">from {price(499,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">High-impact creatives for TikTok/Instagram/YouTube or polished brand promos for your website and campaigns.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Presentation & pitch deck design</span><span className="text-cyan-400 font-medium">from {price(299,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Investor/sales decks with clear storytelling, visuals, and data layouts that persuade.</p>
              </details>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Marketing & Lead Generation</h3>
            <div className="mt-4 space-y-3">
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Google Ads & Facebook/Instagram Ads setup & management</span><span className="text-cyan-400 font-medium">from {price(599,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Campaign setup, pixel tracking, audiences, and weekly optimisation to drive qualified leads.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Email marketing campaigns & automations</span><span className="text-cyan-400 font-medium">from {price(349,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Klaviyo/Mailchimp flows, newsletters, and promos that convert subscribers into customers.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Sales funnel creation (landing pages, lead capture, email flows)</span><span className="text-cyan-400 font-medium">from {price(499,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">High-converting landing pages, forms, and automated follow-ups for predictable lead gen.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Reputation management (reviews, testimonials, trust-building)</span><span className="text-cyan-400 font-medium">from {price(299,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Get more 5-star reviews and showcase social proof where it matters most.</p>
              </details>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Smart Automation & AI</h3>
            <div className="mt-4 space-y-3">
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>AI-powered chatbots (website & social) 24/7 support</span><span className="text-cyan-400 font-medium">from {price(699,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Answer FAQs, qualify leads, and route to the right inbox automatically. Custom tone + knowledge base.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>CRM setup & automation</span><span className="text-cyan-400 font-medium">from {price(499,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">Pipelines, reminders, and integrations so no lead slips through the cracks.</p>
              </details>
              <details className="group border border-white/10 rounded-xl p-4 bg-neutral-900/30">
                <summary className="cursor-pointer list-none flex items-center justify-between"><span>Data dashboards & business reporting</span><span className="text-cyan-400 font-medium">from {price(399,s)}</span></summary>
                <p className="mt-3 text-sm text-neutral-300">See the metrics that matter in one place: traffic, ads, sales, and ROI.</p>
              </details>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 text-sm text-neutral-300">
          💡 Interested in multiple services? We offer <span className="text-white font-medium">bundle discounts</span>. Ask for a custom quote.
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-2xl border border-white/10 p-6 bg-neutral-900/40">
          <h3 className="text-lg font-semibold">One-time projects or monthly support</h3>
          <p className="mt-2 text-neutral-300 text-sm">Start one-off. Add a monthly plan anytime.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 p-5 bg-neutral-900/30">
              <h4 className="font-semibold">Lite Support</h4>
              <p className="mt-2 text-neutral-300">Email support + minor edits (up to 1 hour / month).</p>
              <p className="mt-3 text-cyan-400 font-semibold">from {price(79,s)} / month</p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-neutral-900/30">
              <h4 className="font-semibold">Growth Support</h4>
              <p className="mt-2 text-neutral-300">Monthly updates, SEO tweaks, basic ad checks (up to 4 hours).</p>
              <p className="mt-3 text-cyan-400 font-semibold">from {price(299,s)} / month</p>
            </div>
            <div className="rounded-xl border border-white/10 p-5 bg-neutral-900/30">
              <h4 className="font-semibold">Priority Support</h4>
              <p className="mt-2 text-neutral-300">Everything in Growth + priority queue, small creative tasks (up to 8 hours).</p>
              <p className="mt-3 text-cyan-400 font-semibold">from {price(599,s)} / month</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-neutral-400">Flexible payments: instalments, PayPal 30 Days, Klarna, Amex & more.</p>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How we work</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-4 text-sm">
          {["Brief & goals","Plan & quote","Build & review","Launch & support"].map((t,i)=> (
            <div key={i} className="rounded-2xl border border-white/10 p-5 bg-neutral-900/40">
              <div className="h-8 w-8 rounded-full bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-semibold">{i+1}</div>
              <h4 className="mt-3 font-medium">{t}</h4>
              <p className="mt-2 text-neutral-300">{[
                'Tell us what you need and what success looks like.',
                'We suggest the best approach and send a clear quote.',
                'We build fast. You review and request refinements.',
                'We launch, measure, and can continue with a monthly plan.'
              ][i]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-3">
          {[
            {q:'Do we need to jump on a call?', a:'No. Many business owners prefer email. A short message is enough and we’ll send details and pricing. Calls are optional.'},
            {q:'How fast can we start?', a:'In most cases we can begin within 24–48 hours after the brief and deposit.'},
            {q:'Can I combine services?', a:'Yes. We provide bundle discounts when you book multiple services together.'},
            {q:'What payment options are available?', a:'Instalments, PayPal 30 Days, Klarna, Amex and more. We’ll adapt to what’s convenient for you.'}
          ].map((item, i)=> (
            <details key={i} className="rounded-xl border border-white/10 p-5 bg-neutral-900/40">
              <summary className="cursor-pointer list-none font-medium">{item.q}</summary>
              <p className="mt-2 text-sm text-neutral-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
          <h2 className="text-2xl font-semibold">Tell us what you need</h2>
          <p className="mt-2 text-neutral-300 text-sm">No phone call required. Reply by email and we’ll send details & exact pricing right away.</p>
          <form className="mt-6 grid md:grid-cols-2 gap-4" action="mailto:ddsolvage@gmail.com" method="post" encType="text/plain">
            <input className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3" placeholder="Your name" name="name" required />
            <input className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3" placeholder="Email" type="email" name="email" required />
            <input className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 md:col-span-2" placeholder="Company / Website (optional)" name="company" />
            <textarea className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 md:col-span-2" rows={5} placeholder="What do you need? (website, SEO, logo, ads)" name="message" />
            <div className="md:col-span-2 flex items-center justify-between">
              <button className="px-5 py-3 rounded-xl bg-cyan-400 text-neutral-900 font-semibold hover:brightness-95" type="submit">Send</button>
              <p className="text-xs text-neutral-400">Prefer WhatsApp? +49 1234567890</p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Solvage™ · All rights reserved</p>
          <p>Contact: ddsolvage@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
