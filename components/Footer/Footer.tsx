import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";
import { footerData } from "@/data/footer";

export function Footer() {
  const year = new Date().getFullYear();
  const { initials, name, tagline, copyrightSuffix, socials } = footerData;

  return (
    <footer className="relative border-t border-hairline py-12">
      <Container className="flex flex-col items-center gap-6 text-center">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Go to home section"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline-strong bg-surface font-display text-sm font-semibold text-accent-sky">
            {initials}
          </span>
          <span className="font-display text-sm font-semibold text-text-primary">
            {name}
          </span>
        </a>

        <p className="max-w-sm text-sm text-text-muted">
          {tagline}
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent-sky"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
              aria-label={label}
              className="text-text-muted transition-colors hover:text-accent-sky"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="w-full border-t border-hairline pt-6">
          <p className="font-mono text-xs text-text-muted">
            © {year} {copyrightSuffix}
          </p>
        </div>
      </Container>
    </footer>
  );
}
