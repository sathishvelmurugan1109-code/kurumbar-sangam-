import { Globe, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { OFFICIAL_INFO, type Language, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'

interface HeaderProps {
  content: SiteContent
  language: Language
  activeSection: string
  onToggleLanguage: (lang: Language) => void
}

export function Header({ content, language, activeSection, onToggleLanguage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#023D24]/95 shadow-[0_8px_30px_rgba(2,61,36,0.28)] backdrop-blur-md border-b border-[#D9A928]/35'
          : 'bg-[#023D24] border-b border-[#D9A928]/25'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-[#FFD629] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#023D24]"
      >
        {content.header.skipToContent}
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Left: Emblem + Association Name */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3 focus-visible:rounded-xl"
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#FFD629] bg-white shadow-[0_0_0_2px_rgba(217,169,40,0.3)] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
            <img
              src={OFFICIAL_ASSETS.presidentEmblemProfile}
              alt={content.meta.orgName}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold tracking-tight text-white sm:text-base lg:text-[1.06rem]">
              {content.meta.orgShort}
            </span>
            <span className="block truncate text-[0.72rem] font-semibold tracking-wide text-[#FFD629] sm:text-xs">
              {content.meta.stateName}
            </span>
          </span>
        </a>

        {/* Center/Right: Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {content.nav.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.83rem] font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#FFD629]/15 text-[#FFD629]'
                    : 'text-white/90 hover:bg-white/10 hover:text-[#FFD629]'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Right Controls: Language Switcher + Highlighted Contact + Mobile Menu */}
        <div className="flex shrink-0 items-center gap-2">
          <div
            role="group"
            aria-label={content.header.languageToggleLabel}
            className="inline-flex items-center rounded-full border border-[#D9A928]/45 bg-[#012B19]/75 p-0.5 text-xs font-bold"
          >
            <span className="hidden pl-2 pr-1 text-[#FFD629] sm:inline-flex" aria-hidden="true">
              <Globe className="h-3.5 w-3.5" />
            </span>
            <button
              type="button"
              onClick={() => onToggleLanguage('ta')}
              aria-pressed={language === 'ta'}
              className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${
                language === 'ta'
                  ? 'bg-[#FFD629] text-[#023D24] shadow-sm'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              தமிழ்
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              aria-pressed={language === 'en'}
              className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ${
                language === 'en'
                  ? 'bg-[#FFD629] text-[#023D24] shadow-sm'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-4 py-2 text-xs font-extrabold text-[#023D24] shadow-[0_4px_14px_rgba(255,214,41,0.3)] transition-all hover:brightness-105 active:scale-[0.98] sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{content.header.contactCta}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? content.header.closeMenuLabel : content.header.openMenuLabel}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 xl:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Navigation Panel */}
      <div
        id="mobile-navigation-drawer"
        hidden={!mobileOpen}
        className="border-t border-[#D9A928]/25 bg-[#012E1B] px-4 pb-5 pt-3 shadow-2xl xl:hidden"
      >
        <nav aria-label="Mobile Navigation" className="mx-auto grid max-w-2xl gap-1 sm:grid-cols-2">
          {content.nav.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={handleNavClick}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#FFD629]/15 text-[#FFD629] border border-[#FFD629]/30'
                    : 'text-white/90 hover:bg-white/10 hover:text-[#FFD629]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="h-2 w-2 rounded-full bg-[#FFD629]" aria-hidden="true" />}
              </a>
            )
          })}
        </nav>

        <div className="mx-auto mt-4 flex max-w-2xl flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4">
          <a
            href={OFFICIAL_INFO.phoneTel}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-4 py-2.5 text-sm font-extrabold text-[#023D24]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{OFFICIAL_INFO.phoneDisplay}</span>
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-[#FFD629]/50 bg-white/5 px-4 py-2.5 text-sm font-bold text-white hover:bg-white/10"
          >
            {content.header.contactCta}
          </a>
        </div>
      </div>
    </header>
  )
}
