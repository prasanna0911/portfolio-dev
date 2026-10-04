import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";

export function About() {
  const { heading, paragraphs, focusPoints, profile, stats } = aboutData;

  return (
    <section id="about" className="relative py-28 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
          {/* LEFT — About content */}
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              {heading.prefix}
              <span className="text-gradient">{heading.highlight}</span>
              {heading.suffix}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Focus cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {focusPoints.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-hairline bg-surface/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-sky/40 hover:bg-surface/60"
                >
                  <Icon
                    size={18}
                    className="text-accent-sky transition-transform duration-300 group-hover:scale-110"
                  />

                  <p className="mt-3 text-sm font-semibold text-text-primary">
                    {title}
                  </p>

                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — Profile */}
          <Reveal delay={0.12}>
            <div className="glass-panel overflow-hidden rounded-2xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-hairline px-5 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-sky" />
                  <p className="font-mono text-xs text-text-muted">
                    {profile.fileName}
                  </p>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                  {profile.tabNumber}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  priority={true}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[center_22%] transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />

                {/* Subtle blue glow */}
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent-sky/20 blur-3xl" />

                {/* Availability badge */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-3 py-1.5 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-sky opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-sky" />
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-primary">
                    {profile.availability}
                  </span>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {profile.name}
                  </p>

                  <p className="mt-1 font-mono text-xs text-white/60">
                    {profile.title}
                  </p>
                </div>
              </div>

              {/* Profile information */}
              <div className="p-5 sm:p-6">
                <div className="space-y-3 font-mono text-[13px] leading-relaxed">
                  {profile.attributes.map(({ key, value }) => (
                    <div key={key} className="flex gap-2">
                      <span className="text-accent-sky">{key}</span>
                      <span className="text-text-muted">:</span>
                      <span className="text-accent-cyan">
                        &quot;{value}&quot;
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-hairline bg-surface/60 p-4 transition-colors duration-300 hover:border-accent-sky/30"
                    >
                      <p className="font-display text-lg font-semibold text-text-primary">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs text-text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}