export type GalleryCategory = 'all' | 'events' | 'leader' | 'posters'

export interface GalleryItem {
  id: string
  src: string
  width: number
  height: number
  category: Exclude<GalleryCategory, 'all'>
  displayMode: 'cover' | 'contain'
  objectPosition?: string
  aspectClass: string
  title: {
    ta: string
    en: string
  }
  caption: {
    ta: string
    en: string
  }
  alt: {
    ta: string
    en: string
  }
  verifiedNote?: {
    ta: string
    en: string
  }
}

export const OFFICIAL_ASSETS = {
  presidentEmblemProfile: '/assets/branding/president-emblem-profile.jpg',
  publicMeetingPodium: '/assets/events/public-meeting-podium.jpg',
  leaderSpeechStage: '/assets/leader/leader-speech-stage.jpg',
  executiveMeetingHall: '/assets/events/executive-meeting-hall.jpg',
  stateLevelConference: '/assets/events/state-level-conference.jpg',
  awarenessPosterUnity: '/assets/posters/awareness-poster-unity.jpg',
  promotionalPosterGreenGold: '/assets/posters/promotional-poster-green-gold.jpg',
  awarenessPosterEquality: '/assets/posters/awareness-poster-equality.jpg',
} as const

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'president-emblem',
    src: OFFICIAL_ASSETS.presidentEmblemProfile,
    width: 1024,
    height: 1024,
    category: 'leader',
    displayMode: 'contain',
    aspectClass: 'aspect-[4/3]',
    title: {
      ta: 'குறும்பர் சங்கம் – அதிகாரப்பூர்வ இலச்சினை & தலைவர் தோற்றம்',
      en: 'Kurumbar Sangam – Official Emblem & President Portrait',
    },
    caption: {
      ta: 'பாரம்பரியம் | பண்பாடு | முன்னேற்றம் — மாநில தலைவர் K. P. ராஜசிம்ம ஹெக்டே, B.Com., B.L.',
      en: 'Heritage | Culture | Progress — State President K. P. Rajasimma Hegde, B.Com., B.L.',
    },
    alt: {
      ta: 'குறும்பர் சங்கம் அதிகாரப்பூர்வ வட்ட வடிவ இலச்சினையில் மாநில தலைவர் K. P. ராஜசிம்ம ஹெக்டே',
      en: 'State President K. P. Rajasimma Hegde inside the official green and gold circular emblem of Kurumbar Sangam',
    },
  },
  {
    id: 'public-meeting-podium',
    src: OFFICIAL_ASSETS.publicMeetingPodium,
    width: 1024,
    height: 696,
    category: 'events',
    displayMode: 'cover',
    objectPosition: 'object-[50%_18%]',
    aspectClass: 'aspect-[4/3]',
    title: {
      ta: 'குறும்பர் சங்கம் – தமிழ்நாடு பொதுக்கூட்டம்',
      en: 'Kurumbar Sangam – Tamil Nadu Public Meeting',
    },
    caption: {
      ta: 'பச்சை மற்றும் மஞ்சள் சங்கக் கொடிகள், உறுப்பினர்கள் முன்னிலையில் மேடையில் உரையாற்றும் மாநில தலைவர்.',
      en: 'State President addressing members from the podium surrounded by green and yellow association flags.',
    },
    alt: {
      ta: 'குறும்பர் சங்கம் தமிழ்நாடு பொதுக்கூட்டத்தில் மேடையில் உரையாற்றும் மாநில தலைவர் K. P. ராஜசிம்ம ஹெக்டே',
      en: 'State President K. P. Rajasimma Hegde speaking at the podium during a Kurumbar Sangam Tamil Nadu public meeting',
    },
  },
  {
    id: 'leader-speech-stage',
    src: OFFICIAL_ASSETS.leaderSpeechStage,
    width: 1024,
    height: 682,
    category: 'leader',
    displayMode: 'cover',
    objectPosition: 'object-[50%_15%]',
    aspectClass: 'aspect-[4/3]',
    title: {
      ta: 'மாநில தலைவர் சிறப்புரை',
      en: 'State President Keynote Address',
    },
    caption: {
      ta: 'குறும்பர் சங்க மேடையில் சமூக ஒற்றுமை மற்றும் முன்னேற்றம் குறித்து உரையாற்றும் மாநில தலைவர்.',
      en: 'State President delivering an address on community unity and progress on the association stage.',
    },
    alt: {
      ta: 'குறும்பர் சங்க மேடையில் கை உயர்த்தி உரையாற்றும் மாநில தலைவர் K. P. ராஜசிம்ம ஹெக்டே',
      en: 'State President K. P. Rajasimma Hegde speaking passionately on stage with the Kurumbar Sangam backdrop',
    },
  },
  {
    id: 'state-level-conference',
    src: OFFICIAL_ASSETS.stateLevelConference,
    width: 1024,
    height: 854,
    category: 'events',
    displayMode: 'cover',
    objectPosition: 'object-[50%_15%]',
    aspectClass: 'aspect-[4/3]',
    title: {
      ta: 'மாநில அளவிலான கூட்டம் மற்றும் கோரிக்கை நிகழ்வு',
      en: 'State-Level Meeting & Community Representation Event',
    },
    caption: {
      ta: 'குறும்பர் சங்க நிர்வாகிகள் மற்றும் உறுப்பினர்கள் பங்கேற்ற மாநில அளவிலான நிகழ்வு.',
      en: 'State-level gathering attended by Kurumbar Sangam office bearers and community members.',
    },
    alt: {
      ta: 'குறும்பர் சங்க மாநில அளவிலான கூட்ட மேடையில் நிர்வாகிகள் மற்றும் உரையாற்றும் தலைவர்',
      en: 'Kurumbar Sangam members seated on stage while the State President speaks at the podium',
    },
    verifiedNote: {
      ta: 'மேடை பதாகையில் குறிப்பிடப்பட்டுள்ள தேதி: 19.08.2026',
      en: 'Date displayed on stage backdrop: 19.08.2026',
    },
  },
  {
    id: 'executive-meeting-hall',
    src: OFFICIAL_ASSETS.executiveMeetingHall,
    width: 1024,
    height: 576,
    category: 'events',
    displayMode: 'cover',
    objectPosition: 'object-[50%_18%]',
    aspectClass: 'aspect-[4/3]',
    title: {
      ta: 'நிர்வாகிகள் மற்றும் உறுப்பினர் ஆலோசனைக் கூட்டம்',
      en: 'Executive & Members Consultative Meeting',
    },
    caption: {
      ta: 'சங்க நிர்வாகிகள் மற்றும் உறுப்பினர்கள் ஒருங்கிணைந்து பங்கேற்ற ஆலோசனைக் கூட்டம்.',
      en: 'Consultative meeting with association members and representatives seated together on stage.',
    },
    alt: {
      ta: 'குறும்பர் சங்க ஆலோசனைக் கூட்ட மேடையில் அமர்ந்திருக்கும் நிர்வாகிகள் மற்றும் உரையாற்றும் தலைவர்',
      en: 'Association members seated at the green and yellow draped stage table during a consultative meeting',
    },
  },
  {
    id: 'awareness-poster-unity',
    src: OFFICIAL_ASSETS.awarenessPosterUnity,
    width: 682,
    height: 1024,
    category: 'posters',
    displayMode: 'contain',
    aspectClass: 'aspect-[4/3]',
    title: {
      ta: 'அதிகாரப்பூர்வ சமூக விழிப்புணர்வு போஸ்டர் – ஒற்றுமையே பலம்',
      en: 'Official Social Awareness Poster – Unity Is Strength',
    },
    caption: {
      ta: 'உரிமைக்காக ஒன்றிணைவோம், முன்னேற்றத்திற்காக போராடுவோம் — குறும்பர் சங்கம் அதிகாரப்பூர்வ போஸ்டர்.',
      en: 'Official Kurumbar Sangam awareness poster calling for unity, dignity, and collective progress.',
    },
    alt: {
      ta: 'குறும்பர் சங்கம் ஒற்றுமையே பலம் அதிகாரப்பூர்வ விழிப்புணர்வு போஸ்டர்',
      en: 'Official Kurumbar Sangam awareness poster featuring State President K. P. Rajasimma Hegde and community unity message',
    },
  },
  {
    id: 'promotional-poster-green-gold',
    src: OFFICIAL_ASSETS.promotionalPosterGreenGold,
    width: 859,
    height: 1024,
    category: 'posters',
    displayMode: 'contain',
    aspectClass: 'aspect-[4/3]',
    title: {
      ta: 'குறும்பர் சங்கம் – பச்சை மற்றும் தங்க நிற விழிப்புணர்வு போஸ்டர்',
      en: 'Kurumbar Sangam – Green & Gold Promotional Poster',
    },
    caption: {
      ta: 'ஒன்றுபடுவோம் | உயர்வோம் | மாற்றுவோம் — குறும்பர் சங்கம் அதிகாரப்பூர்வ பிரசார போஸ்டர்.',
      en: 'Unite | Rise | Transform — Official green and gold Kurumbar Sangam promotional poster.',
    },
    alt: {
      ta: 'குறும்பர் சங்கம் ஒன்றுபடுவோம் உயர்வோம் மாற்றுவோம் பச்சை மற்றும் தங்க நிற போஸ்டர்',
      en: 'Green and gold Kurumbar Sangam promotional poster with association flags and emblem',
    },
  },
  {
    id: 'awareness-poster-equality',
    src: OFFICIAL_ASSETS.awarenessPosterEquality,
    width: 714,
    height: 1024,
    category: 'posters',
    displayMode: 'contain',
    aspectClass: 'aspect-[4/3]',
    title: {
      ta: 'சமத்துவ விழிப்புணர்வு போஸ்டர்',
      en: 'Equality & Representation Awareness Poster',
    },
    caption: {
      ta: 'சமத்துவம் மற்றும் பிரதிநிதித்துவம் குறித்த குறும்பர் சங்க விழிப்புணர்வு போஸ்டர்.',
      en: 'Kurumbar Sangam awareness poster emphasizing equality and fair democratic representation.',
    },
    alt: {
      ta: 'குறும்பர் சங்கம் சமத்துவம் இல்லாமல் ஜனநாயகம் இல்லை விழிப்புணர்வு போஸ்டர்',
      en: 'Kurumbar Sangam official awareness poster on equality and representation',
    },
  },
]
