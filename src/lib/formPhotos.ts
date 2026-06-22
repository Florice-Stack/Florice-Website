export const MAX_FORM_PHOTO_COUNT = 3;
export const MAX_FORM_PHOTO_SIZE_MB = 1;
export const MAX_FORM_PHOTO_SIZE_BYTES = MAX_FORM_PHOTO_SIZE_MB * 1024 * 1024;
export const ACCEPTED_FORM_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
export const ACCEPTED_FORM_IMAGE_ACCEPT = "image/jpeg,image/png,image/webp,image/gif";

export function formatFormFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function validateFormPhotos(files: FileList | null): string | null {
  if (!files || files.length === 0) {
    return null;
  }

  if (files.length > MAX_FORM_PHOTO_COUNT) {
    return `Please attach up to ${MAX_FORM_PHOTO_COUNT} photos only.`;
  }

  for (const file of files) {
    if (!ACCEPTED_FORM_IMAGE_TYPES.has(file.type)) {
      return `"${file.name}" is not supported. Use JPG, PNG, WEBP, or GIF.`;
    }
    if (file.size > MAX_FORM_PHOTO_SIZE_BYTES) {
      return `"${file.name}" is ${formatFormFileSize(file.size)}. Each photo must be ${MAX_FORM_PHOTO_SIZE_MB} MB or less.`;
    }
  }

  return null;
}
