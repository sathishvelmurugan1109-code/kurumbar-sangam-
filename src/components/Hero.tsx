import { ArrowDownRight, BookOpen, Expand, Landmark, Phone, ShieldCheck } from 'lucide-react'
import { buildWhatsAppUrl, OFFICIAL_INFO, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { toWebpSrc } from '../utils/media'
import { VerifiedPhotoFrame } from './MediaFrame'
import { WhatsAppIcon } from './WhatsAppIcon'

interface HeroProps {
  content: SiteContent
  onOpenImageById: (galleryId: string) => void
}

export function Hero({ content, onOpenImageById }: HeroProps) {
  const whatsappUrl = buildWhatsAppUrl(content.hero.whatsappPrefill)
  const emblemWebp = toWebpSrc(OFFICIAL_ASSETS.presidentEmblemProfile)

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="ks-hero-bg relative overflow-hidden text-white"
    >
      {/* Subtle Heritage Texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="ks-ornament-pattern absolute inset-0 opacity-35" />
      </div>

      {/* Top Gold Accent Rule */}
      <div
        className="relative h-1 w-full bg-gradient-to-r from-[#075B32] via-[#FFD629] to-[#075B32]"
        aria-hidden="true"
      />

      <div className="ks-container relative pb-10 pt-6 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-14">
        <div className="grid grid-cols-1 items-center gap-7 lg:min-h-[28rem] lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Official Branding, Motto, Leader Banner & Touch-First CTAs */}
          <div className="min-w-0 lg:col-span-7">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#FFD629]/45 bg-[#012B19]/80 px-3.5 py-1.5 text-[0.82rem] font-semibold text-[#FFD629] sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="leading-snug">{content.hero.eyebrow}</span>
            </div>

            <h1 id="hero-heading" className="ks-h1 mt-4 font-extrabold text-white">
              <span className="block">{content.hero.headingLine1}</span>
              <span className="ks-gold-text mt-1 block">{content.hero.headingLine2}</span>
            </h1>

            <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-xl border border-[#D9A928]/45 bg-white/[0.06] px-4 py-2 text-[0.875rem] font-bold tracking-wide text-[#FFD629] sm:text-sm">
              <span>{content.hero.motto}</span>
            </div>

            <p className="ks-body mt-4 max-w-2xl text-[#E7F2EB]">{content.hero.subtitle}</p>

            {/* Official State President Introduction Card */}
            <div className="mt-5 rounded-2xl border border-[#D9A928]/45 bg-[#012B19]/80 p-4 shadow-md sm:mt-6 sm:p-5">
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => onOpenImageById('president-emblem')}
                    aria-label={content.hero.inspectPhotoHint}
                    className="group relative h-14 w-14 shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-[#FFD629] bg-white shadow-sm sm:h-16 sm:w-16"
                  >
                    <picture className="block h-full w-full">
                      {emblemWebp && <source srcSet={emblemWebp} type="image/webp" />}
                      <img
                        src={OFFICIAL_ASSETS.presidentEmblemProfile}
                        alt={content.meta.presidentName}
                        width={64}
                        height={64}
                        className="block h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </picture>
                  </button>
                  <div className="min-w-0">
                    <p className="text-[0.8rem] font-bold uppercase tracking-wider text-[#FFD629]">
                      {content.hero.leaderLabel}
                    </p>
                    <p className="mt-0.5 text-[1.06rem] font-extrabold leading-snug text-white sm:text-xl">
                      {content.meta.presidentName}
                    </p>
                    <p className="text-[0.875rem] font-semibold text-[#F5E2A3]">
                      {OFFICIAL_INFO.qualification} • {content.meta.presidentDesignation}
                    </p>
                  </div>
                </div>

                <a
                  href={OFFICIAL_INFO.phoneTel}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl border border-[#FFD629]/45 bg-[#075B32]/90 px-4 py-2.5 text-[0.95rem] font-bold text-[#FFD629] transition-colors hover:bg-[#138447] sm:w-auto"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{OFFICIAL_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Hero Institutional CTAs (48px+ comfortable tap buttons on mobile) */}
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
              <a
                href="#history"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-5 py-3 text-[0.95rem] font-extrabold text-[#023D24] shadow-md transition-all hover:brightness-105 sm:w-auto"
              >
                <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{content.hero.ctaHistory}</span>
                <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#government-records"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-[#FFD629]/55 bg-white/10 px-5 py-3 text-[0.95rem] font-bold text-white transition-colors hover:bg-white/20 sm:w-auto"
              >
                <Landmark className="h-4 w-4 shrink-0 text-[#FFD629]" aria-hidden="true" />
                <span>{content.hero.ctaRecords}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/60 bg-[#178F45] px-5 py-3 text-[0.95rem] font-bold text-white shadow-md transition-all hover:bg-[#1BA54F] sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>{content.hero.ctaWhatsApp}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Official Emblem (1:1 LCP) + Authentic Event Cards (3:2) */}
          <div className="min-w-0 lg:col-span-5">
            <div className="mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl border border-[#D9A928]/45 bg-[#012B19]/82 p-4 shadow-xl sm:rounded-3xl sm:p-6">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => onOpenImageById('president-emblem')}
                    aria-label={content.hero.inspectPhotoHint}
                    className="group relative flex h-44 w-44 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-[#FFD629] bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-56 sm:w-56"
                  >
                    <picture className="block h-full w-full">
                      {emblemWebp && <source srcSet={emblemWebp} type="image/webp" />}
                      <img
                        src={OFFICIAL_ASSETS.presidentEmblemProfile}
                        alt={`${content.meta.orgName} - ${content.meta.presidentName}`}
                        width={240}
                        height={240}
                        fetchPriority="high"
                        className="block h-full w-full object-contain"
                      />
                    </picture>
                    <span className="pointer-events-none absolute inset-x-0 bottom-2.5 flex justify-center sm:opacity-0 sm:transition-opacity sm:duration-200 sm:group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#023D24]/92 px-3 py-1 text-[0.75rem] font-extrabold text-[#FFD629] shadow-sm">
                        <Expand className="h-3 w-3" aria-hidden="true" />
                        {content.gallery.openLightboxLabel}
                      </span>
                    </span>
                  </button>

                  <p className="ks-caption mt-3 text-center font-bold tracking-wide text-[#FFD629]">
                    {content.hero.emblemCaption}
                  </p>
                </div>

                {/* Paired Authentic Event Photographs (1-Col on ultra-narrow 320px, 2-Col at 420px+) */}
                <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-5">
                  <button
                    type="button"
                    onClick={() => onOpenImageById('public-meeting-podium')}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#D9A928]/40 bg-[#012B19] text-left shadow-sm focus-visible:ring-2 focus-visible:ring-[#FFD629]"
                  >
                    <VerifiedPhotoFrame
                      src={OFFICIAL_ASSETS.publicMeetingPodium}
                      alt={content.hero.photoBadge1}
                      variant="historical"
                      fit="cover"
                      objectPosition="object-[50%_18%]"
                      priority="low-above-fold"
                      roundedClass="rounded-none"
                      imgClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="bg-[#012817] px-2.5 py-2.5">
                      <span className="block text-[0.8125rem] font-bold leading-snug text-[#FFD629]">
                        {content.hero.photoBadge1}
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenImageById('leader-speech-stage')}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#D9A928]/40 bg-[#012B19] text-left shadow-sm focus-visible:ring-2 focus-visible:ring-[#FFD629]"
                  >
                    <VerifiedPhotoFrame
                      src={OFFICIAL_ASSETS.leaderSpeechStage}
                      alt={content.hero.photoBadge2}
                      variant="historical"
                      fit="cover"
                      objectPosition="object-[50%_15%]"
                      priority="low-above-fold"
                      roundedClass="rounded-none"
                      imgClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="bg-[#012817] px-2.5 py-2.5">
                      <span className="block text-[0.8125rem] font-bold leading-snug text-[#FFD629]">
                        {content.hero.photoBadge2}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Portal Quick-Navigation Strip (Mobile-First 1 -> 2 -> 4 Columns) */}
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {content.hero.quickStrip.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group flex min-h-[44px] flex-col justify-between rounded-2xl border border-[#D9A928]/35 bg-[#012817]/88 p-4 transition-all hover:-translate-y-0.5 hover:border-[#FFD629] hover:bg-[#023D24] sm:p-5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-[#FFD629]/15 px-2.5 py-0.5 text-[0.8rem] font-extrabold text-[#FFD629]">
                    {item.number}
                  </span>
                  <ArrowDownRight
                    className="h-4 w-4 text-[#FFD629] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2.5 text-[1.02rem] font-extrabold leading-snug text-white">
                  {item.title}
                </p>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-[#DCEBE2]">
                  {item.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
