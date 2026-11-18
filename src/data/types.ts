export type Language = 'ta' | 'en'

export type EvidenceType =
  | 'documented'
  | 'academic'
  | 'oral'

export type DiagramKind =
  | 'history-timeline'
  | 'ancient-epigraphy'
  | 'lifestyle-settlement'
  | 'occupations-pastoral-forest'
  | 'culture-heritage'
  | 'language-dravidian'
  | 'traditional-food'
  | 'traditional-clothing'
  | 'festivals-seasonal'
  | 'arts-alu-kurumba'
  | 'geography-south-india'
  | 'education-progress'
  | 'government-records'
  | 'community-development'

export interface SourceReference {
  id: string
  shortLabel: string
  title: {
    ta: string
    en: string
  }
  author: string
  year: string
  publisher: string
  category: 'academic' | 'government' | 'colonial-contextualized' | 'linguistic'
  url: string
  summary: {
    ta: string
    en: string
  }
  contextNote?: {
    ta: string
    en: string
  }
}

export interface HistoryPoint {
  heading: string
  text: string
  evidence?: EvidenceType
  sourceIds: string[]
}

export interface CommunityIdentityRow {
  id: string
  name: string
  region: string
  traditionalLivelihood: string
  languageNotes: string
  officialClassificationNote: string
  evidence?: EvidenceType
  sourceIds: string[]
}

export interface HeritageSectionData {
  id: string
  sectionNumber: string
  eyebrow: string
  heading: string
  subtitle: string
  evidence?: EvidenceType
  diagramKind: DiagramKind
  diagramCaption: string
  overview: string
  keyFacts: HistoryPoint[]
  researchNote?: string
  sourceIds: string[]
}

export interface GovernmentClassificationRow {
  id: string
  stateOrAuthority: string
  listedName: string
  category: string
  territorialScope: string
  legalBasis: string
  sourceIds: string[]
}

export interface UnresolvedIssueItem {
  id: string
  title: string
  summary: string
  constitutionalRule: string
  evidence?: EvidenceType
  sourceIds: string[]
}

export interface CensusMetric {
  id: string
  label: string
  value: string
  detail: string
  sourceId: string
}

export interface RegionDistributionCard {
  id: string
  state: string
  districts: string
  communities: string
  historicalNote: string
  evidence?: EvidenceType
  sourceIds: string[]
}

export interface SocialDevelopmentSectionData {
  id: string
  sectionNumber: string
  eyebrow: string
  heading: string
  subtitle: string
  evidence?: EvidenceType
  imageKey?: 'publicMeetingPodium' | 'stateLevelConference' | 'executiveMeetingHall' | 'leaderSpeechStage'
  galleryId?: string
  diagramKind?: DiagramKind
  diagramCaption?: string
  summary: string
  pillars: {
    title: string
    detail: string
  }[]
  transparencyNote: string
  sourceIds: string[]
}

export interface ResearchDataset {
  evidenceLabels: Record<EvidenceType, string>
  evidenceDescriptions: Record<EvidenceType, string>
  illustrativeLabel: string
  sourcesHeadingLabel: string
  readResearchDetailsLabel: string
  completeHistory: {
    sectionNumber: string
    eyebrow: string
    heading: string
    subtitle: string
    introParagraphs: string[]
    methodologyNote: string
    identityMatrixTitle: string
    identityMatrixSubtitle: string
    identityTableHeaders: {
      name: string
      region: string
      livelihood: string
      language: string
      classification: string
      sources: string
    }
    identities: CommunityIdentityRow[]
    historicalArcTitle: string
    historicalArc: HistoryPoint[]
  }
  ancientReferences: {
    sectionNumber: string
    eyebrow: string
    heading: string
    subtitle: string
    diagramCaption: string
    intro: string
    records: HistoryPoint[]
    colonialCritiqueTitle: string
    colonialCritiqueBody: string
  }
  heritageSections: HeritageSectionData[]
  geographicalDistribution: {
    sectionNumber: string
    eyebrow: string
    heading: string
    subtitle: string
    diagramCaption: string
    intro: string
    censusTitle: string
    censusMetrics: CensusMetric[]
    regions: RegionDistributionCard[]
  }
  educationSocialDevelopment: {
    sectionNumber: string
    eyebrow: string
    heading: string
    subtitle: string
    diagramCaption: string
    intro: string
    points: HistoryPoint[]
    modernPrioritiesTitle: string
    modernPriorities: string[]
  }
  governmentRecords: {
    sectionNumber: string
    eyebrow: string
    heading: string
    subtitle: string
    disclaimerTitle: string
    disclaimerBody: string
    classificationTableTitle: string
    tableHeaders: {
      authority: string
      listedName: string
      category: string
      scope: string
      legalBasis: string
    }
    classifications: GovernmentClassificationRow[]
    unresolvedTitle: string
    unresolvedSubtitle: string
    unresolvedIssues: UnresolvedIssueItem[]
  }
  documentsResearch: {
    sectionNumber: string
    eyebrow: string
    heading: string
    subtitle: string
    filterLabels: {
      all: string
      academic: string
      government: string
      linguistic: string
      colonial: string
    }
    policyTitle: string
    policyPoints: string[]
    visitSourceLabel: string
    colonialNoteLabel: string
  }
  socialSections: SocialDevelopmentSectionData[]
}
