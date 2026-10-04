"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  navigationItems,
  navBrand,
  navSocialLinks,
} from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setMenuOpen(false);

    if (href.startsWith("#")) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        setTimeout(() => {
          const navbarHeight = 72;
          const rect = targetElement.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const targetY = Math.max(0, rect.top + scrollTop - navbarHeight);

          window.scrollTo({
            top: targetY,
            behavior: "smooth",
          });

          if (window.history?.pushState) {
            window.history.pushState(null, "", href);
          }
        }, 60);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-hairline bg-void/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex h-18 items-center justify-between py-3.5"
          aria-label="Primary"
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home", "home")}
            className="flex items-center gap-3 rounded-md"
            aria-label="Go to home section"
          >
            <div className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-accent-sky/50 bg-surface shadow-[0_0_12px_rgba(59,130,246,0.35)]">
              <Image
                src={navBrand.avatar}
                alt={navBrand.name}
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-semibold text-text-primary">
                {navBrand.name}
              </span>
              <span className="font-mono text-[11px] text-text-muted">
                {navBrand.role}
              </span>
            </span>
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-hairline bg-surface/50 p-1 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    activeSection === item.id
                      ? "text-text-primary font-semibold"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-accent-sky/20 border border-accent-sky/50 shadow-[0_0_12px_rgba(96,165,250,0.35)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={navSocialLinks.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-text-muted transition-colors hover:text-accent-sky"
            >
              <FaGithub size={19} />
            </a>
            <a
              href={navSocialLinks.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-text-muted transition-colors hover:text-accent-sky"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href={navSocialLinks.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-hairline-strong bg-surface px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent-sky/60 hover:text-accent-sky"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-surface text-text-primary lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[72px] z-10 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative z-20 max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-hairline bg-void/95 backdrop-blur-xl lg:hidden"
            >
              <Container className="flex flex-col gap-1.5 py-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200",
                      activeSection === item.id
                        ? "border border-accent-sky/60 bg-accent-sky/20 text-white font-semibold shadow-[0_0_16px_rgba(96,165,250,0.25)]"
                        : "border border-transparent text-text-secondary hover:bg-surface/80 hover:text-white"
                    )}
                  >
                    <span className={cn(activeSection === item.id ? "text-white font-semibold" : "text-text-secondary")}>
                      {item.label}
                    </span>
                    {activeSection === item.id && (
                      <span className="flex items-center gap-2">
                        <span className="text-xs font-mono font-medium text-accent-sky">active</span>
                        <span className="h-2 w-2 rounded-full bg-accent-sky shadow-[0_0_8px_#60a5fa]" />
                      </span>
                    )}
                  </a>
                ))}
                <div className="mt-3 flex items-center gap-4 border-t border-hairline px-4 pt-4">
                  <a
                    href={navSocialLinks.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub profile"
                    className="text-text-muted transition-colors hover:text-accent-sky"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={navSocialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn profile"
                    className="text-text-muted transition-colors hover:text-accent-sky"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={navSocialLinks.resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-auto rounded-full border border-hairline-strong bg-surface px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent-sky/60 hover:text-accent-sky"
                  >
                    Resume
                  </a>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
