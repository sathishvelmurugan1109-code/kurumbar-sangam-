import { ChevronDown } from 'lucide-react'
import type { Language, ResearchDataset } from '../data/types'
import { EvidenceBadge, SourcePills } from './EvidenceBadge'
import { SectionMediaCard } from './MediaFrame'

interface HeritageCultureHubProps {
  research: ResearchDataset
  language: Language
}

export function HeritageCultureHub({ research, language }: HeritageCultureHubProps) {
  const { heritageSections } = research
  const isTa = language === 'ta'
  const stripTitle = isTa
    ? '05–12 • வாழ்வியல், தொழில்கள், பண்பாடு, மொழி, உணவு, ஆடை, விழாக்கள் & கலைகள்'
    : '05–12 • Lifestyle, Occupations, Culture, Language, Food, Clothing, Festivals & Arts'

  return (
    <div className="border-y border-[#075B32]/12 bg-[#EFF5E9]">
      {/* Touch-Friendly Scrollable Quick-Jump Strip for Sections 05–12 */}
      <div className="border-b border-[#075B32]/12 bg-[#023D24] text-white">
        <div className="ks-container py-4">
          <p className="mb-3 text-[0.82rem] font-extrabold tracking-wide text-[#FFD629]">
            {stripTitle}
          </p>
          <div
            role="region"
            tabIndex={0}
            aria-label={stripTitle}
            className="ks-horizontal-strip flex items-center gap-2.5 overflow-x-auto pb-1.5"
          >
            {heritageSections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border border-[#FFD629]/40 bg-[#012B19]/90 px-4 py-2 text-[0.875rem] font-bold text-[#F5E2A3] transition-colors hover:border-[#FFD629] hover:bg-[#FFD629] hover:text-[#023D24]"
              >
                <span className="text-[0.8rem] opacity-85">{sec.sectionNumber}</span>
                <span>{sec.heading}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Semantic Sections 05 through 12 (Image-First Mobile, Alternating 6/6 Desktop) */}
      {heritageSections.map((sec, idx) => {
        const isEven = idx % 2 === 0
        return (
          <section
            key={sec.id}
            id={sec.id}
            aria-labelledby={`${sec.id}-heading`}
            className={`ks-section ks-deferred-section ${isEven ? 'bg-[#EFF5E9]' : 'bg-[#F8FAF4]'}`}
          >
            <div className="ks-container">
              <div className="grid items-start gap-7 lg:grid-cols-12 lg:gap-12">
                {/* Media Column (Always on top on mobile; alternates Left/Right on desktop) */}
                <div
                  className={`ks-reveal min-w-0 lg:col-span-6 ${
                    !isEven ? 'lg:order-2' : ''
                  }`}
                >
                  <SectionMediaCard registryKey={sec.id} language={language} />

                  <div className="mt-4 rounded-2xl border border-[#075B32]/14 bg-white p-4 shadow-xs sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {sec.evidence && (
                        <EvidenceBadge type={sec.evidence} research={research} size="md" />
                      )}
                      <span className="rounded-md bg-[#075B32]/10 px-3 py-1 text-[0.82rem] font-extrabold text-[#075B32]">
                        #{sec.sectionNumber}
                      </span>
                    </div>
                    <SourcePills
                      sourceIds={sec.sourceIds}
                      label={research.sourcesHeadingLabel}
                    />
                  </div>
                </div>

                {/* Editorial Content Column */}
                <div
                  className={`ks-reveal min-w-0 lg:col-span-6 ${
                    !isEven ? 'lg:order-1' : ''
                  }`}
                >
                  <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
                    {sec.sectionNumber} • {sec.eyebrow}
                  </p>
                  <h2 id={`${sec.id}-heading`} className="ks-h2 mt-2 font-extrabold text-[#023D24]">
                    {sec.heading}
                  </h2>
                  <div className="ks-gold-rule mt-3.5" aria-hidden="true" />
                  <p className="mt-3.5 text-[1rem] font-semibold leading-relaxed text-[#355244] sm:text-[1.06rem]">
                    {sec.subtitle}
                  </p>
                  <p className="ks-body mt-3.5 text-[#183527]">{sec.overview}</p>

                  {/* Touch-Friendly Native Accordions (<details> min-h 56px) */}
                  <div className="mt-6 space-y-3.5">
                    {sec.keyFacts.map((fact, factIdx) => (
                      <details
                        key={factIdx}
                        open={factIdx === 0}
                        className="ks-accordion-item overflow-hidden rounded-2xl border border-[#075B32]/15 bg-white shadow-xs"
                      >
                        <summary className="ks-accordion-summary flex min-h-[56px] cursor-pointer flex-wrap items-center justify-between gap-2.5 px-4 py-3.5 text-[1rem] font-extrabold leading-snug text-[#023D24] transition-colors hover:bg-[#F8FAF4] sm:px-5 sm:text-[1.05rem]">
                          <span className="flex min-w-0 flex-1 items-center gap-3">
                            <ChevronDown
                              className="ks-accordion-chevron h-5 w-5 shrink-0 text-[#075B32]"
                              aria-hidden="true"
                            />
                            <span className="min-w-0">{fact.heading}</span>
                          </span>
                          {fact.evidence && (
                            <span className="shrink-0">
                              <EvidenceBadge type={fact.evidence} research={research} />
                            </span>
                          )}
                        </summary>
                        <div className="border-t border-[#075B32]/10 bg-[#FCFDF9] px-4 py-4 sm:px-5 sm:py-5">
                          <p className="ks-body text-[#2C4A3B]">{fact.text}</p>
                          <SourcePills
                            sourceIds={fact.sourceIds}
                            label={research.sourcesHeadingLabel}
                          />
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
