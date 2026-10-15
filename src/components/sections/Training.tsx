import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { certifications, industrialVisits, trainings } from "@/data/training";

export function Training() {
  return (
    <section id="training" className="border-t border-line bg-paper-deep/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={7}
          label="Internships & training"
          title="Grounded in real hospitals and real devices."
          intro="Clinical immersion, equipment calibration and industry R&D — the hands-on foundation behind the research."
        />

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2">
          {trainings.map((item) => (
            <article key={item.id} className="rounded-2xl border border-line bg-paper p-7" data-reveal>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Tag variant={item.kind === "Clinical" ? "signal" : item.kind === "Internship" ? "solid" : "outline"}>
                  {item.kind}
                </Tag>
                <span className="font-mono text-xs text-muted">{item.date}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-light tracking-tight">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{item.organization}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-[0.65em] h-px w-2.5 shrink-0 bg-signal" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h3 className="eyebrow" data-reveal>
              Certifications & online courses
            </h3>
            <ul className="mt-6 border-t border-ink/15">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4"
                  data-reveal
                >
                  <span>
                    <span className="font-mono text-xs text-signal">{cert.issuer}</span>
                    <span className="ml-3 text-ink">{cert.title}</span>
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {cert.date}
                    {cert.score ? ` · ${cert.score}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h3 className="eyebrow" data-reveal>
              Industrial visits
            </h3>
            <ul className="mt-6 space-y-6">
              {industrialVisits.map((visit) => (
                <li key={visit.organization} className="border-l-2 border-line pl-5" data-reveal>
                  <p className="text-ink">{visit.organization}</p>
                  <p className="font-mono text-xs text-muted">
                    {visit.location} · {visit.year}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{visit.focus}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
