import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const services = [
  { icon: "🌀", title: "Sensory Integration", body: "Occupational therapy paired with traditional Ayurvedic massage." },
  { icon: "🗣️", title: "Speech Therapy", body: "Psycholinguistic, behavioural and social communication models." },
  { icon: "🧠", title: "Behaviour Therapy", body: "Internationally certified behaviour analysts and educators." },
  { icon: "💧", title: "Hydrotherapy", body: "Swimming lessons and water-based therapeutic sessions." },
  { icon: "🧘", title: "Complementary Therapies", body: "Mindfulness and the Safe and Sound Protocol." },
  { icon: "📋", title: "Evidence-Based Plans", body: "CBT, OT, ABA, physiotherapy and individual education plans." },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            A full spectrum of support
          </h2>
          <p className="mt-4 text-white/70">
            Therapies and interventions delivered by an interdisciplinary team, all under
            one roof.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem
              key={s.title}
              className="group flex gap-4 rounded-2xl border border-navy-50 p-6 transition-colors hover:border-gold/40 hover:bg-navy-50/40"
            >
              <span className="text-2xl">{s.icon}</span>
              <div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
