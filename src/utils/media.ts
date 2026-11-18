/** Returns companion WebP URL for local JPG photography and event assets. */
export function toWebpSrc(src: string): string | null {
  return /\.jpg$/i.test(src) ? src.replace(/\.jpg$/i, '.webp') : null
}
