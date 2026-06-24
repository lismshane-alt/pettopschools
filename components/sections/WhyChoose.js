import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const features = [
  {
    icon: "🎓",
    title: "Expert Leadership",
    body: "Internationally certified professionals regulated by bodies including the British Psychological Society and BACB.",
  },
  {
    icon: "🧩",
    title: "Personalised Curriculum",
    body: "Individual plans built on UK Functional Skills qualifications and comprehensive assessment.",
  },
  {
    icon: "🔬",
    title: "Evidence-Based",
    body: "Applied Behaviour Analysis, sensory integration and validated methods with weekly supervision.",
  },
  {
    icon: "🌱",
    title: "Holistic Development",
    body: "One-to-one and small group learning that nurtures independence across every domain.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Where precision meets compassion
          </h2>
          <p className="mt-4 text-white/70">
            Every learner is met with scientific rigour and warmth — a combination that
            sets The Tree House International apart.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem
              key={f.title}
              className="rounded-2xl border border-navy-50 bg-navy-50 p-6 transition-shadow hover:shadow-lg hover:shadow-gold/10"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-navy text-2xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{f.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
