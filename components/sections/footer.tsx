"use client";

import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const date = new Date();
  const { t } = useLanguage();

  return (
    <footer className="mb-10 px-4 text-center">
      {/* Gradient divider */}
      <div className="w-24 h-[2px] mx-auto mb-8 rounded-full" style={{ background: "var(--gradient-primary)" }} />

      {/* Social links */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <a
          href="https://www.linkedin.com/in/alison-t-0421b2205/"
          target="_blank"
          rel="noopener"
          className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          aria-label="LinkedIn"
        >
          <BsLinkedin className="text-lg" />
        </a>
        <a
          href="https://github.com/AlisonTahiri"
          target="_blank"
          rel="noopener"
          className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          aria-label="GitHub"
        >
          <BsGithub className="text-lg" />
        </a>
      </div>

      <small className="block text-xs text-[var(--color-text-muted)] mb-1">
        &copy; {date.getFullYear()} Alison Tahiri. {t.footer.rights}
      </small>
      <p className="text-xs text-[var(--color-text-muted)] opacity-60">
        {t.footer.builtWith}
      </p>
    </footer>
  );
}
