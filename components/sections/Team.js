import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import Placeholder from "@/components/Placeholder";

const team = [
  { name: "Dr. Anton James", role: "Founder & Director", label: "Portrait" },
  { name: "Ms. Chrystal Honsaker", role: "Co-Director", label: "Portrait" },
  { name: "Lead Behaviour Analyst", role: "BCBA, Clinical Team", label: "Portrait" },
  { name: "Head of Therapy", role: "Occupational Therapist", label: "Portrait" },
];

export default function Team() {
  return (
    <section id="team" className="section-pad bg-navy-50/40">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Internationally certified, locally devoted
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <StaggerItem key={m.name} className="text-center">
              <Placeholder label={m.label} ratio="aspect-square" className="mb-4" />
              <h3 className="font-semibold text-navy">{m.name}</h3>
              <p className="text-sm text-navy/60">{m.role}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
