"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  index,
}: ProjectProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden skill-card h-full flex flex-col">
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            quality={90}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm font-medium text-white flex items-center gap-1.5 hover:scale-105 transition-transform"
                style={{ background: "var(--gradient-primary)" }}
              >
                {t.projects.viewLive} <BsArrowUpRight className="text-xs" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">
            {description}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="px-2.5 py-1 text-[0.65rem] uppercase tracking-wider rounded-full font-medium text-[var(--color-primary)] border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
