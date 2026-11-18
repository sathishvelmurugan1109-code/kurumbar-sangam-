import { BookOpenCheck, Expand, HeartHandshake, Users } from 'lucide-react'
import type { SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'

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
      className="relative bg-[#F8FAF4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Supporting Association Meeting Photograph */}
          <div className="ks-reveal min-w-0 lg:col-span-5">
            <div className="relative">
              <div
                className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full rounded-3xl border-2 border-[#D9A928]/45 sm:block"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => onOpenImageById('executive-meeting-hall')}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl border border-[#075B32]/15 bg-white shadow-[0_18px_45px_rgba(7,91,50,0.12)]"
              >
                <div className="aspect-[16/11] w-full overflow-hidden bg-[#023D24]">
                  <img
                    src={OFFICIAL_ASSETS.executiveMeetingHall}
                    alt={content.about.photoCaption}
                    loading="lazy"
                    width={640}
                    height={440}
                    className="h-full w-full object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 bg-[#023D24] px-4 py-3 text-left text-white">
                  <span className="text-xs font-semibold leading-snug text-[#F5E2A3] sm:text-sm">
                    {content.about.photoCaption}
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFD629]/15 text-[#FFD629]">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Association Introduction Content */}
          <div className="ks-reveal min-w-0 lg:col-span-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
              {content.about.eyebrow}
            </p>
            <h2
              id="about-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight text-[#023D24] sm:text-4xl"
            >
              {content.about.heading}
            </h2>
            <div className="ks-gold-rule mt-4" aria-hidden="true" />

            <h3 className="mt-5 text-lg font-bold text-[#075B32] sm:text-xl">
              {content.about.title}
            </h3>

            <div className="mt-4 space-y-4 text-[0.97rem] leading-relaxed text-[#183527]/90 sm:text-base">
              {content.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Three Visual Highlight Cards */}
        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">
          {content.about.highlights.map((card) => {
            const Icon = HIGHLIGHT_ICONS[card.icon]
            return (
              <article
                key={card.id}
                className="ks-reveal group relative overflow-hidden rounded-2xl border border-[#075B32]/12 bg-white p-6 shadow-[0_10px_28px_rgba(7,91,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A928]/60 hover:shadow-[0_16px_38px_rgba(7,91,50,0.12)]"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#075B32] via-[#138447] to-[#D9A928]"
                  aria-hidden="true"
                />
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#075B32]/10 text-[#075B32] transition-colors group-hover:bg-[#075B32] group-hover:text-[#FFD629]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#023D24]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#436153]">{card.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
