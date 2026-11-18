import { Phone } from 'lucide-react'
import { buildWhatsAppUrl, OFFICIAL_INFO, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { toWebpSrc } from '../utils/media'
import { WhatsAppIcon } from './WhatsAppIcon'

interface FooterProps {
  content: SiteContent
}

export function Footer({ content }: FooterProps) {
  const whatsappUrl = buildWhatsAppUrl(content.contact.whatsappDefaultPrefill)
  const emblemWebp = toWebpSrc(OFFICIAL_ASSETS.presidentEmblemProfile)

  return (
    <footer className="ks-deferred-section mt-auto border-t-4 border-[#D9A928] bg-[#023D24] text-white">
      {/* Extra bottom clearance guarantees floating WhatsApp & Back-to-Top buttons never overlap footer content */}
      <div className="ks-container pb-[calc(8.5rem+env(safe-area-inset-bottom,0px))] pt-12 sm:pb-24 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Institutional Brand & Historical Statement */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#FFD629] bg-white shadow-md">
                <picture className="block h-full w-full">
                  {emblemWebp && <source srcSet={emblemWebp} type="image/webp" />}
                  <img
                    src={OFFICIAL_ASSETS.presidentEmblemProfile}
                    alt={content.meta.orgName}
                    loading="lazy"
                    width={56}
                    height={56}
                    className="block h-full w-full object-contain"
                  />
                </picture>
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-extrabold text-white sm:text-xl">
                  {content.meta.orgName}
                </h2>
                <p className="text-[0.84rem] font-bold tracking-wide text-[#FFD629]">
                  {content.meta.motto}
                </p>
              </div>
            </div>

            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#DCEBE2]">
              {content.footer.description}
            </p>
            <p className="mt-3.5 rounded-xl border border-white/10 bg-[#012817]/75 p-3.5 text-[0.875rem] leading-relaxed text-[#F5E2A3]/95">
              {content.footer.researchDisclaimer}
            </p>
          </div>

          {/* Column 2: History & Research Sitemap */}
          <div className="lg:col-span-2">
            <h3 className="text-[0.9rem] font-extrabold uppercase tracking-wider text-[#FFD629]">
              {content.footer.historyColumnTitle}
            </h3>
            <ul className="mt-3.5 space-y-1 text-[0.94rem]">
              {content.footer.historyLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[40px] items-center py-1 text-[#E3EFE8] transition-colors hover:text-[#FFD629]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Development & Media Sitemap */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.9rem] font-extrabold uppercase tracking-wider text-[#FFD629]">
              {content.footer.developmentColumnTitle}
            </h3>
            <ul className="mt-3.5 space-y-1 text-[0.94rem]">
              {content.footer.developmentLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[40px] items-center py-1 text-[#E3EFE8] transition-colors hover:text-[#FFD629]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official President & Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.9rem] font-extrabold uppercase tracking-wider text-[#FFD629]">
              {content.footer.officialContactTitle}
            </h3>
            <div className="mt-4 rounded-2xl border border-[#D9A928]/35 bg-[#012B19]/75 p-4 sm:p-5">
              <p className="text-[0.84rem] font-bold text-[#FFD629]">
                {content.footer.presidentLabel}
              </p>
              <p className="mt-1 text-base font-extrabold text-white">
                {content.meta.presidentName}, {OFFICIAL_INFO.qualification}
              </p>

              <p className="mt-3.5 text-[0.84rem] font-bold text-[#FFD629]">
                {content.footer.contactLabel}
              </p>
              <a
                href={OFFICIAL_INFO.phoneTel}
                className="mt-0.5 inline-flex min-h-[44px] items-center gap-2 text-lg font-extrabold tracking-wider text-white hover:text-[#FFD629]"
              >
                <Phone className="h-4 w-4 text-[#FFD629]" aria-hidden="true" />
                <span>{OFFICIAL_INFO.phoneDisplay}</span>
              </a>

              <div className="mt-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#19994A] px-4 py-2.5 text-[0.94rem] font-extrabold text-white transition-colors hover:bg-[#1EB056]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>{content.footer.whatsappCta}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-[0.875rem] text-[#C6DDD0] sm:flex-row sm:text-left">
          <p>{content.footer.copyright}</p>
          <p className="font-semibold text-[#FFD629]">
            {content.meta.orgName} • {OFFICIAL_INFO.copyrightYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
