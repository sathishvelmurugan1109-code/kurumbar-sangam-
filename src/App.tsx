import { useCallback, useEffect, useState } from 'react'
import { About } from './components/About'
import { Announcements } from './components/Announcements'
import { Contact } from './components/Contact'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { PresidentProfile } from './components/PresidentProfile'
import { VisionMission } from './components/VisionMission'
import { WhatsAppButton } from './components/WhatsAppButton'
import { SITE_CONTENT, type Language } from './data/content'
import { GALLERY_ITEMS, type GalleryItem } from './data/gallery'

const LANGUAGE_STORAGE_KEY = 'kurumbar-sangam-lang'
const SECTION_IDS = [
  'home',
  'about',
  'president',
  'vision',
  'events',
  'gallery',
  'announcements',
  'contact',
] as const

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (saved === 'en' || saved === 'ta') return saved
  } catch {
    // Ignore storage access errors in restricted contexts
  }
  return 'ta'
}

export function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [activeSection, setActiveSection] = useState<string>('home')
  const [lightboxState, setLightboxState] = useState<{
    items: GalleryItem[]
    index: number | null
  }>({
    items: GALLERY_ITEMS,
    index: null,
  })

  const content = SITE_CONTENT[language]

  // Sync document language, title, and localStorage preference
  useEffect(() => {
    document.documentElement.lang = language
    document.title = content.meta.title
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      // Ignore storage write failures
    }
  }, [language, content.meta.title])

  // Active navigation section highlighting via IntersectionObserver
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
        rootMargin: '-22% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // IntersectionObserver fallback for browsers without native CSS scroll-driven view() timelines
  useEffect(() => {
    if (
      typeof CSS !== 'undefined' &&
      CSS.supports('(animation-timeline: view()) and (animation-range: entry)')
    ) {
      return
    }
    if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      return
    }

    const targets = Array.from(document.querySelectorAll<HTMLElement>('.ks-reveal'))
    if (targets.length === 0) return

    targets.forEach((el) => el.classList.add('ks-reveal-fallback'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleOpenLightbox = useCallback((items: GalleryItem[], index: number) => {
    setLightboxState({ items, index })
  }, [])

  const handleOpenImageById = useCallback((galleryId: string) => {
    const index = GALLERY_ITEMS.findIndex((item) => item.id === galleryId)
    if (index >= 0) {
      setLightboxState({ items: GALLERY_ITEMS, index })
    }
  }, [])

  const handleCloseLightbox = useCallback(() => {
    setLightboxState((prev) => ({ ...prev, index: null }))
  }, [])

  const handleChangeLightboxIndex = useCallback((nextIndex: number) => {
    setLightboxState((prev) => ({ ...prev, index: nextIndex }))
  }, [])

  return (
    <>
      <Header
        content={content}
        language={language}
        activeSection={activeSection}
        onToggleLanguage={setLanguage}
      />

      <main id="main-content" className="flex-1">
        <Hero content={content} onOpenImageById={handleOpenImageById} />
        <About content={content} onOpenImageById={handleOpenImageById} />
        <PresidentProfile content={content} onOpenImageById={handleOpenImageById} />
        <VisionMission content={content} />
        <Events content={content} onOpenImageById={handleOpenImageById} />
        <Gallery
          content={content}
          language={language}
          onOpenLightbox={handleOpenLightbox}
        />
        <Announcements content={content} onOpenImageById={handleOpenImageById} />
        <Contact content={content} language={language} />
      </main>

      <Footer content={content} />
      <WhatsAppButton content={content} />

      <Lightbox
        items={lightboxState.items}
        currentIndex={lightboxState.index}
        language={language}
        content={content}
        onClose={handleCloseLightbox}
        onChangeIndex={handleChangeLightboxIndex}
      />
    </>
  )
}

export default App
