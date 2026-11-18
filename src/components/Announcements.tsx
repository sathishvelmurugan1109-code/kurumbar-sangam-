import { ArrowUpRight, Expand, Info, Megaphone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { buildWhatsAppUrl, type SampleAnnouncement, type SiteContent } from '../data/content'
import { VerifiedPhotoFrame } from './MediaFrame'
import { WhatsAppIcon } from './WhatsAppIcon'

interface AnnouncementsProps {
  content: SiteContent
  onOpenImageById: (galleryId: string) => void
}

export function Announcements({ content, onOpenImageById }: AnnouncementsProps) {
  const [selectedItem, setSelectedItem] = useState<SampleAnnouncement | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const pressedOutsideRef = useRef(false)

  const whatsappUrl = buildWhatsAppUrl(content.announcements.whatsappUpdatesPrefill)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedItem) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [selectedItem])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClose = () => {
      dialog.returnValue = ''
      setSelectedItem(null)
    }
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return

    const isOutside = (event: PointerEvent) => {
      const rect = dialog.getBoundingClientRect()
      return (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
    }

    const onDown = (event: PointerEvent) => {
      pressedOutsideRef.current = isOutside(event)
    }
    const onUp = (event: PointerEvent) => {
      if (pressedOutsideRef.current && isOutside(event)) {
        dialog.close()
      }
      pressedOutsideRef.current = false
    }

    dialog.addEventListener('pointerdown', onDown)
    dialog.addEventListener('pointerup', onUp)
    return () => {
      dialog.removeEventListener('pointerdown', onDown)
      dialog.removeEventListener('pointerup', onUp)
    }
  }, [])

  return (
    <section
      id="announcements"
      aria-labelledby="announcements-heading"
      className="ks-section ks-deferred-section bg-[#F8FAF4]"
    >
      <div className="ks-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
            {content.announcements.sectionNumber} • {content.announcements.eyebrow}
          </p>
          <h2 id="announcements-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
            {content.announcements.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-3.5" aria-hidden="true" />
          <p className="ks-body mt-4 text-[#355244]">{content.announcements.subtitle}</p>
        </div>

        {/* Clear Demonstration Disclaimer Banner */}
        <div className="ks-reveal mx-auto mt-8 max-w-4xl rounded-2xl border border-[#D9A928]/60 bg-[#FFFBE8] p-4 shadow-sm sm:p-5">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#996F00]" aria-hidden="true" />
            <div>
              <p className="text-[0.95rem] font-extrabold text-[#5E4500] sm:text-base">
                {content.announcements.demoBannerTitle}
              </p>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-[#5E4500]/95">
                {content.announcements.demoBannerText}
              </p>
            </div>
          </div>
        </div>

        {/* Sample Announcement Cards (1-Col Mobile -> 3-Col Desktop) */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {content.announcements.items.map((item) => (
            <article
              key={item.id}
              className="ks-reveal flex flex-col justify-between rounded-2xl border border-[#075B32]/14 bg-white p-5 shadow-[0_10px_28px_rgba(7,91,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A928]/65 sm:rounded-3xl sm:p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9A928]/55 bg-[#FFFBE8] px-3 py-1 text-[0.8rem] font-extrabold text-[#705300]">
                    <Megaphone className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.tag}
                  </span>
                </div>
                <h3 className="ks-h3 mt-4 font-extrabold text-[#023D24]">{item.title}</h3>
                <p className="ks-body mt-2.5 text-[#355244]">{item.summary}</p>
              </div>

              <div className="mt-5 border-t border-[#075B32]/10 pt-4">
                <p className="text-[0.82rem] font-semibold leading-snug text-[#436153]">
                  {item.note}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="mt-3 inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 text-[0.95rem] font-extrabold text-[#075B32] transition-colors hover:text-[#138447]"
                >
                  <span>{content.announcements.readMoreLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Official Campaign Posters Visual Bar */}
        <div className="ks-reveal mt-10 rounded-2xl border border-[#075B32]/15 bg-[#023D24] p-5 text-white shadow-[0_16px_40px_rgba(2,61,36,0.18)] sm:mt-12 sm:rounded-3xl sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="ks-h3 font-extrabold text-[#FFD629]">
                {content.announcements.postersHighlightTitle}
              </h3>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#19994A] px-4 py-2.5 text-[0.94rem] font-bold text-white shadow-md transition-colors hover:bg-[#1EB056] sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>{content.announcements.whatsappUpdatesCta}</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {content.announcements.posters.map((poster) => (
              <button
                key={poster.id}
                type="button"
                onClick={() => onOpenImageById(poster.id)}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#D9A928]/40 bg-[#012817] p-2.5 text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <VerifiedPhotoFrame
                  src={poster.src}
                  alt={poster.alt}
                  variant="profile"
                  fit="contain"
                  roundedClass="rounded-xl"
                  bgClass="bg-[#011F12]"
                  imgClassName="transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="mt-3 flex min-h-[36px] items-center justify-between gap-2 px-1.5">
                  <span className="text-[0.875rem] font-bold leading-snug text-[#F5E2A3]">
                    {poster.label}
                  </span>
                  <Expand className="h-4 w-4 shrink-0 text-[#FFD629]" aria-hidden="true" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Native <dialog> Modal for Announcement Details */}
      <dialog
        ref={dialogRef}
        aria-labelledby="announcement-modal-title"
        {...({ closedby: 'any' } as Record<string, string>)}
        className="m-auto w-[min(94dvw,36rem)] max-h-[90dvh] flex-col overflow-hidden rounded-3xl border border-[#D9A928]/50 bg-white text-[#183527] shadow-2xl"
      >
        {selectedItem && (
          <>
            <div className="flex items-start justify-between gap-3 bg-[#023D24] px-5 py-4 text-white sm:px-6">
              <div>
                <span className="inline-block rounded-full bg-[#FFD629] px-3 py-0.5 text-[0.78rem] font-extrabold text-[#023D24]">
                  {selectedItem.tag}
                </span>
                <h3 id="announcement-modal-title" className="ks-h3 mt-2 font-extrabold">
                  {selectedItem.title}
                </h3>
              </div>
              <form method="dialog">
                <button
                  type="submit"
                  autoFocus
                  aria-label={content.announcements.closeModalLabel}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FFD629] hover:text-[#023D24]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </form>
            </div>
            <div className="overflow-y-auto p-5 sm:p-6">
              <p className="ks-body text-[#183527]">{selectedItem.details}</p>
              <p className="mt-4 rounded-xl bg-[#FFFBE8] p-3.5 text-[0.875rem] font-semibold text-[#694E00]">
                {selectedItem.note}
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:justify-end">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#19994A] px-4 py-2.5 text-[0.94rem] font-bold text-white hover:bg-[#1EB056]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{content.announcements.whatsappUpdatesCta}</span>
                </a>
                <form method="dialog">
                  <button
                    type="submit"
                    className="min-h-[46px] w-full cursor-pointer rounded-xl border border-[#075B32]/25 px-5 py-2.5 text-[0.94rem] font-bold text-[#023D24] hover:bg-[#EFF5E9] sm:w-auto"
                  >
                    {content.announcements.closeModalLabel}
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}
