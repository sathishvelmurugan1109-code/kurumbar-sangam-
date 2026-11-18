import { CheckCircle2, GraduationCap, MapPin } from 'lucide-react'
import type { Language, ResearchDataset } from '../data/types'
import { EvidenceBadge, SourcePills } from './EvidenceBadge'
import { SectionMediaCard } from './MediaFrame'

interface GeographyEducationProps {
  research: ResearchDataset
  language: Language
}

export function GeographyEducation({ research, language }: GeographyEducationProps) {
  const { geographicalDistribution, educationSocialDevelopment } = research

  return (
    <>
      {/* SECTION 13: Historical Geographical Distribution */}
      <section
        id="geographical-distribution"
        aria-labelledby="geo-heading"
        className="ks-section ks-deferred-section bg-[#023D24] text-white"
      >
        <div className="ks-container">
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-12">
            {/* Visual Column (Top on Mobile, Left on Desktop) */}
            <div className="ks-reveal w-full min-w-0 lg:col-span-6">
              <SectionMediaCard
                registryKey="geographical-distribution"
                language={language}
                dark
              />
            </div>

            {/* Narrative + Census 2011 Metrics Column */}
            <div className="ks-reveal min-w-0 lg:col-span-6">
              <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#FFD629] sm:text-sm">
                {geographicalDistribution.sectionNumber} • {geographicalDistribution.eyebrow}
              </p>
              <h2 id="geo-heading" className="ks-h2 mt-2 font-extrabold text-white">
                {geographicalDistribution.heading}
              </h2>
              <div className="ks-gold-rule mt-3.5" aria-hidden="true" />
              <p className="mt-4 text-[1rem] font-medium leading-relaxed text-[#E7F2EB] sm:text-[1.06rem]">
                {geographicalDistribution.subtitle}
              </p>
              <p className="ks-body mt-3 text-[#DCEBE2]">{geographicalDistribution.intro}</p>

              <h3 className="ks-h3 mt-6 font-extrabold text-[#FFD629]">
                {geographicalDistribution.censusTitle}
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                {geographicalDistribution.censusMetrics.map((metric) => (
                  <div
                    key={metric.id}
                    className="flex w-full min-w-0 flex-col justify-between rounded-2xl border border-[#D9A928]/40 bg-[#012817]/90 p-4 sm:p-5"
                  >
                    <div className="w-full min-w-0">
                      <p className="text-[0.9rem] font-bold leading-snug text-[#F5E2A3]">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-xl font-extrabold leading-tight text-[#FFD629]">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-[#DCEBE2]">
                        {metric.detail}
                      </p>
                    </div>
                    <SourcePills sourceIds={[metric.sourceId]} dark />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tri-State Equal-Height Distribution Cards (1-Col Mobile -> 3-Col Desktop) */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {geographicalDistribution.regions.map((region) => (
              <article
                key={region.id}
                className="ks-reveal flex w-full min-w-0 flex-col justify-between rounded-2xl border border-[#D9A928]/40 bg-[#012817]/88 p-5 shadow-md sm:rounded-3xl sm:p-6"
              >
                <div className="w-full min-w-0">
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <span className="inline-flex w-full items-center gap-1.5 text-[1.2rem] font-extrabold text-[#FFD629]">
                      <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span className="min-w-0 flex-1">{region.state}</span>
                    </span>
                    {region.evidence && <EvidenceBadge type={region.evidence} research={research} />}
                  </div>
                  <p className="mt-3 text-[0.9rem] font-bold leading-relaxed text-[#F5E2A3]">
                    {region.districts}
                  </p>
                  <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.06] p-3.5 text-[0.9rem] font-semibold leading-relaxed text-white">
                    {region.communities}
                  </p>
                  <p className="ks-body mt-3.5 text-[#DCEBE2]">{region.historicalNote}</p>
                </div>
                <SourcePills
                  sourceIds={region.sourceIds}
                  label={research.sourcesHeadingLabel}
                  dark
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: Education and Social Development (Image Top on Mobile, Right on Desktop) */}
      <section
        id="education-development"
        aria-labelledby="edu-dev-heading"
        className="ks-section ks-deferred-section bg-[#F8FAF4]"
      >
        <div className="ks-container">
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-12 lg:gap-12">
            <div className="ks-reveal w-full min-w-0 lg:order-2 lg:col-span-6">
              <SectionMediaCard registryKey="education-development" language={language} />

              <div className="mt-5 rounded-2xl border border-[#075B32]/18 bg-[#EFF5E9] p-5 sm:p-6">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="h-5 w-5 shrink-0 text-[#075B32]" aria-hidden="true" />
                  <h3 className="ks-h3 font-extrabold text-[#023D24]">
                    {educationSocialDevelopment.modernPrioritiesTitle}
                  </h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {educationSocialDevelopment.modernPriorities.map((item, i) => (
                    <li
                      key={i}
                      className="ks-body flex items-start gap-2.5 text-[#183527]"
                    >
                      <CheckCircle2
                        className="mt-1 h-4 w-4 shrink-0 text-[#138447]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="min-w-0 lg:order-1 lg:col-span-6">
              <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
                {educationSocialDevelopment.sectionNumber} • {educationSocialDevelopment.eyebrow}
              </p>
              <h2 id="edu-dev-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
                {educationSocialDevelopment.heading}
              </h2>
              <div className="ks-gold-rule mt-3.5" aria-hidden="true" />
              <p className="mt-4 text-[1rem] font-semibold leading-relaxed text-[#355244] sm:text-[1.06rem]">
                {educationSocialDevelopment.subtitle}
              </p>
              <p className="ks-body mt-3 text-[#183527]">{educationSocialDevelopment.intro}</p>

              <div className="mt-6 space-y-4">
                {educationSocialDevelopment.points.map((pt, idx) => (
                  <article
                    key={idx}
                    className="ks-reveal w-full rounded-2xl border border-[#075B32]/14 bg-white p-5 shadow-xs sm:p-6"
                  >
                    <div className="flex w-full flex-col items-start gap-2.5">
                      <h3 className="ks-h3 w-full font-extrabold text-[#023D24]">{pt.heading}</h3>
                      {pt.evidence && <EvidenceBadge type={pt.evidence} research={research} />}
                    </div>
                    <p className="ks-body mt-3 w-full text-[#2C4A3B]">{pt.text}</p>
                    <SourcePills sourceIds={pt.sourceIds} label={research.sourcesHeadingLabel} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
