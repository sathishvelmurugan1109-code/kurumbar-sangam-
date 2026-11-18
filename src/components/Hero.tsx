import { ArrowDownRight, Expand, Phone, ShieldCheck } from 'lucide-react'
import { buildWhatsAppUrl, OFFICIAL_INFO, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { WhatsAppIcon } from './WhatsAppIcon'

interface HeroProps {
  content: SiteContent
  onOpenImageById: (galleryId: string) => void
}

export function Hero({ content, onOpenImageById }: HeroProps) {
  const whatsappUrl = buildWhatsAppUrl(content.hero.whatsappPrefill)

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="ks-hero-bg relative overflow-hidden text-white"
    >
      {/* Subtle atmospheric background texture from official public meeting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src={OFFICIAL_ASSETS.publicMeetingPodium}
          alt=""
          className="h-full w-full object-cover object-top opacity-[0.11] mix-blend-luminosity"
        />
        <div className="ks-ornament-pattern absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#012B19] via-[#023D24]/92 to-[#075B32]/75" />
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#138447]/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#FFD629]/12 blur-3xl" />
      </div>

      {/* Top subtle gold accent bar */}
      <div
        className="relative h-1 w-full bg-gradient-to-r from-[#075B32] via-[#FFD629] to-[#075B32]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Official Branding, Motto, Leader Intro & CTAs */}
          <div className="min-w-0 lg:col-span-7">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#FFD629]/45 bg-[#012B19]/75 px-3.5 py-1.5 text-xs font-semibold text-[#FFD629] shadow-sm backdrop-blur-sm sm:text-[0.82rem]">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{content.hero.eyebrow}</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-5 text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              <span className="block">{content.hero.headingLine1}</span>
              <span className="ks-gold-text mt-1 block">{content.hero.headingLine2}</span>
            </h1>

            <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-xl border border-[#D9A928]/40 bg-white/[0.06] px-4 py-2 text-sm font-bold tracking-wide text-[#FFD629] backdrop-blur-sm sm:text-base">
              <span>{content.hero.motto}</span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#E7F2EB] sm:text-lg">
              {content.hero.subtitle}
            </p>

            {/* Official State President Introduction Banner */}
            <div className="mt-7 rounded-2xl border border-[#D9A928]/40 bg-[#012B19]/70 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => onOpenImageById('president-emblem')}
                    aria-label={content.hero.inspectPhotoHint}
                    className="group relative h-14 w-14 shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-[#FFD629] bg-white shadow-md sm:h-16 sm:w-16"
                  >
                    <img
                      src={OFFICIAL_ASSETS.presidentEmblemProfile}
                      alt={content.meta.presidentName}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                  <div className="min-w-0">
                    <p className="text-[0.72rem] font-bold uppercase tracking-wider text-[#FFD629]">
                      {content.hero.leaderLabel}
                    </p>
                    <p className="mt-0.5 text-lg font-extrabold text-white sm:text-xl">
                      {content.meta.presidentName}
                    </p>
                    <p className="text-xs font-semibold text-[#F5E2A3] sm:text-sm">
                      {OFFICIAL_INFO.qualification} • {content.meta.presidentDesignation}
                    </p>
                  </div>
                </div>

                <a
                  href={OFFICIAL_INFO.phoneTel}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#FFD629]/40 bg-[#075B32]/85 px-3.5 py-2 text-sm font-bold text-[#FFD629] transition-colors hover:bg-[#138447]"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{OFFICIAL_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-6 py-3.5 text-sm font-extrabold text-[#023D24] shadow-[0_8px_24px_rgba(255,214,41,0.3)] transition-all hover:brightness-105 active:scale-[0.98] sm:text-[0.95rem]"
              >
                <span>{content.hero.ctaAbout}</span>
                <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#FFD629]/60 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:text-[0.95rem]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#FFD629]" aria-hidden="true" />
                <span>{content.hero.ctaContact}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/60 bg-[#178F45] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(23,143,69,0.35)] transition-all hover:bg-[#1BA54F] active:scale-[0.98] sm:text-[0.95rem]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>{content.hero.ctaWhatsApp}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Official Circular Profile Picture (Last Photo) + Ref 1 & Ref 2 Showcase */}
          <div className="min-w-0 lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Official Circular Profile Emblem Card (Last Uploaded Photo) */}
              <div className="relative rounded-3xl border border-[#D9A928]/45 bg-gradient-to-b from-white/[0.11] to-[#012B19]/75 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.36)] backdrop-blur-md sm:p-6">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => onOpenImageById('president-emblem')}
                    aria-label={content.hero.inspectPhotoHint}
                    className="group relative flex h-56 w-56 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-[#FFD629] bg-white shadow-[0_0_0_6px_rgba(217,169,40,0.22),0_20px_45px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-[1.02] sm:h-64 sm:w-64"
                  >
                    <img
                      src={OFFICIAL_ASSETS.presidentEmblemProfile}
                      alt={`${content.meta.orgName} - ${content.meta.presidentName}`}
                      width={280}
                      height={280}
                      fetchPriority="high"
                      className="h-full w-full object-contain"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#023D24]/70 via-transparent to-transparent pb-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#FFD629] px-3 py-1 text-[0.72rem] font-extrabold text-[#023D24]">
                        <Expand className="h-3 w-3" />
                        {content.gallery.openLightboxLabel}
                      </span>
                    </span>
                  </button>

                  <p className="mt-3.5 text-center text-xs font-bold tracking-wide text-[#FFD629]">
                    {content.hero.emblemCaption}
                  </p>
                </div>

                {/* Paired Authentic Event & Leadership Photographs (Reference 1 & Reference 2) */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenImageById('public-meeting-podium')}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#D9A928]/40 bg-[#012B19] text-left shadow-lg focus-visible:ring-2 focus-visible:ring-[#FFD629]"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={OFFICIAL_ASSETS.publicMeetingPodium}
                        alt={content.hero.photoBadge1}
                        width={320}
                        height={240}
                        className="h-full w-full object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="bg-[#012B19]/90 px-2.5 py-2">
                      <span className="block truncate text-[0.72rem] font-bold text-[#FFD629]">
                        {content.hero.photoBadge1}
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenImageById('leader-speech-stage')}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#D9A928]/40 bg-[#012B19] text-left shadow-lg focus-visible:ring-2 focus-visible:ring-[#FFD629]"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={OFFICIAL_ASSETS.leaderSpeechStage}
                        alt={content.hero.photoBadge2}
                        width={320}
                        height={240}
                        className="h-full w-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="bg-[#012B19]/90 px-2.5 py-2">
                      <span className="block truncate text-[0.72rem] font-bold text-[#FFD629]">
                        {content.hero.photoBadge2}
                      </span>
                    </div>
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
