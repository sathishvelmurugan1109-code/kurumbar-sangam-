import { CalendarCheck2, Expand } from 'lucide-react'
import type { SiteContent } from '../data/content'

interface EventsProps {
  content: SiteContent
  onOpenImageById: (galleryId: string) => void
}

export function Events({ content, onOpenImageById }: EventsProps) {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="bg-[#F8FAF4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
            {content.events.eyebrow}
          </p>
          <h2
            id="events-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-[#023D24] sm:text-4xl"
          >
            {content.events.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-4" aria-hidden="true" />
          <p className="mt-4 text-sm text-[#436153] sm:text-base">{content.events.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.events.items.map((event) => (
            <article
              key={event.id}
              className="ks-reveal group flex flex-col overflow-hidden rounded-3xl border border-[#075B32]/12 bg-white shadow-[0_12px_30px_rgba(7,91,50,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A928]/60 hover:shadow-[0_18px_42px_rgba(7,91,50,0.14)]"
            >
              {/* Image Container */}
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden ${
                  event.displayMode === 'contain' ? 'bg-[#023D24] p-2' : 'bg-[#023D24]'
                }`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  width={480}
                  height={360}
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                    event.displayMode === 'contain'
                      ? 'object-contain'
                      : `object-cover ${event.objectPosition ?? 'object-top'}`
                  }`}
                />
                <span className="absolute left-3 top-3 rounded-full border border-[#FFD629]/50 bg-[#023D24]/90 px-3 py-1 text-[0.72rem] font-bold text-[#FFD629] backdrop-blur-sm">
                  {event.categoryTag}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-extrabold text-[#023D24]">{event.title}</h3>

                {event.verifiedDate && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#138447]">
                    <CalendarCheck2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{event.verifiedDate}</span>
                  </p>
                )}

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#436153]">
                  {event.description}
                </p>

                <div className="mt-5 border-t border-[#075B32]/10 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenImageById(event.galleryId)}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#075B32]/10 px-4 py-2 text-xs font-extrabold text-[#075B32] transition-colors hover:bg-[#075B32] hover:text-[#FFD629] sm:text-sm"
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
