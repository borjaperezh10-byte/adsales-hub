// ─── ALL DATA FOR SPAIN ADVERTISING MARKET ───────────────────────────────────

const DATA = {
  lastUpdate: null,

  // ── HOMEPAGE ──────────────────────────────────────────────────────────────
  homepage: {
    metrics: [
      { label: 'Inversión total 2025e', value: '17.400 M€', delta: '+4,2% vs 2024', up: true },
      { label: 'Cuota digital', value: '52%', delta: '+3pp vs 2024', up: true },
      { label: 'CPM medio digital', value: '3,80€', delta: '-0,4% vs 2024', up: false },
      { label: 'Ad fraud rate (ES)', value: '9,8%', delta: '-0,9pp', up: true },
      { label: 'Viewability media', value: '61%', delta: '+1,8pp', up: true },
      { label: 'Penetración internet', value: '94%', delta: '+1pp', up: true },
    ],
    inversionAnual: {
      labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025e'],
      data: [13200, 11100, 13800, 15100, 15900, 16700, 17400],
    },
    cuotaPorMedio: {
      labels: ['Digital', 'TV', 'Exterior', 'Radio', 'Prensa', 'Revistas', 'Cine'],
      data: [52, 26, 8, 7, 4, 2, 1],
      colors: ['#005FFF', '#D85A30', '#1D9E75', '#BA7517', '#888780', '#7F77DD', '#D4537E'],
    },
    crecimientoYoY: {
      labels: ['Digital', 'Exterior', 'Radio', 'TV', 'Prensa'],
      data: [10, 9, 4, -1, -5],
    },
    digitalDesglose: {
      labels: ['Search', 'Social', 'Display', 'Vídeo', 'Otros'],
      data: [38, 29, 16, 13, 4],
      colors: ['#005FFF', '#D4537E', '#7F77DD', '#D85A30', '#888780'],
    },
    noticias: [
      { src: 'Infoadex', date: 'May 2025', h: 'La inversión publicitaria en España crece un 4,2% hasta superar los 17.000 M€', tag: 'Inversión', tc: 'bg' },
      { src: 'IAB Spain', date: 'May 2025', h: 'El mobile ya supone el 68% de la inversión digital en España según estudio de IAB', tag: 'Digital', tc: 'bb' },
      { src: 'Kantar Media', date: 'Abr 2025', h: 'La televisión lineal pierde un punto de cuota pero mantiene el liderazgo en recall publicitario', tag: 'TV', tc: 'ba' },
      { src: 'AIMC', date: 'Abr 2025', h: 'El EGM confirma que el podcast en español crece un 22% en audiencia acumulada mensual', tag: 'Audio', tc: 'bg' },
    ],
  },

  // ── TV LINEAL ──────────────────────────────────────────────────────────────
  tv: {
    metrics: [
      { label: 'Inversión TV lineal 2024', value: '1.980 M€', delta: '-3,4% vs 2023', up: false },
      { label: 'Share s/total medios', value: '26%', delta: '-2pp vs 2023', up: false },
      { label: 'CPM medio TV', value: '7€', delta: 'referencia base', up: true },
      { label: 'GRP medio campaña', value: '350', delta: 'campañas nacionales', up: true },
      { label: 'Cobertura neta ≥1', value: '82%', delta: 'campaña 30 días', up: true },
      { label: 'Recall publicitario', value: '34%', delta: '+2pp vs digital', up: true },
    ],
    inversionHistorica: {
      labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
      data: [2280, 1900, 2050, 2100, 2050, 1980],
    },
    cuotaPorCadena: {
      labels: ['Antena 3', 'Telecinco', 'La Sexta', 'Cuatro', 'RTVE', 'Temáticas'],
      data: [27, 24, 16, 12, 8, 13],
      colors: ['#005FFF', '#D85A30', '#1D9E75', '#7F77DD', '#BA7517', '#888780'],
    },
    cpmPorFormato: {
      labels: ['Especial (60s)', 'Estándar (20s)', 'Patrocinio', 'Micros (10s)', 'Telepromoción', 'Microespacio'],
      data: [22, 7, 15, 4, 12, 9],
    },
    audienciaFranja: {
      labels: ['Madrugada', 'Mañana', 'Mediodía', 'Sobremesa', 'Tarde', 'Access', 'Prime', 'Late night'],
      data: [4, 12, 18, 22, 16, 24, 30, 10],
    },
    top_anunciantes: [
      { name: 'El Corte Inglés', sector: 'Retail', inv: '~95M€', grps: 1850, trend: 'stable' },
      { name: 'Procter & Gamble', sector: 'Gran consumo', inv: '~88M€', grps: 2100, trend: 'up' },
      { name: 'Telefónica', sector: 'Telecom', inv: '~76M€', grps: 1640, trend: 'down' },
      { name: 'Volkswagen Group', sector: 'Automoción', inv: '~72M€', grps: 1520, trend: 'stable' },
      { name: 'L\'Oréal', sector: 'Belleza', inv: '~65M€', grps: 1380, trend: 'up' },
      { name: 'Renault', sector: 'Automoción', inv: '~58M€', grps: 1240, trend: 'up' },
    ],
  },

  // ── CTV OVERVIEW ──────────────────────────────────────────────────────────
  ctv: {
    metrics: [
      { label: 'Inversión CTV 2024', value: '420 M€', delta: '+44,8% vs 2023', up: true },
      { label: 'Cuota s/total pantalla', value: '17,5%', delta: '+5,5pp vs 2023', up: true },
      { label: 'CPM medio CTV', value: '12€', delta: '+71% vs TV lineal', up: true },
      { label: 'Completion rate vídeo', value: '88%', delta: '+22pp vs mobile', up: true },
      { label: 'Hogares con Smart TV', value: '73%', delta: '+5pp vs 2023', up: true },
      { label: 'Viewability CTV', value: '94%', delta: 'vs 61% digital', up: true },
    ],
    inversionHistorica: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      tvLineal: [1900, 2050, 2100, 2050, 1980],
      ctv: [60, 105, 185, 290, 420],
    },
    cuotaTipo: {
      labels: ['AVOD', 'BVOD', 'FAST', 'SVOD ads', 'PVOD'],
      data: [38, 27, 18, 12, 5],
      colors: ['#005FFF', '#D85A30', '#1D9E75', '#7F77DD', '#BA7517'],
    },
    cpmPorTipo: {
      labels: ['TV lineal', 'BVOD', 'SVOD ads', 'PVOD', 'AVOD', 'FAST'],
      data: [7, 18, 16, 14, 11, 8],
      colors: ['#888780', '#D85A30', '#7F77DD', '#BA7517', '#005FFF', '#1D9E75'],
    },
    shareEvolucion: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      data: [3, 5, 8, 12, 17],
    },
  },

  // ── CTV TIPOS ─────────────────────────────────────────────────────────────
  tipos: {
    SVOD: {
      color: '#7F77DD', bg: '#EEEDFE', tc: '#3C3489',
      label: 'SVOD con publicidad',
      invTotal: 50,
      desc: 'Plataformas de suscripción con tier publicitario a menor precio. Audiencia premium de alta intención. En España el tier ad crece rápidamente con Netflix y Prime Video liderando.',
      plataformas: [
        { name: 'Netflix Ads', alcance: '55%', hogares: 8.2, inv: 30, cuota: 60, cpm: 16, cpmMin: 13, cpmMax: 20, usuarios: '4,5M suscriptores ad-tier', trend: 'up', nota: 'Lanzado en ES en Nov 2022. Viewability >90%. Formatos: pre-roll 15/30s, mid-roll.' },
        { name: 'Prime Video Ads', alcance: '48%', hogares: 7.1, inv: 20, cuota: 40, cpm: 14, cpmMin: 11, cpmMax: 18, usuarios: '3,8M suscriptores', trend: 'up', nota: 'Amazon introdujo ads en ES en Q1 2024. Integración con Amazon retail data para targeting preciso.' },
      ],
    },
    AVOD: {
      color: '#005FFF', bg: '#E6F1FB', tc: '#0C447C',
      label: 'AVOD',
      invTotal: 160,
      desc: 'Contenido de vídeo bajo demanda gratuito financiado por publicidad. Mayor escala de audiencia. YouTube domina ampliamente; Pluto TV y Tubi crecen con catálogo local.',
      plataformas: [
        { name: 'YouTube', alcance: '72%', hogares: 12.0, inv: 80, cuota: 50, cpm: 11, cpmMin: 7, cpmMax: 15, usuarios: '34M usuarios/mes', trend: 'stable', nota: 'Líder absoluto. CTV (pantalla TV) ya supone el 35% del consumo total en ES. Formatos: skippable, non-skippable, bumper.' },
        { name: 'Pluto TV', alcance: '18%', hogares: 2.8, inv: 40, cuota: 25, cpm: 9, cpmMin: 6, cpmMax: 13, usuarios: '2,1M usuarios/mes', trend: 'up', nota: 'Paramount Global. Crece con catálogo local y canales lineales temáticos. Sinergia con Paramount+.' },
        { name: 'Tubi (Fox)', alcance: '9%', hogares: 1.4, inv: 22, cuota: 14, cpm: 8, cpmMin: 5, cpmMax: 11, usuarios: '900K usuarios/mes', trend: 'up', nota: 'Entrada reciente en ES. Fuerte en contenido de catálogo y licencias internacionales.' },
        { name: 'Otros AVOD', alcance: '6%', hogares: 0.9, inv: 18, cuota: 11, cpm: 7, cpmMin: 4, cpmMax: 10, usuarios: 'Diversas apps', trend: 'stable', nota: 'Incluye apps de cadenas internacionales y plataformas de nicho cultural.' },
      ],
    },
    BVOD: {
      color: '#D85A30', bg: '#FAECE7', tc: '#712B13',
      label: 'BVOD',
      invTotal: 113,
      desc: 'Broadcaster VOD — plataformas digitales de las cadenas españolas. Contenido premium de alta notoriedad con publicidad. Fuerte recall y alta afinidad con el espectador TV.',
      plataformas: [
        { name: 'Atresplayer', alcance: '41%', hogares: 6.8, inv: 55, cuota: 49, cpm: 18, cpmMin: 14, cpmMax: 22, usuarios: '5,2M usuarios/mes', trend: 'up', nota: 'Antena 3, La Sexta. Catch-up + contenido exclusivo. Líder BVOD en ES. CPM premium justificado por audiencia TV fiel.' },
        { name: 'Mitele', alcance: '35%', hogares: 5.8, inv: 28, cuota: 25, cpm: 17, cpmMin: 13, cpmMax: 21, usuarios: '4,4M usuarios/mes', trend: 'stable', nota: 'Telecinco, Cuatro (Mediaset). Fuerte en entretenimiento masivo y reality. Gran volumen de GRPs digitales.' },
        { name: 'RTVE Play', alcance: '38%', hogares: 6.3, inv: 20, cuota: 18, cpm: 10, cpmMin: 7, cpmMax: 13, usuarios: '4,8M usuarios/mes', trend: 'up', nota: 'Plataforma pública. Sin suscripción. CPM más bajo por política de servicio público. Alta confianza de marca.' },
        { name: 'TV autonómicas', alcance: '22%', hogares: 3.6, inv: 10, cuota: 9, cpm: 9, cpmMin: 6, cpmMax: 12, usuarios: 'Suma 3Cat, À Punt, ETB...', trend: 'stable', nota: 'Audiencias localizadas de alto valor para campañas regionales o con targeting geográfico.' },
      ],
    },
    FAST: {
      color: '#1D9E75', bg: '#E1F5EE', tc: '#085041',
      label: 'FAST',
      invTotal: 76,
      desc: 'Free Ad-Supported Streaming TV — canales lineales gratuitos en Smart TVs. Sin suscripción ni registro. Integrados nativamente en fabricantes de TV. Modelo de rápido crecimiento en España.',
      plataformas: [
        { name: 'Samsung TV Plus', alcance: '22%', hogares: 3.6, inv: 35, cuota: 46, cpm: 8, cpmMin: 5, cpmMax: 11, usuarios: '2,7M activos/mes', trend: 'up', nota: 'Integrado en todos los Smart TVs Samsung. +70 canales en ES. Crece con la base instalada de televisores.' },
        { name: 'LG Channels', alcance: '17%', hogares: 2.8, inv: 22, cuota: 29, cpm: 8, cpmMin: 5, cpmMax: 10, usuarios: '2,1M activos/mes', trend: 'up', nota: 'LG WebOS. Similar a Samsung TV Plus. Crecimiento paralelo a ventas de TV LG en España.' },
        { name: 'Rakuten TV (FAST)', alcance: '10%', hogares: 1.6, inv: 12, cuota: 16, cpm: 7, cpmMin: 4, cpmMax: 9, usuarios: '1,2M usuarios/mes', trend: 'stable', nota: 'Sede en ES. Combina FAST con TVOD. Fuerte en cine europeo y contenido premium de catálogo.' },
        { name: 'Otros FAST', alcance: '5%', hogares: 0.8, inv: 7, cuota: 9, cpm: 6, cpmMin: 4, cpmMax: 8, usuarios: 'Philips, Hisense...', trend: 'stable', nota: 'Fabricantes de TV menores con canales FAST integrados en sus interfaces nativas.' },
      ],
    },
    PVOD: {
      color: '#BA7517', bg: '#FAEEDA', tc: '#633806',
      label: 'PVOD / Pay TV VOD',
      invTotal: 21,
      desc: 'Plataformas de pago de operadores de telecomunicaciones con inventario publicitario en contenido premium. Audiencia cautiva, datos de primera parte, menor escala pero máximo impacto.',
      plataformas: [
        { name: 'Movistar+', alcance: '19%', hogares: 3.2, inv: 14, cuota: 67, cpm: 16, cpmMin: 12, cpmMax: 20, usuarios: '3,8M hogares suscritos', trend: 'stable', nota: 'Líder PVOD en ES. Inventario muy limitado y selectivo, lo que justifica CPM premium. Targeting 1st party Telefónica.' },
        { name: 'Orange TV / Max', alcance: '8%', hogares: 1.3, inv: 5, cuota: 24, cpm: 14, cpmMin: 10, cpmMax: 17, usuarios: '1,5M hogares', trend: 'down', nota: 'En proceso de integración con HBO Max tras alianza Warner Bros. Discovery. Transición de producto.' },
        { name: 'Vodafone TV', alcance: '5%', hogares: 0.8, inv: 2, cuota: 9, cpm: 13, cpmMin: 9, cpmMax: 16, usuarios: '900K hogares', trend: 'down', nota: 'Mercado más pequeño. Integración progresiva con plataformas OTT externas. Futuro incierto.' },
      ],
    },
  },

  // ── DIGITAL ──────────────────────────────────────────────────────────────
  digital: {
    metrics: [
      { label: 'Inversión digital 2025e', value: '9.048 M€', delta: '+10,2% vs 2024', up: true },
      { label: 'Cuota s/total medios', value: '52%', delta: '+3pp vs 2024', up: true },
      { label: 'CPM medio display', value: '1,80€', delta: 'referencia', up: true },
      { label: 'Programática (% display)', value: '78%', delta: '+6pp vs 2023', up: true },
      { label: 'CTR medio search', value: '3,5%', delta: 'líder formatos', up: true },
      { label: 'ROAS medio search', value: '4,1x', delta: 'mejor canal', up: true },
    ],
    inversionFormatos: {
      labels: ['Search', 'Social', 'Display', 'Vídeo online', 'Otros'],
      data: [3439, 2624, 1448, 1175, 362],
      colors: ['#005FFF', '#D4537E', '#7F77DD', '#D85A30', '#888780'],
    },
    ctrRoas: {
      labels: ['Search', 'Email', 'Social', 'Vídeo', 'Display'],
      ctr: [3.5, 2.3, 1.2, 0.8, 0.3],
      roas: [4.1, 4.6, 2.7, 2.2, 1.7],
    },
  },

  // ── RADIO ─────────────────────────────────────────────────────────────────
  radio: {
    metrics: [
      { label: 'Inversión radio 2024', value: '490 M€', delta: '+4,1% vs 2023', up: true },
      { label: 'Cuota s/total medios', value: '7%', delta: 'estable', up: true },
      { label: 'CPM medio radio', value: '2,5€', delta: 'referencia', up: true },
      { label: 'Audiencia diaria', value: '14M', delta: 'oyentes/día (EGM)', up: true },
      { label: 'Podcasts mensual', value: '9,4M', delta: '+22% vs 2023', up: true },
      { label: 'Digital audio share', value: '18%', delta: '+4pp vs 2023', up: true },
    ],
    inversionHistorica: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      data: [380, 420, 455, 471, 490],
    },
    cuotaCadenas: {
      labels: ['Cadena SER', 'COPE', 'Onda Cero', 'RNE', 'Otros'],
      data: [31, 22, 18, 12, 17],
      colors: ['#005FFF', '#D85A30', '#1D9E75', '#BA7517', '#888780'],
    },
  },
};

// Simulate a "live" update by slightly varying numbers
function simulateDataRefresh() {
  DATA.lastUpdate = new Date();
  // In a real app, this would fetch from an API
}

simulateDataRefresh();
