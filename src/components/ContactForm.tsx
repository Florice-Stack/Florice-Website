"use client";

import { FormEvent, useRef, useState } from "react";
import { site } from "@/lib/content";
import {
  ACCEPTED_FORM_IMAGE_ACCEPT,
  formatFormFileSize,
  MAX_FORM_PHOTO_COUNT,
  MAX_FORM_PHOTO_SIZE_MB,
  validateFormPhotos,
} from "@/lib/formPhotos";

const industryLabels: Record<string, string> = {
  rice: "Rice mill",
  wheat: "Wheat / flour mill",
  pulses: "Pulse / lentil plant",
  cleaning: "Grain cleaning & grading",
  packaging: "Packaging / dispatch line",
  modernization: "Modernization or expansion",
  other: "Other grain processing",
};

export default function ContactForm() {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [photoSummary, setPhotoSummary] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState<string | null>(null);

  function handlePhotoChange() {
    const files = photoInputRef.current?.files ?? null;
    const validationError = validateFormPhotos(files);
    setPhotoError(validationError);

    if (!files || files.length === 0 || validationError) {
      setPhotoSummary(null);
      return;
    }

    const totalSize = Array.from(files).reduce((sum, file) => sum + file.size, 0);
    setPhotoSummary(
      `${files.length} photo${files.length === 1 ? "" : "s"} selected (${formatFormFileSize(totalSize)} total)`,
    );
  }

  function resetPhotoState() {
    if (photoInputRef.current) {
      photoInputRef.current.value = "";
    }
    setPhotoSummary(null);
    setPhotoError(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

    if (!accessKey) {
      setErrorMessage("Contact form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel and redeploy.");
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("bot-field")) {
      setStatus("success");
      form.reset();
      resetPhotoState();
      return;
    }

    const photos = photoInputRef.current?.files ?? null;
    const photoValidationError = validateFormPhotos(photos);
    if (photoValidationError) {
      setPhotoError(photoValidationError);
      setErrorMessage(photoValidationError);
      setStatus("error");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const industry = String(data.get("industry") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const plantType = industryLabels[industry] ?? industry;
    const photoNames =
      photos && photos.length > 0 ? Array.from(photos).map((file) => file.name).join(", ") : "None attached";

    const formattedMessage = [
      `Company / Mill: ${company}`,
      `Plant type: ${plantType}`,
      phone ? `Phone: ${phone}` : null,
      `Photos attached: ${photoNames}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", `Florice consultation request — ${company}`);
    formData.append("message", formattedMessage);
    formData.append("from_name", "Florice Website");
    formData.append("replyto", email);

    if (photos) {
      for (const file of photos) {
        formData.append("attachment", file);
      }
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
        resetPhotoState();
        return;
      }

      setErrorMessage(result.message ?? "Unable to send your request.");
    } catch {
      setErrorMessage("Network error while sending your request.");
    }

    setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="card-surface space-y-4">
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <h3 className="text-lg font-semibold">Consultation request</h3>
        <p className="mt-1 text-sm text-charcoal-muted">
          All fields marked * are required. We treat plant details as confidential.
        </p>
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="glass-input"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium">
          Company / Mill Name *
        </label>
        <input
          id="company"
          name="company"
          required
          autoComplete="organization"
          className="glass-input"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="glass-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="glass-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="industry" className="mb-1 block text-sm font-medium">
          Plant Type *
        </label>
        <select
          id="industry"
          name="industry"
          required
          className="glass-input"
        >
          <option value="">Select operation type</option>
          <option value="rice">Rice mill</option>
          <option value="wheat">Wheat / flour mill</option>
          <option value="pulses">Pulse / lentil plant</option>
          <option value="cleaning">Grain cleaning & grading</option>
          <option value="packaging">Packaging / dispatch line</option>
          <option value="modernization">Modernization or expansion</option>
          <option value="other">Other grain processing</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Plant details & challenge *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="e.g. 15 TPH rice mill, basmati, head rice dropped 3% after polisher upgrade."
          className="glass-input"
        />
      </div>

      <div>
        <label htmlFor="consult-photos" className="mb-1 block text-sm font-medium">
          Plant or Equipment Photos
        </label>
        <input
          ref={photoInputRef}
          id="consult-photos"
          name="attachment"
          type="file"
          accept={ACCEPTED_FORM_IMAGE_ACCEPT}
          multiple
          onChange={handlePhotoChange}
          className="block glass-input file:mr-3 file:rounded-full file:border-0 file:bg-olive/10 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-olive"
        />
        <p className="mt-2 text-xs text-charcoal-muted">
          Optional. Up to {MAX_FORM_PHOTO_COUNT} images, {MAX_FORM_PHOTO_SIZE_MB} MB each. JPG, PNG, WEBP, or GIF.
        </p>
        {photoSummary ? <p className="mt-1 text-xs text-olive">{photoSummary}</p> : null}
        {photoError ? (
          <p className="mt-1 text-xs text-red-700" role="alert">
            {photoError}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit Consultation Request"}
      </button>

      {status === "success" && (
        <p className="text-sm text-olive" role="status">
          Thank you — we&apos;ll respond within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700" role="status">
          {errorMessage} Email us directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
