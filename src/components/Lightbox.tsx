import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Language, SiteContent } from '../data/content'
import type { GalleryItem } from '../data/gallery'

interface LightboxProps {
  items: GalleryItem[]
  currentIndex: number | null
  language: Language
  content: SiteContent
  onClose: () => void
  onChangeIndex: (nextIndex: number) => void
}

export function Lightbox({
  items,
  currentIndex,
  language,
  content,
  onClose,
  onChangeIndex,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchStartXRef = useRef<number | null>(null)
  const pressedOutsideRef = useRef(false)

  const isOpen = currentIndex !== null && items.length > 0 && currentIndex >= 0 && currentIndex < items.length
  const currentItem = isOpen ? items[currentIndex] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal()
      }
    } else if (dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleNativeClose = () => {
      dialog.returnValue = ''
      onClose()
    }

    dialog.addEventListener('close', handleNativeClose)
    return () => dialog.removeEventListener('close', handleNativeClose)
  }, [onClose])

  // Keyboard ArrowLeft / ArrowRight navigation while open (Esc is handled natively by <dialog>)
  useEffect(() => {
    if (!isOpen || currentIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onChangeIndex((currentIndex - 1 + items.length) % items.length)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        onChangeIndex((currentIndex + 1) % items.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, items.length, onChangeIndex])

  // Light-dismiss fallback for browsers without native <dialog closedby="any">
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return

    const isOutside = (event: PointerEvent) => {
      const rect = dialog.getBoundingClientRect()
      return (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
    }

    const onPointerDown = (event: PointerEvent) => {
      pressedOutsideRef.current = isOutside(event)
    }

    const onPointerUp = (event: PointerEvent) => {
      if (pressedOutsideRef.current && isOutside(event)) {
        dialog.close()
      }
      pressedOutsideRef.current = false
    }

    dialog.addEventListener('pointerdown', onPointerDown)
    dialog.addEventListener('pointerup', onPointerUp)
    return () => {
      dialog.removeEventListener('pointerdown', onPointerDown)
      dialog.removeEventListener('pointerup', onPointerUp)
    }
  }, [])

  const handlePrev = () => {
    if (currentIndex === null || items.length === 0) return
    onChangeIndex((currentIndex - 1 + items.length) % items.length)
  }

  const handleNext = () => {
    if (currentIndex === null || items.length === 0) return
    onChangeIndex((currentIndex + 1) % items.length)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return
    const endX = event.changedTouches[0]?.clientX ?? touchStartXRef.current
    const delta = endX - touchStartXRef.current
    touchStartXRef.current = null
    if (Math.abs(delta) > 48) {
      if (delta > 0) handlePrev()
      else handleNext()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="lightbox-dialog-title"
      {...({ closedby: 'any' } as Record<string, string>)}
      className="m-auto w-[min(94vw,64rem)] max-h-[92dvh] flex-col overflow-hidden rounded-3xl border border-[#D9A928]/50 bg-[#012817] text-white shadow-[0_32px_90px_rgba(0,0,0,0.65)]"
    >
      {currentItem && currentIndex !== null && (
        <>
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#023D24] px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <p className="text-[0.72rem] font-bold text-[#FFD629]">
                {currentIndex + 1} / {items.length} •{' '}
                {content.gallery.filters[currentItem.category]}
              </p>
              <h2
                id="lightbox-dialog-title"
                className="truncate text-sm font-extrabold text-white sm:text-base"
              >
                {currentItem.title[language]}
              </h2>
            </div>

            <form method="dialog">
              <button
                type="submit"
                autoFocus
                aria-label={content.gallery.closeLabel}
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#FFD629] hover:text-[#023D24]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* Image Stage with Swipe & Prev/Next */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative flex min-h-[240px] flex-1 items-center justify-center overflow-hidden bg-[#011D11] p-3 sm:p-6"
          >
            {items.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                aria-label={content.gallery.prevLabel}
                className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#FFD629]/50 bg-[#023D24]/90 text-[#FFD629] shadow-lg transition-colors hover:bg-[#FFD629] hover:text-[#023D24] sm:left-4 sm:h-11 sm:w-11"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
            )}

            <img
              src={currentItem.src}
              alt={currentItem.alt[language]}
              className="max-h-[64dvh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            {items.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                aria-label={content.gallery.nextLabel}
                className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#FFD629]/50 bg-[#023D24]/90 text-[#FFD629] shadow-lg transition-colors hover:bg-[#FFD629] hover:text-[#023D24] sm:right-4 sm:h-11 sm:w-11"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Caption Bar */}
          <div className="border-t border-white/10 bg-[#023D24] px-4 py-3.5 sm:px-6">
            <p className="text-xs leading-relaxed text-[#E7F2EB] sm:text-sm">
              {currentItem.caption[language]}
            </p>
            <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-[0.72rem] text-[#F5E2A3]/80">
              <span>{currentItem.verifiedNote ? currentItem.verifiedNote[language] : ''}</span>
              <span>{content.gallery.swipeHint}</span>
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}
