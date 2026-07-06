import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface NicheFAQ {
  q: string;
  a: string;
}

export interface NicheLandingProps {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  directAnswer: string;
  useCases: { title: string; description: string }[];
  pricing: { tier: string; price: string; includes: string }[];
  bestFor: string;
  faqs: NicheFAQ[];
}

const BASE = "https://vishvex.online";

const NicheLanding = ({
  slug,
  title,
  metaDescription,
  h1,
  eyebrow,
  directAnswer,
  useCases,
  pricing,
  bestFor,
  faqs,
}: NicheLandingProps) => {
  const url = `${BASE}${slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    description: metaDescription,
    provider: { "@id": "https://vishvex.online/#localbusiness" },
    areaServed: { "@type": "Country", "name": "India" },
    url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: eyebrow, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-24">
        <article className="container-narrow px-4 py-12">
          {/* Hero */}
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-display font-[800] text-3xl md:text-5xl mt-3 text-foreground leading-tight">
            {h1}
          </h1>

          {/* Direct-answer block (AEO) */}
          <div
            className="mt-6 p-5 rounded-md"
            style={{ background: "rgba(0,245,255,0.05)", border: "1px solid rgba(0,245,255,0.2)" }}
          >
            <p className="font-body text-base md:text-lg leading-relaxed text-foreground">
              <strong>{directAnswer}</strong>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#work-request"
              className="px-6 py-3 rounded-md font-body font-medium text-sm border transition-all"
              style={{ borderColor: "#00f5ff", color: "#080810", background: "#00f5ff" }}
            >
              Start a Project <ArrowRight size={14} className="inline ml-1" />
            </a>
            <a
              href="/#book-call"
              className="px-6 py-3 rounded-md font-body font-medium text-sm border transition-all"
              style={{ borderColor: "#00f5ff", color: "#00f5ff" }}
            >
              Book a Free Call
            </a>
          </div>

          {/* Use cases */}
          <section className="mt-16">
            <h2 className="font-display font-[700] text-2xl md:text-3xl text-foreground">
              How it works
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {useCases.map((u) => (
                <div key={u.title} className="glow-card p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} style={{ color: "#00f5ff" }} className="mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display font-[700] text-base text-foreground">{u.title}</h3>
                      <p className="text-sm font-body mt-1" style={{ color: "#6b6b8a" }}>
                        {u.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mt-16">
            <h2 className="font-display font-[700] text-2xl md:text-3xl text-foreground">
              Choose your scope
            </h2>
            <p className="mt-3 font-body text-foreground">
              <strong>
                Fixed-scope packages, no hidden fees, code and workflows fully owned by you. Get a custom quote based on your scope.
              </strong>
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {pricing.map((p) => (
                <div key={p.tier} className="glow-card p-5">
                  <div className="text-xs font-body uppercase tracking-wider" style={{ color: "#00f5ff" }}>
                    {p.tier}
                  </div>
                  <p className="text-sm font-body mt-3" style={{ color: "#6b6b8a" }}>
                    {p.includes}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="/#work-request"
                className="inline-block px-6 py-3 rounded-md font-body font-medium text-sm"
                style={{ background: "#00f5ff", color: "#080810" }}
              >
                Get a Quote <ArrowRight size={14} className="inline ml-1" />
              </a>
            </div>
          </section>

          {/* Best for */}
          <section className="mt-16">
            <h2 className="font-display font-[700] text-2xl md:text-3xl text-foreground">
              Who is this for?
            </h2>
            <p className="mt-3 font-body text-foreground">
              <strong>{bestFor}</strong>
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="font-display font-[700] text-2xl md:text-3xl text-foreground">
              Frequently asked questions
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {faqs.map((f) => (
                <div key={f.q} className="glow-card p-5">
                  <h3 className="font-display font-[700] text-base text-foreground">{f.q}</h3>
                  <p className="text-sm font-body mt-2 leading-relaxed" style={{ color: "#6b6b8a" }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 p-8 rounded-md text-center" style={{ background: "rgba(0,245,255,0.05)", border: "1px solid rgba(0,245,255,0.2)" }}>
            <h2 className="font-display font-[800] text-2xl md:text-3xl text-foreground">
              Ready to automate?
            </h2>
            <p className="mt-3 font-body" style={{ color: "#6b6b8a" }}>
              Free 20-minute consultation. No obligation. Get a fixed quote in 48 hours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/#work-request"
                className="px-6 py-3 rounded-md font-body font-medium text-sm"
                style={{ background: "#00f5ff", color: "#080810" }}
              >
                Start a Project <ArrowRight size={14} className="inline ml-1" />
              </a>
              <a
                href="/#book-call"
                className="px-6 py-3 rounded-md font-body font-medium text-sm border"
                style={{ borderColor: "#00f5ff", color: "#00f5ff" }}
              >
                Book a Free Call
              </a>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default NicheLanding;
