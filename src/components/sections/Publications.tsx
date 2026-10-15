import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { publications } from "@/data/publications";
import { cn } from "@/lib/utils";
import type { PublicationStatus } from "@/types";

const statusVariant: Record<PublicationStatus, "solid" | "signal" | "outline"> = {
  Published: "solid",
  Submitted: "signal",
  "In preparation": "outline",
};

export function Publications() {
  return (
    <section id="publications" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          index={4}
          label="Publications & Patents"
          title="Research output."
          intro="One IEEE conference paper published, two journal papers in the pipeline and two patent filings in process."
        />

        <ol className="mt-16 border-t border-ink/15 md:mt-20">
          {publications.map((pub, i) => (
            <li
              key={pub.id}
              className="group grid gap-4 border-b border-line py-8 transition-colors duration-500 hover:bg-paper-deep/60 md:grid-cols-12 md:gap-10 md:px-4"
              data-reveal
            >
              <span className="font-mono text-xs text-muted md:col-span-1 md:pt-2">[{i + 1}]</span>
              <div className="md:col-span-8">
                <h3 className="font-display text-2xl leading-snug font-light tracking-tight text-balance">
                  {pub.title}
                </h3>
                {pub.authors ? (
                  <p className="mt-3 text-sm text-ink-soft">
                    {pub.authors.split(", ").map((author, idx, arr) => (
                      <span key={author}>
                        <span className={cn(author.startsWith("Subathira") && "font-semibold text-ink underline decoration-signal underline-offset-4")}>
                          {author}
                        </span>
                        {idx < arr.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                ) : null}
                <p className="mt-2 text-sm text-muted italic">{pub.venue}</p>
              </div>
              <div className="flex flex-wrap items-start gap-2 md:col-span-3 md:justify-end md:pt-2">
                <Tag variant={statusVariant[pub.status]}>{pub.status}</Tag>
                {pub.date ? <Tag>{pub.date}</Tag> : null}
                {pub.note ? <Tag>{pub.note}</Tag> : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
