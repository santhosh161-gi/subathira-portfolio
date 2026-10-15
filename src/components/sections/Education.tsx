import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={6}
          label="Education"
          title="Two engineering degrees, both with distinction."
        />

        <ol className="mt-16 border-t border-ink/15 md:mt-20">
          {education.map((item) => (
            <li
              key={item.id}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-line py-8 md:grid-cols-12 md:gap-10"
              data-reveal
            >
              <span className="font-mono text-sm text-signal md:col-span-1">{item.year}</span>
              <div className="md:col-span-7">
                <h3 className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                  {item.degree} <span className="text-muted italic">{item.field}</span>
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  {item.institution}, {item.location}
                </p>
              </div>
              <div className="col-start-2 md:col-span-4 md:col-start-auto md:text-right">
                <p className="font-display text-2xl font-light">{item.score}</p>
                {item.distinction ? <p className="mt-1 font-mono text-xs text-muted">{item.distinction}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
