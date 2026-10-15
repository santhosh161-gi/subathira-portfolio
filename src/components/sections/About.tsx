import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { padIndex } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={1}
          label="About"
          title={
            <>
              Where <em className="text-signal">medicine</em> meets immersive and intelligent technology.
            </>
          }
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 md:col-start-4">
            <p className="text-lg leading-relaxed text-ink-soft text-pretty" data-reveal>
              I&apos;m a biomedical engineer with an M.E. in Medical Electronics from SSN College of Engineering. My
              work spans VR surgical simulation with haptic feedback, deep-learning sign language recognition and
              motion-tracked serious games for neurodiverse children — built in labs at IIT Madras, SSN and SRM
              Easwari, and in collaboration with the University of Bologna.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-pretty" data-reveal>
              In the classroom I teach biomedical instrumentation, bio-informatics and VR in healthcare. My goal is to
              grow as an Assistant Professor who pairs rigorous teaching with research that solves real clinical
              problems.
            </p>

            <figure className="mt-10 border-l-2 border-signal pl-6" data-reveal>
              <blockquote className="font-display text-xl leading-snug font-light italic text-ink">
                {profile.objective}
              </blockquote>
              <figcaption className="eyebrow mt-4">Career objective</figcaption>
            </figure>
          </div>

          <aside className="md:col-span-3 md:col-start-10">
            <h3 className="eyebrow" data-reveal>
              Professional strengths
            </h3>
            <ul className="mt-5 space-y-4">
              {profile.strengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-sm leading-relaxed text-ink-soft" data-reveal>
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                  {strength}
                </li>
              ))}
            </ul>

            <h3 className="eyebrow mt-10" data-reveal>
              Off the clock
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft" data-reveal>
              {profile.hobbies.join(" · ")}
            </p>
          </aside>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {profile.focusAreas.map((area, i) => (
            <li key={area.title} className="bg-paper p-8 transition-colors duration-500 hover:bg-paper-deep" data-reveal>
              <span className="font-mono text-xs text-signal">{padIndex(i + 1)}</span>
              <h3 className="mt-8 font-display text-2xl font-light tracking-tight">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{area.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
