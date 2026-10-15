import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-paper-deep/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={2}
          label="Experience"
          title="Research labs, classrooms and clinics."
          intro="Four roles across premier institutes — building medical XR and AI systems, and teaching the engineers who will build the next ones."
        />

        <ol className="relative mt-16 md:mt-20" data-timeline>
          {/* Timeline rail + scroll-linked progress */}
          <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-line md:left-[calc(25%+5px)]" />
          <span
            aria-hidden
            data-timeline-progress
            className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-signal md:left-[calc(25%+5px)]"
          />

          {experience.map((item) => (
            <li key={item.id} className="relative grid gap-4 pb-16 pl-10 last:pb-0 md:grid-cols-4 md:gap-10 md:pl-0">
              <div className="md:pr-10 md:text-right" data-reveal>
                <p className="font-mono text-sm text-ink">
                  {item.start} — {item.end}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">{item.location}</p>
              </div>

              <span
                aria-hidden
                className="absolute top-1.5 left-0 size-[11px] rounded-full border-2 border-signal bg-paper md:left-[25%]"
              />

              <article className="md:col-span-3 md:pl-12" data-reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <Tag variant={item.category === "Teaching" ? "solid" : "signal"}>{item.category}</Tag>
                </div>
                <h3 className="mt-4 font-display text-3xl font-light tracking-tight">{item.role}</h3>
                <p className="mt-1 text-ink-soft">
                  {item.organization}
                  {item.department ? <span className="text-muted"> · {item.department}</span> : null}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{item.summary}</p>

                <ul className="mt-6 grid max-w-3xl gap-3">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
