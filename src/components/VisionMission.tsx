import { CheckCircle2, Compass, Eye } from 'lucide-react'
import type { SiteContent } from '../data/content'

interface VisionMissionProps {
  content: SiteContent
}

export function VisionMission({ content }: VisionMissionProps) {
  return (
    <section
      id="vision-mission"
      aria-labelledby="vision-heading"
      className="ks-section ks-deferred-section bg-[#EFF5E9]"
    >
      <div className="ks-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.14em] text-[#138447] sm:text-sm">
            {content.visionMission.sectionNumber} • {content.visionMission.eyebrow}
          </p>
          <h2 id="vision-heading" className="ks-h2 mt-2 font-extrabold text-[#023D24]">
            {content.visionMission.heading}
          </h2>
          <div className="ks-gold-rule mx-auto mt-3.5" aria-hidden="true" />
          <p className="ks-body mt-4 text-[#355244]">{content.visionMission.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Vision Card */}
          <article className="ks-reveal relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D9A928]/45 bg-gradient-to-br from-[#023D24] via-[#064E2C] to-[#075B32] p-6 text-white shadow-[0_16px_40px_rgba(2,61,36,0.18)] sm:rounded-3xl sm:p-9 lg:col-span-5">
            <div>
              <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-[#FFD629]/40 bg-[#FFD629]/15 text-[#FFD629]">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="ks-h2 mt-5 font-extrabold text-[#FFD629]">
                {content.visionMission.visionTitle}
              </h3>
              <p className="mt-4 text-[1.04rem] font-medium leading-relaxed text-[#EDF6F0] sm:text-lg">
                {content.visionMission.visionText}
              </p>
            </div>

            <div className="mt-8 border-t border-white/15 pt-5">
              <p className="text-[0.94rem] font-bold tracking-wide text-[#FFD629]">
                {content.meta.motto}
              </p>
            </div>
          </article>

          {/* Mission Card */}
          <article className="ks-reveal relative overflow-hidden rounded-2xl border border-[#075B32]/15 bg-white p-6 shadow-[0_12px_34px_rgba(7,91,50,0.08)] sm:rounded-3xl sm:p-9 lg:col-span-7">
            <div
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#075B32] via-[#138447] to-[#FFD629]"
              aria-hidden="true"
            />
            <div className="flex items-center gap-3.5">
              <div className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#075B32]/10 text-[#075B32]">
                <Compass className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="ks-h2 font-extrabold text-[#023D24]">
                {content.visionMission.missionTitle}
              </h3>
            </div>

            <ul className="mt-6 space-y-3.5">
              {content.visionMission.missionPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-[#075B32]/12 bg-[#F8FAF4] px-4 py-3.5 transition-colors hover:border-[#D9A928]/55"
                >
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-[#138447]"
                    aria-hidden="true"
                  />
                  <span className="ks-body font-semibold text-[#183527]">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
