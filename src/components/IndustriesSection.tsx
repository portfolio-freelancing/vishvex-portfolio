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
            style={{ color: "#00f5ff" }}
          >
            Industries We Serve
          </span>
          <h2
            id="industries-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-[800] text-foreground mb-4"
          >
            Built for Your Industry
          </h2>
          <p className="font-body text-base max-w-2xl mx-auto" style={{ color: "#6b6b8a" }}>
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
                background: "#0f0f1a",
                border: "1px solid #1e1e35",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00f5ff";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1e1e35";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center mb-4"
                style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.25)" }}
              >
                <Icon size={22} style={{ color: "#00f5ff" }} />
              </div>
              <h3 className="font-display text-xl font-[700] text-foreground mb-2">{title}</h3>
              <p className="font-body text-sm mb-4" style={{ color: "#6b6b8a" }}>
                {description}
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-body font-medium"
                style={{ color: "#00f5ff" }}
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
