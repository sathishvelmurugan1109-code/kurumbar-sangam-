import { ArrowUp, ExternalLink, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { buildWhatsAppUrl, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { WhatsAppIcon } from './WhatsAppIcon'

interface WhatsAppButtonProps {
  content: SiteContent
}

export function WhatsAppButton({ content }: WhatsAppButtonProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [widgetOpen, setWidgetOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && widgetOpen) {
        setWidgetOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [widgetOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Interactive WhatsApp Quick-Connect Panel */}
      {widgetOpen && (
        <div
          role="region"
          aria-label={content.whatsappWidget.title}
          className="w-[min(calc(100vw-2rem),21.5rem)] overflow-hidden rounded-3xl border border-[#D9A928]/55 bg-white shadow-[0_24px_60px_rgba(2,61,36,0.34)]"
        >
          {/* Widget Header */}
          <div className="flex items-center justify-between gap-3 bg-[#023D24] px-4 py-3.5 text-white">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#FFD629] bg-white">
                <img
                  src={OFFICIAL_ASSETS.presidentEmblemProfile}
                  alt={content.meta.orgName}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-extrabold text-white">
                  {content.whatsappWidget.title}
                </p>
                <p className="truncate text-[0.7rem] font-semibold text-[#FFD629]">
                  {content.whatsappWidget.subtitle}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setWidgetOpen(false)}
              aria-label={content.whatsappWidget.closeLabel}
              className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FFD629] hover:text-[#023D24]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Widget Body */}
          <div className="bg-[#F8FAF4] p-4">
            <p className="text-xs font-bold text-[#075B32]">
              {content.whatsappWidget.quickTopicsLabel}
            </p>
            <div className="mt-2.5 space-y-2">
              {content.whatsappWidget.quickTopics.map((topic, index) => (
                <a
                  key={index}
                  href={buildWhatsAppUrl(topic.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl border border-[#075B32]/15 bg-white px-3.5 py-2.5 text-xs font-bold text-[#183527] transition-all hover:border-[#19994A] hover:bg-[#EFF8F2] hover:text-[#075B32]"
                >
                  <span>{topic.label}</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#19994A]" aria-hidden="true" />
                </a>
              ))}
            </div>

            <a
              href={buildWhatsAppUrl(content.whatsappWidget.directPrefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#19994A] px-4 py-2.5 text-xs font-extrabold text-white shadow-md transition-colors hover:bg-[#1EB056]"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>{content.whatsappWidget.openDirectBtn}</span>
            </a>
          </div>
        </div>
      )}

      {/* Action Stack: Back-to-Top + Floating WhatsApp Button */}
      <div className="flex items-center gap-2.5">
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={content.footer.backToTop}
            title={content.footer.backToTop}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#D9A928]/60 bg-[#023D24] text-[#FFD629] shadow-[0_8px_24px_rgba(2,61,36,0.34)] transition-transform hover:-translate-y-0.5 hover:bg-[#075B32]"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <button
          type="button"
          onClick={() => setWidgetOpen((prev) => !prev)}
          aria-expanded={widgetOpen}
          aria-label={content.whatsappWidget.buttonLabel}
          className="group inline-flex h-13 cursor-pointer items-center gap-2 rounded-full border-2 border-[#FFD629]/70 bg-[#19994A] px-4 text-sm font-extrabold text-white shadow-[0_10px_28px_rgba(25,153,74,0.45)] transition-all hover:scale-[1.03] hover:bg-[#1EB056]"
        >
          <WhatsAppIcon className="h-6 w-6 shrink-0" />
          <span className="hidden sm:inline">{content.whatsappWidget.buttonLabel}</span>
        </button>
      </div>
    </div>
  )
}
