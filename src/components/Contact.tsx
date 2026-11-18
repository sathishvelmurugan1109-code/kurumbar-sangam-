import { Check, CheckCircle2, Copy, Info, Phone, RotateCcw, Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { buildWhatsAppUrl, OFFICIAL_INFO, type Language, type SiteContent } from '../data/content'
import { OFFICIAL_ASSETS } from '../data/gallery'
import { copyToClipboard } from '../utils/clipboard'
import { toWebpSrc } from '../utils/media'
import { WhatsAppIcon } from './WhatsAppIcon'

interface ContactProps {
  content: SiteContent
  language: Language
}

interface FormValues {
  name: string
  mobile: string
  subject: string
  message: string
}

const INITIAL_VALUES: FormValues = {
  name: '',
  mobile: '',
  subject: '',
  message: '',
}

export function Contact({ content, language }: ContactProps) {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [copied, setCopied] = useState(false)
  const [demoConfirmed, setDemoConfirmed] = useState<FormValues | null>(null)
  const [liveAnnouncement, setLiveAnnouncement] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const announceTimerRef = useRef<number | null>(null)

  const emblemWebp = toWebpSrc(OFFICIAL_ASSETS.presidentEmblemProfile)

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const supportsUserInvalid =
      typeof CSS !== 'undefined' && CSS.supports('selector(:user-invalid)')
    const dirtyState = new WeakMap<Element, { interacted: boolean; blurred: boolean }>()

    const linkError = (el: HTMLInputElement | HTMLTextAreaElement, shown: boolean) => {
      const errorId = el.dataset.error
      if (!errorId) return
      const ids = (el.getAttribute('aria-describedby') || '')
        .split(/\s+/)
        .filter((id) => id && id !== errorId)
      if (shown) ids.push(errorId)
      if (ids.length) el.setAttribute('aria-describedby', ids.join(' '))
      else el.removeAttribute('aria-describedby')
    }

    const announceFieldError = (el: HTMLInputElement | HTMLTextAreaElement) => {
      const errorId = el.dataset.error
      if (!errorId) return
      const errorNode = document.getElementById(errorId)
      if (!errorNode) return
      if (announceTimerRef.current) window.clearTimeout(announceTimerRef.current)
      setLiveAnnouncement('')
      announceTimerRef.current = window.setTimeout(() => {
        setLiveAnnouncement(errorNode.textContent?.trim() || '')
      }, 450)
    }

    const syncField = (el: HTMLInputElement | HTMLTextAreaElement, announce = false) => {
      let invalid = false
      if (supportsUserInvalid) {
        invalid = el.matches(':user-invalid')
      } else {
        const state = dirtyState.get(el)
        const shouldShow = Boolean(state?.interacted && state?.blurred)
        invalid = shouldShow && !el.validity.valid
        el.classList.toggle('user-invalid-fallback', invalid)
        el.classList.toggle('user-valid-fallback', shouldShow && el.validity.valid)
      }

      el.setAttribute('aria-invalid', invalid ? 'true' : 'false')
      linkError(el, invalid)
      if (invalid && announce) {
        announceFieldError(el)
      }
    }

    const controls = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'),
    )
    controls.forEach((control) => control.setAttribute('aria-invalid', 'false'))

    const onBlur = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return
      const state = dirtyState.get(target) || { interacted: false, blurred: false }
      state.blurred = true
      dirtyState.set(target, state)
      syncField(target, true)
    }

    const onInput = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return
      const state = dirtyState.get(target) || { interacted: false, blurred: false }
      state.interacted = true
      dirtyState.set(target, state)
      syncField(target, false)
    }

    const onInvalid = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return
      dirtyState.set(target, { interacted: true, blurred: true })
      syncField(target, false)
    }

    form.addEventListener('blur', onBlur, true)
    form.addEventListener('input', onInput)
    form.addEventListener('invalid', onInvalid, true)

    return () => {
      form.removeEventListener('blur', onBlur, true)
      form.removeEventListener('input', onInput)
      form.removeEventListener('invalid', onInvalid, true)
      if (announceTimerRef.current) window.clearTimeout(announceTimerRef.current)
    }
  }, [])

  const composeWhatsAppMessage = (data: FormValues) => {
    if (language === 'ta') {
      return [
        'வணக்கம் ஐயா, குறும்பர் சங்கம் – தமிழ்நாடு இணையதளம் வழியாகத் தொடர்பு கொள்கிறேன்.',
        '',
        `பெயர்: ${data.name.trim()}`,
        `கைபேசி எண்: ${data.mobile.trim()}`,
        `பொருள்: ${data.subject.trim()}`,
        `செய்தி: ${data.message.trim()}`,
      ].join('\n')
    }
    return [
      'Hello Sir, I am reaching out via the Kurumbar Sangam – Tamil Nadu website.',
      '',
      `Name: ${data.name.trim()}`,
      `Mobile: ${data.mobile.trim()}`,
      `Subject: ${data.subject.trim()}`,
      `Message: ${data.message.trim()}`,
    ].join('\n')
  }

  const handleCopyNumber = async () => {
    await copyToClipboard(OFFICIAL_INFO.phoneDisplay)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2600)
  }

  const handleWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = formRef.current
    if (!form || !form.reportValidity()) return

    const url = buildWhatsAppUrl(composeWhatsAppMessage(values))
    setDemoConfirmed({ ...values })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleDemoValidate = () => {
    const form = formRef.current
    if (!form || !form.reportValidity()) return
    setDemoConfirmed({ ...values })
  }

  const handleReset = () => {
    setValues(INITIAL_VALUES)
    setDemoConfirmed(null)
    setLiveAnnouncement('')
    const form = formRef.current
    if (form) {
      form.reset()
      form
        .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea')
        .forEach((el) => {
          el.classList.remove('user-invalid-fallback', 'user-valid-fallback')
          el.setAttribute('aria-invalid', 'false')
        })
    }
  }

  const directWhatsAppUrl = buildWhatsAppUrl(content.contact.whatsappDefaultPrefill)

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="ks-section ks-deferred-section bg-[#EFF5E9]"
    >
      <div className="ks-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
            {content.contact.sectionNumber} • {content.contact.eyebrow}
          </p>
          <h2 id="contact-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
            {content.contact.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-3.5" aria-hidden="true" />
          <p className="ks-body mt-4 text-[#355244]">{content.contact.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-12">
          {/* Left: Official Contact Card */}
          <aside className="ks-reveal flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D9A928]/45 bg-gradient-to-br from-[#023D24] via-[#054A2A] to-[#075B32] p-5 text-white shadow-[0_18px_46px_rgba(2,61,36,0.22)] sm:rounded-3xl sm:p-8 lg:col-span-5">
            <div>
              <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#FFD629]">
                {content.contact.officialCardTitle}
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div className="h-18 w-18 shrink-0 overflow-hidden rounded-full border-2 border-[#FFD629] bg-white shadow-lg sm:h-20 sm:w-20">
                  <picture className="block h-full w-full">
                    {emblemWebp && <source srcSet={emblemWebp} type="image/webp" />}
                    <img
                      src={OFFICIAL_ASSETS.presidentEmblemProfile}
                      alt={content.meta.presidentName}
                      loading="lazy"
                      width={80}
                      height={80}
                      className="block h-full w-full object-contain"
                    />
                  </picture>
                </div>
                <div className="min-w-0">
                  <h3 className="ks-h3 font-extrabold text-white">{content.meta.presidentName}</h3>
                  <p className="mt-1 text-[0.9rem] font-bold text-[#FFD629]">
                    {OFFICIAL_INFO.qualification}
                  </p>
                  <p className="mt-0.5 text-[0.875rem] font-semibold text-[#E2EFE7]">
                    {content.president.roleLine}
                  </p>
                  <p className="text-[0.85rem] font-semibold text-[#F5E2A3]">
                    {content.meta.orgName}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-[#012B19]/65 p-4">
                <p className="text-[0.82rem] font-bold uppercase tracking-wider text-[#FFD629]">
                  {content.contact.mobileLabel}
                </p>
                <a
                  href={OFFICIAL_INFO.phoneTel}
                  className="mt-1 inline-flex min-h-[44px] items-center text-2xl font-extrabold tracking-wider text-white hover:text-[#FFD629]"
                >
                  {OFFICIAL_INFO.phoneDisplay}
                </a>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href={OFFICIAL_INFO.phoneTel}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD629] to-[#D9A928] px-5 py-3 text-[0.95rem] font-extrabold text-[#023D24] shadow-md transition-all hover:brightness-105"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {content.contact.callBtn} ({OFFICIAL_INFO.phoneDisplay})
                  </span>
                </a>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#19994A] px-5 py-3 text-[0.95rem] font-extrabold text-white shadow-md transition-colors hover:bg-[#1EB056]"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  <span>{content.contact.whatsappBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#FFD629]/50 bg-white/10 px-5 py-3 text-[0.95rem] font-bold text-white transition-colors hover:bg-white/20"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 shrink-0 text-[#FFD629]" aria-hidden="true" />
                      <span className="text-[#FFD629]">{content.contact.copiedLabel}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 shrink-0 text-[#FFD629]" aria-hidden="true" />
                      <span>{content.contact.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-white/15 pt-4 text-[0.875rem] font-semibold text-[#F5E2A3]">
              {content.meta.motto}
            </div>
          </aside>

          {/* Right: Frontend-Only Contact & WhatsApp Composer Form */}
          <div className="ks-reveal rounded-2xl border border-[#075B32]/15 bg-white p-5 shadow-[0_14px_38px_rgba(7,91,50,0.08)] sm:rounded-3xl sm:p-8 lg:col-span-7">
            <h3 className="ks-h2 font-extrabold text-[#023D24]">{content.contact.formTitle}</h3>
            <p className="ks-body mt-1.5 text-[#355244]">{content.contact.formSubtitle}</p>

            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#075B32]/15 bg-[#F8FAF4] p-3.5 text-[0.875rem] leading-relaxed text-[#2B4E3C]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#075B32]" aria-hidden="true" />
              <span>{content.contact.frontendNotice}</span>
            </div>

            <div aria-live="polite" className="visually-hidden">
              {liveAnnouncement}
            </div>

            <form ref={formRef} onSubmit={handleWhatsAppSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[0.95rem] font-bold text-[#023D24]"
                  >
                    {content.contact.fields.nameLabel} <span className="text-[#b71c1c]">*</span>
                  </label>
                  <span
                    id="contact-name-hint"
                    className="mb-1.5 mt-0.5 block text-[0.84rem] text-[#436153]"
                  >
                    {content.contact.fields.nameHint}
                  </span>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder={content.contact.fields.namePlaceholder}
                    aria-describedby="contact-name-hint"
                    data-error="contact-name-error"
                    className="ks-input"
                  />
                  <div id="contact-name-error" className="ks-error-msg">
                    <span role="img" aria-label={content.contact.errorPrefixLabel}>
                      ⚠
                    </span>
                    <span>{content.contact.fields.nameError}</span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-mobile"
                    className="block text-[0.95rem] font-bold text-[#023D24]"
                  >
                    {content.contact.fields.mobileLabel} <span className="text-[#b71c1c]">*</span>
                  </label>
                  <span
                    id="contact-mobile-hint"
                    className="mb-1.5 mt-0.5 block text-[0.84rem] text-[#436153]"
                  >
                    {content.contact.fields.mobileHint}
                  </span>
                  <input
                    id="contact-mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    required
                    pattern="[6-9][0-9]{9}"
                    autoComplete="tel-national"
                    value={values.mobile}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        mobile: e.target.value.replace(/[^\d]/g, '').slice(0, 10),
                      }))
                    }
                    placeholder={content.contact.fields.mobilePlaceholder}
                    aria-describedby="contact-mobile-hint"
                    data-error="contact-mobile-error"
                    className="ks-input"
                  />
                  <div id="contact-mobile-error" className="ks-error-msg">
                    <span role="img" aria-label={content.contact.errorPrefixLabel}>
                      ⚠
                    </span>
                    <span>{content.contact.fields.mobileError}</span>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[0.95rem] font-bold text-[#023D24]"
                >
                  {content.contact.fields.subjectLabel} <span className="text-[#b71c1c]">*</span>
                </label>
                <span
                  id="contact-subject-hint"
                  className="mb-1.5 mt-0.5 block text-[0.84rem] text-[#436153]"
                >
                  {content.contact.fields.subjectHint}
                </span>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  minLength={3}
                  value={values.subject}
                  onChange={(e) => setValues((prev) => ({ ...prev, subject: e.target.value }))}
                  placeholder={content.contact.fields.subjectPlaceholder}
                  aria-describedby="contact-subject-hint"
                  data-error="contact-subject-error"
                  className="ks-input"
                />
                <div id="contact-subject-error" className="ks-error-msg">
                  <span role="img" aria-label={content.contact.errorPrefixLabel}>
                    ⚠
                  </span>
                  <span>{content.contact.fields.subjectError}</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[0.95rem] font-bold text-[#023D24]"
                >
                  {content.contact.fields.messageLabel} <span className="text-[#b71c1c]">*</span>
                </label>
                <span
                  id="contact-message-hint"
                  className="mb-1.5 mt-0.5 block text-[0.84rem] text-[#436153]"
                >
                  {content.contact.fields.messageHint}
                </span>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  value={values.message}
                  onChange={(e) => setValues((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder={content.contact.fields.messagePlaceholder}
                  aria-describedby="contact-message-hint"
                  data-error="contact-message-error"
                  className="ks-input resize-y"
                />
                <div id="contact-message-error" className="ks-error-msg">
                  <span role="img" aria-label={content.contact.errorPrefixLabel}>
                    ⚠
                  </span>
                  <span>{content.contact.fields.messageError}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#178F45] px-6 py-3 text-[0.95rem] font-extrabold text-white shadow-[0_8px_20px_rgba(23,143,69,0.28)] transition-all hover:bg-[#1BA54F]"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  <span>{content.contact.submitWhatsAppBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDemoValidate}
                  className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#075B32] px-5 py-3 text-[0.95rem] font-bold text-[#FFD629] transition-colors hover:bg-[#023D24]"
                >
                  <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{content.contact.submitDemoBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#075B32]/25 px-4 py-3 text-[0.95rem] font-bold text-[#183527] transition-colors hover:bg-[#EFF5E9]"
                >
                  <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{content.contact.resetBtn}</span>
                </button>
              </div>
            </form>

            {demoConfirmed && (
              <div
                role="status"
                className="mt-6 rounded-2xl border border-[#138447]/35 bg-[#EFF8F2] p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#138447]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[1rem] font-extrabold text-[#023D24]">
                      {content.contact.demoSuccessTitle}
                    </h4>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-[#2C5340]">
                      {content.contact.demoSuccessText}
                    </p>
                    <div className="mt-3 rounded-xl bg-white p-3.5 text-[0.875rem] text-[#183527] shadow-xs">
                      <p>
                        <strong>{content.contact.fields.nameLabel}:</strong> {demoConfirmed.name}
                      </p>
                      <p className="mt-0.5">
                        <strong>{content.contact.fields.mobileLabel}:</strong>{' '}
                        {demoConfirmed.mobile}
                      </p>
                      <p className="mt-0.5">
                        <strong>{content.contact.fields.subjectLabel}:</strong>{' '}
                        {demoConfirmed.subject}
                      </p>
                    </div>
                    <a
                      href={buildWhatsAppUrl(composeWhatsAppMessage(demoConfirmed))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3.5 inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#178F45] px-4 py-2.5 text-[0.94rem] font-extrabold text-white hover:bg-[#1BA54F]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>{content.contact.sendCapturedViaWhatsApp}</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
