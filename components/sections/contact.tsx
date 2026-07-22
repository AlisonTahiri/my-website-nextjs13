"use client";

import React, { useRef } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../submit-btn";
import toast from "react-hot-toast";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement | null>(null);
  const { t } = useLanguage();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t.contact.title}</SectionHeading>

      <p className="text-[var(--color-text-secondary)] -mt-4 mb-8 text-lg">
        {t.contact.description}
      </p>

      <form
        ref={formRef}
        className="flex flex-col gap-4"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          formRef.current?.reset();
          toast.success("Message sent successfully!");
        }}
      >
        <div className="relative">
          <input
            className="w-full h-14 px-5 rounded-xl glass text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 transition-all placeholder:text-[var(--color-text-muted)]"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t.contact.emailPlaceholder}
          />
        </div>

        <textarea
          className="h-52 rounded-xl glass p-5 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 transition-all resize-none placeholder:text-[var(--color-text-muted)]"
          name="message"
          placeholder={t.contact.messagePlaceholder}
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
