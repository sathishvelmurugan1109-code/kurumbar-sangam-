import { Award, Check, Copy, Expand, Phone } from 'lucide-react'
import { useState } from 'react'
import { buildWhatsAppUrl, OFFICIAL_INFO, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { WhatsAppIcon } from './WhatsAppIcon'

interface PresidentProfileProps {
  content: SiteContent
  onOpenImageById: (galleryId: string) => void
}

export function PresidentProfile({ content, onOpenImageById }: PresidentProfileProps) {
  const [portraitView, setPortraitView] = useState<'emblem' | 'stage'>('emblem')
  const [copied, setCopied] = useState(false)

  const whatsappUrl = buildWhatsAppUrl(content.president.whatsappPrefill)

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_INFO.phoneDisplay)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2600)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = OFFICIAL_INFO.phoneDisplay
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2600)
    }
  }

  return (
    <section
      id="president"
      aria-labelledby="president-heading"
      className="ks-president-bg relative overflow-hidden py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="ks-ornament-pattern pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD629] sm:text-sm">
            {content.president.eyebrow}
          </p>
          <h2
            id="president-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            {content.president.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-4" aria-hidden="true" />
        </div>

        {/* Main Premium Profile Card */}
        <div className="ks-reveal mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-[#D9A928]/45 bg-[#012B19]/70 shadow-[0_24px_65px_rgba(0,0,0,0.38)] backdrop-blur-md">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
            {/* Portrait Column */}
            <div className="flex flex-col items-center lg:col-span-5">
              {/* Toggle between Last-Photo Official Emblem Portrait & Stage Speech Portrait */}
              <div
                role="tablist"
                aria-label="President Portrait View"
                className="mb-4 inline-flex rounded-full border border-[#D9A928]/40 bg-[#023D24] p-1 text-xs font-bold"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={portraitView === 'emblem'}
                  onClick={() => setPortraitView('emblem')}
                  className={`cursor-pointer rounded-full px-3.5 py-1.5 transition-colors ${
                    portraitView === 'emblem'
                      ? 'bg-[#FFD629] text-[#023D24]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {content.president.emblemTabLabel}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={portraitView === 'stage'}
                  onClick={() => setPortraitView('stage')}
                  className={`cursor-pointer rounded-full px-3.5 py-1.5 transition-colors ${
                    portraitView === 'stage'
                      ? 'bg-[#FFD629] text-[#023D24]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {content.president.stageTabLabel}
                </button>
              </div>

              {portraitView === 'emblem' ? (
                <button
                  type="button"
                  onClick={() => onOpenImageById('president-emblem')}
                  className="group relative flex h-64 w-64 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-[#FFD629] bg-white shadow-[0_0_0_8px_rgba(217,169,40,0.18),0_22px_45px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-[1.02] sm:h-72 sm:w-72"
                >
                  <img
                    src={OFFICIAL_ASSETS.presidentEmblemProfile}
                    alt={`${content.meta.presidentName} - ${content.president.orgLine}`}
                    loading="lazy"
                    width={320}
                    height={320}
                    className="h-full w-full object-contain"
                  />
                  <span className="pointer-events-none absolute bottom-3 inline-flex items-center gap-1 rounded-full bg-[#023D24]/90 px-3 py-1 text-xs font-bold text-[#FFD629] opacity-0 transition-opacity group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    {content.events.viewImageLabel}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenImageById('leader-speech-stage')}
                  className="group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl border-2 border-[#FFD629]/70 bg-[#023D24] shadow-[0_22px_45px_rgba(0,0,0,0.45)]"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={OFFICIAL_ASSETS.leaderSpeechStage}
                      alt={`${content.meta.presidentName} - ${content.president.stageTabLabel}`}
                      loading="lazy"
                      width={420}
                      height={315}
                      className="h-full w-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-[#023D24]/90 px-3 py-1 text-xs font-bold text-[#FFD629]">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    {content.events.viewImageLabel}
                  </span>
                </button>
              )}
            </div>

            {/* Verified Details Column */}
            <div className="min-w-0 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD629]/45 bg-[#FFD629]/12 px-3.5 py-1.5 text-xs font-bold text-[#FFD629]">
                <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{content.president.officialBadge}</span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {content.meta.presidentName}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-[#FFD629] px-3 py-1 text-xs font-extrabold tracking-wide text-[#023D24] sm:text-sm">
                  {OFFICIAL_INFO.qualification}
                </span>
                <span className="text-base font-bold text-[#F5E2A3] sm:text-lg">
                  {content.president.roleLine}
                </span>
              </div>

              <p className="mt-1.5 text-sm font-semibold text-white/85 sm:text-base">
                {content.president.orgLine}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-[#E3EFE8] sm:text-base">
                {content.president.summary}
              </p>

              {/* Verified Contact Box */}
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/[0.06] p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#FFD629]">
                  {content.president.contactLabel}
                </p>
                <p className="mt-1 text-xl font-extrabold tracking-wider text-white sm:text-2xl">
                  +91 {OFFICIAL_INFO.phoneDisplay}
                </p>

                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <a
                    href={OFFICIAL_INFO.phoneTel}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-5 py-2.5 text-sm font-extrabold text-[#023D24] shadow-md transition-all hover:brightness-105"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{content.president.callBtn}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#19994A] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#1EB056]"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    <span>{content.president.whatsappBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyNumber}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#FFD629]/45 bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 shrink-0 text-[#FFD629]" aria-hidden="true" />
                        <span className="text-[#FFD629]">{content.president.copiedLabel}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 shrink-0 text-[#FFD629]" aria-hidden="true" />
                        <span>{content.president.copyBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
