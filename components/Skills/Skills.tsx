"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, skillCategories, skillsHeading } from "@/data/skills";
import type { SkillCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all"
  );

  const visibleSkills = useMemo(
    () =>
      activeCategory === "all"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            title={skillsHeading.title}
            description={skillsHeading.description}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap gap-2"
          >
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.value;
              return (
                <button
                  key={category.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.value)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "border-accent-sky/60 bg-accent-blue/15 text-accent-sky"
                      : "border-hairline bg-surface/40 text-text-secondary hover:text-text-primary"
                  )}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence initial={false}>
            {visibleSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-xl border border-hairline bg-surface/40 p-4 transition-colors duration-200 hover:border-accent-sky/40 hover:bg-surface/70"
                >
                  <Icon className="text-accent-sky" size={22} />
                  <p className="mt-3 text-sm font-semibold text-text-primary">
                    {skill.name}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-text-muted">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
