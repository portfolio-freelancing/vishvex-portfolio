import NicheLanding from "@/components/NicheLanding";

const ClinicAutomation = () => (
  <NicheLanding
    slug="/clinic-automation"
    title="Clinic Automation Software India | AI Appointment & Patient Follow-Ups"
    metaDescription="AI chatbots and n8n workflows for clinics: appointment booking, patient reminders, WhatsApp follow-ups and reviews. Privacy-mindful. Built by Vishvex."
    eyebrow="For Clinics & Doctors"
    h1="AI Automation for Clinics & Doctors in India"
    directAnswer="Clinic automation uses AI chatbots and n8n workflows to book appointments, send reminders, collect patient details, follow up after visits and request Google reviews — all over WhatsApp. A typical clinic reduces no-shows by 30–50% and reclaims 10+ hours per week of front-desk time."
    useCases={[
      { title: "24/7 appointment booking", description: "AI agent books slots into your Google Calendar or clinic management system based on doctor availability." },
      { title: "WhatsApp reminders", description: "Automated appointment reminders 24 hours and 1 hour prior, with reschedule and cancel options." },
      { title: "Patient intake forms", description: "Pre-visit intake collected on WhatsApp — medical history, symptoms, insurance — saved to your EMR." },
      { title: "Post-visit follow-up", description: "Automated recovery check-ins, prescription reminders and next-visit prompts." },
      { title: "Google review requests", description: "Auto-request Google reviews from happy patients 24 hours after their visit." },
      { title: "Recall & re-engagement", description: "6-month and annual recall campaigns for check-ups, vaccinations and cleanings." },
    ]}
    pricing={[
      { tier: "Single Clinic", price: "₹40,000", includes: "Appointment bot + reminders + review requests." },
      { tier: "Multi-Doctor", price: "₹1,00,000", includes: "Everything + intake forms + EMR sync + post-visit follow-up." },
      { tier: "Chain", price: "₹2,00,000", includes: "Everything + multi-branch + recall campaigns + reporting dashboard." },
    ]}
    bestFor="Single-doctor clinics, dental practices, dermatology, physiotherapy, IVF, eye-care and multi-specialty chains in India handling 100+ appointments per month. Works with existing clinic management software via API or CSV sync."
    faqs={[
      { q: "How much does clinic automation cost in India?", a: "Vishvex clinic automation starts at ₹40,000 for a single-doctor appointment bot and scales to ₹2,00,000 for a multi-branch chain with EMR sync, intake, follow-up and reporting." },
      { q: "Is patient data safe?", a: "Yes. Workflows run on your own self-hosted n8n instance with encrypted storage and TLS. We follow DPDP Act 2023 guidelines and can restrict AI data flow to India-region models on request." },
      { q: "Which clinic management systems do you integrate with?", a: "Practo Ray, Cliniify, HealthPlix, DrCloud, Google Calendar, Google Sheets and any system with a REST API, webhook or CSV export/import." },
      { q: "Can the AI handle regional languages?", a: "Yes — English, Hindi, Telugu, Tamil, Kannada, Marathi and Bengali. Patients get replies in whichever language they message in." },
      { q: "How quickly can we go live?", a: "Single Clinic ships in 7–10 days. Multi-Doctor in 2–3 weeks. Chain rollouts in 4–6 weeks including staff training." },
    ]}
  />
);

export default ClinicAutomation;
