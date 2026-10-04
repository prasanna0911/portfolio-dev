"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import type { ContactFormData, ContactFormErrors } from "@/lib/types";

const initialData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.subject.trim()) {
    errors.subject = "Please enter a subject.";
  }

  if (!data.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const isLoading = status === "loading";

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api/contact";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setData(initialData);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-panel rounded-2xl p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-text-secondary"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={isLoading}
            className="w-full rounded-lg border border-hairline bg-surface/60 px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent-sky/60 disabled:opacity-60"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-text-secondary"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isLoading}
            className="w-full rounded-lg border border-hairline bg-surface/60 px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent-sky/60 disabled:opacity-60"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-text-secondary"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          autoComplete="off"
          value={data.subject}
          onChange={handleChange("subject")}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          disabled={isLoading}
          className="w-full rounded-lg border border-hairline bg-surface/60 px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent-sky/60 disabled:opacity-60"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-text-secondary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          autoComplete="off"
          value={data.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isLoading}
          className="w-full resize-none rounded-lg border border-hairline bg-surface/60 px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-accent-sky/60 disabled:opacity-60"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-blue px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send size={15} />
          </>
        )}
      </button>

      <div role="status" aria-live="polite" className="mt-4">
        {status === "success" && (
          <p className="inline-flex items-center gap-2 text-sm text-accent-cyan">
            <CheckCircle2 size={16} />
            Message sent. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="inline-flex items-center gap-2 text-sm text-red-400">
            <TriangleAlert size={16} />
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </div>
    </form>
  );
}
