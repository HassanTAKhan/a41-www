"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xeoodplo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-muted">
          Thank you for your enquiry. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-accent hover:underline text-sm cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full h-12 px-4 bg-surface-light border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full h-12 px-4 bg-surface-light border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            placeholder="07xxx xxxxxx"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full h-12 px-4 bg-surface-light border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="registration" className="block text-sm font-medium text-muted mb-2">
          Vehicle Registration
        </label>
        <input
          type="text"
          id="registration"
          name="registration"
          className="w-full h-12 px-4 bg-surface-light border border-border rounded-lg text-white uppercase focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
          placeholder="AB12 CDE"
          maxLength={8}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-12 bg-accent hover:bg-accent-hover text-black font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
