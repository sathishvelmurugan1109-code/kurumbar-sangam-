import type { ResearchDataset } from './types'

export const HISTORY_DATA_EN: ResearchDataset = {
  evidenceLabels: {
    documented: 'Documented History',
    academic: 'Academic Interpretation',
    oral: 'Oral Tradition',
  },
  evidenceDescriptions: {
    documented: 'Verified from official government notifications, Census records, constitutional orders, or peer-reviewed field documentation.',
    academic: 'Scholarly findings and ethnographic/linguistic analyses by university researchers and anthropologists.',
    oral: 'Community oral histories, songs, and traditional narratives — preserved respectfully as cultural heritage rather than proven historiography.',
  },
  illustrativeLabel: 'Illustrative Diagram • Not an Archival Photograph',
  sourcesHeadingLabel: 'Supporting Sources',
  readResearchDetailsLabel: 'Inspect Detailed Research & Source Notes',

  completeHistory: {
    sectionNumber: '03',
    eyebrow: 'Verified Community Documentation',
    heading: 'Complete Kurumbar History',
    subtitle: 'Evidence-based overview of the historical backgrounds, ecological adaptations, and distinct identities of Kurumbar, Kuruba, Kurumans, and Nilgiri–Wayanad Kurumba communities across South India.',
    introParagraphs: [
      'Across Tamil Nadu, Karnataka, and Kerala, historical records, ethnographic studies, and government schedules use related names — including Kurumbar, Kurumba, Kuruba, Kuruman, and Kurumans. Modern anthropology and legal scholarship stress that these names must not automatically be collapsed into a single uniform community.',
      'Plains pastoral and agrarian communities known as Kurumbar / Kuruba (historically associated with sheep rearing and coarse kambli wool weaving) differ substantially in ecology, language, and statutory classification from the forest- and hill-dwelling communities of the Nilgiris and Wayanad — such as the Alu Kurumba, Betta Kurumba, Jenu Kurumba, Mullu Kuruma, and Urali Kuruma.',
    ],
    methodologyNote:
      'Historical Responsibility Standard: No fabricated dynasties, unverified royal claims, invented inscriptions, or speculative timelines appear on this portal. Referenced statements are linked directly to their bibliography entries.',
    identityMatrixTitle: 'Community Identity Distinctions — Researched Separately',
    identityMatrixSubtitle:
      'Although sharing related etymological names, each group below has distinct regional, linguistic, occupational, and administrative records:',
    identityTableHeaders: {
      name: 'Community Name',
      region: 'Primary Regions',
      livelihood: 'Traditional Livelihood',
      language: 'Language / Dialect',
      classification: 'Documented Government Classification',
      sources: 'Sources',
    },
    identities: [
      {
        id: 'kurumbar-plains',
        name: 'Kurumbar / Kurumba Gounder (Plains)',
        region: 'Tamil Nadu plains, Kongu & northern Tamil districts',
        traditionalLivelihood: 'Pastoral sheep rearing, coarse wool (kambali) weaving, livestock penning, and settled agriculture',
        languageNotes: 'Tamil, with historical Kannada-contact household idioms in some northern pockets',
        officialClassificationNote: 'Listed under Tamil Nadu Most Backward Classes (MBC, Entry No. 17: "Kurumba, Kurumba Gounder") and the Central OBC list. ST synonym proposals remain subject to constitutional/RGI/NCST scrutiny.',
        evidence: 'documented',
        sourceIds: ['tn-bcmbcmw', 'thurston-1909', 'madras-hc-slsc'],
      },
      {
        id: 'kurumans-tn',
        name: 'Kurumans',
        region: 'Tamil Nadu (notably Dharmapuri, Vellore, Tiruvannamalai, and adjacent districts)',
        traditionalLivelihood: 'Historically pastoral/agrarian and rural crafts; increasingly transitioning into formal education and public/private employment',
        languageNotes: 'Tamil and regional Kannada-influenced spoken varieties',
        officialClassificationNote: 'Notified as a Scheduled Tribe (ST) across Tamil Nadu under the Constitution (ST) Order, 1950. Census 2011 population: 30,965.',
        evidence: 'documented',
        sourceIds: ['constitution-st-1950', 'census-2011', 'madras-hc-slsc'],
      },
      {
        id: 'kurumbas-nilgiris',
        name: 'Kurumbas (Nilgiris District)',
        region: 'The Nilgiris District, Tamil Nadu',
        traditionalLivelihood: 'Forest produce gathering, wild honey harvesting, ethnomedicine, hill agriculture, and rock/wall painting traditions',
        languageNotes: 'Distinct South Dravidian languages (Alu Kurumba, Betta Kurumba, Jenu Kurumba)',
        officialClassificationNote: 'Notified as a Scheduled Tribe (ST) specifically in the Nilgiris district and recognized as one of Tamil Nadu’s 6 PVTGs. Census 2011 population: 6,823.',
        evidence: 'documented',
        sourceIds: ['constitution-st-1950', 'mota-portal', 'census-2011'],
      },
      {
        id: 'alu-kurumba',
        name: 'Alu Kurumba (Palu Kurumba)',
        region: 'Southern slopes of the Nilgiris (Tamil Nadu) and Attappady border',
        traditionalLivelihood: 'Forest foraging, shifting/hill cultivation, bamboo crafts, and distinctive graphic wall painting',
        languageNotes: 'Alu Kurumba — South Dravidian language featuring Nilgiri centralized vowels (documented by Dieter Kapp & DoBeS)',
        officialClassificationNote: 'Anthropologically documented as a core subgroup within the Nilgiri Kurumba ST / PVTG cluster.',
        evidence: 'academic',
        sourceIds: ['dobes-mpi', 'kapp-1982', 'maheswaran-sna'],
      },
      {
        id: 'jenu-kurumba',
        name: 'Jenu Kurumba / Naiken (Jenu Kuruba)',
        region: 'Mysuru, Kodagu, Chamarajanagar (Karnataka), Nilgiris (TN), Wayanad (Kerala)',
        traditionalLivelihood: 'Traditional wild honey collection ("jenu" = honey), forest foraging, egalitarian sharing economy',
        languageNotes: 'South Dravidian language noted by DoBeS for its rare "tenseless" verb system',
        officialClassificationNote: 'Notified as ST & PVTG in Karnataka; studied alongside Naiken/Kattunayakan forest populations along the TN–Kerala border.',
        evidence: 'academic',
        sourceIds: ['bird-david-1987', 'dobes-mpi', 'demmer-2016'],
      },
      {
        id: 'betta-kurumba',
        name: 'Betta Kurumba (Kadu Kuruba)',
        region: 'Northern Nilgiris, Mysuru–Kodagu borderlands, Wayanad',
        traditionalLivelihood: 'Hill-slope subsistence ("betta" = hill), bamboo basketry, forest craft, and traditional elephant handling',
        languageNotes: 'Betta Kurumba — distinct South Dravidian language with complex suffixal verb morphology (Gail Coelho, 2003)',
        officialClassificationNote: 'Documented under Kadu Kuruba (ST) in Karnataka and hill Kurumba groups along the Nilgiri–Wayanad corridor.',
        evidence: 'academic',
        sourceIds: ['dobes-mpi', 'coelho-2003'],
      },
      {
        id: 'mullu-urali-kuruma',
        name: 'Mullu Kuruma & Urali Kuruma',
        region: 'Wayanad and Malabar region (Kerala), adjacent Nilgiri margins',
        traditionalLivelihood: 'Mullu Kuruma: settled paddy cultivation & landholding; Urali Kuruma: pottery, bamboo basketry, blacksmithing, and carpentry',
        languageNotes: 'Distinct South Dravidian dialects bridging Malayalam, Kannada, and Tamil',
        officialClassificationNote: 'Separately recognized Scheduled Tribes (ST) in Kerala; extensively studied in R. L. Rooksby (1961, SOAS).',
        evidence: 'documented',
        sourceIds: ['rooksby-1961', 'mota-portal'],
      },
    ],
    historicalArcTitle: 'Evidence-Based Historical Development',
    historicalArc: [
      {
        heading: 'Etymology & Ecological Naming',
        text: 'Ethnographic and linguistic sources frequently associate "Kurumbar / Kuruba" with pastoral sheep tending (kuriyadu / sheep). In the Western Ghats, subgroup prefixes — Alu, Jenu (honey), Betta (hill), Mullu (thorn), and Urali — reflect distinct ecological niches and occupational specializations.',
        evidence: 'academic',
        sourceIds: ['thurston-1909', 'dobes-mpi'],
      },
      {
        heading: 'Ancient Origins — Historical Scope',
        text: 'A single unified ancient origin or royal genealogy linking all Kurumbar/Kurumba groups has not been established by primary archaeology or epigraphy. Modern anthropology treats plains pastoralists and Western Ghats forest communities as distinct historical developments.',
        sourceIds: ['bird-david-1987'],
      },
      {
        heading: 'Colonial Ethnography & Its Limitations (1891–1909)',
        text: 'The 1891 Madras Census Report and Edgar Thurston & K. Rangachari (1909) compiled colonial hypotheses portraying hill Kurumbas and plains Kurubas as scattered remnants of an ancient Pallava/Kurumba power. Later peer-reviewed fieldwork, notably Nurit Bird-David (1987), demonstrated how colonial and early anthropological frameworks often produced stylized "ethnographic myths".',
        sourceIds: ['thurston-1909', 'bird-david-1987'],
      },
      {
        heading: 'Modern Social & Economic Transition (20th–21st Centuries)',
        text: 'Post-independence forest conservation laws, agrarian shifts, and urbanization reshaped both pastoral wool economies and forest-based livelihoods. Today, communities across Tamil Nadu, Karnataka, and Kerala increasingly pursue formal education, public employment, entrepreneurship, and democratic civic representation.',
        evidence: 'documented',
        sourceIds: ['census-2011', 'mota-portal', 'demmer-2016'],
      },
    ],
  },

  ancientReferences: {
    sectionNumber: '04',
    eyebrow: 'Historical & Epigraphic Review',
    heading: 'Ancient Historical References',
    subtitle: 'Separating Sangam-era context, Tondaimandalam folklore, epigraphic scholarship, and colonial-era hypotheses with strict academic honesty.',
    diagramCaption: 'Evidence Classification Map: Epigraphy, Oral Traditions & Colonial Compilations',
    intro:
      'Evaluating ancient references requires drawing a sharp boundary between documented inscriptions, literary context, regional oral traditions, and unverified 19th-century colonial assumptions.',
    records: [
      {
        heading: 'Sangam-Era Frontier Context (c. 300 BCE – 300 CE)',
        text: 'Classical Sangam literature references northern frontier populations (such as Vadukar, Aynar, and Vedar) along the northern Tamilakam borderlands corresponding to early Tondaimandalam. However, direct Sangam literary evidence linking the exact term "Kurumbar" to a specific sovereign dynasty is not documented in surviving texts.',
        evidence: 'academic',
        sourceIds: ['thurston-1909'],
      },
      {
        heading: 'Tondaimandalam "24 Kottams" & Kurumbar Medu Folklore',
        text: 'Local Tamil chronicles, Mackenzie Manuscripts, and 19th-century district manuals preserve oral legends describing early pastoral/chieftain settlements organized into 24 kottams in Tondaimandalam and earthen mounds called "Kurumbar medu", later subdued by Chola figure Adondai. Historians classify these narratives as regional folklore rather than verified primary epigraphy.',
        evidence: 'oral',
        sourceIds: ['thurston-1909'],
      },
      {
        heading: 'Historical Review of the Pallava–Kurumbar Hypothesis',
        text: 'The 1891 Madras Census Report and Thurston (1909) repeated a colonial theory claiming Kurumbas were descendants of the 7th-century Pallavas dispersed after Chola/Chalukya conflicts. Modern historians and epigraphists do not accept this hypothesis as proven history.',
        sourceIds: ['thurston-1909', 'bird-david-1987'],
      },
      {
        heading: 'Critique of Nilgiri Ethnographic Myths (Bird-David, 1987)',
        text: 'Published in Cambridge University Press’s Modern Asian Studies (Vol. 21, Issue 1, 1987), Nurit Bird-David’s fieldwork-based study exposed how 19th- and 20th-century accounts over-stylized Nilgiri Kurumbas as mystical forest sorcerers, urging scholars to examine indigenous communities on their actual social and ecological realities.',
        evidence: 'academic',
        sourceIds: ['bird-david-1987'],
      },
    ],
    colonialCritiqueTitle: 'Reading Colonial Records in Historical Context',
    colonialCritiqueBody:
      'Works such as Edgar Thurston & K. Rangachari’s Castes and Tribes of Southern India (1909) and the 1891 Madras Census are valuable historical archives, but they were authored through British colonial administrative lenses and rigid caste hierarchies. Their claims must always be cross-examined against contemporary peer-reviewed linguistics and anthropology (Bird-David, Kapp, Coelho, Demmer, DoBeS).',
  },

  heritageSections: [
    {
      id: 'lifestyle',
      sectionNumber: '05',
      eyebrow: 'Social Structure & Settlements',
      heading: 'Traditional Lifestyle & Community Leadership',
      subtitle: 'Contrasting plains pastoral village life with Western Ghats forest settlements and the traditional Muppan leadership council.',
      evidence: 'academic',
      diagramKind: 'lifestyle-settlement',
      diagramCaption: 'Settlement Patterns (Oor / Hadi / Pera / Sitthaal) & Traditional Muppan Council Diagram',
      overview:
        'Traditional life adapted closely to regional ecology: plains Kurumbar/Kuruba families lived in agrarian-pastoral rural settlements, whereas Nilgiri, Wayanad, and Kodagu Kurumba groups inhabited forest-edge hamlets governed by customary elders.',
      keyFacts: [
        {
          heading: 'Distinct Settlement Forms',
          text: 'Anthropological archives record distinct hamlet structures across subgroups: "Oor" in the Nilgiris, "Hadi" among Jenu Kurubas in Karnataka, permanent agricultural house clusters called "Pera" among Wayanad Mullu Kurumas, and "Sitthaal / Paadi" among Urali Kurumas.',
          evidence: 'academic',
          sourceIds: ['rooksby-1961', 'dobes-mpi', 'demmer-2016'],
        },
        {
          heading: 'Traditional Leadership: The Muppan / Moopan',
          text: 'Across Nilgiri, Wayanad, and Attappady Kurumba hamlets, the Muppan (or Moopan) served as the elder headman presiding over customary councils (kootam) to mediate disputes, guide marriage alliances, and lead ancestral and agricultural rituals.',
          evidence: 'academic',
          sourceIds: ['rooksby-1961', 'demmer-2016'],
        },
        {
          heading: 'Plains Rural Social Networks',
          text: 'In Tamil Nadu and Karnataka plains, pastoral Kurumbar/Kuruba households maintained cooperative grazing customs, village panchayat traditions, and seasonal exchanges with neighboring farming communities.',
          evidence: 'documented',
          sourceIds: ['thurston-1909'],
        },
      ],
      sourceIds: ['rooksby-1961', 'dobes-mpi', 'demmer-2016', 'thurston-1909'],
    },
    {
      id: 'occupations',
      sectionNumber: '06',
      eyebrow: 'Livelihoods & Rural Economy',
      heading: 'Traditional Occupations & Contributions',
      subtitle: 'Shepherding, coarse wool kambli weaving, wild honey collection, ethnobotany, artisanal crafts, and settled agriculture.',
      evidence: 'documented',
      diagramKind: 'occupations-pastoral-forest',
      diagramCaption: 'Traditional Livelihood Pillars: Pastoralism, Kambli Weaving, Honey Gathering, Basketry & Farming',
      overview:
        'Kurumbar and related communities played vital roles in South India’s rural economy — from livestock fertilization and woolen textiles in the plains to sustainable forest stewardship and craft production in the Western Ghats.',
      keyFacts: [
        {
          heading: 'Shepherding & Rural Livestock Contributions',
          text: 'Plains Kurumbar and Kuruba pastoralists specialized in rearing hardy indigenous sheep flocks. Seasonal sheep-penning on harvested fields supplied vital organic manure, directly supporting rural agricultural soil fertility.',
          evidence: 'documented',
          sourceIds: ['thurston-1909'],
        },
        {
          heading: 'Handwoven Coarse Wool (Kambali)',
          text: 'Spinning coarse sheep wool and weaving durable black/grey woolen blankets (kambali) on traditional looms formed a hallmark artisanal economy across Deccan and northern Tamil pastoral communities.',
          evidence: 'documented',
          sourceIds: ['thurston-1909'],
        },
        {
          heading: 'Forest Livelihoods, Honey Gathering & Ethnobotany',
          text: 'Jenu Kurumba and Alu Kurumba forest communities developed deep ecological mastery in cliff and tree wild-honey harvesting, root/tuber foraging, and traditional ethnomedicine using hundreds of documented Western Ghats medicinal plants.',
          evidence: 'academic',
          sourceIds: ['bird-david-1987', 'dobes-mpi', 'demmer-2016'],
        },
        {
          heading: 'Artisanal Crafts & Settled Agriculture',
          text: 'Urali Kuruma and Betta Kurumba artisans excelled in bamboo/cane basketry, pottery, blacksmithing, carpentry, and forest elephant care, while Mullu Kurumas in Wayanad have a long documented tradition of settled paddy agriculture.',
          evidence: 'academic',
          sourceIds: ['rooksby-1961', 'dobes-mpi'],
        },
      ],
      sourceIds: ['thurston-1909', 'bird-david-1987', 'dobes-mpi', 'rooksby-1961'],
    },
    {
      id: 'culture-heritage',
      sectionNumber: '07',
      eyebrow: 'Customs, Ethics & Worship',
      heading: 'Culture, Heritage & Religious Traditions',
      subtitle: 'Egalitarian sharing ethics, nature and ancestral reverence, regional folk shrines, and life-cycle rituals.',
      evidence: 'academic',
      diagramKind: 'culture-heritage',
      diagramCaption: 'Cultural Heritage Framework: Sharing Ethos, Nature Reverence, Ancestral Memory & Community Solidarity',
      overview:
        'Across regional variations, cultural life centers on ecological respect, mutual sharing, ancestral remembrance, and strong community solidarity.',
      keyFacts: [
        {
          heading: 'Indigenous Ethical Horizons & Sharing Ethos',
          text: 'Ulrich Demmer (Oxford University Press, 2016) and Nurit Bird-David (1987) document how Jēnu Kuṟumba moral communities prioritize egalitarian sharing, consensual ritual discourse, and a relational view of the forest environment.',
          evidence: 'academic',
          sourceIds: ['demmer-2016', 'bird-david-1987'],
        },
        {
          heading: 'Worship Practices & Sacred Landscapes',
          text: 'Hill communities revere forest spirits, sacred groves, ancestors, and regional deities such as Malleeshwaran, Kali, Mariyamma, and Bettu Chikkamma. Plains communities observe regional Tamil/Deccan folk and village temple traditions including Beerappa/Beereswara and Mariamman shrines.',
          evidence: 'academic',
          sourceIds: ['dobes-mpi', 'rooksby-1961', 'demmer-2016'],
        },
        {
          heading: 'Documented Life-Cycle Rituals',
          text: 'The Max Planck Institute DoBeS archive preserves audio-visual records of Nilgiri Kurumba wedding ceremonies, healing rites, formal ritual speeches, and funerary traditions.',
          evidence: 'documented',
          sourceIds: ['dobes-mpi'],
        },
      ],
      sourceIds: ['demmer-2016', 'bird-david-1987', 'dobes-mpi', 'rooksby-1961'],
    },
    {
      id: 'language-literature',
      sectionNumber: '08',
      eyebrow: 'South Dravidian Linguistics',
      heading: 'Language, Dialects & Oral Literature',
      subtitle: 'Endangered South Dravidian Kurumba languages archived by the Max Planck Institute (DoBeS), linguistic grammars, and oral traditions.',
      evidence: 'documented',
      diagramKind: 'language-dravidian',
      diagramCaption: 'South Dravidian Linguistic Matrix: Alu Kurumba, Betta Kurumba, Jenu Kurumba & Regional Contact',
      overview:
        'Linguistic field research reveals that Kurumba varieties belong to the South Dravidian family and possess remarkable grammatical features valued by international linguists.',
      keyFacts: [
        {
          heading: 'Alu Kurumba Language',
          text: 'Documented in depth by Prof. Dieter B. Kapp (1982) and the DoBeS project, Alu Kurumba exhibits centralized vowels — a distinctive phonological hallmark of the Nilgiri linguistic area.',
          evidence: 'documented',
          sourceIds: ['kapp-1982', 'dobes-mpi'],
        },
        {
          heading: 'Betta Kurumba Grammar',
          text: 'Analyzed in Gail Coelho’s doctoral dissertation (2003), Betta Kurumba bridges Tamil–Kannada border features and displays intricate suffixal verb morphology and non-finite clause-chaining.',
          evidence: 'documented',
          sourceIds: ['coelho-2003', 'dobes-mpi'],
        },
        {
          heading: 'Jenu Kurumba Linguistic Uniqueness',
          text: 'According to the DoBeS MPI documentation, Jenu Kurumba displays a rare typological trait among Dravidian languages: a "tenseless" verbal system using identical verb forms across past, present, and future contexts.',
          evidence: 'documented',
          sourceIds: ['dobes-mpi'],
        },
        {
          heading: 'Oral Literature & Regional Bhakti Context',
          text: 'Nilgiri Kurumba literary heritage is primarily oral — encompassing ritual discourses, myths, and folk songs. In neighboring Karnataka’s plains Kuruba tradition, 16th-century poet-saint Kanakadasa authored landmark Kannada Bhakti classics (noted distinctly as Karnataka Kuruba heritage). Distinct ancient written texts exclusive to Tamil Nadu Kurumbar are not documented in surviving historical archives.',
          evidence: 'academic',
          sourceIds: ['dobes-mpi', 'kapp-1982'],
        },
      ],
      sourceIds: ['dobes-mpi', 'kapp-1982', 'coelho-2003'],
    },
    {
      id: 'traditional-food',
      sectionNumber: '09',
      eyebrow: 'Culinary & Nutritional Heritage',
      heading: 'Traditional Food & Dietary Practices',
      subtitle: 'Indigenous millets (ragi and samai), wild forest honey, tubers, seasonal greens, and pastoral dairy foods.',
      evidence: 'academic',
      diagramKind: 'traditional-food',
      diagramCaption: 'Traditional Diet Overview: Finger Millet (Ragi), Little Millet (Samai), Wild Honey, Tubers & Dairy',
      overview:
        'Traditional diets reflected deep ecological self-sufficiency, balancing nutrient-dense dryland millets with seasonal forest produce or pastoral dairy staples.',
      keyFacts: [
        {
          heading: 'Millets & Highland Staples',
          text: 'Anthropological records highlight staple millets such as finger millet (ragi) and little millet (samai), complemented in hill-terrace and Wayanad communities by paddy rice, tapioca, and plantain.',
          evidence: 'academic',
          sourceIds: ['rooksby-1961', 'dobes-mpi'],
        },
        {
          heading: 'Forest Foraging & Communal Sharing',
          text: 'Among forest-dwelling Kurumba groups, wild tubers, seasonal forest fruits, edible greens, and wild honey formed vital nutrition — traditionally shared widely among kin within the hamlet.',
          evidence: 'academic',
          sourceIds: ['bird-david-1987', 'dobes-mpi'],
        },
        {
          heading: 'Plains Pastoral Diet',
          text: 'Plains pastoral Kurumbar/Kuruba households relied on millet porridge (ragi kali), pearl millet, milk, buttermilk, and regional Tamil festival dishes. Comprehensive archival recipe collections by Tamil Nadu district are not available in published historical records.',
          sourceIds: ['thurston-1909'],
        },
      ],
      sourceIds: ['dobes-mpi', 'rooksby-1961', 'bird-david-1987', 'thurston-1909'],
    },
    {
      id: 'traditional-clothing',
      sectionNumber: '10',
      eyebrow: 'Attire & Material Culture',
      heading: 'Traditional Clothing & Ornaments',
      subtitle: 'Handwoven wool kambali blankets, simple cotton garments, ceremonial beads, and modern transitions.',
      evidence: 'academic',
      diagramKind: 'traditional-clothing',
      diagramCaption: 'Traditional Attire Reference: Wool Kambali, Cotton Garments & Ceremonial Ornaments',
      overview:
        'Historical dress prioritized climate utility — heavy handwoven wool in windswept pastures and lightweight practical cotton or traditional forest-adapted attire in the Western Ghats.',
      keyFacts: [
        {
          heading: 'The Pastoral Kambali Blanket',
          text: 'For plains shepherds, the handwoven coarse wool kambali served simultaneously as protective outer clothing against rain and cold, shoulder wrap, and bedding.',
          evidence: 'documented',
          sourceIds: ['thurston-1909'],
        },
        {
          heading: 'Hill Attire & Traditional Ornaments',
          text: 'Historical ethnographies note minimal forest attire gradually supplemented by coarse cotton dhotis and saris through trade with neighboring communities, accented during ceremonies with bead necklaces and metallic ornaments.',
          evidence: 'academic',
          sourceIds: ['thurston-1909', 'rooksby-1961'],
        },
        {
          heading: 'District-Specific Archival Dress Records',
          text: 'Detailed museum records of district-specific historical Kurumbar garments across all Tamil Nadu regions are not available in published archives. Contemporary community members wear standard Tamil Nadu traditional (veshti, sari) and modern attire.',
          sourceIds: ['thurston-1909'],
        },
      ],
      sourceIds: ['thurston-1909', 'rooksby-1961'],
    },
    {
      id: 'festivals',
      sectionNumber: '11',
      eyebrow: 'Seasonal & Community Celebrations',
      heading: 'Festivals & Celebrations',
      subtitle: 'Agrarian sowing and harvest rituals, monsoon ceremonies, and Tamil Nadu cultural festivals.',
      evidence: 'academic',
      diagramKind: 'festivals-seasonal',
      diagramCaption: 'Seasonal Festival Cycle: Sowing Rites, Harvest Thanksgivings & Regional Celebrations',
      overview:
        'Community festivals align closely with agricultural cycles, monsoon renewal, ancestral gratitude, and collective feasting.',
      keyFacts: [
        {
          heading: 'Nilgiri, Wayanad & Attappady Seasonal Festivals',
          text: 'Anthropological literature documents seasonal agrarian and forest rituals including Vithuda, Bethe, Kambalam, and sowing/harvest poojas celebrated with communal meals, drumming, folk songs, and dances.',
          evidence: 'academic',
          sourceIds: ['dobes-mpi', 'rooksby-1961'],
        },
        {
          heading: 'Tamil Nadu Regional Festivals',
          text: 'Across Tamil Nadu, Kurumbar families celebrate Thai Pongal, Mattu Pongal (honoring cattle and livestock), Aadi Perukku, Deepavali, and annual clan/village temple festivals.',
          evidence: 'documented',
          sourceIds: ['thurston-1909'],
        },
        {
          heading: 'Ancestral Offerings & Solidarity',
          text: 'Collective offerings led by elders or the Muppan reinforce intergenerational memory and social harmony within settlements.',
          evidence: 'academic',
          sourceIds: ['demmer-2016', 'dobes-mpi'],
        },
      ],
      sourceIds: ['dobes-mpi', 'rooksby-1961', 'demmer-2016', 'thurston-1909'],
    },
    {
      id: 'arts-practices',
      sectionNumber: '12',
      eyebrow: 'Visual Arts, Music & Crafts',
      heading: 'Traditional Arts & Cultural Practices',
      subtitle: 'Nationally documented Alu Kurumba wall & rock-shelter painting heritage, ritual music, and bamboo craftsmanship.',
      evidence: 'documented',
      diagramKind: 'arts-alu-kurumba',
      diagramCaption: 'Alu Kurumba Graphic Art Heritage, Bamboo Craftsmanship & Traditional Folk Music',
      overview:
        'Artistic practices preserve ecological memory and oral history — led by the nationally recognized Alu Kurumba painting tradition of the Nilgiris.',
      keyFacts: [
        {
          heading: 'Alu Kurumba Graphic Painting Tradition',
          text: 'Historically painted on rock shelters (echoing ancient Eluthu Para rock art) and hut walls using natural earth and plant pigments, Alu Kurumba art depicts forest wildlife, honey collection, weddings, and rituals. It was documented for the Sangeet Natak Akademi by Dr. C. Maheswaran (former Director, Tribal Research Centre, Ooty).',
          evidence: 'documented',
          sourceIds: ['maheswaran-sna'],
        },
        {
          heading: 'Folk Music, Flutes & Percussion',
          text: 'The DoBeS archive records ritual songs, bamboo wind instruments, and traditional percussion ensembles performed during festivals, healing ceremonies, and funerary rites.',
          evidence: 'documented',
          sourceIds: ['dobes-mpi'],
        },
        {
          heading: 'Bamboo & Cane Craftsmanship',
          text: 'Intricate bamboo and reed basketry, winnowing trays, and traditional forest implements showcase generations of sustainable craft expertise among Betta and Urali Kuruma artisans.',
          evidence: 'academic',
          sourceIds: ['rooksby-1961', 'dobes-mpi'],
        },
      ],
      sourceIds: ['maheswaran-sna', 'dobes-mpi', 'rooksby-1961'],
    },
  ],

  geographicalDistribution: {
    sectionNumber: '13',
    eyebrow: 'Regional & Demographic Mapping',
    heading: 'Historical Geographical Distribution',
    subtitle: 'Documented distribution across Tamil Nadu, Karnataka, and Kerala, paired with verified Census of India 2011 Scheduled Tribe figures.',
    diagramCaption: 'South Indian Tri-Junction (Nilgiris–Wayanad–Mysuru) & Tamil Nadu Plains Distribution Diagram',
    intro:
      'Official census records and ethnographic maps show Kurumbar and related communities distributed across two broad ecological zones: the plains/plateaus of Tamil Nadu and Karnataka, and the Western Ghats tri-junction of Nilgiris, Wayanad, and Mysuru–Kodagu.',
    censusTitle: 'Verified Census of India 2011 — Tamil Nadu ST Data',
    censusMetrics: [
      {
        id: 'census-kurumans',
        label: 'Kurumans (Tamil Nadu ST)',
        value: '30,965',
        detail: 'Male: 15,949 • Female: 15,016 (~3.9% of Tamil Nadu’s total ST population)',
        sourceId: 'census-2011',
      },
      {
        id: 'census-kurumbas',
        label: 'Kurumbas (Nilgiris District ST / PVTG)',
        value: '6,823',
        detail: 'Male: 3,380 • Female: 3,443 (Notified specifically in the Nilgiris district)',
        sourceId: 'census-2011',
      },
      {
        id: 'census-mbc-note',
        label: 'Kurumba / Kurumba Gounder (TN MBC)',
        value: 'Not Published Separately',
        detail: 'The 2011 Census of India did not publish separate official population counts for individual MBC/OBC castes.',
        sourceId: 'tn-bcmbcmw',
      },
    ],
    regions: [
      {
        id: 'reg-tn',
        state: 'Tamil Nadu',
        districts: 'The Nilgiris, Dharmapuri, Krishnagiri, Vellore, Tiruvannamalai, Salem, Erode, Coimbatore, and northern Tamil districts',
        communities: 'Kurumba / Kurumba Gounder (MBC), Kurumans (ST), Kurumbas of the Nilgiris — Alu, Betta, Jenu, Mullu, Urali (ST / PVTG)',
        historicalNote: 'Kurumbas of the Nilgiris are one of Tamil Nadu’s 6 recognized PVTGs, while Kurumans (ST) and plains Kurumbar (MBC) reside across multiple northern and western districts.',
        evidence: 'documented',
        sourceIds: ['census-2011', 'tn-bcmbcmw', 'mota-portal'],
      },
      {
        id: 'reg-ka',
        state: 'Karnataka',
        districts: 'Mysuru, Kodagu, Chamarajanagar (Western Ghats forests) & Deccan plateau districts',
        communities: 'Kuruba (Plains Pastoral – OBC), Jenu Kuruba (ST / PVTG), Kadu Kuruba / Betta Kuruba (ST)',
        historicalNote: 'Karnataka legally distinguishes plains pastoral Kurubas (known for kambli weaving and poet-saint Kanakadasa) from forest-dwelling Jenu Kuruba (PVTG) and Kadu Kuruba (ST) communities.',
        evidence: 'documented',
        sourceIds: ['mota-portal', 'dobes-mpi', 'demmer-2016'],
      },
      {
        id: 'reg-kl',
        state: 'Kerala',
        districts: 'Wayanad, Palakkad (Attappady), and historic Malabar borderlands',
        communities: 'Mullu Kuruma (ST), Urali Kuruma (ST), Jenu Kurumba / Kattunayakan forest context',
        historicalNote: 'R. L. Rooksby’s 1961 SOAS doctoral study documented the distinct agrarian structure of Mullu Kurumas and artisanal heritage of Urali Kurumas across Malabar and Wayanad.',
        evidence: 'documented',
        sourceIds: ['rooksby-1961', 'mota-portal'],
      },
    ],
  },

  educationSocialDevelopment: {
    sectionNumber: '14',
    eyebrow: 'Socio-Economic Progress',
    heading: 'Education & Social Development',
    subtitle: 'Transition from historical educational barriers toward higher education, skill empowerment, and civic advancement.',
    diagramCaption: 'Education & Social Progress Pathway: Access → Statutory Support Awareness → Next-Generation Growth',
    intro:
      'Over recent decades, communities historically reliant on pastoralism and forest livelihoods have prioritized schooling, college access, and vocational advancement despite persistent structural and administrative hurdles.',
    points: [
      {
        heading: 'Literacy Landscape & Regional Gaps',
        text: 'While pan-India statistical profiles show rising literacy among Kurumans (~84.1%), broader Scheduled Tribe averages in Tamil Nadu (~41.5% baseline in older assessments) and remote PVTG hamlets continue to face higher-education and infrastructure gaps.',
        evidence: 'documented',
        sourceIds: ['census-2011', 'mota-portal'],
      },
      {
        heading: 'Administrative Hurdles Affecting Students',
        text: 'Madras High Court records highlight how delays or conflicting revenue orders in issuing community certificates (arising from Kurumans vs. Kurumba nomenclature disputes) have frequently disrupted students’ higher-education admissions and scholarships.',
        evidence: 'documented',
        sourceIds: ['madras-hc-slsc'],
      },
      {
        heading: 'Pathways to Modern Development',
        text: 'Residential schools, Ministry of Tribal Affairs PVTG initiatives (such as PM-JANMAN), Tamil Nadu BC/MBC scholarship schemes, and community mentoring are enabling first-generation graduates in law, medicine, engineering, and public administration.',
        evidence: 'documented',
        sourceIds: ['mota-portal', 'tn-bcmbcmw'],
      },
    ],
    modernPrioritiesTitle: 'Key Contemporary Development Priorities',
    modernPriorities: [
      'Preventing school dropouts and mentoring rural and hill-region students into higher education.',
      'Spreading accurate awareness of official government scholarships and competitive exams (TNPSC, UPSC, NEET, JEE).',
      'Promoting clear legal literacy around lawful community certificate verification procedures.',
      'Supporting women’s higher education and youth technical/digital skill development.',
    ],
  },

  governmentRecords: {
    sectionNumber: '15',
    eyebrow: 'Official Statutory Records',
    heading: 'Government Records & Community Classification',
    subtitle: 'Strictly factual documentation of constitutional ST/PVTG schedules, Tamil Nadu MBC lists, and unresolved administrative issues based solely on official records.',
    disclaimerTitle: 'Official Accuracy & Legal Disclaimer',
    disclaimerBody:
      'All classifications listed below are compiled strictly from the Constitution (Scheduled Tribes) Order, 1950 (Article 342), the Ministry of Tribal Affairs, the Tamil Nadu BC/MBC Welfare Department, Census 2011, and public court records. This website makes no unauthorized caste or reservation claims; individual eligibility is governed exclusively by statutory verification authorities.',
    classificationTableTitle: 'Documented Government Classifications (Official Records)',
    tableHeaders: {
      authority: 'Authority / State',
      listedName: 'Official Listed Name',
      category: 'Classification',
      scope: 'Territorial Scope',
      legalBasis: 'Legal Basis',
    },
    classifications: [
      {
        id: 'gov-tn-kurumans',
        stateOrAuthority: 'Government of India – Tamil Nadu (Part XIV)',
        listedName: 'Kurumans',
        category: 'Scheduled Tribe (ST)',
        territorialScope: 'Throughout Tamil Nadu',
        legalBasis: 'Constitution (Scheduled Tribes) Order, 1950 (Article 342; 1976 Amendment Act)',
        sourceIds: ['constitution-st-1950', 'mota-portal'],
      },
      {
        id: 'gov-tn-kurumbas-nilgiris',
        stateOrAuthority: 'Government of India – Tamil Nadu (Part XIV)',
        listedName: 'Kurumbas (in the Nilgiris district)',
        category: 'Scheduled Tribe (ST) & PVTG',
        territorialScope: 'Restricted to The Nilgiris District',
        legalBasis: 'Constitution (ST) Order, 1950 & MoTA PVTG Roster (1 of 6 PVTGs in Tamil Nadu)',
        sourceIds: ['constitution-st-1950', 'mota-portal'],
      },
      {
        id: 'gov-tn-mbc',
        stateOrAuthority: 'Government of Tamil Nadu (BC/MBC Dept.)',
        listedName: 'Kurumba, Kurumba Gounder',
        category: 'Most Backward Classes (MBC – Entry No. 17)',
        territorialScope: 'Tamil Nadu State Reservation',
        legalBasis: 'TN BC/MBC/DNC Official List; also included in the Central OBC List for Tamil Nadu',
        sourceIds: ['tn-bcmbcmw'],
      },
      {
        id: 'gov-ka-st-obc',
        stateOrAuthority: 'Government of India & Karnataka',
        listedName: 'Jenu Kuruba (ST/PVTG), Kadu Kuruba (ST) | Kuruba (OBC)',
        category: 'ST / PVTG & OBC (Separate Entries)',
        territorialScope: 'State of Karnataka',
        legalBasis: 'Constitution (ST) Order, 1950 & Karnataka State Backward Classes List',
        sourceIds: ['mota-portal', 'ncst-portal'],
      },
      {
        id: 'gov-kl-st',
        stateOrAuthority: 'Government of India – Kerala',
        listedName: 'Kurumans (Mullu Kuruman, Mulla Kuruman, Mala Kuruman) & Uraly / Urali Kuruman',
        category: 'Scheduled Tribe (ST)',
        territorialScope: 'State of Kerala (principally Wayanad)',
        legalBasis: 'Constitution (ST) Order, 1950 & subsequent Parliamentary Amendments',
        sourceIds: ['mota-portal', 'rooksby-1961'],
      },
    ],
    unresolvedTitle: 'Documented Unresolved Legal & Administrative Issues',
    unresolvedSubtitle:
      'Transparent overview of the long-standing nomenclature and community certificate issues documented in Tamil Nadu:',
    unresolvedIssues: [
      {
        id: 'issue-synonym',
        title: '1. Kurumba / Kurumbar vs. Kurumans Synonymity Controversy',
        summary:
          'In several Tamil Nadu districts, families recorded locally as "Kurumba" or "Kurumbar" (MBC) have sought recognition as synonyms of "Kurumans" (ST). Proposals submitted by the State Government to include Kuruma, Kurumba, Kurumba Gounder, Kurumban, and Kurumbar as statutory synonyms undergo strict multi-stage review by the Registrar General of India (RGI), the National Commission for Scheduled Tribes (NCST), and the Ministry of Tribal Affairs.',
        constitutionalRule:
          'Article 342 of the Constitution of India: Only an Act of Parliament can include, exclude, or add synonyms to the Scheduled Tribes list. Earlier executive state orders (such as G.O. Ms. No. 388 of 1977) cannot unilaterally alter constitutional ST schedules.',
        evidence: 'documented',
        sourceIds: ['constitution-st-1950', 'ncst-portal', 'madras-hc-slsc'],
      },
      {
        id: 'issue-certificate',
        title: '2. Community Certificate Rejections & SLSC Scrutiny',
        summary:
          'The Madras High Court has adjudicated hundreds of writ petitions involving conflicting orders by local revenue officials — including cases where children or siblings of verified Kurumans ST certificate holders were denied certificates. Simultaneously, courts have ordered strict action against fraudulent certificate claims via the State Level Scrutiny Committee (SLSC).',
        constitutionalRule:
          'Courts have emphasized fair inquiry and consistency where close blood relatives hold legally validated ST certificates, alongside strict verification by the SLSC.',
        evidence: 'documented',
        sourceIds: ['madras-hc-slsc', 'ncst-portal'],
      },
      {
        id: 'issue-nilgiris-limit',
        title: '3. Territorial Restriction on "Kurumbas (in the Nilgiris district)"',
        summary:
          'The Scheduled Tribe entry "Kurumbas" is constitutionally scoped strictly to The Nilgiris district. Communities using the name Kurumba or Kurumbar outside the Nilgiris do not automatically fall under this district-restricted entry.',
        constitutionalRule:
          'Area restrictions written into the Constitution (ST) Order, 1950 remain legally binding unless amended by Parliament.',
        evidence: 'documented',
        sourceIds: ['constitution-st-1950', 'mota-portal'],
      },
    ],
  },

  documentsResearch: {
    sectionNumber: '16',
    eyebrow: 'Verified Bibliography & Research Archive',
    heading: 'Historical Documents & Research Sources',
    subtitle: 'Every historical and administrative section on this portal is linked to these peer-reviewed university publications, linguistic archives, and official government records.',
    filterLabels: {
      all: 'All Sources',
      academic: 'Academic Journals & Books',
      government: 'Official Government Records',
      linguistic: 'Linguistic Archives',
      colonial: 'Colonial Records (Contextualized)',
    },
    policyTitle: 'Historical Documentation Standards',
    policyPoints: [
      'Primary references are drawn from peer-reviewed university presses (Cambridge, Oxford, SOAS), the Max Planck Institute DoBeS archive, and official Government of India / Tamil Nadu portals.',
      'Colonial-era compendia (Thurston & Rangachari, 1909) are cited with their historical context and limitations rather than treated as uncritical fact.',
      'Where reliable primary evidence does not exist, speculative or invented details are omitted.',
    ],
    visitSourceLabel: 'Open Reference Link',
    colonialNoteLabel: 'Historical Context:',
  },

  socialSections: [
    {
      id: 'achievements',
      sectionNumber: '17',
      eyebrow: 'Heritage Recognition & Milestones',
      heading: 'Community Achievements',
      subtitle: 'Nationally documented cultural heritage preservation, ecological stewardship, and transparent documentation standards for individual honours.',
      evidence: 'documented',
      diagramKind: 'community-development',
      diagramCaption: 'Cultural Heritage Recognition & Verified Achievements Archive Diagram',
      summary:
        'Kurumbar and related communities have earned national academic recognition for visual art, endangered language preservation, and ethnobotanical stewardship. To uphold strict authenticity, individual contemporary achievers are not fabricated and will be listed only upon documentary verification.',
      pillars: [
        {
          title: 'National Intangible Cultural Heritage Documentation',
          detail: 'The Alu Kurumba graphic art tradition of the Nilgiris has been documented under the Sangeet Natak Akademi (SNA) and IGNCA frameworks as a living heritage of India.',
        },
        {
          title: 'Global Linguistic & Ethnobotanical Archives',
          detail: 'Kurumba Dravidian languages are archived internationally by the Max Planck Institute (DoBeS), while academic botany studies recognize deep indigenous medicinal-plant knowledge.',
        },
        {
          title: 'Modern Individual Achievers Registry',
          detail: 'Verified profiles of contemporary civil servants, scholars, athletes, and community leaders across Tamil Nadu are being compiled through official submissions.',
        },
      ],
      transparencyNote: 'Community members with verifiable documentary records may submit profiles via the official Contact section for review.',
      sourceIds: ['maheswaran-sna', 'dobes-mpi'],
    },
    {
      id: 'current-activities',
      sectionNumber: '18',
      eyebrow: 'Sangam Ground Initiatives',
      heading: 'Current Social Activities',
      subtitle: 'State-level coordination, public gatherings, consultative meetings, and community outreach led by Kurumbar Sangam – Tamil Nadu.',
      evidence: 'documented',
      imageKey: 'publicMeetingPodium',
      galleryId: 'public-meeting-podium',
      summary:
        'Under State President K. P. Rajasimma Hegde, B.Com., B.L., Kurumbar Sangam – Tamil Nadu organizes public meetings, state-level conferences, and executive consultations dedicated to unity, equal dignity, and constructive community progress.',
      pillars: [
        {
          title: 'State & District Coordination Meetings',
          detail: 'Bringing together association office bearers and community representatives across Tamil Nadu to align on welfare and educational priorities.',
        },
        {
          title: 'Rights & Equality Awareness Campaigns',
          detail: 'Publishing official awareness posters and convening public meetings advocating solidarity, democratic representation, and social dignity.',
        },
        {
          title: 'Direct Leadership Accessibility',
          detail: 'Providing direct member communication through official telephone and WhatsApp outreach at 9750602103.',
        },
      ],
      transparencyNote: 'Photographs shown in this section are genuine event photographs of Kurumbar Sangam – Tamil Nadu.',
      sourceIds: ['ncst-portal'],
    },
    {
      id: 'youth-development',
      sectionNumber: '19',
      eyebrow: 'Next-Generation Empowerment',
      heading: 'Youth Development',
      subtitle: 'Skill development, career readiness, competitive exam orientation, and constructive civic leadership.',
      imageKey: 'stateLevelConference',
      galleryId: 'state-level-conference',
      summary:
        'Empowering young members with modern technical skills, higher-education direction, and responsible community leadership is a central pillar of Kurumbar Sangam – Tamil Nadu’s mission.',
      pillars: [
        {
          title: 'Skill Building & Employment Guidance',
          detail: 'Encouraging digital literacy, vocational training, public-sector exam preparation, and entrepreneurship among youth.',
        },
        {
          title: 'Civic & Organizational Participation',
          detail: 'Involving young volunteers and graduates in district consultations, documentation efforts, and community awareness events.',
        },
        {
          title: 'District Youth Program Records',
          detail: 'Verified beneficiary counts and district training records will be published once formally compiled rather than estimated.',
        },
      ],
      transparencyNote: 'Outlines Kurumbar Sangam’s stated youth mission; unverified quantitative claims are intentionally excluded.',
      sourceIds: ['mota-portal', 'tn-bcmbcmw'],
    },
    {
      id: 'womens-development',
      sectionNumber: '20',
      eyebrow: 'Inclusive Growth',
      heading: 'Women’s Development',
      subtitle: 'Supporting women’s higher education, livelihood self-reliance, health awareness, and cultural leadership.',
      diagramKind: 'community-development',
      diagramCaption: 'Women’s Education, Livelihood Empowerment & Community Leadership Diagram',
      summary:
        'Long-term community progress depends on equal educational access, economic independence, and respectful participation of women across rural and urban Tamil Nadu.',
      pillars: [
        {
          title: 'Girls’ & Women’s Higher Education',
          detail: 'Promoting secondary school completion, college enrollment, and scholarship awareness for first-generation female learners.',
        },
        {
          title: 'Self-Help & Artisanal Livelihoods',
          detail: 'Guiding access to state women’s welfare programs, self-help group resources, and sustainable craft/enterprise initiatives.',
        },
        {
          title: 'Women’s Wing Field Records',
          detail: 'Verified office-bearer rosters and regional field reports for women’s programs will be published once officially documented.',
        },
      ],
      transparencyNote: 'Contact the official Sangam leadership line for verified updates on women’s welfare participation.',
      sourceIds: ['tn-bcmbcmw', 'mota-portal'],
    },
    {
      id: 'educational-development',
      sectionNumber: '21',
      eyebrow: 'Student Guidance & Support',
      heading: 'Educational Development',
      subtitle: 'Accurate guidance on official Tamil Nadu BC/MBC and Government of India ST/PVTG educational schemes.',
      evidence: 'documented',
      diagramKind: 'education-progress',
      diagramCaption: 'Educational Pathway: Schooling → Official Government Scholarships → Higher Education & Careers',
      summary:
        'Connecting families with verified government educational portals helps students access lawful scholarships, hostel facilities, and career guidance without misinformation.',
      pillars: [
        {
          title: 'Tamil Nadu BC / MBC Welfare Scholarships',
          detail: 'Official post-matric, pre-matric, and hostel schemes administered through bcmbcmw.tn.gov.in for eligible MBC students.',
        },
        {
          title: 'Ministry of Tribal Affairs (ST / PVTG) Schemes',
          detail: 'National fellowships, residential school programs, and PVTG educational initiatives administered via tribal.nic.in for eligible ST students.',
        },
        {
          title: 'Career & Higher-Education Orientation',
          detail: 'Encouraging structured guidance after Class 10 and Class 12 across engineering, medicine, law, arts, and civil services.',
        },
      ],
      transparencyNote: 'Always verify scheme eligibility and application deadlines directly on official government portals.',
      sourceIds: ['tn-bcmbcmw', 'mota-portal', 'census-2011'],
    },
    {
      id: 'community-welfare',
      sectionNumber: '22',
      eyebrow: 'Solidarity & Mutual Support',
      heading: 'Community Welfare',
      subtitle: 'Legal and documentation literacy, welfare scheme awareness, and heritage preservation.',
      evidence: 'documented',
      imageKey: 'executiveMeetingHall',
      galleryId: 'executive-meeting-hall',
      summary:
        'Kurumbar Sangam – Tamil Nadu fosters mutual solidarity, lawful rights awareness, and accurate community documentation to support families across Tamil Nadu.',
      pillars: [
        {
          title: 'Documentation & Legal Literacy',
          detail: 'Helping community members understand constitutional classifications, lawful certificate verification processes, and official records.',
        },
        {
          title: 'Public Welfare Scheme Awareness',
          detail: 'Promoting awareness of public healthcare, housing, pension, and agricultural/livestock welfare schemes.',
        },
        {
          title: 'Cultural & Historical Stewardship',
          detail: 'Encouraging responsible preservation of Tamil and Dravidian oral histories, art forms, and verifiable community archives.',
        },
      ],
      transparencyNote: 'All official community welfare inquiries are coordinated directly via 9750602103.',
      sourceIds: ['ncst-portal', 'mota-portal', 'tn-bcmbcmw'],
    },
  ],
}
