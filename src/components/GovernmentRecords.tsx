import { BookOpenCheck, ExternalLink, FileCheck2, Landmark } from 'lucide-react'
import { useState } from 'react'
import { HISTORICAL_SOURCES } from '../data/sources'
import type { Language, ResearchDataset, SourceReference } from '../data/types'
import { EvidenceBadge, SourcePills } from './EvidenceBadge'
import { SectionMediaCard } from './MediaFrame'

interface GovernmentRecordsProps {
  research: ResearchDataset
  language: Language
}

type SourceFilter = 'all' | SourceReference['category']

export function GovernmentRecords({ research, language }: GovernmentRecordsProps) {
  const { governmentRecords, documentsResearch } = research
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('all')

  const filteredSources =
    sourceFilter === 'all'
      ? HISTORICAL_SOURCES
      : HISTORICAL_SOURCES.filter((src) => src.category === sourceFilter)

  const filterButtons: { key: SourceFilter; label: string }[] = [
    { key: 'all', label: documentsResearch.filterLabels.all },
    { key: 'academic', label: documentsResearch.filterLabels.academic },
    { key: 'government', label: documentsResearch.filterLabels.government },
    { key: 'linguistic', label: documentsResearch.filterLabels.linguistic },
    { key: 'colonial-contextualized', label: documentsResearch.filterLabels.colonial },
  ]

  return (
    <>
      {/* SECTION 15: Government Records & Community Classification */}
      <section
        id="government-records"
        aria-labelledby="gov-records-heading"
        className="ks-section ks-deferred-section bg-[#EFF5E9]"
      >
        <div className="ks-container">
          <div className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
            <div className="ks-reveal min-w-0 lg:col-span-6">
              <SectionMediaCard registryKey="government-records" language={language} />
            </div>

            <div className="ks-reveal min-w-0 lg:col-span-6">
              <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
                {governmentRecords.sectionNumber} • {governmentRecords.eyebrow}
              </p>
              <h2 id="gov-records-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
                {governmentRecords.heading}
              </h2>
              <div className="ks-gold-rule mt-3.5" aria-hidden="true" />
              <p className="mt-4 text-[1rem] font-semibold leading-relaxed text-[#355244] sm:text-[1.06rem]">
                {governmentRecords.subtitle}
              </p>

              <div className="mt-5 rounded-2xl border border-[#075B32]/20 bg-white p-5 shadow-xs">
                <div className="flex items-start gap-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-[#075B32]" aria-hidden="true" />
                  <div>
                    <h3 className="text-[1rem] font-extrabold text-[#023D24] sm:text-[1.06rem]">
                      {governmentRecords.disclaimerTitle}
                    </h3>
                    <p className="mt-1.5 text-[0.94rem] leading-relaxed text-[#2C4A3B]">
                      {governmentRecords.disclaimerBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Official Statutory Classifications (Mobile Cards -> Desktop Table) */}
          <div className="ks-reveal mt-8 overflow-hidden rounded-2xl border border-[#075B32]/18 bg-white shadow-[0_12px_32px_rgba(7,91,50,0.08)] sm:mt-10 sm:rounded-3xl">
            <div className="flex items-center gap-3 border-b border-[#D9A928]/35 bg-[#023D24] px-4 py-4 text-white sm:px-7">
              <Landmark className="h-5 w-5 shrink-0 text-[#FFD629]" aria-hidden="true" />
              <h3 className="ks-h3 font-extrabold text-[#FFD629]">
                {governmentRecords.classificationTableTitle}
              </h3>
            </div>

            <div
              role="region"
              tabIndex={0}
              aria-label={governmentRecords.classificationTableTitle}
              className="hidden overflow-x-auto lg:block"
            >
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#075B32]/15 bg-[#F8FAF4] text-xs font-extrabold uppercase tracking-wider text-[#023D24]">
                    <th className="px-5 py-3.5">{governmentRecords.tableHeaders.authority}</th>
                    <th className="px-4 py-3.5">{governmentRecords.tableHeaders.listedName}</th>
                    <th className="px-4 py-3.5">{governmentRecords.tableHeaders.category}</th>
                    <th className="px-4 py-3.5">{governmentRecords.tableHeaders.scope}</th>
                    <th className="px-5 py-3.5">{governmentRecords.tableHeaders.legalBasis}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#075B32]/10">
                  {governmentRecords.classifications.map((row) => (
                    <tr key={row.id} className="align-top hover:bg-[#F8FAF4]/80">
                      <td className="px-5 py-4 text-[0.875rem] font-bold text-[#023D24]">
                        {row.stateOrAuthority}
                      </td>
                      <td className="px-4 py-4 font-extrabold text-[#075B32]">{row.listedName}</td>
                      <td className="px-4 py-4">
                        <span className="inline-block rounded-full border border-[#075B32]/25 bg-[#E9F7EF] px-3 py-1 text-xs font-extrabold text-[#054A28]">
                          {row.category}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[0.875rem] text-[#2C4A3B]">
                        {row.territorialScope}
                      </td>
                      <td className="px-5 py-4 text-[0.875rem] leading-relaxed text-[#2C4A3B]">
                        <p>{row.legalBasis}</p>
                        <SourcePills sourceIds={row.sourceIds} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="divide-y divide-[#075B32]/12 lg:hidden">
              {governmentRecords.classifications.map((row) => (
                <article key={row.id} className="p-4 sm:p-6">
                  <span className="inline-block rounded-full border border-[#075B32]/25 bg-[#E9F7EF] px-3 py-1 text-[0.82rem] font-extrabold text-[#054A28]">
                    {row.category}
                  </span>
                  <h4 className="ks-h3 mt-2.5 font-extrabold text-[#023D24]">{row.listedName}</h4>
                  <p className="mt-1 text-[0.92rem] font-bold text-[#075B32]">
                    {row.stateOrAuthority}
                  </p>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#2C4A3B]">
                    <strong className="text-[#023D24]">
                      {governmentRecords.tableHeaders.scope}:
                    </strong>{' '}
                    {row.territorialScope}
                  </p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[#2C4A3B]">
                    <strong className="text-[#023D24]">
                      {governmentRecords.tableHeaders.legalBasis}:
                    </strong>{' '}
                    {row.legalBasis}
                  </p>
                  <SourcePills sourceIds={row.sourceIds} label={research.sourcesHeadingLabel} />
                </article>
              ))}
            </div>
          </div>

          {/* Documented Unresolved Administrative & Legal Issues */}
          <div className="mt-10 sm:mt-12">
            <div className="flex items-start gap-3">
              <Landmark className="mt-1 h-6 w-6 shrink-0 text-[#075B32]" aria-hidden="true" />
              <div>
                <h3 className="ks-h2 font-extrabold text-[#023D24]">
                  {governmentRecords.unresolvedTitle}
                </h3>
                <p className="ks-body mt-1.5 text-[#355244]">
                  {governmentRecords.unresolvedSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {governmentRecords.unresolvedIssues.map((issue) => (
                <article
                  key={issue.id}
                  className="ks-reveal flex flex-col justify-between rounded-2xl border border-[#075B32]/14 bg-white p-5 shadow-xs sm:p-6"
                >
                  <div>
                    {issue.evidence && (
                      <div className="mb-3">
                        <EvidenceBadge type={issue.evidence} research={research} />
                      </div>
                    )}
                    <h4 className="ks-h3 font-extrabold text-[#023D24]">{issue.title}</h4>
                    <p className="ks-body mt-2.5 text-[#2C4A3B]">{issue.summary}</p>
                    <div className="mt-4 rounded-xl border border-[#D9A928]/45 bg-[#FFFBE8] p-3.5 text-[0.9rem] leading-relaxed text-[#5E4500]">
                      {issue.constitutionalRule}
                    </div>
                  </div>
                  <SourcePills sourceIds={issue.sourceIds} label={research.sourcesHeadingLabel} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 16: Historical Documents & Research Bibliography */}
      <section
        id="documents-research"
        aria-labelledby="docs-research-heading"
        className="ks-section ks-deferred-section bg-[#F8FAF4]"
      >
        <div className="ks-container">
          <div className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
            <div className="ks-reveal min-w-0 lg:order-2 lg:col-span-6">
              <SectionMediaCard registryKey="documents-research" language={language} />
            </div>

            <div className="ks-reveal min-w-0 lg:order-1 lg:col-span-6">
              <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
                {documentsResearch.sectionNumber} • {documentsResearch.eyebrow}
              </p>
              <h2 id="docs-research-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
                {documentsResearch.heading}
              </h2>
              <div className="ks-gold-rule mt-3.5" aria-hidden="true" />
              <p className="mt-4 text-[1rem] font-semibold leading-relaxed text-[#355244] sm:text-[1.06rem]">
                {documentsResearch.subtitle}
              </p>

              {/* Documentation Standards Panel */}
              <div className="mt-5 rounded-2xl border border-[#075B32]/15 bg-[#023D24] p-5 text-white shadow-sm">
                <div className="flex items-center gap-2.5 text-[#FFD629]">
                  <BookOpenCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <h3 className="text-[1rem] font-extrabold sm:text-[1.06rem]">
                    {documentsResearch.policyTitle}
                  </h3>
                </div>
                <ul className="mt-3.5 space-y-2.5 text-[0.94rem] leading-relaxed text-[#E7F2EB]">
                  {documentsResearch.policyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD629]"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Touch-Friendly Scrollable Filter Tabs (44px+ tap height) */}
          <div
            role="group"
            tabIndex={0}
            aria-label={documentsResearch.heading}
            className="ks-horizontal-strip mt-8 flex items-center gap-2.5 overflow-x-auto pb-2 sm:mt-10 sm:justify-center"
          >
            {filterButtons.map((btn) => {
              const active = sourceFilter === btn.key
              return (
                <button
                  key={btn.key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSourceFilter(btn.key)}
                  className={`min-h-[44px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-[0.875rem] font-extrabold transition-all sm:px-5 ${
                    active
                      ? 'bg-[#075B32] text-[#FFD629] shadow-sm'
                      : 'border border-[#075B32]/20 bg-white text-[#183527] hover:border-[#075B32]'
                  }`}
                >
                  {btn.label}
                </button>
              )
            })}
          </div>

          {/* Bibliography Cards Grid (1-Col Mobile -> 2-Col Desktop) */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {filteredSources.map((src) => (
              <article
                key={src.id}
                id={`source-${src.id}`}
                className="ks-reveal flex flex-col justify-between rounded-2xl border border-[#075B32]/14 bg-white p-5 shadow-xs scroll-mt-28 target:border-[#D9A928] target:ring-2 target:ring-[#FFD629] sm:p-6"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-[#075B32]/10 px-3 py-1 text-[0.82rem] font-extrabold text-[#075B32]">
                      {src.shortLabel}
                    </span>
                    <span className="text-[0.875rem] font-bold text-[#436153]">{src.year}</span>
                  </div>
                  <h3 className="ks-h3 mt-3 font-extrabold text-[#023D24]">
                    {src.title[language]}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] font-bold text-[#138447]">
                    {src.author} — {src.publisher}
                  </p>
                  <p className="ks-body mt-2.5 text-[#2C4A3B]">{src.summary[language]}</p>
                  {src.contextNote && (
                    <div className="mt-3.5 flex items-start gap-2.5 rounded-xl border border-[#075B32]/15 bg-[#F4F8F2] p-3.5 text-[0.875rem] leading-relaxed text-[#2C4A3B]">
                      <BookOpenCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#075B32]"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="text-[#023D24]">
                          {documentsResearch.colonialNoteLabel}
                        </strong>{' '}
                        {src.contextNote[language]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-4 border-t border-[#075B32]/10 pt-3.5">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-[0.94rem] font-extrabold text-[#075B32] transition-colors hover:text-[#138447]"
                  >
                    <span>{documentsResearch.visitSourceLabel}</span>
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
