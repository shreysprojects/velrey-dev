"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (description.trim().length <= 20) {
      setErrorMsg("Description must be more than 20 characters.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, description }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
        setSubject("");
        setDescription("");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/25 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-white/30 text-xs font-mono mb-2 uppercase tracking-widest">
          Your Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-white/30 text-xs font-mono mb-2 uppercase tracking-widest">
          Subject
        </label>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-white/30 text-xs font-mono mb-2 uppercase tracking-widest">
          Message
        </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell us more..."
          rows={5}
          className={`${inputClass} resize-none`}
        />
        <p className={`text-xs font-mono mt-1.5 ${description.trim().length > 20 ? "text-white/20" : "text-white/30"}`}>
          {description.trim().length} / 20 characters minimum
        </p>
      </div>

      {status === "error" && errorMsg && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}
      {status === "success" && (
        <p className="text-[#2dd4bf] text-sm">Message sent — we&apos;ll get back to you soon.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 bg-[#6366f1]/20 hover:bg-[#6366f1]/30 border border-[#6366f1]/30 hover:border-[#6366f1]/50 text-[#818cf8] px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-white/25 text-xs font-mono mt-2">
        or send support requests / inquiries to{" "}
        <a
          href="mailto:support@velrey.dev"
          className="text-[#818cf8]/60 hover:text-[#818cf8] transition-colors"
        >
          support@velrey.dev
        </a>
      </p>
    </form>
  );
}
