import { Reveal } from "@/components/motion";
import Placeholder from "@/components/Placeholder";

const programmes = [
  {
    name: "Day School",
    time: "9:30 AM – 2:30 PM",
    body: "A full structured day of personalised learning, therapy and play designed around each child's individual education plan.",
    label: "Day School",
  },
  {
    name: "Afternoon School",
    time: "3:00 PM – 5:00 PM",
    body: "Focused after-hours sessions combining academic support with skill-building and one-to-one therapeutic work.",
    label: "Afternoon School",
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="section-pad bg-navy-50/40">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            School Programmes
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Two pathways, one mission
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {programmes.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl">
                <Placeholder label={p.label} ratio="aspect-[16/10]" className="rounded-none" />
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-navy">{p.name}</h3>
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                      {p.time}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{p.body}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-block text-sm font-semibold text-sky transition-colors hover:text-navy"
                  >
                    Learn more →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
