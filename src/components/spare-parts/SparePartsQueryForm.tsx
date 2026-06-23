"use client";

import { FormEvent, useRef, useState } from "react";
import { site, machineryProducts, sparePartsCategories } from "@/lib/content";
import {
  ACCEPTED_FORM_IMAGE_ACCEPT,
  formatFormFileSize,
  MAX_FORM_PHOTO_COUNT,
  MAX_FORM_PHOTO_SIZE_MB,
  validateFormPhotos,
} from "@/lib/formPhotos";

const plantTypeLabels: Record<string, string> = {
  rice: "Rice mill",
  wheat: "Wheat / flour mill",
  pulses: "Pulse / lentil plant",
  both: "Rice and flour",
  other: "Other grain processing",
};

const urgencyLabels: Record<string, string> = {
  breakdown: "Breakdown — production stopped or at risk",
  shutdown: "Planned shutdown",
  stock: "Routine stock / preventive",
};

export default function SparePartsQueryForm() {
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

    if (!accessKey) {
      setErrorMessage("Form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel and redeploy.");
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("bot-field")) {
      setStatus("success");
      form.reset();
      photoInputRef.current && (photoInputRef.current.value = "");
      setPhotoSummary(null);
      setPhotoError(null);
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
    const plantType = String(data.get("plantType") ?? "").trim();
    const machine = String(data.get("machine") ?? "").trim();
    const category = String(data.get("category") ?? "").trim();
    const partDetails = String(data.get("partDetails") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const urgency = String(data.get("urgency") ?? "").trim();
    const notes = String(data.get("notes") ?? "").trim();

    const categoryLabel =
      sparePartsCategories.find((item) => item.id === category)?.eyebrow ??
      machineryProducts.find((item) => `machinery-${item.id}` === category)?.title ??
      (category === "other" ? "Other / not listed" : category);

    const photoNames =
      photos && photos.length > 0 ? Array.from(photos).map((file) => file.name).join(", ") : "None attached";

    const formattedMessage = [
      `Company / Mill: ${company}`,
      `Plant type: ${plantTypeLabels[plantType] ?? plantType}`,
      `Machine make & model: ${machine}`,
      `Part category: ${categoryLabel}`,
      `Quantity: ${quantity}`,
      `Urgency: ${urgencyLabels[urgency] ?? urgency}`,
      phone ? `Phone: ${phone}` : null,
      `Photos attached: ${photoNames}`,
      "",
      "Part details:",
      partDetails,
      notes ? `\nAdditional notes:\n${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", `Florice machinery & spare parts enquiry — ${company}`);
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
        if (photoInputRef.current) {
          photoInputRef.current.value = "";
        }
        setPhotoSummary(null);
        setPhotoError(null);
        return;
      }

      setErrorMessage(result.message ?? "Unable to send your enquiry.");
    } catch {
      setErrorMessage("Network error while sending your enquiry.");
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
        <h3 className="text-lg font-semibold">Machinery & spare parts enquiry</h3>
        <p className="mt-1 text-sm text-charcoal-muted">
          Fields marked * are required. Attach photos of the worn part and machine nameplate when you can.
        </p>
      </div>

      <div>
        <label htmlFor="sp-name" className="mb-1 block text-sm font-medium">
          Name *
        </label>
        <input
          id="sp-name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="sp-company" className="mb-1 block text-sm font-medium">
          Company / Mill Name *
        </label>
        <input
          id="sp-company"
          name="company"
          required
          autoComplete="organization"
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sp-email" className="mb-1 block text-sm font-medium">
            Email *
          </label>
          <input
            id="sp-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="sp-phone" className="mb-1 block text-sm font-medium">
            Phone
          </label>
          <input
            id="sp-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sp-plantType" className="mb-1 block text-sm font-medium">
            Plant Type *
          </label>
          <select
            id="sp-plantType"
            name="plantType"
            required
            className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
          >
            <option value="">Select plant type</option>
            <option value="rice">Rice mill</option>
            <option value="wheat">Wheat / flour mill</option>
            <option value="pulses">Pulse / lentil plant</option>
            <option value="both">Rice and flour</option>
            <option value="other">Other grain processing</option>
          </select>
        </div>
        <div>
          <label htmlFor="sp-urgency" className="mb-1 block text-sm font-medium">
            Urgency *
          </label>
          <select
            id="sp-urgency"
            name="urgency"
            required
            className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
          >
            <option value="">Select urgency</option>
            <option value="breakdown">Breakdown — production stopped or at risk</option>
            <option value="shutdown">Planned shutdown</option>
            <option value="stock">Routine stock / preventive</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="sp-machine" className="mb-1 block text-sm font-medium">
          Machine Make & Model *
        </label>
        <input
          id="sp-machine"
          name="machine"
          required
          placeholder="e.g. Satake VTA 10 TPH whitener"
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sp-category" className="mb-1 block text-sm font-medium">
            Enquiry Category *
          </label>
          <select
            id="sp-category"
            name="category"
            required
            className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
          >
            <option value="">Select category</option>
            <optgroup label="Machinery lines">
              {machineryProducts.map((item) => (
                <option key={item.id} value={`machinery-${item.id}`}>
                  {item.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Spare parts">
              {sparePartsCategories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.eyebrow}
                </option>
              ))}
            </optgroup>
            <option value="other">Other / not listed</option>
          </select>
        </div>
        <div>
          <label htmlFor="sp-quantity" className="mb-1 block text-sm font-medium">
            Quantity *
          </label>
          <input
            id="sp-quantity"
            name="quantity"
            required
            placeholder="e.g. 2 sets, 4 pieces"
            className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sp-partDetails" className="mb-1 block text-sm font-medium">
          Part Description & Part Number *
        </label>
        <textarea
          id="sp-partDetails"
          name="partDetails"
          rows={4}
          required
          placeholder="Describe the part, dimensions, and OEM part number if known."
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="sp-photos" className="mb-1 block text-sm font-medium">
          Part & Nameplate Photos
        </label>
        <input
          ref={photoInputRef}
          id="sp-photos"
          name="attachment"
          type="file"
          accept={ACCEPTED_FORM_IMAGE_ACCEPT}
          multiple
          onChange={handlePhotoChange}
          className="block w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-olive/10 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-olive"
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

      <div>
        <label htmlFor="sp-notes" className="mb-1 block text-sm font-medium">
          Additional Notes
        </label>
        <textarea
          id="sp-notes"
          name="notes"
          rows={2}
          placeholder="Operating hours since last change, alternate suppliers tried, etc."
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        />
      </div>

      <button type="submit" className="btn btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit Enquiry"}
      </button>

      {status === "success" && (
        <p className="text-sm text-olive" role="status">
          Thank you — we&apos;ll confirm fit and send a quote within one business day.
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
