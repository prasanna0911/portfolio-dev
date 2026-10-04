"use client";

import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  workExperience,
  educationList,
  certificationsList,
  experienceHeading,
} from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={experienceHeading.eyebrow}
            title={experienceHeading.title}
            description={experienceHeading.description}
          />
        </Reveal>

        {/* WORK EXPERIENCE */}
        <div className="mt-14 space-y-8">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-surface/80 text-accent-sky">
              <Briefcase size={16} />
            </span>
            <h3 className="font-display text-xl font-semibold text-text-primary">
              Work Experience
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8">
            <div
              aria-hidden="true"
              className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-sky via-hairline-strong to-transparent sm:left-[9px]"
            />

            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <Reveal key={exp.id} delay={index * 0.08}>
                  <div className="relative">
                    {/* Timeline node */}
                    <span className="absolute -left-6 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent-sky bg-void sm:-left-8">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-sky" />
                    </span>

                    <article className="glass-panel rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:border-accent-sky/40">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h4 className="font-display text-xl font-semibold text-text-primary">
                              {exp.role}
                            </h4>
                            <span className="font-display text-lg text-accent-sky">
                              @ {exp.company}
                            </span>
                            {exp.current && (
                              <span className="rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent-cyan">
                                Latest Role
                              </span>
                            )}
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-text-muted">
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar size={13} className="text-accent-sky" />
                              {exp.period}
                            </span>
                            {exp.location && (
                              <span className="inline-flex items-center gap-1.5">
                                <MapPin size={13} className="text-accent-sky" />
                                {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="mt-5 space-y-2.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-1 shrink-0 text-accent-cyan"
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      {exp.techStack && (
                        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-hairline pt-4">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-hairline bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATION & CERTIFICATION */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-surface/80 text-accent-sky">
                <GraduationCap size={16} />
              </span>
              <h3 className="font-display text-xl font-semibold text-text-primary">
                Education
              </h3>
            </div>

            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-hairline transition-colors hover:border-accent-sky/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-display text-lg font-semibold text-text-primary">
                    {edu.degree}
                  </h4>
                  <span className="rounded-full bg-accent-blue/15 px-3 py-1 font-mono text-xs font-semibold text-accent-sky">
                    {edu.grade}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-text-secondary">
                  {edu.institution}
                </p>

                <div className="mt-2 flex items-center gap-2 font-mono text-xs text-text-muted">
                  <Calendar size={12} className="text-accent-sky" />
                  {edu.period}
                </div>

                {edu.highlights && (
                  <ul className="mt-4 space-y-2 border-t border-hairline pt-4">
                    {edu.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-text-muted"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-sky" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Reveal>

          {/* Certification */}
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-surface/80 text-accent-sky">
                <Award size={16} />
              </span>
              <h3 className="font-display text-xl font-semibold text-text-primary">
                Certification
              </h3>
            </div>

            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-hairline transition-colors hover:border-accent-sky/40"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-text-primary">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary">
                      {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <p className="mt-1 font-mono text-xs text-accent-sky">
                        {cert.credentialId}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-text-muted">
                      Comprehensive training covering end-to-end full-stack web
                      application engineering, databases, APIs, and modern
                      frameworks.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
