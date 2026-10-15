import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <Container as="section" className="flex min-h-[80vh] flex-col justify-center py-32">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 font-display text-title font-light tracking-tight">
        Flatline. <em className="text-signal">This page doesn&apos;t exist.</em>
      </h1>
      <div className="mt-10">
        <ButtonLink href="/" icon={<ArrowRight />}>
          Back to home
        </ButtonLink>
      </div>
    </Container>
  );
}
