import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-10 text-paper/50">
      <Container className="flex flex-col gap-4 border-t border-paper/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <a href="#top" className="link-underline self-start text-paper/70 hover:text-paper sm:self-auto">
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
