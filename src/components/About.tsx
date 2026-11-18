import { BookOpenCheck, Expand, HeartHandshake, Users } from 'lucide-react'
import type { SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { VerifiedPhotoFrame } from './MediaFrame'

interface AboutProps {
  content: SiteContent
  onOpenImageById: (galleryId: string) => void
}

const HIGHLIGHT_ICONS = {
  unity: Users,
  welfare: HeartHandshake,
  education: BookOpenCheck,
} as const

export function About({ content, onOpenImageById }: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="ks-section relative bg-[#F8FAF4]"
    >
      <div className="ks-container">
        <div className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
          {/* Supporting Association Meeting Photograph (Strict 3:2 ratio, Top on Mobile) */}
          <div className="ks-reveal min-w-0 lg:col-span-6">
            <div className="relative">
              <div
                className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full rounded-3xl border-2 border-[#D9A928]/45 lg:block"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => onOpenImageById('executive-meeting-hall')}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-[#D9A928]/45 bg-[#023D24] shadow-[0_14px_34px_rgba(7,91,50,0.12)] sm:rounded-3xl"
              >
                <div
                  className="h-1 w-full bg-gradient-to-r from-[#075B32] via-[#FFD629] to-[#075B32]"
                  aria-hidden="true"
                />
                <VerifiedPhotoFrame
                  src={OFFICIAL_ASSETS.executiveMeetingHall}
                  alt={content.about.photoCaption}
                  variant="historical"
                  fit="cover"
                  objectPosition="object-[50%_18%]"
                  roundedClass="rounded-none"
                  imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="flex items-center justify-between gap-3 border-t border-[#D9A928]/35 bg-[#023D24] px-4 py-3.5 text-left text-white sm:px-5">
                  <span className="ks-caption font-bold text-[#FFF3C4]">
                    {content.about.photoCaption}
                  </span>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD629]/15 text-[#FFD629]">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Association Introduction Content */}
          <div className="ks-reveal min-w-0 lg:col-span-6">
            <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
              {content.about.sectionNumber} • {content.about.eyebrow}
            </p>
            <h2 id="about-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
              {content.about.heading}
            </h2>
            <div className="ks-gold-rule mt-3.5" aria-hidden="true" />

            <h3 className="ks-h3 mt-5 font-bold text-[#075B32]">{content.about.title}</h3>

            <div className="ks-body mt-4 space-y-4 text-[#183527]/95">
              {content.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Three Visual Highlight Cards (Single-Column Mobile -> 3-Col Desktop) */}
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
          {content.about.highlights.map((card) => {
            const Icon = HIGHLIGHT_ICONS[card.icon]
            return (
              <article
                key={card.id}
                className="ks-reveal group relative flex flex-col overflow-hidden rounded-2xl border border-[#075B32]/14 bg-white p-5 shadow-[0_8px_24px_rgba(7,91,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A928]/60 hover:shadow-[0_14px_34px_rgba(7,91,50,0.12)] sm:p-6"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#075B32] via-[#138447] to-[#D9A928]"
                  aria-hidden="true"
                />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#075B32]/10 text-[#075B32] transition-colors group-hover:bg-[#075B32] group-hover:text-[#FFD629]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="ks-h3 mt-4 font-extrabold text-[#023D24]">{card.title}</h3>
                <p className="ks-body mt-2 flex-1 text-[#355244]">{card.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
