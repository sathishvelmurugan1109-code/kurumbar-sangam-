import { OFFICIAL_ASSETS } from './gallery'

export type Language = 'ta' | 'en'

export const OFFICIAL_INFO = {
  phoneDisplay: '9750602103',
  phoneTel: 'tel:9750602103',
  whatsappNumber: '919750602103',
  whatsappBaseUrl: 'https://wa.me/919750602103',
  qualification: 'B.Com., B.L.',
  copyrightYear: 2026,
} as const

export function buildWhatsAppUrl(message: string): string {
  return `${OFFICIAL_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`
}

export interface NavItem {
  id: string
  href: string
  label: string
}

export interface HighlightCard {
  id: string
  title: string
  description: string
  icon: 'unity' | 'welfare' | 'education'
}

export interface EventCardItem {
  id: string
  galleryId: string
  image: string
  displayMode: 'cover' | 'contain'
  objectPosition?: string
  categoryTag: string
  title: string
  description: string
  verifiedDate?: string
}

export interface SampleAnnouncement {
  id: string
  tag: string
  title: string
  summary: string
  details: string
  note: string
}

export interface SiteContent {
  meta: {
    title: string
    orgName: string
    orgShort: string
    stateName: string
    motto: string
    presidentName: string
    presidentDesignation: string
    presidentFullDesignation: string
  }
  nav: NavItem[]
  header: {
    contactCta: string
    openMenuLabel: string
    closeMenuLabel: string
    languageToggleLabel: string
    skipToContent: string
  }
  hero: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    motto: string
    subtitle: string
    leaderLabel: string
    ctaAbout: string
    ctaContact: string
    ctaWhatsApp: string
    whatsappPrefill: string
    emblemCaption: string
    photoBadge1: string
    photoBadge2: string
    inspectPhotoHint: string
  }
  about: {
    eyebrow: string
    heading: string
    title: string
    paragraphs: string[]
    photoCaption: string
    highlights: HighlightCard[]
  }
  president: {
    eyebrow: string
    heading: string
    roleLine: string
    orgLine: string
    summary: string
    officialBadge: string
    emblemTabLabel: string
    stageTabLabel: string
    callBtn: string
    whatsappBtn: string
    copyBtn: string
    copiedLabel: string
    whatsappPrefill: string
    contactLabel: string
  }
  visionMission: {
    eyebrow: string
    heading: string
    subtitle: string
    visionTitle: string
    visionText: string
    missionTitle: string
    missionPoints: string[]
  }
  events: {
    eyebrow: string
    heading: string
    subtitle: string
    viewImageLabel: string
    items: EventCardItem[]
  }
  gallery: {
    eyebrow: string
    heading: string
    subtitle: string
    filters: {
      all: string
      events: string
      leader: string
      posters: string
    }
    openLightboxLabel: string
    closeLabel: string
    prevLabel: string
    nextLabel: string
    swipeHint: string
  }
  announcements: {
    eyebrow: string
    heading: string
    subtitle: string
    demoBannerTitle: string
    demoBannerText: string
    demoBadge: string
    readMoreLabel: string
    closeModalLabel: string
    whatsappUpdatesCta: string
    whatsappUpdatesPrefill: string
    postersHighlightTitle: string
    items: SampleAnnouncement[]
  }
  contact: {
    eyebrow: string
    heading: string
    subtitle: string
    officialCardTitle: string
    mobileLabel: string
    callBtn: string
    whatsappBtn: string
    copyBtn: string
    copiedLabel: string
    formTitle: string
    formSubtitle: string
    frontendNotice: string
    fields: {
      nameLabel: string
      namePlaceholder: string
      nameHint: string
      nameError: string
      mobileLabel: string
      mobilePlaceholder: string
      mobileHint: string
      mobileError: string
      subjectLabel: string
      subjectPlaceholder: string
      subjectHint: string
      subjectError: string
      messageLabel: string
      messagePlaceholder: string
      messageHint: string
      messageError: string
    }
    submitWhatsAppBtn: string
    submitDemoBtn: string
    resetBtn: string
    demoSuccessTitle: string
    demoSuccessText: string
    sendCapturedViaWhatsApp: string
    whatsappDefaultPrefill: string
  }
  footer: {
    description: string
    quickLinksTitle: string
    officialContactTitle: string
    presidentLabel: string
    contactLabel: string
    whatsappCta: string
    copyright: string
    backToTop: string
  }
  whatsappWidget: {
    buttonLabel: string
    title: string
    subtitle: string
    statusText: string
    quickTopicsLabel: string
    quickTopics: {
      label: string
      message: string
    }[]
    openDirectBtn: string
    directPrefill: string
    closeLabel: string
  }
}

