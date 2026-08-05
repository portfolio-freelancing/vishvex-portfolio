import { GraduationCap, Home, Stethoscope, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Coaching Centres",
    description: "Automate enquiries, fee reminders, demo bookings and attendance across WhatsApp & Instagram.",
    href: "/coaching-automation",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Qualify Meta & Google leads on WhatsApp, route hot buyers instantly, drip property matches.",
    href: "/real-estate-automation",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    description: "AI chatbots that book appointments, send reminders and handle rescheduling 24/7.",
    href: "/clinic-automation",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="px-4 py-20" aria-labelledby="industries-heading">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-body tracking-[0.2em] uppercase mb-3"
            style={{ color: "hsl(var(--primary))" }}
          >
            Industries We Serve
          </span>
          <h2
            id="industries-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-[800] text-foreground mb-4"
          >
            Built for Your Industry
          </h2>
          <p className="font-body text-base max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Ready-made AI automation playbooks for the businesses we know best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map(({ icon: Icon, title, description, href }) => (
            <a
              key={href}
              href={href}
              className="group block p-6 rounded-lg transition-all duration-300"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--primary))";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center mb-4"
                style={{ background: "hsl(var(--primary) / 0.08)", border: "1px solid hsl(var(--primary) / 0.25)" }}
              >
                <Icon size={22} style={{ color: "hsl(var(--primary))" }} />
              </div>
              <h3 className="font-display text-xl font-[700] text-foreground mb-2">{title}</h3>
              <p className="font-body text-sm mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                {description}
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-body font-medium"
                style={{ color: "hsl(var(--primary))" }}
              >
                Explore playbook <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
