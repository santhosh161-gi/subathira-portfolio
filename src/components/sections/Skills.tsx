import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups, teachingSubjects } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="bg-ink py-24 text-paper sm:py-32">
      <Container>
        <SectionHeading
          index={5}
          label="Technical expertise"
          tone="dark"
          title={
            <>
              The toolkit — <em className="text-signal">software, hardware</em> and the lab bench.
            </>
          }
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-ink p-8 transition-colors duration-500 hover:bg-ink-soft" data-reveal>
              <h3 className="eyebrow text-paper/50">{group.label}</h3>
              <ul className="mt-6 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-display text-2xl font-light tracking-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-12" data-reveal>
          <h3 className="eyebrow text-paper/50 md:col-span-3">Subjects taught</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-9">
            {teachingSubjects.map((subject) => (
              <li key={subject} className="flex items-center gap-3 text-lg text-paper/85">
                <span aria-hidden className="size-1.5 rounded-full bg-signal" />
                {subject}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
