import { Phone } from 'lucide-react'
import { buildWhatsAppUrl, OFFICIAL_INFO, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { WhatsAppIcon } from './WhatsAppIcon'

interface FooterProps {
  content: SiteContent
}

export function Footer({ content }: FooterProps) {
  const whatsappUrl = buildWhatsAppUrl(content.contact.whatsappDefaultPrefill)

  return (
    <footer className="mt-auto border-t-4 border-[#D9A928] bg-[#023D24] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#FFD629] bg-white shadow-md">
                <img
                  src={OFFICIAL_ASSETS.presidentEmblemProfile}
                  alt={content.meta.orgName}
                  loading="lazy"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white sm:text-xl">
                  {content.meta.orgName}
                </h2>
                <p className="text-xs font-bold tracking-wide text-[#FFD629]">
                  {content.meta.motto}
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#DCEBE2]">
              {content.footer.description}
            </p>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#FFD629]">
              {content.footer.quickLinksTitle}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {content.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[#E3EFE8] transition-colors hover:text-[#FFD629]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official President & Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#FFD629]">
              {content.footer.officialContactTitle}
            </h3>
            <div className="mt-4 rounded-2xl border border-[#D9A928]/35 bg-[#012B19]/70 p-4">
              <p className="text-xs font-bold text-[#FFD629]">{content.footer.presidentLabel}</p>
              <p className="mt-1 text-base font-extrabold text-white">
                {content.meta.presidentName}, {OFFICIAL_INFO.qualification}
              </p>

              <p className="mt-3 text-xs font-bold text-[#FFD629]">
                {content.footer.contactLabel}
              </p>
              <a
                href={OFFICIAL_INFO.phoneTel}
                className="mt-0.5 inline-flex items-center gap-2 text-lg font-extrabold tracking-wider text-white hover:text-[#FFD629]"
              >
                <Phone className="h-4 w-4 text-[#FFD629]" aria-hidden="true" />
                <span>{OFFICIAL_INFO.phoneDisplay}</span>
              </a>

              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#19994A] px-4 py-2.5 text-xs font-extrabold text-white transition-colors hover:bg-[#1EB056] sm:text-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>{content.footer.whatsappCta}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-center text-xs text-[#C6DDD0] sm:flex-row sm:text-left">
          <p>{content.footer.copyright}</p>
          <p className="font-semibold text-[#FFD629]">
            {content.meta.orgName} • {OFFICIAL_INFO.copyrightYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
