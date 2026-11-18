import { Expand, Images } from 'lucide-react'
import { useState } from 'react'
import type { Language, SiteContent } from '../data/content'
import { GALLERY_ITEMS, type GalleryCategory, type GalleryItem } from '../data/gallery'
import { VerifiedPhotoFrame } from './MediaFrame'

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
      className="ks-section ks-deferred-section bg-[#EFF5E9]"
    >
      <div className="ks-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
            {content.gallery.sectionNumber} • {content.gallery.eyebrow}
          </p>
          <h2 id="gallery-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
            {content.gallery.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-3.5" aria-hidden="true" />
          <p className="ks-body mt-4 text-[#355244]">{content.gallery.subtitle}</p>
        </div>

        {/* Touch-Friendly Category Filter Buttons (44px+ min height) */}
        <div
          role="group"
          aria-label={content.gallery.filterAriaLabel}
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
                className={`min-h-[44px] cursor-pointer rounded-full px-5 py-2 text-[0.9rem] font-extrabold transition-all ${
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

        {/* Mobile-First 1-Col (<640px) -> 2-Col (sm) -> 3-Col (lg) Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => {
            const isPosterOrEmblem = item.displayMode === 'contain'
            return (
              <article
                key={item.id}
                className="ks-reveal group flex flex-col overflow-hidden rounded-2xl border border-[#075B32]/14 bg-white shadow-[0_10px_28px_rgba(7,91,50,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A928]/65 hover:shadow-[0_16px_36px_rgba(7,91,50,0.16)] sm:rounded-3xl"
              >
                <button
                  type="button"
                  onClick={() => onOpenLightbox(filteredItems, idx)}
                  aria-label={`${content.gallery.openLightboxLabel}: ${item.title[language]}`}
                  className="relative block w-full cursor-pointer overflow-hidden text-left focus-visible:ring-2 focus-visible:ring-[#D9A928]"
                >
                  <VerifiedPhotoFrame
                    src={item.src}
                    alt={item.alt[language]}
                    variant="gallery"
                    fit={item.displayMode}
                    objectPosition={item.objectPosition ?? 'object-top'}
                    roundedClass="rounded-none"
                    bgClass={
                      isPosterOrEmblem
                        ? 'bg-gradient-to-b from-[#023D24] to-[#012817]'
                        : 'bg-[#023D24]'
                    }
                    imgClassName={`transition-transform duration-500 group-hover:scale-[1.03] ${
                      isPosterOrEmblem ? 'rounded-xl' : ''
                    }`}
                  />
                  {/* Always-visible compact tap indicator on mobile (no hover-only UX) */}
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-[#FFD629]/55 bg-[#023D24]/92 px-3 py-1.5 text-[0.78rem] font-extrabold text-[#FFD629] shadow-md sm:opacity-90 sm:transition-opacity sm:group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{content.events.viewImageLabel}</span>
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#075B32]/10 px-3 py-1 text-[0.8rem] font-bold text-[#075B32]">
                      <Images className="h-3.5 w-3.5" aria-hidden="true" />
                      {content.gallery.filters[item.category]}
                    </span>
                    {item.verifiedNote && (
                      <span className="text-[0.8rem] font-semibold text-[#138447]">
                        {item.verifiedNote[language]}
                      </span>
                    )}
                  </div>
                  <h3 className="ks-h3 mt-2.5 font-extrabold text-[#023D24]">
                    {item.title[language]}
                  </h3>
                  <p className="ks-caption mt-2 flex-1 text-[#355244] sm:text-[0.94rem]">
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
