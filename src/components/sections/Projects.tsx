import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";
import { padIndex } from "@/lib/utils";
import type { Project } from "@/types";

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative grid gap-10 overflow-hidden rounded-3xl bg-ink p-8 text-paper sm:p-12 lg:grid-cols-12" data-reveal>
      <span
        aria-hidden
        data-parallax="-18"
        className="pointer-events-none absolute -right-6 -bottom-16 font-display text-[16rem] leading-none font-light text-paper/[0.04] italic select-none sm:text-[22rem]"
      >
        {padIndex(index)}
      </span>

      <div className="relative lg:col-span-5">
        <p className="eyebrow text-paper/50">
          Featured project <span className="text-signal">/ {padIndex(index)}</span>
        </p>
        <h3 className="mt-6 font-display text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-4 font-display text-lg text-paper/60 italic">{project.tagline}</p>
      </div>

      <div className="relative lg:col-span-6 lg:col-start-7">
        <p className="text-lg leading-relaxed text-paper/80 text-pretty">{project.description}</p>

        <ul className="mt-8 space-y-3 border-t border-paper/15 pt-6">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-paper/75">
              <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-signal" />
              {point}
            </li>
          ))}
        </ul>

        {project.outcomes.length > 0 ? (
          <div className="mt-8">
            <p className="eyebrow text-paper/50">Outcomes</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Tag variant="signal" className="bg-signal text-paper">
                    {outcome}
                  </Tag>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag className="border-paper/20 text-paper/80">{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_60px_-30px_rgba(21,24,27,0.35)]"
      data-reveal
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-signal">{padIndex(index)}</span>
        <span aria-hidden className="h-px w-10 bg-line transition-all duration-500 group-hover:w-16 group-hover:bg-signal" />
      </div>
      <h3 className="mt-10 font-display text-2xl leading-tight font-light tracking-tight">{project.title}</h3>
      <p className="mt-2 font-display text-muted italic">{project.tagline}</p>
      <p className="mt-5 text-sm leading-relaxed text-ink-soft">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-[0.65em] h-px w-2.5 shrink-0 bg-signal" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        {project.outcomes.map((outcome) => (
          <p key={outcome} className="mb-4 text-sm font-medium text-signal">
            ★ {outcome}
          </p>
        ))}
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={3}
          label="Projects"
          title={
            <>
              Selected work, from <em>haptic surgery</em> to <em>sign language</em>.
            </>
          }
          intro="Systems built end to end — 3D modelling, interaction design, data collection, model training and testing with real users."
        />

        <div className="mt-16 space-y-6 md:mt-20">
          {featured.map((project, i) => (
            <FeaturedProject key={project.id} project={project} index={i + 1} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={featured.length + i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
