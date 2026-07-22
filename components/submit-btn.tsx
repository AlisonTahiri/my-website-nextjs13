"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { useLanguage } from "@/context/language-context";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-full sm:w-[10rem] rounded-xl text-white outline-none transition-all hover:scale-105 active:scale-100 cursor-pointer disabled:scale-100 disabled:opacity-60 glow"
      style={{ background: "var(--gradient-primary)" }}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>
          {t.contact.submit}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
