import { ArrowUp, ExternalLink, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { buildWhatsAppUrl, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { toWebpSrc } from '../utils/media'
import { WhatsAppIcon } from './WhatsAppIcon'

interface WhatsAppButtonProps {
  content: SiteContent
}

export function WhatsAppButton({ content }: WhatsAppButtonProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [widgetOpen, setWidgetOpen] = useState(false)

  const emblemWebp = toWebpSrc(OFFICIAL_ASSETS.presidentEmblemProfile)

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
    <div className="ks-floating-controls flex flex-col items-end gap-2.5">
      {/* Interactive WhatsApp Quick-Connect Panel */}
      {widgetOpen && (
        <div
          role="region"
          aria-label={content.whatsappWidget.title}
          className="pointer-events-auto w-[min(calc(100dvw-1.75rem),22rem)] overflow-hidden rounded-3xl border border-[#D9A928]/55 bg-white shadow-[0_20px_50px_rgba(2,61,36,0.3)]"
        >
          {/* Widget Header */}
          <div className="flex items-center justify-between gap-3 bg-[#023D24] px-4 py-3.5 text-white">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#FFD629] bg-white">
                <picture className="block h-full w-full">
                  {emblemWebp && <source srcSet={emblemWebp} type="image/webp" />}
                  <img
                    src={OFFICIAL_ASSETS.presidentEmblemProfile}
                    alt={content.meta.orgName}
                    width={40}
                    height={40}
                    fetchPriority="low"
                    className="block h-full w-full object-contain"
                  />
                </picture>
              </div>
              <div className="min-w-0">
                <p className="truncate text-[0.94rem] font-extrabold text-white">
                  {content.whatsappWidget.title}
                </p>
                <p className="truncate text-[0.78rem] font-semibold text-[#FFD629]">
                  {content.whatsappWidget.subtitle}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setWidgetOpen(false)}
              aria-label={content.whatsappWidget.closeLabel}
              className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FFD629] hover:text-[#023D24]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Widget Body */}
          <div className="bg-[#F8FAF4] p-4">
            <p className="text-[0.875rem] font-bold text-[#075B32]">
              {content.whatsappWidget.quickTopicsLabel}
            </p>
            <div className="mt-2.5 space-y-2">
              {content.whatsappWidget.quickTopics.map((topic, index) => (
                <a
                  key={index}
                  href={buildWhatsAppUrl(topic.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-between gap-2 rounded-xl border border-[#075B32]/15 bg-white px-3.5 py-2.5 text-[0.875rem] font-bold text-[#183527] transition-all hover:border-[#19994A] hover:bg-[#EFF8F2] hover:text-[#075B32]"
                >
                  <span>{topic.label}</span>
                  <ExternalLink className="h-4 w-4 shrink-0 text-[#19994A]" aria-hidden="true" />
                </a>
              ))}
            </div>

            <a
              href={buildWhatsAppUrl(content.whatsappWidget.directPrefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#19994A] px-4 py-2.5 text-[0.94rem] font-extrabold text-white shadow-sm transition-colors hover:bg-[#1EB056]"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>{content.whatsappWidget.openDirectBtn}</span>
            </a>
          </div>
        </div>
      )}

      {/* Compact Safe-Area Action Stack (44px+ & 48px+ Touch Targets) */}
      <div className="pointer-events-auto flex flex-col items-end gap-2.5 sm:flex-row sm:items-center">
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label={content.footer.backToTop}
            title={content.footer.backToTop}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#D9A928]/65 bg-[#023D24] text-[#FFD629] shadow-[0_6px_18px_rgba(2,61,36,0.34)] transition-transform hover:-translate-y-0.5 hover:bg-[#075B32] active:scale-95"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <button
          type="button"
          onClick={() => setWidgetOpen((prev) => !prev)}
          aria-expanded={widgetOpen}
          aria-label={content.whatsappWidget.buttonLabel}
          className="inline-flex h-12 w-12 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#FFD629]/80 bg-[#19994A] text-sm font-extrabold text-white shadow-[0_8px_22px_rgba(25,153,74,0.4)] transition-all hover:bg-[#1EB056] active:scale-95 sm:w-auto sm:px-4"
        >
          <WhatsAppIcon className="h-6 w-6 shrink-0" />
          <span className="hidden sm:inline">{content.whatsappWidget.buttonLabel}</span>
        </button>
      </div>
    </div>
  )
}
