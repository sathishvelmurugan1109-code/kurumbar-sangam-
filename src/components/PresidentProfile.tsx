import { Award, Check, Copy, Expand, Phone } from 'lucide-react'
import { useState } from 'react'
import { buildWhatsAppUrl, OFFICIAL_INFO, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { copyToClipboard } from '../utils/clipboard'
import { toWebpSrc } from '../utils/media'
import { VerifiedPhotoFrame } from './MediaFrame'
import { WhatsAppIcon } from './WhatsAppIcon'

interface PresidentProfileProps {
  content: SiteContent
  onOpenImageById: (galleryId: string) => void
}

export function PresidentProfile({ content, onOpenImageById }: PresidentProfileProps) {
  const [portraitView, setPortraitView] = useState<'emblem' | 'stage'>('emblem')
  const [copied, setCopied] = useState(false)

  const whatsappUrl = buildWhatsAppUrl(content.president.whatsappPrefill)
  const emblemWebp = toWebpSrc(OFFICIAL_ASSETS.presidentEmblemProfile)

  const handleCopyNumber = async () => {
    await copyToClipboard(OFFICIAL_INFO.phoneDisplay)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2600)
  }

  return (
    <section
      id="president"
      aria-labelledby="president-heading"
      className="ks-president-bg ks-section ks-deferred-section relative overflow-hidden text-white"
    >
      <div
        className="ks-ornament-pattern pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
      />

      <div className="ks-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#FFD629] sm:text-sm">
            {content.president.sectionNumber} • {content.president.eyebrow}
          </p>
          <h2 id="president-heading" className="ks-h2 mt-2 font-extrabold text-white">
            {content.president.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-3.5" aria-hidden="true" />
        </div>

        {/* Main Institutional Profile Card */}
        <div className="ks-reveal mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl border border-[#D9A928]/45 bg-[#012B19]/80 shadow-[0_20px_55px_rgba(0,0,0,0.36)] backdrop-blur-md sm:mt-10 sm:rounded-3xl">
          <div className="grid grid-cols-1 items-center gap-7 p-5 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
            {/* Portrait Column */}
            <div className="flex flex-col items-center lg:col-span-5">
              <div
                role="tablist"
                aria-label={content.president.portraitViewAriaLabel}
                className="mb-5 inline-flex rounded-full border border-[#D9A928]/40 bg-[#023D24] p-1 text-[0.875rem] font-bold"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={portraitView === 'emblem'}
                  onClick={() => setPortraitView('emblem')}
                  className={`ks-tab-btn min-h-[44px] cursor-pointer rounded-full px-4 py-2 transition-colors ${
                    portraitView === 'emblem'
                      ? 'bg-[#FFD629] text-[#023D24]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {content.president.emblemTabLabel}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={portraitView === 'stage'}
                  onClick={() => setPortraitView('stage')}
                  className={`ks-tab-btn min-h-[44px] cursor-pointer rounded-full px-4 py-2 transition-colors ${
                    portraitView === 'stage'
                      ? 'bg-[#FFD629] text-[#023D24]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {content.president.stageTabLabel}
                </button>
              </div>

              {portraitView === 'emblem' ? (
                <button
                  type="button"
                  onClick={() => onOpenImageById('president-emblem')}
                  className="group relative flex h-52 w-52 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-[#FFD629] bg-white shadow-[0_0_0_6px_rgba(217,169,40,0.18),0_18px_40px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.02] sm:h-68 sm:w-68"
                >
                  <picture className="block h-full w-full">
                    {emblemWebp && <source srcSet={emblemWebp} type="image/webp" />}
                    <img
                      src={OFFICIAL_ASSETS.presidentEmblemProfile}
                      alt={`${content.meta.presidentName} - ${content.president.orgLine}`}
                      loading="lazy"
                      width={600}
                      height={600}
                      className="block h-full w-full object-contain"
                    />
                  </picture>
                  <span className="pointer-events-none absolute bottom-3 inline-flex items-center gap-1 rounded-full bg-[#023D24]/92 px-3 py-1 text-[0.78rem] font-bold text-[#FFD629] shadow-sm sm:opacity-90 sm:transition-opacity sm:group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    {content.events.viewImageLabel}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenImageById('leader-speech-stage')}
                  className="group relative w-full max-w-xs cursor-pointer overflow-hidden rounded-2xl border-2 border-[#FFD629]/70 bg-[#023D24] shadow-[0_20px_42px_rgba(0,0,0,0.42)]"
                >
                  <VerifiedPhotoFrame
                    src={OFFICIAL_ASSETS.leaderSpeechStage}
                    alt={`${content.meta.presidentName} - ${content.president.stageTabLabel}`}
                    variant="profile"
                    fit="cover"
                    objectPosition="object-[50%_18%]"
                    roundedClass="rounded-none"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-[#023D24]/92 px-3 py-1.5 text-[0.78rem] font-bold text-[#FFD629]">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                    {content.events.viewImageLabel}
                  </span>
                </button>
              )}
            </div>

            {/* Verified Details Column */}
            <div className="min-w-0 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD629]/45 bg-[#FFD629]/12 px-3.5 py-1.5 text-[0.82rem] font-bold text-[#FFD629]">
                <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{content.president.officialBadge}</span>
              </div>

              <h3 className="ks-h2 mt-4 font-extrabold text-white">{content.meta.presidentName}</h3>

              <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                <span className="rounded-lg bg-[#FFD629] px-3 py-1 text-[0.875rem] font-extrabold tracking-wide text-[#023D24]">
                  {OFFICIAL_INFO.qualification}
                </span>
                <span className="text-[1.02rem] font-bold text-[#F5E2A3] sm:text-lg">
                  {content.president.roleLine}
                </span>
              </div>

              <p className="mt-2 text-[0.95rem] font-semibold text-white/90 sm:text-base">
                {content.president.orgLine}
              </p>

              <p className="ks-body mt-4 text-[#E3EFE8]">{content.president.summary}</p>

              {/* Verified Contact Box */}
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/[0.06] p-4 sm:p-5">
                <p className="text-[0.82rem] font-bold uppercase tracking-wider text-[#FFD629]">
                  {content.president.contactLabel}
                </p>
                <p className="mt-1 text-xl font-extrabold tracking-wider text-white sm:text-2xl">
                  +91 {OFFICIAL_INFO.phoneDisplay}
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={OFFICIAL_INFO.phoneTel}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-5 py-3 text-[0.95rem] font-extrabold text-[#023D24] shadow-md transition-all hover:brightness-105"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{content.president.callBtn}</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#19994A] px-5 py-3 text-[0.95rem] font-bold text-white shadow-md transition-colors hover:bg-[#1EB056]"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    <span>{content.president.whatsappBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyNumber}
                    className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#FFD629]/45 bg-white/10 px-4 py-3 text-[0.95rem] font-bold text-white transition-colors hover:bg-white/20"
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
