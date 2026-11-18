import { BookMarked, Scale } from 'lucide-react'
import type { Language, ResearchDataset } from '../data/types'
import { EvidenceBadge, SourcePills } from './EvidenceBadge'
import { SectionMediaCard } from './MediaFrame'

interface HistoryChronicleProps {
  research: ResearchDataset
  language: Language
}

export function HistoryChronicle({ research, language }: HistoryChronicleProps) {
  const { completeHistory, ancientReferences } = research

  return (
    <>
      {/* SECTION 03: Complete Kurumbar History */}
      <section
        id="history"
        aria-labelledby="history-heading"
        className="ks-section ks-deferred-section bg-[#EFF5E9]"
      >
        <div className="ks-container">
          {/* Single-Column Mobile (Image Top) -> 2-Column Balanced Desktop */}
          <div className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
            <div className="ks-reveal min-w-0 lg:col-span-6">
              <SectionMediaCard registryKey="history" language={language} />
            </div>

            <div className="ks-reveal min-w-0 lg:col-span-6">
              <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
                {completeHistory.sectionNumber} • {completeHistory.eyebrow}
              </p>
              <h2 id="history-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
                {completeHistory.heading}
              </h2>
              <div className="ks-gold-rule mt-3.5" aria-hidden="true" />
              <p className="mt-4 text-[1rem] font-semibold leading-relaxed text-[#355244] sm:text-[1.06rem]">
                {completeHistory.subtitle}
              </p>

              <div className="ks-body mt-4 space-y-4 text-[#183527]">
                {completeHistory.introParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Evidence Legend Strip */}
          <div className="ks-reveal mt-8 rounded-2xl border border-[#075B32]/15 bg-white p-4 shadow-xs sm:mt-10 sm:p-5">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {(['documented', 'academic', 'oral'] as const).map((ev) => (
                <EvidenceBadge key={ev} type={ev} research={research} size="sm" />
              ))}
            </div>
            <p className="ks-caption mt-3 text-center text-[#355244] sm:text-[0.94rem]">
              {completeHistory.methodologyNote}
            </p>
          </div>

          {/* Community Identity Distinction Matrix (Cards on Mobile/Tablet, Table on Desktop) */}
          <div className="ks-reveal mt-8 overflow-hidden rounded-2xl border border-[#075B32]/18 bg-white shadow-[0_12px_32px_rgba(7,91,50,0.08)] sm:mt-10 sm:rounded-3xl">
            <div className="border-b border-[#D9A928]/35 bg-[#023D24] px-4 py-4 text-white sm:px-7 sm:py-5">
              <div className="flex items-start gap-3">
                <Scale className="mt-1 h-5 w-5 shrink-0 text-[#FFD629]" aria-hidden="true" />
                <div>
                  <h3 className="ks-h3 font-extrabold text-[#FFD629]">
                    {completeHistory.identityMatrixTitle}
                  </h3>
                  <p className="ks-caption mt-1 text-[#E7F2EB] sm:text-[0.94rem]">
                    {completeHistory.identityMatrixSubtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Table */}
            <div
              role="region"
              tabIndex={0}
              aria-label={completeHistory.identityMatrixTitle}
              className="hidden overflow-x-auto lg:block"
            >
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#075B32]/15 bg-[#F8FAF4] text-xs font-extrabold uppercase tracking-wider text-[#023D24]">
                    <th className="px-5 py-3.5">{completeHistory.identityTableHeaders.name}</th>
                    <th className="px-4 py-3.5">{completeHistory.identityTableHeaders.region}</th>
                    <th className="px-4 py-3.5">{completeHistory.identityTableHeaders.livelihood}</th>
                    <th className="px-4 py-3.5">{completeHistory.identityTableHeaders.language}</th>
                    <th className="px-5 py-3.5">
                      {completeHistory.identityTableHeaders.classification}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#075B32]/10">
                  {completeHistory.identities.map((row) => (
                    <tr key={row.id} className="align-top transition-colors hover:bg-[#F8FAF4]/80">
                      <td className="px-5 py-4">
                        <p className="text-[0.95rem] font-extrabold text-[#023D24]">{row.name}</p>
                        {row.evidence && (
                          <div className="mt-2">
                            <EvidenceBadge type={row.evidence} research={research} />
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 text-[0.875rem] leading-relaxed text-[#2C4A3B]">
                        {row.region}
                      </td>
                      <td className="px-4 py-4 text-[0.875rem] leading-relaxed text-[#2C4A3B]">
                        {row.traditionalLivelihood}
                      </td>
                      <td className="px-4 py-4 text-[0.875rem] leading-relaxed text-[#2C4A3B]">
                        {row.languageNotes}
                      </td>
                      <td className="px-5 py-4 text-[0.875rem] leading-relaxed text-[#183527]">
                        <p>{row.officialClassificationNote}</p>
                        <SourcePills sourceIds={row.sourceIds} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile & Tablet Spacious Readable Card Stack */}
            <div className="divide-y divide-[#075B32]/12 lg:hidden">
              {completeHistory.identities.map((row) => (
                <article key={row.id} className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2.5">
                    <h4 className="ks-h3 font-extrabold text-[#023D24]">{row.name}</h4>
                    {row.evidence && <EvidenceBadge type={row.evidence} research={research} />}
                  </div>
                  <dl className="mt-3.5 space-y-2.5 text-[0.96rem] leading-relaxed text-[#2C4A3B]">
                    <div>
                      <dt className="font-extrabold text-[#075B32]">
                        {completeHistory.identityTableHeaders.region}:
                      </dt>
                      <dd className="mt-0.5">{row.region}</dd>
                    </div>
                    <div>
                      <dt className="font-extrabold text-[#075B32]">
                        {completeHistory.identityTableHeaders.livelihood}:
                      </dt>
                      <dd className="mt-0.5">{row.traditionalLivelihood}</dd>
                    </div>
                    <div>
                      <dt className="font-extrabold text-[#075B32]">
                        {completeHistory.identityTableHeaders.language}:
                      </dt>
                      <dd className="mt-0.5">{row.languageNotes}</dd>
                    </div>
                    <div>
                      <dt className="font-extrabold text-[#075B32]">
                        {completeHistory.identityTableHeaders.classification}:
                      </dt>
                      <dd className="mt-0.5 text-[#183527]">{row.officialClassificationNote}</dd>
                    </div>
                  </dl>
                  <SourcePills sourceIds={row.sourceIds} label={research.sourcesHeadingLabel} />
                </article>
              ))}
            </div>
          </div>

          {/* Evidence-Based Historical Development Arc (1-Col Mobile -> 2-Col Tablet/Desktop) */}
          <div className="mt-10 sm:mt-12">
            <h3 className="ks-h2 font-extrabold text-[#023D24]">
              {completeHistory.historicalArcTitle}
            </h3>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {completeHistory.historicalArc.map((point, index) => (
                <article
                  key={index}
                  className="ks-reveal flex flex-col justify-between rounded-2xl border border-[#075B32]/14 bg-white p-5 shadow-xs sm:p-6"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#023D24] text-sm font-extrabold text-[#FFD629]">
                        0{index + 1}
                      </span>
                      {point.evidence && (
                        <EvidenceBadge type={point.evidence} research={research} />
                      )}
                    </div>
                    <h4 className="ks-h3 mt-3.5 font-extrabold text-[#023D24]">{point.heading}</h4>
                    <p className="ks-body mt-2.5 text-[#2C4A3B]">{point.text}</p>
                  </div>
                  <SourcePills sourceIds={point.sourceIds} label={research.sourcesHeadingLabel} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: Ancient Historical References (Image Top on Mobile, Alternating Right on Desktop) */}
      <section
        id="ancient-references"
        aria-labelledby="ancient-references-heading"
        className="ks-section ks-deferred-section bg-[#F8FAF4]"
      >
        <div className="ks-container">
          <div className="grid items-start gap-7 lg:grid-cols-12 lg:gap-12">
            {/* Visual Column (Top on Mobile, Right on Desktop) */}
            <div className="ks-reveal min-w-0 lg:order-2 lg:col-span-6">
              <SectionMediaCard registryKey="ancient-references" language={language} />

              {/* Colonial Historical Context Box */}
              <div className="mt-5 rounded-2xl border border-[#D9A928]/60 bg-[#FFFBE8] p-5">
                <div className="flex items-start gap-3">
                  <BookMarked className="mt-0.5 h-5 w-5 shrink-0 text-[#8A6100]" aria-hidden="true" />
                  <div>
                    <h3 className="text-[1rem] font-extrabold text-[#5E4500] sm:text-[1.06rem]">
                      {ancientReferences.colonialCritiqueTitle}
                    </h3>
                    <p className="mt-2 text-[0.94rem] leading-relaxed text-[#5E4500]/95">
                      {ancientReferences.colonialCritiqueBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="min-w-0 lg:order-1 lg:col-span-6">
              <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
                {ancientReferences.sectionNumber} • {ancientReferences.eyebrow}
              </p>
              <h2
                id="ancient-references-heading"
                className="ks-h2 mt-2 font-extrabold text-[#023D24]"
              >
                {ancientReferences.heading}
              </h2>
              <div className="ks-gold-rule mt-3.5" aria-hidden="true" />
              <p className="mt-4 text-[1rem] font-semibold leading-relaxed text-[#355244] sm:text-[1.06rem]">
                {ancientReferences.subtitle}
              </p>
              <p className="ks-body mt-3 text-[#183527]">{ancientReferences.intro}</p>

              <div className="mt-6 space-y-4">
                {ancientReferences.records.map((rec, idx) => (
                  <article
                    key={idx}
                    className="ks-reveal rounded-2xl border border-[#075B32]/14 bg-white p-5 shadow-xs sm:p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="ks-h3 font-extrabold text-[#023D24]">{rec.heading}</h3>
                      {rec.evidence && <EvidenceBadge type={rec.evidence} research={research} />}
                    </div>
                    <p className="ks-body mt-2.5 text-[#2C4A3B]">{rec.text}</p>
                    <SourcePills sourceIds={rec.sourceIds} label={research.sourcesHeadingLabel} />
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