export const SITE_CONTENT: Record<Language, SiteContent> = {
  ta: {
    meta: {
      title: 'குறும்பர் சங்கம் – தமிழ்நாடு | Kurumbar Sangam Tamil Nadu',
      orgName: 'குறும்பர் சங்கம் – தமிழ்நாடு',
      orgShort: 'குறும்பர் சங்கம்',
      stateName: 'தமிழ்நாடு',
      motto: 'ஒற்றுமை • உரிமை • முன்னேற்றம்',
      presidentName: 'K. P. ராஜசிம்ம ஹெக்டே',
      presidentDesignation: 'மாநில தலைவர், குறும்பர் சங்கம்',
      presidentFullDesignation: 'மாநில தலைவர், குறும்பர் சங்கம் – தமிழ்நாடு',
    },
    nav: [
      { id: 'home', href: '#home', label: 'முகப்பு' },
      { id: 'about', href: '#about', label: 'எங்களைப் பற்றி' },
      { id: 'president', href: '#president', label: 'தலைவர்' },
      { id: 'vision', href: '#vision', label: 'நோக்கம்' },
      { id: 'events', href: '#events', label: 'நிகழ்வுகள்' },
      { id: 'gallery', href: '#gallery', label: 'புகைப்படங்கள்' },
      { id: 'announcements', href: '#announcements', label: 'அறிவிப்புகள்' },
      { id: 'contact', href: '#contact', label: 'தொடர்புக்கு' },
    ],
    header: {
      contactCta: 'தொடர்புக்கு',
      openMenuLabel: 'பட்டியல் திறக்க',
      closeMenuLabel: 'பட்டியல் மூட',
      languageToggleLabel: 'மொழியை மாற்றவும்',
      skipToContent: 'முதன்மை உள்ளடக்கத்திற்குச் செல்லவும்',
    },
    hero: {
      eyebrow: 'அதிகாரப்பூர்வ தகவல் தளம் • தமிழ்நாடு',
      headingLine1: 'குறும்பர் சங்கம்',
      headingLine2: 'தமிழ்நாடு',
      motto: 'ஒற்றுமை • உரிமை • முன்னேற்றம்',
      subtitle: 'நமது சமூகத்தின் ஒற்றுமை, வளர்ச்சி மற்றும் நலனுக்காக ஒன்றிணைவோம்.',
      leaderLabel: 'மாநில தலைமை',
      ctaAbout: 'எங்களைப் பற்றி அறிய',
      ctaContact: 'தொடர்பு கொள்ள',
      ctaWhatsApp: 'WhatsApp மூலம் தொடர்பு கொள்ள',
      whatsappPrefill:
        'வணக்கம் ஐயா, குறும்பர் சங்கம் – தமிழ்நாடு இணையதளம் வழியாகத் தொடர்பு கொள்கிறேன்.',
      emblemCaption: 'பாரம்பரியம் | பண்பாடு | முன்னேற்றம்',
      photoBadge1: 'மாநில பொதுக்கூட்டம்',
      photoBadge2: 'தலைவர் சிறப்புரை',
      inspectPhotoHint: 'படத்தை முழுமையாகப் பார்க்க கிளிக் செய்க',
    },
    about: {
      eyebrow: 'எங்கள் அமைப்பு',
      heading: 'எங்களைப் பற்றி',
      title: 'குறும்பர் சங்கம் – தமிழ்நாடு',
      paragraphs: [
        'குறும்பர் சங்கம் – தமிழ்நாடு என்பது சமூக ஒற்றுமை, பரஸ்பர ஒத்துழைப்பு மற்றும் கூட்டு முன்னேற்றத்தை மையமாகக் கொண்டு செயல்படும் ஒரு சமூக அமைப்பாகும். தமிழ்நாடு முழுவதும் உள்ள சமூக உறுப்பினர்களை ஒருங்கிணைத்து, சமூக நலன் மற்றும் முன்னேற்றத்திற்கான ஆக்கப்பூர்வமான பாதையை உருவாக்குவதே எங்களின் முதன்மை நோக்கமாகும்.',
        'கல்வி விழிப்புணர்வு, இளைஞர்களின் திறன் வளர்ச்சி, சமூக நிகழ்வுகளில் உறுப்பினர்களின் பங்கேற்பு மற்றும் நமது பாரம்பரிய பண்பாட்டு அடையாளத்தைப் பாதுகாத்தல் ஆகியவற்றில் சங்கம் தொடர்ந்து கவனம் செலுத்தி வருகிறது. சம மரியாதை, ஒற்றுமை மற்றும் சமூக மேம்பாடு ஆகிய விழுமியங்களுடன் அனைவரையும் இணைத்துச் செயல்படுகிறோம்.',
      ],
      photoCaption: 'சங்க நிர்வாகிகள் மற்றும் உறுப்பினர்கள் பங்கேற்ற ஆலோசனைக் கூட்டம்',
      highlights: [
        {
          id: 'unity',
          title: 'ஒற்றுமை',
          description:
            'தமிழ்நாடு முழுவதும் உள்ள சமூக உறுப்பினர்களை ஒரே குடையின் கீழ் இணைத்து வலுவான சமூக ஒற்றுமையை உருவாக்குதல்.',
          icon: 'unity',
        },
        {
          id: 'welfare',
          title: 'சமூக நலன்',
          description:
            'சமூக நல நடவடிக்கைகள், உறுப்பினர் பங்கேற்பு மற்றும் சம மரியாதையுடன் கூடிய சமூக மேம்பாட்டை ஊக்குவித்தல்.',
          icon: 'welfare',
        },
        {
          id: 'education',
          title: 'கல்வி மற்றும் முன்னேற்றம்',
          description:
            'கல்வி விழிப்புணர்வு, இளைஞர் திறன் வளர்ச்சி மற்றும் பாரம்பரிய பண்பாட்டுடன் இணைந்த எதிர்கால முன்னேற்றத்திற்கு வழிகாட்டுதல்.',
          icon: 'education',
        },
      ],
    },
    president: {
      eyebrow: 'மாநில தலைமை',
      heading: 'மாநில தலைவர் அறிமுகம்',
      roleLine: 'மாநில தலைவர்',
      orgLine: 'குறும்பர் சங்கம் – தமிழ்நாடு',
      summary:
        'சமூக ஒற்றுமை, சம உரிமை, கல்வி விழிப்புணர்வு மற்றும் இளைஞர் முன்னேற்றத்திற்காக தமிழ்நாடு முழுவதும் உள்ள குறும்பர் சங்க உறுப்பினர்களை ஒருங்கிணைத்து வழிநடத்தும் மாநில தலைவர்.',
      officialBadge: 'அதிகாரப்பூர்வ மாநில தலைமை',
      emblemTabLabel: 'தலைவர் இலச்சினை',
      stageTabLabel: 'மேடை உரை',
      callBtn: 'அழைக்க: 9750602103',
      whatsappBtn: 'WhatsApp தொடர்பு',
      copyBtn: 'எண்ணை நகலெடு',
      copiedLabel: 'நகலெடுக்கப்பட்டது!',
      whatsappPrefill:
        'வணக்கம் K. P. ராஜசிம்ம ஹெக்டே ஐயா, குறும்பர் சங்கம் – தமிழ்நாடு சார்பாகத் தொடர்பு கொள்கிறேன்.',
      contactLabel: 'அதிகாரப்பூர்வ தொடர்பு எண்',
    },
    visionMission: {
      eyebrow: 'எங்கள் வழிகாட்டி',
      heading: 'தொலைநோக்கு மற்றும் செயல்நோக்கம்',
      subtitle: 'ஒற்றுமை, கல்வி மற்றும் சம உரிமையுடன் கூடிய வளமான எதிர்காலத்தை நோக்கி',
      visionTitle: 'தொலைநோக்கு (Vision)',
      visionText:
        'சமூக ஒற்றுமை, கல்வி வளர்ச்சி, சம உரிமை மற்றும் முன்னேற்றத்தை நோக்கமாகக் கொண்ட சமூகத்தை உருவாக்குதல்.',
      missionTitle: 'செயல்நோக்கம் (Mission)',
      missionPoints: [
        'சமூக ஒற்றுமையை வலுப்படுத்துதல்.',
        'கல்வி விழிப்புணர்வை உருவாக்குதல்.',
        'இளைஞர்களின் திறன் வளர்ச்சியை ஊக்குவித்தல்.',
        'சமூக நல நடவடிக்கைகளில் பங்கேற்பு.',
        'கலாச்சார மற்றும் பாரம்பரிய விழிப்புணர்வு.',
      ],
    },
    events: {
      eyebrow: 'சங்க செயல்பாடுகள்',
      heading: 'எங்கள் நிகழ்வுகள்',
      subtitle:
        'சமூக ஒற்றுமை, ஆலோசனை மற்றும் விழிப்புணர்வை வலுப்படுத்தும் குறும்பர் சங்கத்தின் முக்கிய நிகழ்வுகள் மற்றும் சந்திப்புகள்.',
      viewImageLabel: 'படத்தைக் காண்க',
      items: [
        {
          id: 'public-meetings',
          galleryId: 'public-meeting-podium',
          image: OFFICIAL_ASSETS.publicMeetingPodium,
          displayMode: 'cover',
          objectPosition: 'object-[50%_18%]',
          categoryTag: 'பொதுக்கூட்டம்',
          title: 'பொதுக்கூட்டங்கள்',
          description:
            'பச்சை மற்றும் மஞ்சள் சங்கக் கொடிகள், பெருந்திரளான உறுப்பினர்கள் முன்னிலையில் சமூக ஒற்றுமை மற்றும் முன்னேற்றம் குறித்து நடைபெறும் பொதுக்கூட்டங்கள்.',
        },
        {
          id: 'state-meetings',
          galleryId: 'state-level-conference',
          image: OFFICIAL_ASSETS.stateLevelConference,
          displayMode: 'cover',
          objectPosition: 'object-[50%_15%]',
          categoryTag: 'மாநில நிகழ்வு',
          title: 'மாநில அளவிலான கூட்டங்கள்',
          description:
            'தமிழ்நாடு முழுவதும் உள்ள நிர்வாகிகள் மற்றும் பிரதிநிதிகள் பங்கேற்று சமூகக் கோரிக்கைகள் மற்றும் வளர்ச்சித் திட்டங்களை விவாதிக்கும் மாநில அளவிலான கூட்டங்கள்.',
          verifiedDate: '19.08.2026 (மேடை பதாகை)',
        },
        {
          id: 'member-gatherings',
          galleryId: 'executive-meeting-hall',
          image: OFFICIAL_ASSETS.executiveMeetingHall,
          displayMode: 'cover',
          objectPosition: 'object-[50%_18%]',
          categoryTag: 'உறுப்பினர் சந்திப்பு',
          title: 'உறுப்பினர் சந்திப்புகள்',
          description:
            'சங்க உறுப்பினர்கள் நேரில் சந்தித்து கருத்துகளைப் பகிர்ந்துகொண்டு சமூக ஒற்றுமையை வலுப்படுத்தும் ஒருங்கிணைப்பு நிகழ்வுகள்.',
        },
        {
          id: 'awareness-programs',
          galleryId: 'awareness-poster-unity',
          image: OFFICIAL_ASSETS.awarenessPosterUnity,
          displayMode: 'contain',
          categoryTag: 'விழிப்புணர்வு',
          title: 'சமூக விழிப்புணர்வு நிகழ்ச்சிகள்',
          description:
            'சமூக உரிமை, கல்வி விழிப்புணர்வு மற்றும் கூட்டு எழுச்சியை முன்னெடுக்கும் அதிகாரப்பூர்வ விழிப்புணர்வு பிரசாரங்கள் மற்றும் நிகழ்ச்சிகள்.',
        },
        {
          id: 'consultative-meetings',
          galleryId: 'leader-speech-stage',
          image: OFFICIAL_ASSETS.leaderSpeechStage,
          displayMode: 'cover',
          objectPosition: 'object-[50%_15%]',
          categoryTag: 'ஆலோசனை',
          title: 'ஆலோசனைக் கூட்டங்கள்',
          description:
            'சமூகத்தின் அடுத்தகட்ட வளர்ச்சி, கல்வி வழிகாட்டுதல் மற்றும் நலத்திட்ட செயல்பாடுகள் குறித்து நிர்வாகிகள் நடத்தும் ஆலோசனைக் கூட்டங்கள்.',
        },
      ],
    },
    gallery: {
      eyebrow: 'நிகழ்வு ஆவணங்கள்',
      heading: 'புகைப்படத் தொகுப்பு',
      subtitle:
        'குறும்பர் சங்கத்தின் பொதுக்கூட்டங்கள், தலைவர் உரைகள் மற்றும் அதிகாரப்பூர்வ விழிப்புணர்வு போஸ்டர்கள். எந்தப் படத்தையும் கிளிக் செய்து முழுத் திரையில் காணலாம்.',
      filters: {
        all: 'அனைத்தும்',
        events: 'நிகழ்வுகள்',
        leader: 'தலைவர்',
        posters: 'போஸ்டர்கள்',
      },
      openLightboxLabel: 'படத்தை பெரிதாக்கி பார்க்கவும்',
      closeLabel: 'மூடுக',
      prevLabel: 'முந்தைய படம்',
      nextLabel: 'அடுத்த படம்',
      swipeHint: 'விசைப்பலகை அம்புக்குறிகள் அல்லது ஸ்வைப் மூலம் மாற்றலாம்',
    },
    announcements: {
      eyebrow: 'தகவல் பலகை',
      heading: 'அறிவிப்புகள் மற்றும் செய்திகள்',
      subtitle:
        'சங்க அறிவிப்புகள் மற்றும் விழிப்புணர்வு தகவல்களைப் பகிர்வதற்கான பிரிவு.',
      demoBannerTitle: 'மாதிரி உள்ளடக்க அறிவிப்பு (Demonstration Content)',
      demoBannerText:
        'கீழே உள்ள அறிவிப்பு அட்டைகள் இணையதள வடிவமைப்பு காட்சிக்காக உருவாக்கப்பட்ட மாதிரிகள் மட்டுமே. அதிகாரப்பூர்வ அறிவிப்புகள் மற்றும் நேரடித் தகவல்களுக்கு மாநில தலைமையின் WhatsApp அல்லது தொடர்பு எண்ணை அணுகவும்.',
      demoBadge: 'மாதிரி அறிவிப்பு',
      readMoreLabel: 'மேலும் படிக்க',
      closeModalLabel: 'மூடுக',
      whatsappUpdatesCta: 'WhatsApp-இல் நேரடித் தகவல் பெற',
      whatsappUpdatesPrefill:
        'வணக்கம், குறும்பர் சங்கம் – தமிழ்நாடு அதிகாரப்பூர்வ அறிவிப்புகள் மற்றும் நிகழ்வுத் தகவல்களை அறிய விரும்புகிறேன்.',
      postersHighlightTitle: 'அதிகாரப்பூர்வ விழிப்புணர்வு போஸ்டர்கள்',
      items: [
        {
          id: 'sample-1',
          tag: 'மாதிரி அறிவிப்பு',
          title: 'மாவட்ட வாரியான உறுப்பினர் ஒருங்கிணைப்பு தகவல் (மாதிரி)',
          summary:
            'இது இணையதள மாதிரி அறிவிப்பு அட்டை. தமிழ்நாடு முழுவதும் உள்ள உறுப்பினர்கள் சங்க நடவடிக்கைகளில் இணைந்து செயல்படுவதற்கான அறிவிப்புகளை இங்கு வெளியிடலாம்.',
          details:
            'குறிப்பு: இது அதிகாரப்பூர்வ நிகழ்வு அறிவிப்பு அல்ல; இணையதளத்தின் அறிவிப்புப் பகுதி எவ்வாறு தோன்றும் என்பதைக் காட்டும் மாதிரி உள்ளடக்கம் மட்டுமே. உண்மையான கூட்டத் தேதி, இடம் மற்றும் அதிகாரப்பூர்வ அறிவிப்புகளுக்கு 9750602103 என்ற எண்ணில் WhatsApp அல்லது தொலைபேசி மூலம் தொடர்பு கொள்ளவும்.',
          note: 'Frontend-only மாதிரி அட்டை • சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ தேதி சேர்க்கப்படவில்லை',
        },
        {
          id: 'sample-2',
          tag: 'மாதிரி அறிவிப்பு',
          title: 'மாணவர் கல்வி மற்றும் இளைஞர் திறன் விழிப்புணர்வு (மாதிரி)',
          summary:
            'கல்வி வழிகாட்டுதல் மற்றும் இளைஞர் முன்னேற்ற நிகழ்ச்சிகள் குறித்த எதிர்கால அறிவிப்புகளைப் பகிர்வதற்கான மாதிரி அட்டை.',
          details:
            'குறிப்பு: இது வடிவமைப்பு காட்சிக்கான மாதிரி அறிவிப்பு மட்டுமே. குறும்பர் சங்கத்தின் கல்வி மற்றும் சமூக நல செயல்பாடுகள் குறித்த அதிகாரப்பூர்வ விவரங்களுக்கு நேரடியாக 9750602103 என்ற தொடர்பு எண்ணை அணுகவும்.',
          note: 'Frontend-only மாதிரி அட்டை • சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ தேதி சேர்க்கப்படவில்லை',
        },
        {
          id: 'sample-3',
          tag: 'மாதிரி அறிவிப்பு',
          title: 'சமூக விழிப்புணர்வு மற்றும் ஆலோசனைக் கூட்டத் தகவல்கள் (மாதிரி)',
          summary:
            'வரவிருக்கும் ஆலோசனைக் கூட்டங்கள் மற்றும் பொதுக்கூட்ட அறிவிப்புகளை உறுப்பினர்களுக்குத் தெரிவிக்கப் பயன்படும் மாதிரி அட்டை.',
          details:
            'குறிப்பு: இந்த அட்டை முன்மாதிரி (Demonstration) நோக்கத்திற்காக மட்டுமே வழங்கப்பட்டுள்ளது. அதிகாரப்பூர்வ கூட்ட அறிவிப்புகளைப் பெற WhatsApp மூலம் நேரடியாகத் தொடர்பு கொள்ளலாம்.',
          note: 'Frontend-only மாதிரி அட்டை • சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ தேதி சேர்க்கப்படவில்லை',
        },
      ],
    },
    contact: {
      eyebrow: 'நேரடித் தொடர்பு',
      heading: 'தொடர்பு கொள்ள',
      subtitle:
        'குறும்பர் சங்கம் – தமிழ்நாடு தொடர்பான தகவல்கள், உறுப்பினர் இணைப்பு மற்றும் ஆலோசனைகளுக்கு நேரடியாக அழைக்கவும் அல்லது WhatsApp மூலம் செய்தி அனுப்பவும்.',
      officialCardTitle: 'அதிகாரப்பூர்வ தொடர்பு விவரம்',
      mobileLabel: 'கைபேசி எண்',
      callBtn: 'இப்போதே அழைக்க',
      whatsappBtn: 'WhatsApp செய்தி',
      copyBtn: 'எண்ணை நகலெடு',
      copiedLabel: '9750602103 நகலெடுக்கப்பட்டது!',
      formTitle: 'WhatsApp செய்தி / தொடர்பு படிவம்',
      formSubtitle:
        'கீழே உள்ள விவரங்களைப் பூர்த்தி செய்து ஒரே கிளிக்கில் WhatsApp வழியாக அதிகாரப்பூர்வ எண்ணிற்குச் செய்தி அனுப்பலாம்.',
      frontendNotice:
        'குறிப்பு: இது Frontend-only இணையதளம் என்பதால் இந்தப் படிவம் எந்த சர்வரிலும் சேமிக்கப்படுவதில்லை. உங்கள் செய்தியை உடனடியாக WhatsApp வழியாக 9750602103 என்ற எண்ணிற்கு அனுப்பலாம்.',
      fields: {
        nameLabel: 'உங்கள் பெயர்',
        namePlaceholder: 'உங்கள் முழுப் பெயரை உள்ளிடவும்',
        nameHint: 'குறைந்தது 2 எழுத்துகள் உள்ளிடவும்',
        nameError: 'தயவுசெய்து உங்கள் பெயரைச் சரியாக உள்ளிடவும் (குறைந்தது 2 எழுத்துகள்).',
        mobileLabel: 'கைபேசி எண்',
        mobilePlaceholder: 'எ.கா: 9876543210',
        mobileHint: '10 இலக்க இந்திய கைபேசி எண்',
        mobileError: 'தயவுசெய்து சரியான 10 இலக்க கைபேசி எண்ணை உள்ளிடவும்.',
        subjectLabel: 'பொருள்',
        subjectPlaceholder: 'எ.கா: உறுப்பினர் இணைப்பு / சங்கத் தகவல்',
        subjectHint: 'உங்கள் செய்தியின் தலைப்பைச் சுருக்கமாக எழுதவும்',
        subjectError: 'தயவுசெய்து செய்தியின் பொருளை உள்ளிடவும்.',
        messageLabel: 'உங்கள் செய்தி',
        messagePlaceholder: 'உங்கள் கருத்து அல்லது விவரத்தை இங்கே எழுதவும்...',
        messageHint: 'குறைந்தது 10 எழுத்துகள் உள்ளிடவும்',
        messageError: 'தயவுசெய்து குறைந்தது 10 எழுத்துகள் கொண்ட செய்தியை உள்ளிடவும்.',
      },
      submitWhatsAppBtn: 'WhatsApp மூலம் அனுப்பவும்',
      submitDemoBtn: 'மாதிரி படிவத்தைச் சரிபார்க்கவும்',
      resetBtn: 'மீட்டமைக்க',
      demoSuccessTitle: 'படிவ விவரங்கள் சரிபார்க்கப்பட்டன (Frontend Demo)',
      demoSuccessText:
        'இது சர்வர் இல்லாத Frontend-only காட்சி உறுதிப்படுத்தல் ஆகும். கீழே உள்ள பொத்தானை அழுத்தி உங்கள் செய்தியை நேரடியாக WhatsApp-இல் அனுப்பலாம்.',
      sendCapturedViaWhatsApp: 'இந்தச் செய்தியை WhatsApp-இல் அனுப்புக',
      whatsappDefaultPrefill:
        'வணக்கம் ஐயா, குறும்பர் சங்கம் – தமிழ்நாடு குறித்துத் தொடர்பு கொள்கிறேன்.',
    },
    footer: {
      description:
        'சமூக ஒற்றுமை, சம உரிமை, கல்வி விழிப்புணர்வு மற்றும் முன்னேற்றத்திற்காக ஒன்றிணைந்து செயல்படும் குறும்பர் சங்கம் – தமிழ்நாடு.',
      quickLinksTitle: 'விரைவு இணைப்புகள்',
      officialContactTitle: 'அதிகாரப்பூர்வ தொடர்பு',
      presidentLabel: 'மாநில தலைவர்:',
      contactLabel: 'தொடர்பு எண்:',
      whatsappCta: 'WhatsApp-இல் இணைக',
      copyright: '© 2026 குறும்பர் சங்கம் – தமிழ்நாடு. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      backToTop: 'மேலே செல்ல',
    },
    whatsappWidget: {
      buttonLabel: 'WhatsApp தொடர்பு',
      title: 'குறும்பர் சங்கம் – WhatsApp',
      subtitle: 'மாநில தலைமை நேரடித் தொடர்பு (9750602103)',
      statusText: 'WhatsApp வழியாக உடனடிச் செய்தி அனுப்பவும்',
      quickTopicsLabel: 'விரைவுத் தலைப்பைத் தேர்ந்தெடுக்கவும்:',
      quickTopics: [
        {
          label: 'சங்க உறுப்பினர் தகவல்',
          message:
            'வணக்கம் ஐயா, குறும்பர் சங்கம் – தமிழ்நாடு உறுப்பினர் இணைப்பு குறித்த விவரம் அறிய விரும்புகிறேன்.',
        },
        {
          label: 'நிகழ்வு & கூட்ட விவரம்',
          message:
            'வணக்கம் ஐயா, குறும்பர் சங்கத்தின் வரவிருக்கும் கூட்டங்கள் மற்றும் நிகழ்வுகள் குறித்து அறிய விரும்புகிறேன்.',
        },
        {
          label: 'நேரடித் தொடர்பு / ஆலோசனை',
          message:
            'வணக்கம் K. P. ராஜசிம்ம ஹெக்டே ஐயா, குறும்பர் சங்கம் – தமிழ்நாடு தொடர்பாகப் பேச விரும்புகிறேன்.',
        },
      ],
      openDirectBtn: 'WhatsApp உரையாடலைத் தொடங்கவும்',
      directPrefill:
        'வணக்கம் ஐயா, குறும்பர் சங்கம் – தமிழ்நாடு இணையதளம் வழியாகத் தொடர்பு கொள்கிறேன்.',
      closeLabel: 'மூடுக',
    },
  },
  en: {
    meta: {
      title: 'Kurumbar Sangam – Tamil Nadu | குறும்பர் சங்கம் – தமிழ்நாடு',
      orgName: 'Kurumbar Sangam – Tamil Nadu',
      orgShort: 'Kurumbar Sangam',
      stateName: 'Tamil Nadu',
      motto: 'Unity • Rights • Progress',
      presidentName: 'K. P. Rajasimma Hegde',
      presidentDesignation: 'State President, Kurumbar Sangam',
      presidentFullDesignation: 'State President, Kurumbar Sangam – Tamil Nadu',
    },
    nav: [
      { id: 'home', href: '#home', label: 'Home' },
      { id: 'about', href: '#about', label: 'About Us' },
      { id: 'president', href: '#president', label: 'President' },
      { id: 'vision', href: '#vision', label: 'Vision' },
      { id: 'events', href: '#events', label: 'Events' },
      { id: 'gallery', href: '#gallery', label: 'Gallery' },
      { id: 'announcements', href: '#announcements', label: 'Updates' },
      { id: 'contact', href: '#contact', label: 'Contact' },
    ],
    header: {
      contactCta: 'Contact',
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
      languageToggleLabel: 'Switch language',
      skipToContent: 'Skip to main content',
    },
    hero: {
      eyebrow: 'Official Information Portal • Tamil Nadu',
      headingLine1: 'Kurumbar Sangam',
      headingLine2: 'Tamil Nadu',
      motto: 'Unity • Rights • Progress',
      subtitle:
        'Uniting for the solidarity, growth, welfare, and dignified advancement of our community.',
      leaderLabel: 'State Leadership',
      ctaAbout: 'About the Sangam',
      ctaContact: 'Contact Us',
      ctaWhatsApp: 'Connect on WhatsApp',
      whatsappPrefill:
        'Hello Sir, I am reaching out via the Kurumbar Sangam – Tamil Nadu website.',
      emblemCaption: 'Heritage | Culture | Progress',
      photoBadge1: 'State Public Meeting',
      photoBadge2: 'Leadership Address',
      inspectPhotoHint: 'Click any photo to view full size',
    },
    about: {
      eyebrow: 'Our Organization',
      heading: 'About Us',
      title: 'Kurumbar Sangam – Tamil Nadu',
      paragraphs: [
        'Kurumbar Sangam – Tamil Nadu is a community organization dedicated to fostering unity, social welfare, and collective advancement. Bringing together community members across Tamil Nadu, the association works constructively toward shared growth and mutual support.',
        'Our focus spans education awareness, youth skill development, active community participation, and preserving cultural heritage while upholding equal dignity and social progress for every member of the community.',
      ],
      photoCaption: 'Consultative meeting with association members and representatives',
      highlights: [
        {
          id: 'unity',
          title: 'Community Unity',
          description:
            'Bringing community members across Tamil Nadu together under a shared platform of solidarity and mutual respect.',
          icon: 'unity',
        },
        {
          id: 'welfare',
          title: 'Social Welfare',
          description:
            'Encouraging community participation, collective support, and social initiatives grounded in equal dignity.',
          icon: 'welfare',
        },
        {
          id: 'education',
          title: 'Education & Progress',
          description:
            'Promoting educational awareness, youth empowerment, and cultural heritage alongside modern social progress.',
          icon: 'education',
        },
      ],
    },
    president: {
      eyebrow: 'State Leadership',
      heading: 'State President Profile',
      roleLine: 'State President',
      orgLine: 'Kurumbar Sangam – Tamil Nadu',
      summary:
        'Leading Kurumbar Sangam – Tamil Nadu in uniting members across the state toward community solidarity, educational awareness, equal rights, and collective progress.',
      officialBadge: 'Official State Leadership',
      emblemTabLabel: 'Official Emblem',
      stageTabLabel: 'Stage Address',
      callBtn: 'Call: 9750602103',
      whatsappBtn: 'WhatsApp Direct',
      copyBtn: 'Copy Number',
      copiedLabel: 'Copied!',
      whatsappPrefill:
        'Hello K. P. Rajasimma Hegde Sir, I am contacting you regarding Kurumbar Sangam – Tamil Nadu.',
      contactLabel: 'Official Contact Number',
    },
    visionMission: {
      eyebrow: 'Guiding Principles',
      heading: 'Vision & Mission',
      subtitle: 'Building a united, educated, and progressive community grounded in equal dignity',
      visionTitle: 'Our Vision',
      visionText:
        'To build a community anchored in social unity, educational growth, equal rights, and shared progress.',
      missionTitle: 'Our Mission',
      missionPoints: [
        'Strengthening unity and solidarity across the community.',
        'Creating awareness and support for educational advancement.',
        'Encouraging skill development and opportunities for youth.',
        'Actively participating in community welfare initiatives.',
        'Preserving cultural identity and heritage awareness.',
      ],
    },
    events: {
      eyebrow: 'Activities & Gatherings',
      heading: 'Our Events & Activities',
      subtitle:
        'Key public meetings, executive consultations, and community awareness programs of Kurumbar Sangam – Tamil Nadu.',
      viewImageLabel: 'View Image',
      items: [
        {
          id: 'public-meetings',
          galleryId: 'public-meeting-podium',
          image: OFFICIAL_ASSETS.publicMeetingPodium,
          displayMode: 'cover',
          objectPosition: 'object-[50%_18%]',
          categoryTag: 'Public Meeting',
          title: 'Public Meetings',
          description:
            'Large-scale public gatherings bringing members together beneath the green and yellow flags of Kurumbar Sangam – Tamil Nadu.',
        },
        {
          id: 'state-meetings',
          galleryId: 'state-level-conference',
          image: OFFICIAL_ASSETS.stateLevelConference,
          displayMode: 'cover',
          objectPosition: 'object-[50%_15%]',
          categoryTag: 'State Conference',
          title: 'State-Level Meetings',
          description:
            'State-wide leadership and representative conferences addressing community priorities, representation, and unified action.',
          verifiedDate: '19.08.2026 (Stage Backdrop)',
        },
        {
          id: 'member-gatherings',
          galleryId: 'executive-meeting-hall',
          image: OFFICIAL_ASSETS.executiveMeetingHall,
          displayMode: 'cover',
          objectPosition: 'object-[50%_18%]',
          categoryTag: 'Member Meet',
          title: 'Member Gatherings',
          description:
            'Interactive association gatherings where members meet directly with office bearers to exchange ideas and strengthen unity.',
        },
        {
          id: 'awareness-programs',
          galleryId: 'awareness-poster-unity',
          image: OFFICIAL_ASSETS.awarenessPosterUnity,
          displayMode: 'contain',
          categoryTag: 'Awareness',
          title: 'Social Awareness Programs',
          description:
            'Community awareness campaigns and outreach highlighting education, equality, and unified community progress.',
        },
        {
          id: 'consultative-meetings',
          galleryId: 'leader-speech-stage',
          image: OFFICIAL_ASSETS.leaderSpeechStage,
          displayMode: 'cover',
          objectPosition: 'object-[50%_15%]',
          categoryTag: 'Consultation',
          title: 'Consultative Meetings',
          description:
            'Focused leadership discussions guiding welfare initiatives, youth engagement, and organizational coordination.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Visual Archive',
      heading: 'Photo Gallery',
      subtitle:
        'Authentic photographs from Kurumbar Sangam meetings, leadership addresses, and official awareness posters. Click any image to view in the lightbox.',
      filters: {
        all: 'All',
        events: 'Events',
        leader: 'President',
        posters: 'Posters',
      },
      openLightboxLabel: 'Open full-size image',
      closeLabel: 'Close',
      prevLabel: 'Previous image',
      nextLabel: 'Next image',
      swipeHint: 'Use arrow keys or swipe left/right to navigate',
    },
    announcements: {
      eyebrow: 'Notice Board',
      heading: 'Announcements & Updates',
      subtitle: 'Space dedicated to association notices, meeting bulletins, and awareness updates.',
      demoBannerTitle: 'Demonstration Sample Content',
      demoBannerText:
        'The cards below are clearly marked frontend-only demonstration placeholders and do not represent live official announcements. For verified updates, please contact the State President directly via phone or WhatsApp.',
      demoBadge: 'Demo Sample',
      readMoreLabel: 'Read More',
      closeModalLabel: 'Close',
      whatsappUpdatesCta: 'Request Updates on WhatsApp',
      whatsappUpdatesPrefill:
        'Hello, I would like to receive verified updates and announcements from Kurumbar Sangam – Tamil Nadu.',
      postersHighlightTitle: 'Official Campaign Posters',
      items: [
        {
          id: 'sample-1',
          tag: 'Demo Sample',
          title: 'District Member Coordination Notice (Sample)',
          summary:
            'Demonstration placeholder card showing how state-wide member coordination notices can be displayed on the portal.',
          details:
            'Note: This card is strictly demonstration content for layout preview and is not a published official announcement. Please reach out via WhatsApp or call 9750602103 for official association information.',
          note: 'Frontend-only sample card • No official event date claimed',
        },
        {
          id: 'sample-2',
          tag: 'Demo Sample',
          title: 'Education & Youth Skill Awareness Initiative (Sample)',
          summary:
            'Demonstration placeholder card illustrating how educational guidance and youth skill announcements can appear.',
          details:
            'Note: This is demonstration content only. For authentic details about upcoming educational or welfare initiatives, please connect directly via 9750602103.',
          note: 'Frontend-only sample card • No official event date claimed',
        },
        {
          id: 'sample-3',
          tag: 'Demo Sample',
          title: 'Consultative Meeting & Community Bulletin (Sample)',
          summary:
            'Demonstration placeholder card designed for publishing verified meeting notices and association bulletins.',
          details:
            'Note: Provided strictly as a frontend demonstration item. Use the official WhatsApp contact button to inquire about verified upcoming gatherings.',
          note: 'Frontend-only sample card • No official event date claimed',
        },
      ],
    },
    contact: {
      eyebrow: 'Get in Touch',
      heading: 'Contact Us',
      subtitle:
        'Reach out directly to the State President via phone call or WhatsApp for association information and community inquiries.',
      officialCardTitle: 'Official Contact Details',
      mobileLabel: 'Mobile Number',
      callBtn: 'Call Now',
      whatsappBtn: 'WhatsApp',
      copyBtn: 'Copy Number',
      copiedLabel: '9750602103 Copied!',
      formTitle: 'WhatsApp Composer & Contact Form',
      formSubtitle:
        'Fill in your details below to open a pre-formatted official message directly in WhatsApp.',
      frontendNotice:
        'Note: This is a frontend-only website with no backend server. Submitting via WhatsApp opens WhatsApp directly with your composed message to 9750602103.',
      fields: {
        nameLabel: 'Full Name',
        namePlaceholder: 'Enter your full name',
        nameHint: 'Minimum 2 characters required',
        nameError: 'Please enter your name (at least 2 characters).',
        mobileLabel: 'Mobile Number',
        mobilePlaceholder: 'e.g. 9876543210',
        mobileHint: 'Enter a 10-digit Indian mobile number',
        mobileError: 'Please enter a valid 10-digit mobile number.',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'e.g. Membership / Community Inquiry',
        subjectHint: 'Brief topic for your message',
        subjectError: 'Please enter a subject for your message.',
        messageLabel: 'Message',
        messagePlaceholder: 'Write your message or inquiry here...',
        messageHint: 'Minimum 10 characters required',
        messageError: 'Please enter a message of at least 10 characters.',
      },
      submitWhatsAppBtn: 'Send via WhatsApp',
      submitDemoBtn: 'Validate Demo Form',
      resetBtn: 'Reset',
      demoSuccessTitle: 'Form Validated (Frontend-Only Demo)',
      demoSuccessText:
        'No server submission occurred because this site is frontend-only. Use the button below to send this exact message directly via WhatsApp.',
      sendCapturedViaWhatsApp: 'Send This Message on WhatsApp',
      whatsappDefaultPrefill:
        'Hello Sir, I am contacting you regarding Kurumbar Sangam – Tamil Nadu.',
    },
    footer: {
      description:
        'Kurumbar Sangam – Tamil Nadu — uniting for social solidarity, equal rights, educational awareness, and community progress.',
      quickLinksTitle: 'Quick Links',
      officialContactTitle: 'Official Contact',
      presidentLabel: 'State President:',
      contactLabel: 'Contact:',
      whatsappCta: 'Connect on WhatsApp',
      copyright: '© 2026 Kurumbar Sangam – Tamil Nadu. All rights reserved.',
      backToTop: 'Back to top',
    },
    whatsappWidget: {
      buttonLabel: 'WhatsApp Contact',
      title: 'Kurumbar Sangam – WhatsApp',
      subtitle: 'Direct State Leadership Contact (9750602103)',
      statusText: 'Send an instant message via WhatsApp',
      quickTopicsLabel: 'Choose a quick topic:',
      quickTopics: [
        {
          label: 'Association Membership Info',
          message:
            'Hello Sir, I would like to know more about joining Kurumbar Sangam – Tamil Nadu.',
        },
        {
          label: 'Events & Meeting Details',
          message:
            'Hello Sir, I would like to inquire about upcoming meetings and events of Kurumbar Sangam – Tamil Nadu.',
        },
        {
          label: 'Direct Inquiry / Consultation',
          message:
            'Hello K. P. Rajasimma Hegde Sir, I would like to connect regarding Kurumbar Sangam – Tamil Nadu.',
        },
      ],
      openDirectBtn: 'Start WhatsApp Chat',
      directPrefill:
        'Hello Sir, I am reaching out via the Kurumbar Sangam – Tamil Nadu website.',
      closeLabel: 'Close',
    },
  },
}
