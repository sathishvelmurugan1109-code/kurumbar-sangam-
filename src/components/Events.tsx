import { CalendarCheck2, Expand } from 'lucide-react'
import type { SiteContent } from '../data/content'
import { VerifiedPhotoFrame } from './MediaFrame'

interface EventsProps {
  content: SiteContent
  onOpenImageById: (galleryId: string) => void
}

export function Events({ content, onOpenImageById }: EventsProps) {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="ks-section ks-deferred-section bg-[#F8FAF4]"
    >
      <div className="ks-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
            {content.events.sectionNumber} • {content.events.eyebrow}
          </p>
          <h2 id="events-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
            {content.events.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-3.5" aria-hidden="true" />
          <p className="ks-body mt-4 text-[#355244]">{content.events.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.events.items.map((event) => (
            <article
              key={event.id}
              className="ks-reveal group flex flex-col overflow-hidden rounded-2xl border border-[#075B32]/14 bg-white shadow-[0_10px_28px_rgba(7,91,50,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A928]/60 hover:shadow-[0_16px_38px_rgba(7,91,50,0.14)] sm:rounded-3xl"
            >
              {/* Standardized 3:2 Event Image Container */}
              <div className="relative w-full overflow-hidden">
                <VerifiedPhotoFrame
                  src={event.image}
                  alt={event.title}
                  variant="historical"
                  fit={event.displayMode}
                  objectPosition={event.objectPosition ?? 'object-top'}
                  roundedClass="rounded-none"
                  imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full border border-[#FFD629]/50 bg-[#023D24]/92 px-3 py-1 text-[0.8rem] font-bold text-[#FFD629] backdrop-blur-sm">
                  {event.categoryTag}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="ks-h3 font-extrabold text-[#023D24]">{event.title}</h3>

                {event.verifiedDate && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-[0.875rem] font-bold text-[#138447]">
                    <CalendarCheck2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{event.verifiedDate}</span>
                  </p>
                )}

                <p className="ks-body mt-2.5 flex-1 text-[#355244]">{event.description}</p>

                <div className="mt-5 border-t border-[#075B32]/10 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenImageById(event.galleryId)}
                    className="inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#075B32]/10 px-4 py-2.5 text-[0.94rem] font-extrabold text-[#075B32] transition-colors hover:bg-[#075B32] hover:text-[#FFD629] sm:w-auto"
                  >
                    <Expand className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{content.events.viewImageLabel}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
