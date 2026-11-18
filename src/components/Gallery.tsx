import { Expand, Images } from 'lucide-react'
import { useState } from 'react'
import type { Language, SiteContent } from '../data/content'
import { GALLERY_ITEMS, type GalleryCategory, type GalleryItem } from '../data/gallery'

interface GalleryProps {
  content: SiteContent
  language: Language
  onOpenLightbox: (items: GalleryItem[], index: number) => void
}

const FILTER_KEYS: GalleryCategory[] = ['all', 'events', 'leader', 'posters']

export function Gallery({ content, language, onOpenLightbox }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all')

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-[#EFF5E9] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
            {content.gallery.eyebrow}
          </p>
          <h2
            id="gallery-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-[#023D24] sm:text-4xl"
          >
            {content.gallery.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-4" aria-hidden="true" />
          <p className="mt-4 text-sm text-[#436153] sm:text-base">{content.gallery.subtitle}</p>
        </div>

        {/* Category Filter Buttons */}
        <div
          role="group"
          aria-label="Gallery category filter"
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          {FILTER_KEYS.map((category) => {
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer rounded-full px-5 py-2 text-xs font-extrabold transition-all sm:text-sm ${
                  isActive
                    ? 'bg-[#075B32] text-[#FFD629] shadow-[0_6px_18px_rgba(7,91,50,0.28)]'
                    : 'border border-[#075B32]/20 bg-white text-[#183527] hover:border-[#075B32] hover:text-[#075B32]'
                }`}
              >
                {content.gallery.filters[category]}
              </button>
            )
          })}
        </div>

        {/* Responsive Gallery Grid (Posters strictly use object-contain to prevent any cropping) */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => {
            const isPosterOrEmblem = item.displayMode === 'contain'
            return (
              <article
                key={item.id}
                className="ks-reveal group flex flex-col overflow-hidden rounded-3xl border border-[#075B32]/12 bg-white shadow-[0_10px_28px_rgba(7,91,50,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A928]/65 hover:shadow-[0_18px_40px_rgba(7,91,50,0.16)]"
              >
                <button
                  type="button"
                  onClick={() => onOpenLightbox(filteredItems, idx)}
                  aria-label={`${content.gallery.openLightboxLabel}: ${item.title[language]}`}
                  className="relative block w-full cursor-pointer overflow-hidden text-left focus-visible:ring-2 focus-visible:ring-[#D9A928]"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      isPosterOrEmblem
                        ? 'aspect-[4/4.3] bg-gradient-to-b from-[#023D24] to-[#012817] p-3'
                        : 'aspect-[4/3] bg-[#023D24]'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt[language]}
                      loading="lazy"
                      width={520}
                      height={420}
                      className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                        isPosterOrEmblem
                          ? 'rounded-xl object-contain'
                          : `object-cover ${item.objectPosition ?? 'object-top'}`
                      }`}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#023D24]/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD629] px-4 py-2 text-xs font-extrabold text-[#023D24] shadow-lg">
                        <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{content.events.viewImageLabel}</span>
                      </span>
                    </div>
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#075B32]/10 px-2.5 py-1 text-[0.72rem] font-bold text-[#075B32]">
                      <Images className="h-3 w-3" aria-hidden="true" />
                      {content.gallery.filters[item.category]}
                    </span>
                    {item.verifiedNote && (
                      <span className="text-[0.72rem] font-semibold text-[#138447]">
                        {item.verifiedNote[language]}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2.5 text-base font-extrabold leading-snug text-[#023D24]">
                    {item.title[language]}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#436153] sm:text-sm">
                    {item.caption[language]}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
