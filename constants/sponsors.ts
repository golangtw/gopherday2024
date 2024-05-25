export const TIERS = ['platinum', 'gold', 'silver', 'bronze'] as const

export interface Sponsor {
  id: string
  tier: typeof TIERS[number]
  name: string
  link: string
  info: string
  locales?: Record<string, {
    name?: string
    link?: string
    info?: string
  }>
  height: number
}

export function getTierSponsors (tier: Sponsor['tier']) {
  return Object.values(SPONSORS).filter(sponsor => sponsor.tier === tier)
}

export const SPONSORS: Record<string, Sponsor> = {
  iii: {
    id: 'iii',
    tier: 'platinum',
    name: '資策會',
    link: 'https://www.iii.org.tw/',
    info: '資策會成立於1979年由政府與民間共同籌設，以策進我國資通訊科技之創新與應用，協助發展數位經濟為宗旨，參與規劃研擬並推動政府各項資訊產業政策、致力資通訊前瞻研發、普及與深化資訊應用、培育資訊科技人才及參與國家資訊基礎建設等各項業務成就備受各界肯定。以「數位轉型的化育者( Digital Transformation Enabler)」為定位，主要任務為整合智庫、人培與資通訊技術研發及推動之能量，發展符合產業需求的解決方案與應用服務，促進政府與產業的數位轉型。',
    locales: {
      en: {
        name: 'III',
        info: 'Established in 1979 through joint collaboration between the government and private sector, III is dedicated to advancing innovation and application in information and communication technology in Taiwan.  With a focus on fostering the development of the digital economy, III engages in planning, formulation, and advocacy of various governmental information industry policies. It is committed to proactive research and development in ICT, as well as the widespread dissemination and deepening of information applications. Additionally, III plays a pivotal role in nurturing ICT talents and participating in national information infrastructure construction.  Recognized as the "Digital Transformation Enabler", the primary mission involves integrating expertise, ICT talent cultivation, and ICT R&D to develop solutions and application services that meet industry demands, thereby facilitating the digital transformation of both government and industry.'
      }
    },
    height: 50
  },
  circle: {
    id: 'circle',
    tier: 'gold',
    name: 'Circle',
    link: 'https://www.circle.com/',
    info: 'Circle is a financial technology company at the epicenter of the emerging internet of money. We believe in a future where digital dollars work securely around the world to create a more prosperous global economy for everyone. Our infrastructure – including USDC, a blockchain-based dollar – helps businesses, institutions and developers harness these breakthroughs and capitalize on this major turning point in the evolution of money and technology. Looking to unlock your career’s growth? Come visit us at the booth or visit our website for opportunities!',
    height: 42
  },
  iscoollab: {
    id: 'iscoollab',
    tier: 'gold',
    name: 'IsCoolLab',
    link: 'https://iscoollab.com/',
    info: 'IsCoolLab 自2018年成立以來，一直站在智慧自動化與數位轉型的最前線。最初作為測試自動化軟體開發商，IsCoolLab 自此拓展了其在自動化領域的專業，開發出革命性的解決方案 Robotiive。\n\nRobotiive 是一款結合了人工智慧和電腦視覺專利技術的流程自動化軟體（RPA），結合了人工智慧和電腦視覺技術，它能夠實現跨平台、跨系統、跨機器的數據整合與自動化。其非侵入式的特性使企業得以輕鬆連接和自動化原本孤立的機器和系統，進而順暢地實現數位化轉型。\n\n在 IsCoolLab，我們不僅是這個產業的一員；我們處於其尖端，以創新和技術，不斷地重新定義智慧自動化技術在數位時代、智慧製造的應用和發展。\n\n伊斯酷軟體科技的團隊具備多年國際專業經驗於智慧軟體自動化與測試技術的研發，採用獨特專利之影像處理與辨識技術，專注提供各產業智慧自動化測試以及各類型自動化之軟體解決方案。運用軟體去處理單調且重複性的工作，幫助企業做更好的人力配置及產出更高的價值。目標在幫助提升台灣與全球各企業的生產力與競爭力，與工業4.0無縫接軌。本公司提供的服務範圍包含工業電腦、伺服器主機之BIOS與功能之迴歸測試自動化、生產線機台自動化資料蒐集、監控、遙控、完整自動化軟體實做、軟體迴歸測試自動化、RPA、物聯網及智慧製造。',
    locales: {
      en: {
        info: "IsCoolLab, established in 2018, stands at the forefront of digital transformation through smart automation. Originating as a testing automation software provider, IsCoolLab has since expanded its expertise to develop revolutionary solutions in the field of automation.\n\nWe introduced Robotiive, a unique, patented Robotic Process Automation (RPA) blending AI and computer vision to achieve cross-platform, cross-system, cross-machine data integration and automation. Its non-intrusive feature empowers businesses to connect and automate previously siloed machines and systems, thereby facilitating seamless digitalization.\n\nAt IsCoolLab, we're not just part of the industry—we're at its cutting edge, redefining the integration of smart automation, smart manufacturing in the digital age."
      }
    },
    height: 32
  },
  dcard: {
    id: 'dcard',
    tier: 'silver',
    name: 'Dcard',
    link: 'https://www.dcard.tw/',
    info: 'Dcard 是全台灣最大匿名社群，在年輕族群有極高滲透率與影響力，致力於打造一個讓每個人安心分享自己故事的地方。\n現在 Dcard 站上擁有超過 1,000 萬註冊會員，每個月更有 2,200 萬不重複訪客，除了既有社群服務與版圖，我們也正快速發展廣告、電商、IP 影音、角色品牌、遊戲與跨國市場等新領域，並持續探索更多新型業務的可能性。在 Dcard 持續擴展影響力的過程中，我們期待邀請優秀的你加入！',
    locales: {
      en: {
        info: "Dcard is Taiwan's largest anonymous community, with a significant presence and influence among the younger population, where the users can freely exchange their thoughts and opinions while finding connections with each other. Currently, Dcard has over 10 million registered members and attracts over 22 million unique visitors each month. In addition to our existing community services, we're rapidly expanding into new areas such as advertising, e-commerce, video, character branding, gaming, and international markets. As we continue to grow our impact, we're excited to invite talented individuals like you to join us!"
      }
    },
    height: 35
  },
  maicoin: {
    id: 'maicoin',
    tier: 'silver',
    name: 'MaiCoin',
    link: 'https://www.maicoin.com/',
    info: 'MaiCoin 集團為台灣交易量最大，且唯一具備區塊鏈技術公司之數位資產領導品牌，成立於 2013 年，是台灣虛擬通貨產業之先鋒，致力透過區塊鏈底層技術與虛擬通貨應用等，推動數位資產主流化，提供大眾安全與多元的選擇，目前主要提供數位資產交易、數位資產延伸產品服務與企業區塊鏈技術應用解決方案之服務，服務業務包含 MaiCoin 數位資產買賣平台、MAX 數位資產交易所、AMIS 帳聯網路區塊鏈技術、Qubic NFT 技術整合服務等。MaiCoin 數位資產買賣平台與 MAX 數位資產交易所全球首創法幣資金信託保管，並 2021 年領先同業完成台灣金管會的洗錢防制法令遵循聲明、MaiCoin 門市落座於台北與台中、AMIS Custody 通過 SOC 2 Type I 及 Type II 安全性稽核，以及 ISO 27001認證。',
    locales: {
      en: {
        info: "MaiCoin Group is the largest digital asset leader in Taiwan, possessing the highest trading volume and standing as the sole company with blockchain technology expertise. Established in 2013, it is a trailblazer in Taiwan's virtual currency industry, committed to promoting the mainstream adoption of digital assets through underlying blockchain technology and applications, providing the public with secure and diverse choices. Currently, its primary services include digital asset trading, extended digital asset products, and solutions for enterprise blockchain technology applications. Service offerings encompass the MaiCoin digital asset trading platform, MAX digital asset exchange, AMIS account network blockchain technology, Qubic NFT technology integration services, and more. MaiCoin's digital asset trading platform and MAX digital asset exchange are the world's first to introduce fiat fund custody, and in 2021, they led the industry in complying with anti-money laundering regulations set by the Taiwan Financial Supervisory Commission. Additionally, MaiCoin has storefronts in Taipei and Taichung, and AMIS Custody has successfully undergone security audits for SOC 2 Type I and Type II, along with obtaining ISO 27001 certification."
      }
    },
    height: 40
  },
  moway: {
    id: 'moway',
    tier: 'silver',
    name: '摩維科技',
    link: 'https://www.104.com.tw/company/1a2x6bmtvu',
    info: '摩維科技（Moway Technology）提供線上軟體平台客製開發與整合服務，以客戶價值、數據為驅動，致力打造強大且高效的平台解決方案。\n\n我們的團隊集結了編織程式言的匠人、視覺藝術的魔法師、網站安全的守護者、洞察數據的探索家，不僅在工作中保持活力，從洞察到實現、從創意孵化到成果，每次的交付都能帶給用戶超越期待的體驗。\n\n期待您與我們共同樹立業界Mo範，無所Way懼的加入摩維科技！',
    locales: {
      en: {
        name: 'Moway Technology'
      }
    },
    height: 40
  },
  tsmc: {
    id: 'tsmc',
    tier: 'bronze',
    name: 'TSMC 台灣積體電路製造股份有限公司',
    link: 'https://www.tsmc.com/chinese',
    info: '台積公司是世界領先的專業積體電路製造服務公司，背後關鍵秘訣是：Fab runs on code──跑在程式碼上的晶圓廠。台積IT是半導體前瞻製程的重要支援夥伴，產品藍圖涵蓋資通訊建構、AI應用、技術系統及企業系統，服務的使用者來自工廠、企業員工及合作夥伴。我們匯聚全球頂尖人才，打造雲原生和數位轉型。Change is happening. Join us now!',
    locales: {
      en: {
        name: 'TSMC'
      }
    },
    height: 30
  },
  mercari: {
    id: 'mercari',
    tier: 'bronze',
    name: 'Mercari',
    link: 'https://careers.mercari.com/culturedoc/',
    info: 'Mercari Group 是一家總部設於日本的企業集團，秉持著「Circulate all forms of value to unleash the potential in all people. (促進價值流通，釋放個人潛能。)」的理念，致力於在日本和美國開展業務。Mercari Group 涉足多個事業領域，包含日本最大的二手交易平台 Mercari，讓任何人都能輕鬆透過手機在平台上買賣物品；Merpay 提供簡單且完全在應用程式內的支付服務；以及 Mercari Shops，提供給小型企業的電子商務平台。最近，本公司更成立了自己的加密資產和區塊鏈事業 Mercoin。欲了解更多有關 Mercari Group 的企業使命，請參閱 Mercari Culture Doc',
    height: 20
  }
}
