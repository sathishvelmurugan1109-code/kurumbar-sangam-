import { Camera, Expand, ExternalLink, ShieldCheck } from 'lucide-react'
import { SECTION_IMAGE_REGISTRY } from '../data/imageRegistry'
import type { Language } from '../data/types'
import { toWebpSrc } from '../utils/media'

export type MediaVariant = 'hero' | 'historical' | 'gallery' | 'profile' | 'square'

const VARIANT_CONFIG: Record<
  MediaVariant,
  { aspectClass: string; defaultWidth: number; defaultHeight: number }
> = {
  hero: { aspectClass: 'aspect-[8/3]', defaultWidth: 1920, defaultHeight: 720 },
  historical: { aspectClass: 'aspect-[3/2]', defaultWidth: 1200, defaultHeight: 800 },
  gallery: { aspectClass: 'aspect-[4/3]', defaultWidth: 1200, defaultHeight: 900 },
  profile: { aspectClass: 'aspect-[4/5]', defaultWidth: 800, defaultHeight: 1000 },
  square: { aspectClass: 'aspect-square', defaultWidth: 600, defaultHeight: 600 },
}

interface VerifiedPhotoFrameProps {
  src: string
  alt: string
  variant: MediaVariant
  fit?: 'cover' | 'contain'
  objectPosition?: string
  priority?: 'lcp' | 'lazy' | 'low-above-fold'
  roundedClass?: string
  bgClass?: string
  imgClassName?: string
}

export function VerifiedPhotoFrame({
  src,
  alt,
  variant,
  fit = 'cover',
  objectPosition = 'object-[50%_18%]',
  priority = 'lazy',
  roundedClass = 'rounded-2xl',
  bgClass = 'bg-[#023D24]',
  imgClassName = '',
}: VerifiedPhotoFrameProps) {
  const { aspectClass, defaultWidth, defaultHeight } = VARIANT_CONFIG[variant]
  const webpSrc = toWebpSrc(src)

  // optimize-image-priority rules:
  // - LCP: fetchPriority="high", NO loading="lazy"
  // - Standard below-the-fold: loading="lazy" ONLY
  // - Secondary/hidden above-the-fold: fetchPriority="low"
  const priorityProps =
    priority === 'lcp'
      ? { fetchPriority: 'high' as const }
      : priority === 'low-above-fold'
        ? { fetchPriority: 'low' as const }
        : { loading: 'lazy' as const }

  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClass} ${roundedClass} ${bgClass} ${
        fit === 'contain' ? 'p-2.5' : ''
      }`}
    >
      <picture className="block h-full w-full">
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          width={defaultWidth}
          height={defaultHeight}
          decoding="async"
          {...priorityProps}
          className={`block h-full w-full ${
            fit === 'contain' ? 'object-contain' : `object-cover ${objectPosition}`
          } ${imgClassName}`}
        />
      </picture>
    </div>
  )
}

interface SectionMediaCardProps {
  registryKey: string
  language: Language
  onOpenImageById?: (galleryId: string) => void
  viewImageLabel?: string
  dark?: boolean
}

export function SectionMediaCard({
  registryKey,
  language,
  onOpenImageById,
  viewImageLabel,
  dark = false,
}: SectionMediaCardProps) {
  const record = SECTION_IMAGE_REGISTRY[registryKey]
  if (!record) return null

  const isSangamPhoto = record.authenticity === 'verified-community-photo'
  const isInteractivePhoto = Boolean(isSangamPhoto && record.galleryId && onOpenImageById)
  const isExternalCredit = record.sourceUrl.startsWith('http')
  const webpSrc = toWebpSrc(record.src)

  const badgeText = isSangamPhoto
    ? language === 'ta'
      ? 'குறும்பர் சங்கம் அதிகாரப்பூர்வப் புகைப்படம்'
      : 'Verified Kurumbar Sangam Photograph'
    : language === 'ta'
      ? 'ஆவண / விளக்கப் புகைப்படம்'
      : 'Illustrative Documentary Photograph'

  const photoViewport = (
    <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#012817]">
      <picture className="block h-full w-full">
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={record.src}
          alt={record.alt[language]}
          width={record.width}
          height={record.height}
          loading="lazy"
          decoding="async"
          className={`block h-full w-full ${
            record.fit === 'contain'
              ? 'object-contain p-2.5'
              : `object-cover ${record.objectPosition}`
          } transition-transform duration-500 ${
            isInteractivePhoto ? 'group-hover:scale-[1.03]' : ''
          }`}
        />
      </picture>

      {/* Subtle bottom vignette for crisp photographic depth */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#012817]/55 to-transparent"
        aria-hidden="true"
      />

      {/* Readable Photographic Authenticity Pill */}
      <span
        className={`absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.78rem] font-bold leading-tight shadow-sm backdrop-blur-md ${
          isSangamPhoto
            ? 'border-[#7BF0A5]/55 bg-[#023D24]/92 text-[#ECFFF3]'
            : 'border-[#FFD629]/55 bg-[#012817]/88 text-[#FFD629]'
        }`}
      >
        {isSangamPhoto ? (
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#7BF0A5]" aria-hidden="true" />
        ) : (
          <Camera className="h-3.5 w-3.5 shrink-0 text-[#FFD629]" aria-hidden="true" />
        )}
        <span className="truncate">{badgeText}</span>
      </span>

      {isInteractivePhoto && viewImageLabel && (
        <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-[#FFD629]/55 bg-[#023D24]/92 px-3 py-1.5 text-[0.78rem] font-extrabold text-[#FFD629] shadow-sm">
          <Expand className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{viewImageLabel}</span>
        </span>
      )}
    </div>
  )

  return (
    <figure
      className={`overflow-hidden rounded-2xl border-2 shadow-[0_14px_34px_rgba(2,61,36,0.12)] sm:rounded-3xl ${
        dark
          ? 'border-[#D9A928]/55 bg-[#012817]'
          : 'border-[#D9A928]/45 bg-[#023D24]'
      }`}
    >
      {/* Top fine gold institutional accent bar */}
      <div
        className="h-1 w-full bg-gradient-to-r from-[#075B32] via-[#FFD629] to-[#075B32]"
        aria-hidden="true"
      />

      {isInteractivePhoto && record.galleryId && onOpenImageById ? (
        <button
          type="button"
          onClick={() => onOpenImageById(record.galleryId!)}
          aria-label={`${viewImageLabel ?? ''}: ${record.topicTitle[language]}`}
          className="group block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD629]"
        >
          {photoViewport}
        </button>
      ) : (
        photoViewport
      )}

      {/* Meaningful Topic-Specific Heritage Caption & Attribution Footer (14-15px mobile legible) */}
      <figcaption
        className={`border-t border-[#D9A928]/35 px-4 py-3.5 sm:px-5 sm:py-4 ${
          dark ? 'bg-[#012214] text-white' : 'bg-[#023D24] text-white'
        }`}
      >
        <p className="ks-caption font-bold text-[#FFF3C4] sm:text-[0.94rem]">
          {record.caption[language]}
        </p>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-t border-white/10 pt-2.5 text-[0.8125rem] text-[#CFE3D7]">
          <span className="font-medium leading-snug">{record.attribution}</span>
          {isExternalCredit ? (
            <a
              href={record.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[36px] shrink-0 items-center gap-1.5 font-bold text-[#FFD629] hover:underline"
            >
              <span>{record.sourceName}</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          ) : (
            <span className="shrink-0 font-bold text-[#FFD629]">{record.sourceName}</span>
          )}
        </div>
      </figcaption>
    </figure>
  )
}
