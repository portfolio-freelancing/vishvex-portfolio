import NicheLanding from "@/components/NicheLanding";

const CoachingAutomation = () => (
  <NicheLanding
    slug="/coaching-automation"
    title="AI Automation for Coaching Centres in India | Lead & Admin Automation"
    metaDescription="Automate student enquiries, follow-ups, fee reminders and attendance for your coaching centre with AI agents and n8n workflows. Built by Vishvex, Hyderabad."
    eyebrow="For Coaching Centres"
    h1="AI Automation for Coaching Centres in India"
    directAnswer="AI automation for coaching centres uses tools like n8n and AI agents to handle enquiry response, lead qualification, fee reminders, attendance tracking and student follow-ups without manual work. A typical setup saves 15–20 admin hours per week and lifts enrolment conversion by 20–40%."
    useCases={[
      { title: "24/7 WhatsApp enquiry bot", description: "Auto-reply to enquiries from Instagram, Meta ads and website, qualify by course and batch, and push hot leads to your counsellor." },
      { title: "Fee reminders & receipts", description: "Automated fee due, overdue and thank-you messages on WhatsApp with UPI links and PDF receipts." },
      { title: "Attendance & parent updates", description: "Daily attendance capture with automated parent WhatsApp reports for absentees." },
      { title: "Demo class scheduling", description: "AI agent books demo slots into Google Calendar, sends reminders and reschedules cancellations." },
      { title: "Drop-off recovery", description: "30-day drip that re-engages leads who didn't convert, with course-specific offers." },
      { title: "Google review automation", description: "Auto-request reviews from active students after milestones like test scores." },
    ]}
    pricing={[
      { tier: "Starter", price: "₹25,000", includes: "WhatsApp enquiry bot + lead routing to 1 counsellor." },
      { tier: "Growth", price: "₹75,000", includes: "Enquiry bot + fee reminders + demo scheduling + CRM sync." },
      { tier: "Full Stack", price: "₹1,50,000", includes: "Everything + attendance + parent updates + review automation + multi-branch." },
    ]}
    bestFor="Coaching centres with 100+ monthly enquiries, 2+ branches, or a team spending 10+ hours/week on WhatsApp follow-ups. Works for JEE/NEET, UPSC, CA, IELTS, K-12 tuition and skill training institutes across India."
    faqs={[
      { q: "How much does coaching centre automation cost in India?", a: "Vishvex coaching automation projects start at ₹25,000 for a WhatsApp enquiry bot and scale to ₹1,50,000 for a full stack covering enquiries, fees, attendance and parent communication. Pricing is fixed-scope with no monthly SaaS fees for the workflows themselves." },
      { q: "Can it integrate with my existing CRM or LMS?", a: "Yes. We integrate with Zoho, LeadSquared, HubSpot, Google Sheets, Airtable and most LMS platforms via API. If your platform has a webhook or REST API, we can connect it." },
      { q: "Do I need my own WhatsApp Business API?", a: "For scale you'll want the official WhatsApp Business API (Meta), which we set up for you. For small volumes we can start on WhatsApp Web automation and migrate later." },
      { q: "How long does implementation take?", a: "A Starter setup ships in 5–7 days. Growth in 2–3 weeks. Full Stack in 4 weeks including training your team." },
      { q: "Who owns the code and data?", a: "You do. All workflows run on your own n8n instance (self-hosted or cloud) with full admin access. Zero vendor lock-in." },
    ]}
  />
);

export default CoachingAutomation;
