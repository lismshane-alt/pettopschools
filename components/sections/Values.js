import { Reveal } from "@/components/motion";
import Placeholder from "@/components/Placeholder";

export default function Values() {
  return (
    <section id="values" className="section-pad">
      <div className="container-max grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Placeholder label="Social Values" ratio="aspect-[4/3]" className="shadow-xl" />
        </Reveal>
        <Reveal delay={0.15}>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Social Values
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Leading autism research in the region
          </h2>
          <p className="mt-4 text-white/70">
            Through university collaborations and ongoing innovation, we advance the
            science of special education while holding ourselves to the highest ethical
            standards.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Regulated by international professional bodies",
              "Weekly professional supervision",
              "Applied autism research & university partnerships",
              "Inclusion and dignity for every child",
            ].map((v) => (
              <li key={v} className="flex items-start gap-3 text-sm text-white/75">
                <span className="mt-0.5 text-gold">✓</span>
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
