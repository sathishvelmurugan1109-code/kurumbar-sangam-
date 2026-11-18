import { ChevronDown, Globe, Menu, Phone, X } from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { buildWhatsAppUrl, OFFICIAL_INFO, type Language, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { toWebpSrc } from '../utils/media'
import { WhatsAppIcon } from './WhatsAppIcon'

const SECTION_IDS = [
  'home',
  'about',
  'history',
  'ancient-references',
  'lifestyle',
  'occupations',
  'culture-heritage',
  'language-literature',
  'traditional-food',
  'traditional-clothing',
  'festivals',
  'arts-practices',
  'geographical-distribution',
  'education-development',
  'government-records',
  'documents-research',
  'achievements',
  'current-activities',
  'youth-development',
  'womens-development',
  'educational-development',
  'community-welfare',
  'events',
  'gallery',
  'announcements',
  'vision-mission',
  'president',
  'contact',
] as const

interface HeaderProps {
  content: SiteContent
  language: Language
  onToggleLanguage: (lang: Language) => void
}

type NavDisplayMode = 'inline-wide' | 'inline-compact' | 'drawer'

export function Header({ content, language, onToggleLanguage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>('history-group')
  const [navMode, setNavMode] = useState<NavDisplayMode>('drawer')

  const headerInnerRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const measureWideRef = useRef<HTMLUListElement>(null)
  const measureCompactRef = useRef<HTMLUListElement>(null)
  const desktopActionsRef = useRef<HTMLDivElement>(null)

  // Native <dialog> slide-in mobile drawer refs (modern-web-guidance: navigation-drawer)
  const drawerRef = useRef<HTMLDialogElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<HTMLElement>(null)

  const whatsappUrl = buildWhatsAppUrl(content.contact.whatsappDefaultPrefill)
  const logoWebp = toWebpSrc(OFFICIAL_ASSETS.presidentEmblemProfile)

  // Self-contained IntersectionObserver scrollspy so scrolling never re-renders <main>
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-18% 0px -60% 0px',
        threshold: [0.05, 0.2, 0.45],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const openDrawer = useCallback(async () => {
    const drawer = drawerRef.current
    const scroller = scrollerRef.current
    if (!drawer || !scroller) return

    if (!drawer.open) {
      drawer.showModal()
    }

    // Fallback when scroll-initial-target is not supported: jump to closed stop first,
    // wait two animation frames so the browser commits it, then smoothly scroll in.
    if (typeof CSS === 'undefined' || !CSS.supports('scroll-initial-target', 'nearest')) {
      scroller.scrollTo({ left: scroller.offsetWidth, behavior: 'instant' })
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      )
    }

    scroller.scrollTo({ left: 0, behavior: 'auto' })
  }, [])

  const closeDrawer = useCallback(() => {
    const drawer = drawerRef.current
    const scroller = scrollerRef.current
    if (!drawer || !drawer.open || !scroller) return

    // Scroll back to the off-screen spacer; IntersectionObserver closes <dialog> once gone.
    scroller.scrollTo({ left: scroller.offsetWidth, behavior: 'auto' })
  }, [])

  const closeDrawerImmediately = useCallback(() => {
    const drawer = drawerRef.current
    if (drawer?.open) {
      drawer.close()
    }
    setDrawerOpen(false)
    setOpenDropdown(null)
  }, [])

  // Wire IntersectionObserver, Escape cancel slide-out, backdrop light-dismiss & animation-timeline fallback
  useEffect(() => {
    const drawer = drawerRef.current
    const scroller = scrollerRef.current
    const sheet = sheetRef.current
    if (!drawer || !scroller || !sheet) return

    const visibleThreshold = Math.max(0.001, 1 / Math.max(window.innerWidth, 320))
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.at(-1)
        if (!entry) return
        if (entry.intersectionRatio < visibleThreshold) {
          if (drawer.open) drawer.close()
          setDrawerOpen(false)
        } else if (entry.intersectionRatio >= 0.99) {
          setDrawerOpen(true)
        }
      },
      { root: drawer, threshold: [visibleThreshold, 0.99] },
    )
    observer.observe(sheet)

    // Light-dismiss on dimmed area outside the sheet
    const onDrawerClick = (event: MouseEvent) => {
      if (!sheet.contains(event.target as Node)) {
        closeDrawer()
      }
    }

    // Escape key: slide out smoothly instead of snapping closed
    const onCancel = (event: Event) => {
      if (event.cancelable) {
        event.preventDefault()
        closeDrawer()
      } else {
        setDrawerOpen(false)
      }
    }

    const onNativeClose = () => {
      setDrawerOpen(false)
    }

    // Backdrop fade fallback when CSS scroll-driven animation-timeline is unavailable
    const supportsTimeline =
      typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()')
    const onScrollerScroll = () => {
      const sheetW = sheet.offsetWidth || 1
      const ratio = Math.max(0, Math.min(1, 1 - scroller.scrollLeft / sheetW))
      drawer.style.setProperty('--drawer-backdrop', String(ratio))
    }

    drawer.addEventListener('click', onDrawerClick)
    drawer.addEventListener('cancel', onCancel)
    drawer.addEventListener('close', onNativeClose)
    if (!supportsTimeline) {
      scroller.addEventListener('scroll', onScrollerScroll, { passive: true })
    }

    return () => {
      observer.disconnect()
      drawer.removeEventListener('click', onDrawerClick)
      drawer.removeEventListener('cancel', onCancel)
      drawer.removeEventListener('close', onNativeClose)
      if (!supportsTimeline) {
        scroller.removeEventListener('scroll', onScrollerScroll)
      }
    }
  }, [closeDrawer])

  const computeNavMode = useCallback(() => {
    const inner = headerInnerRef.current
    const brand = brandRef.current
    const actions = desktopActionsRef.current
    const wideList = measureWideRef.current
    const compactList = measureCompactRef.current
    if (!inner || !brand || !actions || !wideList || !compactList) return

    if (window.innerWidth < 1024) {
      setNavMode('drawer')
      return
    }

    const innerStyle = window.getComputedStyle(inner)
    const padX = parseFloat(innerStyle.paddingLeft) + parseFloat(innerStyle.paddingRight)
    const availableWidth = inner.clientWidth - padX
    const brandWidth = brand.getBoundingClientRect().width
    const actionsWidth = actions.getBoundingClientRect().width

    const wideNavWidth = wideList.scrollWidth
    const compactNavWidth = compactList.scrollWidth

    const wideRequired = brandWidth + wideNavWidth + actionsWidth + 56
    const compactRequired = brandWidth + compactNavWidth + actionsWidth + 40

    if (availableWidth >= wideRequired) {
      setNavMode('inline-wide')
      closeDrawerImmediately()
    } else if (availableWidth >= compactRequired) {
      setNavMode('inline-compact')
      closeDrawerImmediately()
    } else {
      setNavMode('drawer')
    }
  }, [closeDrawerImmediately])

  useLayoutEffect(() => {
    const inner = headerInnerRef.current
    if (!inner) return

    const ro = new ResizeObserver(() => {
      computeNavMode()
    })
    ro.observe(inner)

    if (document.fonts && document.fonts.ready) {
      void document.fonts.ready.then(() => {
        computeNavMode()
      })
    }

    window.addEventListener('resize', computeNavMode, { passive: true })
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', computeNavMode)
    }
  }, [computeNavMode, language])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
      }
    }
    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [])

  const closeDesktopMenus = () => {
    setOpenDropdown(null)
  }

  const handleDrawerNavClick = () => {
    closeDrawerImmediately()
  }

  const isInline = navMode !== 'drawer'
  const isCompact = navMode === 'inline-compact'

  const itemLinkClass = (active: boolean) =>
    `relative inline-flex h-10 items-center whitespace-nowrap rounded-lg font-semibold leading-none transition-colors ${
      isCompact
        ? 'gap-1 px-2 text-[0.78rem]'
        : 'gap-1.5 px-2.5 text-[0.82rem] 2xl:px-3 2xl:text-[0.86rem]'
    } ${
      active
        ? 'bg-[#FFD629]/15 text-[#FFD629] after:absolute after:inset-x-2 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-[#FFD629]'
        : 'text-white/95 hover:bg-white/10 hover:text-[#FFD629]'
    }`

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full pt-[env(safe-area-inset-top,0px)] transition-colors duration-300 ${
          scrolled
            ? 'border-b border-[#D9A928]/40 bg-[#023D24]/98 shadow-[0_8px_28px_rgba(2,61,36,0.3)] backdrop-blur-md'
            : 'border-b border-[#D9A928]/25 bg-[#023D24]'
        }`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-[#FFD629] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#023D24]"
        >
          {content.header.skipToContent}
        </a>

        {/* Off-screen non-interactive measurement clones for accurate desktop fit detection */}
        <div
          aria-hidden="true"
          className="pointer-events-none invisible fixed -top-[9999px] left-0 flex"
        >
          <ul ref={measureWideRef} className="flex items-center gap-1.5 2xl:gap-2.5">
            {content.navGroups.map((group) => (
              <li key={`mw-${group.id}`} className="shrink-0">
                <span className="inline-flex h-10 items-center gap-1.5 whitespace-nowrap px-2.5 text-[0.82rem] font-semibold 2xl:px-3 2xl:text-[0.86rem]">
                  <span>{group.label}</span>
                  {group.items && <ChevronDown className="h-3.5 w-3.5 shrink-0" />}
                </span>
              </li>
            ))}
          </ul>
          <ul ref={measureCompactRef} className="flex items-center gap-1">
            {content.navGroups.map((group) => (
              <li key={`mc-${group.id}`} className="shrink-0">
                <span className="inline-flex h-10 items-center gap-1 whitespace-nowrap px-2 text-[0.78rem] font-semibold">
                  <span>{group.label}</span>
                  {group.items && <ChevronDown className="h-3.5 w-3.5 shrink-0" />}
                </span>
              </li>
            ))}
          </ul>
          <div ref={desktopActionsRef} className="flex shrink-0 items-center gap-2.5">
            <div className="inline-flex h-9 items-center rounded-full border p-0.5 text-xs font-bold">
              <span className="inline-flex pl-2 pr-1">
                <Globe className="h-3.5 w-3.5" />
              </span>
              <span className="px-2.5 py-1">தமிழ்</span>
              <span className="px-2.5 py-1">EN</span>
            </div>
            <span className="inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-xs font-extrabold">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span>{content.header.contactCta}</span>
            </span>
          </div>
        </div>

        {/* Compact Mobile-First Sticky Header Bar */}
        <div
          ref={headerInnerRef}
          className="ks-header-container flex min-h-[3.75rem] items-center justify-between gap-2 py-2 sm:min-h-[4.25rem] sm:gap-3 lg:min-h-[4.5rem] lg:gap-5 lg:py-2.5"
        >
          {/* ZONE 1: Independent Logo Container */}
          <div ref={brandRef} className="flex min-w-0 shrink items-center lg:shrink-0">
            <a
              href="#home"
              onClick={closeDesktopMenus}
              className="group flex min-w-0 items-center gap-2 focus-visible:rounded-xl sm:gap-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#FFD629] bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                <picture className="block h-full w-full">
                  {logoWebp && <source srcSet={logoWebp} type="image/webp" />}
                  <img
                    src={OFFICIAL_ASSETS.presidentEmblemProfile}
                    alt={content.meta.orgName}
                    width={44}
                    height={44}
                    className="block h-full w-full object-contain"
                  />
                </picture>
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block truncate whitespace-nowrap text-[0.9rem] font-extrabold tracking-tight text-white sm:text-[1rem]">
                  {content.meta.orgShort}
                </span>
                <span className="block truncate whitespace-nowrap text-[0.72rem] font-semibold tracking-wide text-[#FFD629] sm:text-xs">
                  {content.meta.stateName}
                </span>
              </span>
            </a>
          </div>

          {/* ZONE 2: Independent Center Flexbox Navigation (Desktop Only when all labels fit) */}
          {isInline && (
            <nav
              ref={navRef}
              aria-label={content.header.primaryNavLabel}
              className="flex flex-1 items-center justify-center"
            >
              <ul
                className={`flex items-center justify-center ${
                  isCompact ? 'gap-1' : 'gap-1.5 2xl:gap-2.5'
                }`}
              >
                {content.navGroups.map((group, groupIdx) => {
                  const hasDropdown = Boolean(group.items && group.items.length > 0)
                  const isGroupActive = hasDropdown
                    ? Boolean(group.items?.some((item) => item.id === activeSection))
                    : activeSection === group.id
                  const alignRight = groupIdx >= content.navGroups.length - 3

                  if (!hasDropdown && group.href) {
                    return (
                      <li key={group.id} className="shrink-0">
                        <a
                          href={group.href}
                          onClick={closeDesktopMenus}
                          aria-current={isGroupActive ? 'page' : undefined}
                          className={itemLinkClass(isGroupActive)}
                        >
                          {group.label}
                        </a>
                      </li>
                    )
                  }

                  const isOpen = openDropdown === group.id
                  return (
                    <li
                      key={group.id}
                      className="relative shrink-0"
                      onMouseEnter={() => setOpenDropdown(group.id)}
                      onMouseLeave={() => setOpenDropdown((cur) => (cur === group.id ? null : cur))}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`nav-dropdown-${group.id}`}
                        onClick={() =>
                          setOpenDropdown((cur) => (cur === group.id ? null : group.id))
                        }
                        className={`cursor-pointer ${itemLinkClass(isGroupActive || isOpen)}`}
                      >
                        <span>{group.label}</span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isOpen && group.items && (
                        <div
                          id={`nav-dropdown-${group.id}`}
                          className={`absolute top-full z-50 w-72 pt-2 ${
                            alignRight ? 'right-0' : 'left-0'
                          }`}
                        >
                          <ul className="max-h-[70dvh] overflow-y-auto rounded-2xl border border-[#D9A928]/45 bg-[#012817] p-2 shadow-[0_22px_50px_rgba(0,0,0,0.45)]">
                            {group.items.map((item) => {
                              const itemActive = activeSection === item.id
                              return (
                                <li key={item.id}>
                                  <a
                                    href={item.href}
                                    onClick={closeDesktopMenus}
                                    aria-current={itemActive ? 'page' : undefined}
                                    className={`block rounded-xl px-3.5 py-2.5 text-sm font-bold leading-snug transition-colors ${
                                      itemActive
                                        ? 'bg-[#FFD629] text-[#023D24]'
                                        : 'text-[#E7F2EB] hover:bg-white/10 hover:text-[#FFD629]'
                                    }`}
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          )}

          {/* ZONE 3: Independent Right Controls (Touch-Friendly Language Switcher + CTA + Hamburger) */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            <div
              role="group"
              aria-label={content.header.languageToggleLabel}
              className="inline-flex h-10 items-center rounded-full border border-[#D9A928]/45 bg-[#012B19]/90 p-0.5 text-[0.78rem] font-bold sm:h-9 sm:text-xs"
            >
              <span className="hidden pl-2 pr-1 text-[#FFD629] sm:inline-flex" aria-hidden="true">
                <Globe className="h-3.5 w-3.5 shrink-0" />
              </span>
              <button
                type="button"
                onClick={() => onToggleLanguage('ta')}
                aria-pressed={language === 'ta'}
                className={`inline-flex h-full min-w-[40px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-2.5 transition-colors ${
                  language === 'ta'
                    ? 'bg-[#FFD629] text-[#023D24] shadow-sm'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                தமிழ்
              </button>
              <button
                type="button"
                onClick={() => onToggleLanguage('en')}
                aria-pressed={language === 'en'}
                className={`inline-flex h-full min-w-[36px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-2.5 transition-colors ${
                  language === 'en'
                    ? 'bg-[#FFD629] text-[#023D24] shadow-sm'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="hidden h-10 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-4 text-xs font-extrabold text-[#023D24] shadow-sm transition-all hover:brightness-105 sm:inline-flex lg:h-9"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{content.header.contactCta}</span>
            </a>

            {!isInline && (
              <button
                type="button"
                onClick={() => {
                  void openDrawer()
                }}
                aria-expanded={drawerOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={content.header.openMenuLabel}
                className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[#FFD629]/40 bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Native Top-Layer Slide-In Mobile Navigation Drawer (Modal <dialog> + CSS Scroll-Snap Swipe) */}
      <dialog
        ref={drawerRef}
        id="mobile-navigation-drawer"
        aria-label={content.header.mobileNavLabel}
        className="ks-drawer"
      >
        <div ref={scrollerRef} className="ks-drawer-scroller">
          <nav
            ref={sheetRef}
            aria-label={content.header.mobileNavLabel}
            className="ks-drawer-sheet"
          >
            {/* Drawer Header: Official Brand + 44x44 Close Button */}
            <div className="flex items-center justify-between gap-3 border-b border-[#D9A928]/30 bg-[#023D24] px-4 pb-3.5 pt-[max(0.875rem,env(safe-area-inset-top,0px))]">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#FFD629] bg-white">
                  <picture className="block h-full w-full">
                    {logoWebp && <source srcSet={logoWebp} type="image/webp" />}
                    <img
                      src={OFFICIAL_ASSETS.presidentEmblemProfile}
                      alt={content.meta.orgName}
                      width={40}
                      height={40}
                      className="block h-full w-full object-contain"
                    />
                  </picture>
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-[0.95rem] font-extrabold text-white">
                    {content.meta.orgShort}
                  </p>
                  <p className="truncate text-xs font-semibold text-[#FFD629]">
                    {content.meta.stateName}
                  </p>
                </div>
              </div>

              <button
                type="button"
                autoFocus
                onClick={closeDrawer}
                aria-label={content.header.closeMenuLabel}
                className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white transition-colors hover:bg-[#FFD629] hover:text-[#023D24]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Drawer Scrollable Menu Items (15-17px Tamil Typography, 48px+ Tap Targets) */}
            <div className="overflow-y-auto overscroll-contain px-3.5 py-4">
              {/* In-Drawer Language Switcher */}
              <div
                role="group"
                aria-label={content.header.languageToggleLabel}
                className="mb-4 grid grid-cols-2 gap-1.5 rounded-2xl border border-[#D9A928]/35 bg-[#023D24]/70 p-1"
              >
                <button
                  type="button"
                  onClick={() => onToggleLanguage('ta')}
                  aria-pressed={language === 'ta'}
                  className={`inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-1.5 rounded-xl text-[0.95rem] font-extrabold transition-colors ${
                    language === 'ta'
                      ? 'bg-[#FFD629] text-[#023D24] shadow-sm'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>தமிழ்</span>
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLanguage('en')}
                  aria-pressed={language === 'en'}
                  className={`inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-1.5 rounded-xl text-[0.95rem] font-extrabold transition-colors ${
                    language === 'en'
                      ? 'bg-[#FFD629] text-[#023D24] shadow-sm'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>English</span>
                </button>
              </div>

              <div className="space-y-2">
                {content.navGroups.map((group) => {
                  const hasDropdown = Boolean(group.items && group.items.length > 0)
                  if (!hasDropdown && group.href) {
                    const isActive = activeSection === group.id
                    return (
                      <a
                        key={group.id}
                        href={group.href}
                        onClick={handleDrawerNavClick}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex min-h-[48px] items-center justify-between rounded-xl px-4 py-3 text-[1rem] font-bold leading-snug transition-colors ${
                          isActive
                            ? 'border border-[#FFD629]/45 bg-[#FFD629]/15 text-[#FFD629]'
                            : 'text-white/95 hover:bg-white/10 hover:text-[#FFD629]'
                        }`}
                      >
                        <span>{group.label}</span>
                      </a>
                    )
                  }

                  const isExpanded = mobileExpandedGroup === group.id
                  return (
                    <div
                      key={group.id}
                      className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]"
                    >
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-group-${group.id}`}
                        onClick={() =>
                          setMobileExpandedGroup((cur) => (cur === group.id ? null : group.id))
                        }
                        className="flex min-h-[50px] w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-[1rem] font-extrabold leading-snug text-[#FFD629]"
                      >
                        <span>{group.label}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        id={`mobile-group-${group.id}`}
                        hidden={!isExpanded}
                        className="border-t border-white/10 px-2 py-2"
                      >
                        <ul className="space-y-1">
                          {group.items?.map((item) => {
                            const itemActive = activeSection === item.id
                            return (
                              <li key={item.id}>
                                <a
                                  href={item.href}
                                  onClick={handleDrawerNavClick}
                                  aria-current={itemActive ? 'page' : undefined}
                                  className={`flex min-h-[46px] items-center rounded-xl px-3.5 py-2.5 text-[0.94rem] font-semibold leading-snug transition-colors ${
                                    itemActive
                                      ? 'bg-[#FFD629] font-extrabold text-[#023D24]'
                                      : 'text-[#E7F2EB] hover:bg-white/10 hover:text-[#FFD629]'
                                  }`}
                                >
                                  {item.label}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Drawer Footer: Direct Call & WhatsApp Access */}
            <div className="space-y-2.5 border-t border-[#D9A928]/30 bg-[#023D24] px-4 pt-3.5 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDrawerNavClick}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#19994A] px-4 py-2.5 text-[0.95rem] font-extrabold text-white shadow-sm transition-colors hover:bg-[#1EB056]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>{content.footer.whatsappCta}</span>
              </a>
              <a
                href={OFFICIAL_INFO.phoneTel}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-4 py-2.5 text-[0.95rem] font-extrabold text-[#023D24]"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{OFFICIAL_INFO.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      </dialog>
    </>
  )
}
