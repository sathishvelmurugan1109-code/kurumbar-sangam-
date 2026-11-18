import { CheckCircle2, Info } from 'lucide-react'
import type { Language, ResearchDataset } from '../data/types'
import { EvidenceBadge, SourcePills } from './EvidenceBadge'
import { SectionMediaCard } from './MediaFrame'

interface CommunityProgressProps {
  research: ResearchDataset
  language: Language
  onOpenImageById: (galleryId: string) => void
  viewImageLabel: string
}

export function CommunityProgress({
  research,
  language,
  onOpenImageById,
  viewImageLabel,
}: CommunityProgressProps) {
  const { socialSections } = research

  return (
    <div className="border-t border-[#075B32]/12">
      {socialSections.map((sec, idx) => {
        const isEven = idx % 2 === 0

        return (
          <section
            key={sec.id}
            id={sec.id}
            aria-labelledby={`${sec.id}-heading`}
            className={`ks-section ks-deferred-section ${isEven ? 'bg-[#EFF5E9]' : 'bg-[#F8FAF4]'}`}
          >
            <div className="ks-container">
              <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-12">
                {/* Media Column (Always top on mobile, alternating Left/Right equal 6/6 on desktop) */}
                <div className={`ks-reveal w-full min-w-0 lg:col-span-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <SectionMediaCard
                    registryKey={sec.id}
                    language={language}
                    onOpenImageById={onOpenImageById}
                    viewImageLabel={viewImageLabel}
                  />

                  <div className="mt-4 flex w-full items-start gap-2.5 rounded-2xl border border-[#075B32]/14 bg-white p-4 text-[0.94rem] leading-relaxed text-[#2C4A3B] shadow-xs">
                    <Info className="mt-1 h-4 w-4 shrink-0 text-[#075B32]" aria-hidden="true" />
                    <span className="min-w-0 flex-1">{sec.transparencyNote}</span>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`ks-reveal w-full min-w-0 lg:col-span-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex w-full flex-col items-start gap-2">
                    <p className="text-[0.84rem] font-extrabold uppercase tracking-[0.14em] text-[#138447]">
                      {sec.sectionNumber} • {sec.eyebrow}
                    </p>
                    <h2 id={`${sec.id}-heading`} className="ks-h2 w-full font-extrabold text-[#023D24]">
                      {sec.heading}
                    </h2>
                    {sec.evidence && (
                      <div className="pt-1">
                        <EvidenceBadge type={sec.evidence} research={research} />
                      </div>
                    )}
                  </div>
                  <div className="ks-gold-rule mt-3.5" aria-hidden="true" />
                  <p className="mt-3.5 w-full text-[1rem] font-semibold leading-relaxed text-[#355244] sm:text-[1.06rem]">
                    {sec.subtitle}
                  </p>
                  <p className="ks-body mt-3.5 w-full text-[#183527]">{sec.summary}</p>

                  {/* Single-Column Mobile -> 3-Col Tablet/Desktop Pillars */}
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {sec.pillars.map((pillar, pIdx) => (
                      <article
                        key={pIdx}
                        className="flex w-full min-w-0 flex-col rounded-2xl border border-[#075B32]/14 bg-white p-5 shadow-xs"
                      >
                        <CheckCircle2
                          className="h-5 w-5 shrink-0 text-[#138447]"
                          aria-hidden="true"
                        />
                        <h3 className="mt-3 w-full text-[1.06rem] font-extrabold leading-snug text-[#023D24]">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 w-full flex-1 text-[0.95rem] leading-relaxed text-[#355244]">
                          {pillar.detail}
                        </p>
                      </article>
                    ))}
                  </div>

                  <SourcePills sourceIds={sec.sourceIds} label={research.sourcesHeadingLabel} />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
