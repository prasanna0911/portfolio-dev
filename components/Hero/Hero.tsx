"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, CircleDot, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { heroData } from "@/data/hero";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const {
    avatar,
    badge,
    heading,
    description,
    cta,
    techBadges,
    pipeline,
    terminal,
    deployment,
  } = heroData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <AmbientGlow variant="top" />
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
        >
          <div>
            <motion.div variants={item} className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-accent-sky/70 shadow-[0_0_14px_rgba(59,130,246,0.4)]">
                <Image
                  src={avatar}
                  alt={heading.line1}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-4 py-1.5 font-mono text-xs tracking-wide text-accent-sky">
                <CircleDot size={13} className="text-accent-cyan" />
                {badge}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]"
            >
              {heading.line1}
              <br />
              that <span className="text-gradient">{heading.highlight}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {description}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={cta.primary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_18px_40px_-18px_rgba(59,130,246,0.65)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {cta.primary.label}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={cta.secondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-surface/60 px-6 py-3 text-sm font-semibold text-text-primary transition-colors duration-300 hover:border-accent-sky/60 hover:text-accent-sky"
              >
                {cta.secondary.label}
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap items-center gap-2.5"
              aria-label="Core technologies"
            >
              {techBadges.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-surface/50 px-3 py-1.5 text-xs font-medium text-text-secondary"
                >
                  <Icon className="text-accent-sky" size={14} />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div variants={item} className="relative">
            <div className="glass-panel relative rounded-2xl p-5 shadow-[0_40px_120px_-40px_rgba(59,130,246,0.35)] sm:p-6">
              <div className="flex items-center justify-between border-b border-hairline pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]/70" />
                </div>
                <span className="font-mono text-[11px] text-text-muted">
                  {terminal.title}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {pipeline.map((stage) => (
                  <div
                    key={stage.step}
                    className="flex items-center gap-4 rounded-xl border border-hairline bg-surface/70 px-4 py-3"
                  >
                    <span className="font-mono text-xs text-text-muted">
                      {stage.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-text-primary">
                        {stage.label}
                      </p>
                      <p className="truncate text-xs text-text-muted">
                        {stage.detail}
                      </p>
                    </div>
                    {stage.state === "done" && (
                      <CheckCircle2 size={17} className="shrink-0 text-accent-cyan" />
                    )}
                    {stage.state === "active" && (
                      <Loader2
                        size={17}
                        className="shrink-0 animate-spin text-accent-sky"
                      />
                    )}
                    {stage.state === "pending" && (
                      <span className="h-2 w-2 shrink-0 rounded-full border border-text-muted" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-hairline bg-[#060a10] p-4 font-mono text-[12px] leading-relaxed text-text-secondary">
                <p className="text-accent-cyan">{terminal.command}</p>
                {terminal.lines.map((line, index) => (
                  <p
                    key={index}
                    className={
                      line.accent === "sky"
                        ? "text-accent-sky"
                        : line.accent === "cyan"
                        ? "text-accent-cyan"
                        : "mt-1 text-text-muted"
                    }
                  >
                    {line.text}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-hairline bg-surface/70 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {deployment.title}
                  </p>
                  <p className="text-xs text-text-muted">{deployment.subtitle}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-cyan/10 px-3 py-1 text-xs font-medium text-accent-cyan">
                  <ArrowUpRight size={13} />
                  {deployment.status}
                </span>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-blue/25 blur-3xl sm:-right-10 sm:-top-10"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
