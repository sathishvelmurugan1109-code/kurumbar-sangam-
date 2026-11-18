import { BookOpen, CheckCircle2, ScrollText } from 'lucide-react'
import { SOURCE_MAP } from '../data/sources'
import type { EvidenceType, ResearchDataset } from '../data/types'

interface EvidenceBadgeProps {
  type?: EvidenceType
  research: ResearchDataset
  size?: 'sm' | 'md'
}

const BADGE_STYLES: Record<
  EvidenceType,
  {
    wrapper: string
    icon: typeof CheckCircle2
  }
> = {
  documented: {
    wrapper: 'border-[#138447]/35 bg-[#E9F7EF] text-[#054A28]',
    icon: CheckCircle2,
  },
  academic: {
    wrapper: 'border-[#1D5B8A]/35 bg-[#EDF5FB] text-[#124064]',
    icon: BookOpen,
  },
  oral: {
    wrapper: 'border-[#B67A00]/40 bg-[#FFF8E1] text-[#6B4700]',
    icon: ScrollText,
  },
}

export function EvidenceBadge({ type, research, size = 'sm' }: EvidenceBadgeProps) {
  if (!type) return null
  const { wrapper, icon: Icon } = BADGE_STYLES[type]
  return (
    <span
      title={research.evidenceDescriptions[type]}
      className={`inline-flex items-center gap-1.5 rounded-full border font-bold leading-snug ${wrapper} ${
        size === 'sm' ? 'px-3 py-1 text-[0.8125rem]' : 'px-3.5 py-1.5 text-sm'
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{research.evidenceLabels[type]}</span>
    </span>
  )
}

interface SourcePillsProps {
  sourceIds: string[]
  label?: string
  dark?: boolean
}

export function SourcePills({ sourceIds, label, dark = false }: SourcePillsProps) {
  const validSources = sourceIds
    .map((id) => SOURCE_MAP[id])
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  if (validSources.length === 0) return null

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {label && (
        <span
          className={`text-[0.84rem] font-bold ${
            dark ? 'text-[#F5E2A3]/90' : 'text-[#436153]'
          }`}
        >
          {label}:
        </span>
      )}
      {validSources.map((src) => (
        <a
          key={src.id}
          href={`#source-${src.id}`}
          className={`inline-flex min-h-[36px] items-center rounded-lg border px-3 py-1 text-[0.8125rem] font-bold transition-colors ${
            dark
              ? 'border-[#FFD629]/40 bg-[#012B19]/80 text-[#FFD629] hover:bg-[#FFD629] hover:text-[#023D24]'
              : 'border-[#075B32]/22 bg-[#F2F7F0] text-[#075B32] hover:border-[#075B32] hover:bg-[#075B32] hover:text-[#FFD629]'
          }`}
        >
          [{src.shortLabel}]
        </a>
      ))}
    </div>
  )
}
