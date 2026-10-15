import { EcgTrace } from "@/components/animations/EcgTrace";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Download, LinkedIn, MapPin, Mail, Phone } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { padIndex } from "@/lib/utils";

export function Contact() {
  const linkedIn = profile.socials.find((s) => s.label === "LinkedIn");

  const details = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Based in", value: profile.location },
    ...(linkedIn ? [{ icon: LinkedIn, label: "LinkedIn", value: linkedIn.handle, href: linkedIn.href }] : []),
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink pt-24 pb-16 text-paper sm:pt-32">
      <Container>
        <p className="eyebrow flex items-center gap-3 text-paper/60" data-reveal>
          <span className="text-signal">{padIndex(8)}</span>
          <span aria-hidden className="h-px w-8 bg-paper/30" />
          Contact
        </p>

        <h2 className="mt-8 max-w-5xl font-display text-display font-light tracking-[-0.03em]" data-reveal>
          Let&apos;s build better <em className="text-signal">healthcare</em>, together.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70" data-reveal>
          Open to Assistant Professor positions, research collaborations and projects in medical XR, assistive
          technology and applied AI.
        </p>

        <div className="mt-10 flex flex-wrap gap-3" data-reveal>
          <ButtonLink href={`mailto:${profile.email}`} variant="light" icon={<ArrowUpRight />}>
            Write to me
          </ButtonLink>
          <ButtonLink
            href={profile.resumeUrl}
            download
            icon={<Download />}
            className="border border-paper/25 bg-transparent hover:border-paper hover:bg-paper hover:text-ink"
          >
            Download CV
          </ButtonLink>
        </div>

        <EcgTrace delay={0} onScroll className="mt-20 text-paper/25" />

        <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {details.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="bg-ink p-6" data-reveal>
              <dt className="eyebrow flex items-center gap-2 text-paper/50">
                <Icon aria-hidden className="text-signal" />
                {label}
              </dt>
              <dd className="mt-3 text-paper break-words">
                {href ? (
                  <a
                    href={href}
                    className="link-underline"
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
