import { useCallback, useEffect, useState } from 'react'
import { About } from './components/About'
import { Announcements } from './components/Announcements'
import { CommunityProgress } from './components/CommunityProgress'
import { Contact } from './components/Contact'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { GeographyEducation } from './components/GeographyEducation'
import { GovernmentRecords } from './components/GovernmentRecords'
import { Header } from './components/Header'
import { HeritageCultureHub } from './components/HeritageCultureHub'
import { Hero } from './components/Hero'
import { HistoryChronicle } from './components/HistoryChronicle'
import { Lightbox } from './components/Lightbox'
import { PresidentProfile } from './components/PresidentProfile'
import { VisionMission } from './components/VisionMission'
import { WhatsAppButton } from './components/WhatsAppButton'
import { SITE_CONTENT, type Language } from './data/content'
import { GALLERY_ITEMS, type GalleryItem } from './data/gallery'
import { HISTORY_DATA_TA } from './data/historyTa'
import type { ResearchDataset } from './data/types'

const LANGUAGE_STORAGE_KEY = 'kurumbar-sangam-lang'

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
  const [englishResearch, setEnglishResearch] = useState<ResearchDataset | null>(null)
  const [lightboxState, setLightboxState] = useState<{
    items: GalleryItem[]
    index: number | null
  }>({
    items: GALLERY_ITEMS,
    index: null,
  })

  // Dynamically load the English research dataset only when English is active
  useEffect(() => {
    if (language !== 'en' || englishResearch) return
    let cancelled = false
    void import('./data/historyEn').then((mod) => {
      if (!cancelled) {
        setEnglishResearch(mod.HISTORY_DATA_EN)
      }
    })
    return () => {
      cancelled = true
    }
  }, [language, englishResearch])

  const content = SITE_CONTENT[language]
  const research = language === 'en' && englishResearch ? englishResearch : HISTORY_DATA_TA

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
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' },
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
        onToggleLanguage={setLanguage}
      />

      <main id="main-content" className="flex-1">
        {/* 01. Home */}
        <Hero content={content} onOpenImageById={handleOpenImageById} />

        {/* 02. About Kurumbar Sangam */}
        <About content={content} onOpenImageById={handleOpenImageById} />

        {/* 03. Complete Kurumbar History & 04. Ancient Historical References */}
        <HistoryChronicle research={research} language={language} />

        {/* 05–12. Lifestyle, Occupations, Culture, Language, Food, Clothing, Festivals & Arts */}
        <HeritageCultureHub research={research} language={language} />

        {/* 13. Geographical Distribution & 14. Education & Social Development */}
        <GeographyEducation research={research} language={language} />

        {/* 15. Government Records & Classification & 16. Historical Documents & Research */}
        <GovernmentRecords research={research} language={language} />

        {/* 17–22. Achievements, Current Activities, Youth, Women, Education & Welfare */}
        <CommunityProgress
          research={research}
          language={language}
          onOpenImageById={handleOpenImageById}
          viewImageLabel={content.events.viewImageLabel}
        />

        {/* 23. Events and Conferences */}
        <Events content={content} onOpenImageById={handleOpenImageById} />

        {/* 24. Photo Gallery */}
        <Gallery
          content={content}
          language={language}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 25. News and Announcements */}
        <Announcements content={content} onOpenImageById={handleOpenImageById} />

        {/* 26. Vision and Mission */}
        <VisionMission content={content} />

        {/* 27. State President Profile */}
        <PresidentProfile content={content} onOpenImageById={handleOpenImageById} />

        {/* 28. Contact and WhatsApp */}
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
