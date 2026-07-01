const i18n = {
  en: {
    network: "Klang Valley Rail",
    plannerTitle: "Where are you going?",
    plannerSubtitle: "Plan with rail first, then use Grab only for the first or last stretch.",
    from: "From",
    to: "To",
    findRoute: "Find best route",
    nearby: "Nearby stations",
    useLocation: "Use location",
    includedLines: "Included rail lines",
    starterData: "Updated from the Klang Valley Integrated Transit Map dated 11/06/2026.",
    routeFound: "Best rail route",
    startJourney: "Jump to map",
    liveJourney: "Map navigation",
    backToPlanner: "Back",
    recenter: "Recenter",
    mapUnavailable: "Map library is unavailable. Check your internet connection and reload.",
    mapNeedsRoute: "Find a route first, then start the journey.",
    mapOpenHint: "Open each segment in your preferred navigation app. Waze is best for car/Grab-style navigation to a station.",
    openGoogleMaps: "Google Maps",
    openAppleMaps: "Apple Maps",
    openWaze: "Waze",
    liveTracking: "Live location is on. Follow the blue dot as you move.",
    liveTrackingUnavailable: "Live location is unavailable. The route map is still shown.",
    transfers: "Transfers",
    estimatedFare: "Estimated fare",
    duration: "Duration",
    stops: "Stops",
    firstMile: "First mile",
    lastMile: "Last mile",
    walkOrGrab: "Walk or Grab to",
    grabToDestination: "Grab from station to destination",
    openGrab: "Open Grab",
    transferAt: "Transfer at",
    ride: "Ride",
    noRoute: "I could not find a connected rail route in the starter dataset yet.",
    chooseStations: "Choose a starting point and destination.",
    locationReady: "Location found. Nearby stations are shown below.",
    locationUnavailable: "Location is unavailable. You can still type a station.",
    locationFinding: "Finding your location...",
    locationDenied: "Location permission is blocked for this site. Allow location in your browser site settings, then try again. You can also type a station manually.",
    locationTimeout: "Location took too long. Turn on GPS/location services and try again.",
    locationSecure: "Location only works on HTTPS. Open the Vercel link directly in Safari or Chrome.",
    nearbyNeedsLocation: "Nearby stations need your phone location. If permission is blocked, type your starting station instead.",
    nearbyTitle: "Nearby stations",
    kmAway: "km away",
    liveNote: "Live arrivals and disruptions are prepared as an upgrade when an official data feed is available.",
    operating: "Typical operations",
    dataNote: "Fares and times are planning estimates for prototype use. Service hours shown on the latest map: Mon-Sat 06:00-00:30, Sun/Public Holidays 06:00-23:30.",
    updateChecking: "Checking rail network updates...",
    updateCurrent: "Rail network checked today. No new route update found.",
    updateAvailable: "New rail route data is available. Update the app dataset before trusting route results.",
    updateUnavailable: "Daily rail update check is unavailable. Using bundled route data.",
    updateLastChecked: "Last checked"
  },
  zh: {
    network: "巴生谷铁路",
    plannerTitle: "你要去哪里？",
    plannerSubtitle: "优先使用铁路规划路线，只在首段或尾段使用 Grab。",
    from: "出发地",
    to: "目的地",
    findRoute: "寻找最佳路线",
    nearby: "附近车站",
    useLocation: "使用位置",
    includedLines: "已包含路线",
    starterData: "已根据 2026/06/11 巴生谷综合交通图更新。",
    routeFound: "最佳铁路路线",
    transfers: "换乘",
    estimatedFare: "预估车费",
    duration: "时间",
    stops: "站数",
    firstMile: "首段",
    lastMile: "尾段",
    walkOrGrab: "步行或 Grab 前往",
    grabToDestination: "从车站 Grab 到目的地",
    openGrab: "打开 Grab",
    transferAt: "在此换乘",
    ride: "乘搭",
    noRoute: "目前基础数据中找不到连通的铁路路线。",
    chooseStations: "请选择出发站和目的站。",
    locationReady: "已找到位置。附近车站显示在下方。",
    locationUnavailable: "无法取得位置。你仍然可以输入车站。",
    locationFinding: "正在寻找你的位置...",
    locationDenied: "位置权限已被封锁。请在手机浏览器设置中允许此网站使用位置，然后再试一次。",
    locationTimeout: "定位时间太久。请开启手机 GPS/定位服务后再试一次。",
    locationSecure: "定位只支援 HTTPS。请直接用 Safari 或 Chrome 打开 Vercel 链接。",
    nearbyTitle: "附近车站",
    kmAway: "公里",
    liveNote: "实时到站和故障资讯会在取得官方数据源后升级。",
    operating: "一般营运时间",
    dataNote: "车费和时间为规划预估，适合原型使用。最新地图显示营运时间：周一至周六 06:00-00:30，周日/公共假期 06:00-23:30。",
    updateChecking: "正在检查铁路网络更新...",
    updateCurrent: "今日已检查铁路网络。没有发现新路线更新。",
    updateAvailable: "发现新的铁路路线数据。请先更新应用数据再信任路线结果。",
    updateUnavailable: "无法进行每日铁路更新检查。正在使用内置路线数据。",
    updateLastChecked: "上次检查"
  }
};

const bundledNetworkVersion = "2026-06-11";
const updateFeedUrl = "data/network-version.json";

const lines = [
  { id: "KTM1", name: "1 KTM Batu Caves - Pulau Sebang", zh: "1 KTM 黑风洞 - Pulau Sebang", color: "#1f4a9a", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 5 },
  { id: "KTM2", name: "2 KTM Tanjung Malim - Pelabuhan Klang", zh: "2 KTM 丹绒马林 - 巴生港", color: "#d7193f", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 5 },
  { id: "AGL", name: "3 LRT Ampang", zh: "3 安邦线", color: "#f26a21", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 3 },
  { id: "SPL", name: "4 LRT Sri Petaling", zh: "4 大城堡线", color: "#7d1f2f", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 3 },
  { id: "KJL", name: "5 LRT Kelana Jaya", zh: "5 格拉那再也线", color: "#e31b4f", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 3 },
  { id: "ERX", name: "6 ERL KLIA Ekspres", zh: "6 机场快线", color: "#8d2695", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 5 },
  { id: "ERL", name: "7 ERL KLIA Transit", zh: "7 机场支线", color: "#28aeb8", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 5 },
  { id: "MRL", name: "8 KL Monorail", zh: "8 吉隆坡单轨", color: "#6ec72d", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 3 },
  { id: "KGL", name: "9 MRT Kajang", zh: "9 加影线", color: "#00843d", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 4 },
  { id: "SKY", name: "10 KTM KL Sentral - Terminal Skypark", zh: "10 KTM 吉隆坡中央 - Skypark 机场", color: "#6f7618", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 5 },
  { id: "SAH", name: "11 Shah Alam Line", zh: "11 莎阿南线", color: "#59bce8", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 4 },
  { id: "PYL", name: "12 MRT Putrajaya", zh: "12 布城线", color: "#f5c400", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 4 },
  { id: "BRT", name: "B1 BRT Sunway", zh: "B1 双威线", color: "#155c3b", hours: "Mon-Sat 06:00-00:30 · Sun 06:00-23:30", speed: 3 }
];

const stations = [
  { id: "gombak", name: "Gombak", zh: "鹅唛", lat: 3.2318, lng: 101.7241, lines: ["KJL"] },
  { id: "wangsa-maju", name: "Wangsa Maju", zh: "旺沙玛珠", lat: 3.2057, lng: 101.7315, lines: ["KJL"] },
  { id: "masjid-jamek", name: "Masjid Jamek", zh: "占美清真寺", lat: 3.1488, lng: 101.6965, lines: ["KJL", "AGL", "SPL"] },
  { id: "dang-wangi", name: "Dang Wangi", zh: "金马律", lat: 3.1569, lng: 101.7019, lines: ["KJL"] },
  { id: "klcc", name: "KLCC", zh: "吉隆坡城中城", lat: 3.1599, lng: 101.7137, lines: ["KJL"] },
  { id: "ampang-park", name: "Ampang Park", zh: "安邦坊", lat: 3.1612, lng: 101.7196, lines: ["KJL", "PYL"] },
  { id: "pasar-seni", name: "Pasar Seni", zh: "中央艺术坊", lat: 3.1422, lng: 101.6953, lines: ["KJL", "KGL"] },
  { id: "kl-sentral", name: "KL Sentral", zh: "吉隆坡中央车站", lat: 3.1340, lng: 101.6861, lines: ["KJL", "MRL", "KTM1", "KTM2", "ERL", "ERX", "SKY"] },
  { id: "usj7", name: "USJ 7", zh: "USJ 7", lat: 3.0540, lng: 101.5924, lines: ["KJL", "BRT"] },
  { id: "putra-heights", name: "Putra Heights", zh: "布特拉高原", lat: 2.9960, lng: 101.5755, lines: ["KJL", "SPL"] },
  { id: "ampang", name: "Ampang", zh: "安邦", lat: 3.1502, lng: 101.7600, lines: ["AGL"] },
  { id: "chan-sow-lin", name: "Chan Sow Lin", zh: "陈秀连", lat: 3.1281, lng: 101.7145, lines: ["AGL", "SPL"] },
  { id: "bandar-tasik-selatan", name: "Bandar Tasik Selatan", zh: "南湖镇", lat: 3.0765, lng: 101.7110, lines: ["SPL", "KTM1", "KTM2", "ERL"] },
  { id: "bukit-jalil", name: "Bukit Jalil", zh: "武吉加里尔", lat: 3.0587, lng: 101.6923, lines: ["SPL"] },
  { id: "titiwangsa", name: "Titiwangsa", zh: "蒂蒂旺沙", lat: 3.1736, lng: 101.6954, lines: ["MRL", "PYL"] },
  { id: "bukit-bintang", name: "Bukit Bintang", zh: "武吉免登", lat: 3.1465, lng: 101.7114, lines: ["MRL", "KGL"] },
  { id: "hang-tuah", name: "Hang Tuah", zh: "汉都亚", lat: 3.1406, lng: 101.7053, lines: ["MRL", "AGL", "SPL"] },
  { id: "muzium-negara", name: "Muzium Negara", zh: "国家博物馆", lat: 3.1381, lng: 101.6874, lines: ["KGL"] },
  { id: "trx", name: "Tun Razak Exchange", zh: "敦拉萨国际贸易中心", lat: 3.1420, lng: 101.7206, lines: ["KGL", "PYL"] },
  { id: "maluri", name: "Maluri", zh: "马鲁里", lat: 3.1233, lng: 101.7274, lines: ["AGL", "PYL"] },
  { id: "kajang", name: "Kajang", zh: "加影", lat: 2.9837, lng: 101.7905, lines: ["KGL", "KTM1"] },
  { id: "sungai-buloh", name: "Sungai Buloh", zh: "双溪毛糯", lat: 3.2061, lng: 101.5808, lines: ["KGL", "PYL", "KTM2"] },
  { id: "sentul-timur", name: "Sentul Timur", zh: "冼都东", lat: 3.1858, lng: 101.6952, lines: ["SPL"] },
  { id: "putrajaya-sentral", name: "Putrajaya Sentral", zh: "布城中央", lat: 2.9304, lng: 101.6717, lines: ["PYL", "ERL"] },
  { id: "cyberjaya-utara", name: "Cyberjaya Utara", zh: "赛城北", lat: 2.9528, lng: 101.6574, lines: ["PYL"] },
  { id: "salak-tinggi", name: "Salak Tinggi", zh: "沙叻丁宜", lat: 2.82556, lng: 101.71306, lines: ["ERL"] },
  { id: "klia-t1", name: "KLIA Terminal 1", zh: "吉隆坡机场第一航站楼", lat: 2.7456, lng: 101.7072, lines: ["ERL"] },
  { id: "klia-t2", name: "KLIA Terminal 2", zh: "吉隆坡机场第二航站楼", lat: 2.7431, lng: 101.6852, lines: ["ERL"] },
  { id: "sunway-setia-jaya", name: "Sunway-Setia Jaya", zh: "双威-斯迪亚再也", lat: 3.0832, lng: 101.6127, lines: ["KTM2", "BRT"] },
  { id: "sunway-pyramid", name: "Sunway Pyramid", zh: "双威金字塔", lat: 3.0733, lng: 101.6073, lines: ["BRT"] },
  { id: "subang-jaya", name: "Subang Jaya", zh: "梳邦再也", lat: 3.0847, lng: 101.5880, lines: ["KTM2", "KJL", "SKY"] },
  { id: "mid-valley", name: "Mid Valley", zh: "谷中城", lat: 3.1186, lng: 101.6776, lines: ["KTM1"] },
  { id: "batu-caves", name: "Batu Caves", zh: "黑风洞", lat: 3.2379, lng: 101.6819, lines: ["KTM1"] },
  { id: "terminal-skypark", name: "Terminal Skypark", zh: "Skypark 机场", lat: 3.1306, lng: 101.5491, lines: ["SKY"] },
  { id: "johan-setia", name: "Johan Setia", zh: "Johan Setia", lat: 3.0004, lng: 101.4695, lines: ["SAH"] }
];

const lineSequences = {
  KTM1: ["batu-caves", "taman-wahyu", "kampung-batu", "batu-kentomen", "sentul", "putra", "bank-negara", "kuala-lumpur", "kl-sentral", "mid-valley", "seputeh", "salak-selatan", "bandar-tasik-selatan", "serdang", "kajang", "kajang-2", "ukm", "bangi", "batang-benar", "nilai", "labu", "tiroi", "seremban", "senawang", "sungai-gadut", "rembau", "pulau-sebang"],
  KTM2: ["tanjung-malim", "kuala-kubu-bharu", "rasa", "batang-kali", "serendah", "rawang", "kuang", "sungai-buloh", "kepong-sentral", "kepong", "segambut", "putra", "bank-negara", "kuala-lumpur", "kl-sentral", "abdullah-hukum", "angkasa-puri", "pantai-dalam", "petaling", "jalan-templer", "kampung-dato-harun", "seri-setia", "setia-jaya", "subang-jaya", "batu-tiga", "shah-alam", "padang-jawa", "bukit-badak", "klang", "teluk-pulau", "teluk-gadong", "kampung-raja-uda", "jalan-kastam", "pelabuhan-klang"],
  AGL: ["ampang", "cahaya", "cempaka", "pandan-indah", "pandan-jaya", "maluri", "chan-sow-lin", "pudu", "plaza-rakyat", "masjid-jamek", "bandaraya", "sultan-ismail", "pwtc", "titiwangsa", "sentul", "sentul-timur"],
  SPL: ["sentul-timur", "sentul", "titiwangsa", "pwtc", "sultan-ismail", "bandaraya", "masjid-jamek", "plaza-rakyat", "hang-tuah", "chan-sow-lin", "cheras", "salak-selatan", "bandar-tasik-selatan", "sungai-besi", "bukit-jalil", "sri-petaling", "awan-besar", "muhibbah", "alam-sutera", "kinrara-bk5", "ioi-puchong-jaya", "pusat-bandar-puchong", "taman-perindustrian-puchong", "bandar-puteri", "puchong-perdana", "puchong-prima", "subang-alam", "alam-megah", "putra-heights"],
  KJL: ["gombak", "taman-melati", "wangsa-maju", "sri-rampai", "setiawangsa", "jelatek", "dato-keramat", "damai", "ampang-park", "klcc", "kampung-baru", "dang-wangi", "masjid-jamek", "pasar-seni", "kl-sentral", "bangsar", "abdullah-hukum", "kerinchi", "universiti", "taman-jaya", "asia-jaya", "taman-paramount", "taman-bahagia", "kelana-jaya", "lembah-subang", "ara-damansara", "glenmarie", "subang-jaya", "ss15", "ss18", "usj7", "taipan", "wawasan", "usj21", "alam-megah", "subang-alam", "putra-heights"],
  ERX: ["kl-sentral", "klia-t1", "klia-t2"],
  ERL: ["kl-sentral", "bandar-tasik-selatan", "putrajaya-sentral", "salak-tinggi", "klia-t1", "klia-t2"],
  MRL: ["kl-sentral", "tun-sambanthan", "maharajalela", "hang-tuah", "imbi", "bukit-bintang", "raja-chulan", "bukit-nanas", "medan-tuanku", "chow-kit", "titiwangsa"],
  KGL: ["kwasa-damansara", "kwasa-sentral", "kota-damansara", "surian", "mutiara-damansara", "bandar-utama", "taman-tun-dr-ismail", "phileo-damansara", "pusat-bandar-damansara", "semantan", "muzium-negara", "pasar-seni", "merdeka", "bukit-bintang", "trx", "cochrane", "maluri", "taman-pertama", "taman-midah", "taman-mutiara", "taman-connaught", "taman-suntex", "sri-raya", "bandar-tun-hussein-onn", "batu-11-cheras", "bukit-dukung", "sungai-jernih", "stadium-kajang", "kajang"],
  SKY: ["kl-sentral", "subang-jaya", "terminal-skypark"],
  SAH: ["johan-setia", "bandar-bukit-tinggi", "klang-jaya", "seri-andalas", "taman-selatan", "jambatan-kota", "pasar-klang", "jalan-meru", "bandar-baru-klang", "seksyen-7-shah-alam", "uitm-shah-alam", "dato-menteri", "glenmarie-2", "glenmarie", "subang-airport", "damansara-idaman", "bu11", "kayu-ara", "bandar-utama"],
  PYL: ["kwasa-damansara", "kampung-selamat", "sungai-buloh", "damansara-damai", "sri-damansara-barat", "sri-damansara-sentral", "sri-damansara-timur", "metro-prima", "kepong-baru", "jinjang", "sri-delima", "kampung-batu", "kentomen", "jalan-ipoh", "sentul-barat", "titiwangsa", "hospital-kuala-lumpur", "raja-uda", "ampang-park", "persiaran-klcc", "conlay", "trx", "chan-sow-lin", "kuchai", "taman-naga-emas", "sungai-besi", "serdang-raya-utara", "serdang-raya-selatan", "serdang-jaya", "upm", "taman-equine", "putra-permai", "16-sierra", "cyberjaya-utara", "cyberjaya-city-centre", "putrajaya-sentral"],
  BRT: ["sunway-setia-jaya", "mentari", "sunway-pyramid", "sunway-lagoon", "sunmed", "sun-u-monash", "south-quay-usj1", "usj7"]
};

let currentLang = "en";
let userLocation = null;

function formatStationName(id) {
  return id
    .split("-")
    .map((part) => {
      if (/^(usj|ss|klia|trx|pwtc|ukm|upm|bu)$/i.test(part)) return part.toUpperCase();
      if (/^\d+$/.test(part)) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function syncMapStations() {
  const existing = new Map(stations.map((station) => [station.id, station]));
  Object.entries(lineSequences).forEach(([lineId, sequence]) => {
    sequence.forEach((stationId) => {
      const station = existing.get(stationId);
      if (station) {
        if (!station.lines.includes(lineId)) station.lines.push(lineId);
        return;
      }
      const generatedStation = {
        id: stationId,
        name: formatStationName(stationId),
        zh: formatStationName(stationId),
        lines: [lineId]
      };
      stations.push(generatedStation);
      existing.set(stationId, generatedStation);
    });
  });
}

syncMapStations();

const stationById = Object.fromEntries(stations.map((station) => [station.id, station]));
const lineById = Object.fromEntries(lines.map((line) => [line.id, line]));

const els = {
  langToggle: document.querySelector("#langToggle"),
  locateBtn: document.querySelector("#locateBtn"),
  nearbyBtn: document.querySelector("#nearbyBtn"),
  routeBtn: document.querySelector("#routeBtn"),
  swapBtn: document.querySelector("#swapBtn"),
  fromInput: document.querySelector("#fromInput"),
  toInput: document.querySelector("#toInput"),
  fromSuggestions: document.querySelector("#fromSuggestions"),
  toSuggestions: document.querySelector("#toSuggestions"),
  stationList: document.querySelector("#stationList"),
  results: document.querySelector("#results"),
  journeyView: document.querySelector("#journeyView"),
  journeyTitle: document.querySelector("#journeyTitle"),
  journeyMap: document.querySelector("#journeyMap"),
  journeyStatus: document.querySelector("#journeyStatus"),
  journeySteps: document.querySelector("#journeySteps"),
  backToPlannerBtn: document.querySelector("#backToPlannerBtn"),
  recenterBtn: document.querySelector("#recenterBtn"),
  lineGrid: document.querySelector("#lineGrid"),
  updateStatus: document.querySelector("#updateStatus"),
  statusText: document.querySelector("#statusText")
};

let currentJourney = null;
let journeyMap = null;
let routeLayer = null;
let liveMarker = null;
let stationLayer = null;
let liveWatchId = null;
let journeyBounds = null;

function t(key) {
  return i18n[currentLang][key] || i18n.en[key] || key;
}

function stationName(station) {
  return currentLang === "zh" ? `${station.zh} (${station.name})` : station.name;
}

function stationServiceTypes(station) {
  const typeByLine = {
    KTM1: "KTM",
    KTM2: "KTM",
    AGL: "LRT",
    SPL: "LRT",
    KJL: "LRT",
    ERX: "ERL",
    ERL: "ERL",
    MRL: "Monorail",
    KGL: "MRT",
    SKY: "KTM",
    SAH: "LRT",
    PYL: "MRT",
    BRT: "BRT"
  };
  return [...new Set(station.lines.map((lineId) => typeByLine[lineId]).filter(Boolean))];
}

function nearbyStationName(station) {
  const service = stationServiceTypes(station).join("/") || "Rail";
  if (currentLang === "zh") {
    return `${station.zh} (${station.name}) ${service} Station`;
  }
  return `${station.name} ${service} Station`;
}

function lineName(lineId) {
  const line = lineById[lineId];
  if (!line) return lineId;
  return currentLang === "zh" ? line.zh : line.name;
}

function renderText() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.langToggle.textContent = currentLang === "en" ? "中文" : "EN";
  els.fromInput.placeholder = currentLang === "en" ? "Current location or station" : "当前位置或车站";
  els.toInput.placeholder = currentLang === "en" ? "Bukit Bintang, KLCC, KLIA..." : "武吉免登、KLCC、KLIA...";
  renderStationOptions();
  renderLines();
  renderCachedUpdateStatus();
}

function isCurrentLocationValue(value) {
  const normalized = value.trim().toLowerCase();
  return !normalized || normalized === "current location" || normalized === "当前位置";
}

function renderStationOptions() {
  els.stationList.innerHTML = stations
    .map((station) => `<option value="${stationName(station)}"></option><option value="${station.name}"></option>`)
    .join("");
}

function stationSearchText(station) {
  return `${station.name} ${station.zh} ${nearbyStationName(station)} ${station.lines.map(lineName).join(" ")}`.toLowerCase();
}

function suggestionLabel(station) {
  const services = stationServiceTypes(station).join("/") || "Rail";
  return `${station.name} ${services} Station`;
}

function matchingStations(query) {
  const normalized = query.trim().toLowerCase();
  const featured = ["kl-sentral", "klcc", "bukit-bintang", "pasar-seni", "masjid-jamek", "trx", "salak-tinggi", "usj7"];
  const source = normalized
    ? stations.filter((station) => stationSearchText(station).includes(normalized))
    : featured.map((id) => stationById[id]).filter(Boolean);
  return source.slice(0, 8);
}

function closeSuggestions() {
  els.fromSuggestions?.classList.remove("is-open");
  els.toSuggestions?.classList.remove("is-open");
}

function renderSuggestions(input, panel) {
  if (!panel) return;
  const matches = matchingStations(input.value);
  panel.innerHTML = matches
    .map((station) => `<button class="suggestion-item" type="button" data-station-id="${station.id}" role="option">${suggestionLabel(station)}</button>`)
    .join("");
  panel.classList.toggle("is-open", matches.length > 0);
}

function bindStationSuggestions(input, panel) {
  input.addEventListener("input", () => renderSuggestions(input, panel));
  input.addEventListener("focus", () => renderSuggestions(input, panel));
  panel?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-station-id]");
    if (!button) return;
    input.value = stationName(stationById[button.dataset.stationId]);
    closeSuggestions();
  });
}

function renderLines() {
  els.lineGrid.innerHTML = lines
    .map((line) => {
      const count = lineSequences[line.id]?.length || 0;
      return `
        <article class="line-card">
          <div class="line-strip" style="background:${line.color}"></div>
          <h3>${currentLang === "zh" ? line.zh : line.name}</h3>
          <p>${count} ${currentLang === "zh" ? "个重点车站" : "key stations"} · ${line.hours}</p>
        </article>
      `;
    })
    .join("");
}

function todayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function renderUpdateStatus(message, isStale = false) {
  if (!els.updateStatus) return;
  els.updateStatus.textContent = message;
  els.updateStatus.classList.toggle("is-stale", isStale);
}

function readStoredUpdateCheck() {
  try {
    return JSON.parse(localStorage.getItem("klpg-network-check") || "null");
  } catch {
    return null;
  }
}

function writeStoredUpdateCheck(value) {
  try {
    localStorage.setItem("klpg-network-check", JSON.stringify(value));
  } catch {
    return false;
  }
  return true;
}

function renderCachedUpdateStatus() {
  const cached = readStoredUpdateCheck();
  if (!cached) {
    renderUpdateStatus(t("updateChecking"));
    return;
  }
  const prefix = `${t("updateLastChecked")}: ${cached.checkedOn}. `;
  if (cached.hasUpdate) {
    renderUpdateStatus(prefix + t("updateAvailable"), true);
  } else {
    renderUpdateStatus(prefix + t("updateCurrent"));
  }
}

async function checkNetworkUpdates() {
  const cached = readStoredUpdateCheck();
  if (cached?.checkedOn === todayKey()) {
    renderCachedUpdateStatus();
    return;
  }

  renderUpdateStatus(t("updateChecking"));
  try {
    const response = await fetch(`${updateFeedUrl}?checked=${todayKey()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Update feed unavailable");
    const feed = await response.json();
    const hasUpdate = feed.mapVersion && feed.mapVersion !== bundledNetworkVersion;
    const check = {
      checkedOn: todayKey(),
      mapVersion: feed.mapVersion || bundledNetworkVersion,
      routeCount: feed.routeCount || lines.length,
      hasUpdate
    };
    writeStoredUpdateCheck(check);
    if (hasUpdate) {
      renderUpdateStatus(`${t("updateLastChecked")}: ${check.checkedOn}. ${t("updateAvailable")}`, true);
    } else {
      renderUpdateStatus(`${t("updateLastChecked")}: ${check.checkedOn}. ${t("updateCurrent")}`);
    }
  } catch {
    renderUpdateStatus(t("updateUnavailable"), true);
  }
}

function findStation(value) {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return null;
  return stations.find((station) => {
    return (
      station.name.toLowerCase() === normalized ||
      station.zh.toLowerCase() === normalized ||
      stationName(station).toLowerCase() === normalized ||
      station.name.toLowerCase().includes(normalized) ||
      station.zh.toLowerCase().includes(normalized)
    );
  });
}

function buildGraph() {
  const graph = Object.fromEntries(stations.map((station) => [station.id, []]));
  Object.entries(lineSequences).forEach(([lineId, sequence]) => {
    sequence.forEach((stationId, index) => {
      const nextId = sequence[index + 1];
      if (!nextId) return;
      const weight = lineId === "ERX" ? lineById[lineId].speed + 8 : lineById[lineId].speed;
      graph[stationId].push({ to: nextId, lineId, weight });
      graph[nextId].push({ to: stationId, lineId, weight });
    });
  });
  return graph;
}

function transferPenalty(previousLineId, nextLineId, stationId) {
  if (!previousLineId || previousLineId === nextLineId) return 0;
  const airportErlLines = new Set(["ERL", "ERX"]);
  if (airportErlLines.has(previousLineId) && airportErlLines.has(nextLineId)) {
    return 100;
  }
  if (stationId === "klia-t1" || stationId === "klia-t2") return 30;
  return 5;
}

function shortestPath(fromId, toId) {
  const graph = buildGraph();
  const distances = Object.fromEntries(stations.map((station) => [station.id, Infinity]));
  const previous = {};
  const unvisited = new Set(stations.map((station) => station.id));
  distances[fromId] = 0;

  while (unvisited.size) {
    const current = [...unvisited].sort((a, b) => distances[a] - distances[b])[0];
    if (!current || distances[current] === Infinity) break;
    if (current === toId) break;
    unvisited.delete(current);
    graph[current].forEach((edge) => {
      if (!unvisited.has(edge.to)) return;
      const penalty = transferPenalty(previous[current]?.lineId, edge.lineId, current);
      const nextDistance = distances[current] + edge.weight + penalty;
      if (nextDistance < distances[edge.to]) {
        distances[edge.to] = nextDistance;
        previous[edge.to] = { from: current, lineId: edge.lineId };
      }
    });
  }

  if (!previous[toId] && fromId !== toId) return null;
  const legs = [];
  let cursor = toId;
  while (cursor !== fromId) {
    const prev = previous[cursor];
    if (!prev) break;
    legs.unshift({ from: prev.from, to: cursor, lineId: prev.lineId });
    cursor = prev.from;
  }
  return legs;
}

function groupLegs(legs) {
  return legs.reduce((groups, leg) => {
    const last = groups[groups.length - 1];
    if (last && last.lineId === leg.lineId) {
      last.to = leg.to;
      last.stops += 1;
    } else {
      groups.push({ ...leg, stops: 1 });
    }
    return groups;
  }, []);
}

function estimateFare(legs) {
  const usesErl = legs.some((leg) => leg.lineId === "ERL");
  const base = usesErl ? 12 : 1.3;
  const fare = Math.min(usesErl ? 55 : 8.8, base + legs.length * (usesErl ? 2.2 : 0.42));
  return `RM ${fare.toFixed(2)}`;
}

async function renderRoute() {
  if (isCurrentLocationValue(els.fromInput.value) && !userLocation) {
    const located = await requestUserLocation({ showNearby: false });
    if (!located) return;
  }

  const fromStation = findStation(els.fromInput.value) || nearestStation(userLocation);
  const toStation = findStation(els.toInput.value);
  els.statusText.textContent = "";

  if (!fromStation || !toStation) {
    els.statusText.textContent = t("chooseStations");
    return;
  }

  const legs = shortestPath(fromStation.id, toStation.id);
  if (!legs) {
    els.statusText.textContent = t("noRoute");
    return;
  }

  const grouped = groupLegs(legs);
  const transfers = Math.max(0, grouped.length - 1);
  const duration = legs.reduce((sum, leg) => sum + lineById[leg.lineId].speed, 0) + transfers * 5;
  const grabUrl = `https://grab.onelink.me/2695613898?pid=KLPathGuide&c=${encodeURIComponent(toStation.name)}`;
  currentJourney = { fromStation, toStation, legs, grouped, duration, transfers };

  els.results.innerHTML = `
    <div class="route-summary">
      <div>
        <h2>${t("routeFound")}</h2>
        <p>${stationName(fromStation)} → ${stationName(toStation)}</p>
      </div>
      <div class="actions">
        <button class="primary" id="startJourneyBtn" type="button">${t("startJourney")}</button>
        <a class="grab-link" href="${grabUrl}" target="_blank" rel="noreferrer">${t("openGrab")}</a>
      </div>
    </div>
    <div class="metric-grid">
      <div class="metric"><strong>${duration} min</strong><span>${t("duration")}</span></div>
      <div class="metric"><strong>${legs.length}</strong><span>${t("stops")}</span></div>
      <div class="metric"><strong>${transfers}</strong><span>${t("transfers")}</span></div>
      <div class="metric"><strong>${estimateFare(legs)}</strong><span>${t("estimatedFare")}</span></div>
    </div>
    <div class="route-steps">
      <article class="step" style="border-color:#7f8c8d">
        <div>
          <h3>${t("firstMile")}</h3>
          <p>${t("walkOrGrab")} ${stationName(fromStation)}</p>
        </div>
      </article>
      ${grouped
        .map((group, index) => {
          const line = lineById[group.lineId];
          const transfer = index > 0 ? `<p>${t("transferAt")} ${stationName(stationById[group.from])}</p>` : "";
          return `
            <article class="step" style="border-color:${line.color}">
              <div>
                <h3>${t("ride")} ${lineName(group.lineId)}</h3>
                <p>${stationName(stationById[group.from])} → ${stationName(stationById[group.to])} · ${group.stops} ${t("stops")}</p>
                ${transfer}
              </div>
              <span class="pill" style="background:${line.color}">${group.lineId}</span>
            </article>
          `;
        })
        .join("")}
      <article class="step" style="border-color:#7f8c8d">
        <div>
          <h3>${t("lastMile")}</h3>
          <p>${t("grabToDestination")}</p>
        </div>
        <a class="grab-link" href="${grabUrl}" target="_blank" rel="noreferrer">${t("openGrab")}</a>
      </article>
    </div>
    <p class="status">${t("dataNote")} ${t("liveNote")}</p>
  `;
  document.querySelector("#startJourneyBtn")?.addEventListener("click", startJourney);
}

function distanceKm(a, b) {
  if (!a || !b || !Number.isFinite(a.lat) || !Number.isFinite(a.lng) || !Number.isFinite(b.lat) || !Number.isFinite(b.lng)) {
    return Infinity;
  }
  const earthRadius = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function nearestStation(location) {
  if (!location) return null;
  return [...stations]
    .filter((station) => Number.isFinite(station.lat) && Number.isFinite(station.lng))
    .sort((a, b) => distanceKm(location, a) - distanceKm(location, b))[0];
}

function renderNearbyList() {
  if (!userLocation) {
    els.results.innerHTML = "";
    els.statusText.textContent = t("nearbyNeedsLocation");
    return;
  }

  const origin = userLocation;
  const nearby = [...stations]
    .filter((station) => Number.isFinite(station.lat) && Number.isFinite(station.lng))
    .map((station) => ({ ...station, distance: distanceKm(origin, station) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);

  els.results.innerHTML = `
    <h2>${t("nearbyTitle")}</h2>
    <div class="nearby-list">
      ${nearby
        .map((station) => `
          <article class="station-row">
            <div>
              <h3>${nearbyStationName(station)}</h3>
              <p>${station.lines.map(lineName).join(" · ")}</p>
            </div>
            <strong>${station.distance.toFixed(1)} ${t("kmAway")}</strong>
          </article>
        `)
        .join("")}
    </div>
  `;
}

function stopLiveTracking() {
  if (liveWatchId != null && navigator.geolocation) {
    navigator.geolocation.clearWatch(liveWatchId);
  }
  liveWatchId = null;
}

function stationCoords(station) {
  return Number.isFinite(station?.lat) && Number.isFinite(station?.lng) ? [station.lat, station.lng] : null;
}

function journeyCoords() {
  if (!currentJourney) return [];
  const ids = [currentJourney.fromStation.id, ...currentJourney.legs.map((leg) => leg.to)];
  const seen = new Set();
  return ids
    .filter((id) => {
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    })
    .map((id) => stationCoords(stationById[id]))
    .filter(Boolean);
}

function renderJourneySteps() {
  if (!currentJourney) return;
  const segments = navigationSegments();
  els.journeySteps.innerHTML = segments.map(renderNavigationSegment).join("");
}

function coordParam(coord) {
  return coord ? `${coord[0]},${coord[1]}` : "";
}

function mapLinksForSegment(segment) {
  const destination = coordParam(segment.destination);
  const origin = coordParam(segment.origin);
  const destinationName = encodeURIComponent(segment.destinationName);
  const googleParams = new URLSearchParams({
    api: "1",
    destination,
    travelmode: segment.mode
  });
  if (origin) googleParams.set("origin", origin);

  const appleParams = new URLSearchParams({
    daddr: destination,
    q: segment.destinationName,
    dirflg: segment.mode === "transit" ? "r" : "w"
  });
  if (origin) appleParams.set("saddr", origin);

  return {
    google: `https://www.google.com/maps/dir/?${googleParams.toString()}`,
    apple: `https://maps.apple.com/?${appleParams.toString()}`,
    waze: `https://waze.com/ul?ll=${destination}&q=${destinationName}&navigate=yes`
  };
}

function navigationSegments() {
  const segments = [];
  const firstStation = currentJourney.fromStation;
  const firstStationCoord = stationCoords(firstStation);

  if (firstStationCoord) {
    segments.push({
      title: t("firstMile"),
      detail: `${t("walkOrGrab")} ${nearbyStationName(firstStation)}`,
      origin: userLocation ? [userLocation.lat, userLocation.lng] : null,
      destination: firstStationCoord,
      destinationName: nearbyStationName(firstStation),
      mode: "walking",
      color: "#7f8c8d"
    });
  }

  currentJourney.grouped.forEach((group) => {
    const fromStation = stationById[group.from];
    const toStation = stationById[group.to];
    const line = lineById[group.lineId];
    const destination = stationCoords(toStation);
    if (!destination) return;
    segments.push({
      title: `${t("ride")} ${lineName(group.lineId)}`,
      detail: `${stationName(fromStation)} - ${stationName(toStation)}`,
      origin: stationCoords(fromStation),
      destination,
      destinationName: nearbyStationName(toStation),
      mode: "transit",
      color: line.color
    });
  });

  return segments;
}

function renderNavigationSegment(segment) {
  const links = mapLinksForSegment(segment);
  return `
    <div class="journey-step" style="border-color:${segment.color}">
      <strong>${segment.title}</strong>
      <span>${segment.detail}</span>
      <div class="map-link-row">
        <a class="map-link" href="${links.google}" target="_blank" rel="noreferrer">${t("openGoogleMaps")}</a>
        <a class="map-link" href="${links.apple}" target="_blank" rel="noreferrer">${t("openAppleMaps")}</a>
        <a class="map-link" href="${links.waze}" target="_blank" rel="noreferrer">${t("openWaze")}</a>
      </div>
    </div>
  `;
}

function drawJourneyMap() {
  if (!window.L) {
    els.journeyStatus.textContent = t("mapUnavailable");
    return;
  }

  const coords = journeyCoords();
  if (!journeyMap) {
    journeyMap = L.map(els.journeyMap, { zoomControl: false });
    L.control.zoom({ position: "bottomright" }).addTo(journeyMap);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(journeyMap);
  }

  routeLayer?.remove();
  stationLayer?.remove();
  journeyBounds = null;
  stationLayer = L.layerGroup().addTo(journeyMap);

  coords.forEach((coord, index) => {
    L.circleMarker(coord, {
      radius: index === 0 || index === coords.length - 1 ? 8 : 5,
      color: "#087f8c",
      fillColor: "#ffffff",
      fillOpacity: 1,
      weight: 3
    }).addTo(stationLayer);
  });

  if (coords.length > 1) {
    routeLayer = L.polyline(coords, { color: "#087f8c", weight: 6, opacity: 0.85 }).addTo(journeyMap);
    journeyBounds = routeLayer.getBounds();
  } else if (coords.length === 1) {
    journeyBounds = L.latLngBounds(coords);
  }

  fitJourneyMap();
}

function fitJourneyMap() {
  if (!journeyMap) return;
  journeyMap.invalidateSize(true);
  if (journeyBounds?.isValid()) {
    if (journeyBounds.getNorthEast().equals(journeyBounds.getSouthWest())) {
      journeyMap.setView(journeyBounds.getCenter(), 14);
    } else {
      journeyMap.fitBounds(journeyBounds, { padding: [40, 40] });
    }
  }
}

function startLiveTracking() {
  stopLiveTracking();
  if (!navigator.geolocation || !window.isSecureContext) {
    els.journeyStatus.textContent = t("liveTrackingUnavailable");
    return;
  }

  liveWatchId = navigator.geolocation.watchPosition(
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const coord = [userLocation.lat, userLocation.lng];
      if (!liveMarker) {
        liveMarker = L.circleMarker(coord, {
          radius: 9,
          color: "#ffffff",
          fillColor: "#1a73e8",
          fillOpacity: 1,
          weight: 3
        }).addTo(journeyMap);
      } else {
        liveMarker.setLatLng(coord);
      }
      els.journeyStatus.textContent = t("liveTracking");
    },
    () => {
      els.journeyStatus.textContent = t("liveTrackingUnavailable");
    },
    { enableHighAccuracy: false, timeout: 20000, maximumAge: 60000 }
  );
}

function startJourney() {
  if (!currentJourney) {
    els.statusText.textContent = t("mapNeedsRoute");
    return;
  }
  stopLiveTracking();
  els.journeyTitle.textContent = `${stationName(currentJourney.fromStation)} - ${stationName(currentJourney.toStation)}`;
  els.journeyView.classList.add("map-links");
  els.journeyView.hidden = false;
  els.journeyStatus.textContent = t("mapOpenHint");
  els.journeyView.scrollIntoView({ behavior: "smooth", block: "start" });
  renderJourneySteps();
}

function backToPlanner() {
  stopLiveTracking();
  els.journeyView.hidden = true;
  els.journeyView.classList.remove("map-links");
  els.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function recenterJourney() {
  if (userLocation && journeyMap) {
    journeyMap.setView([userLocation.lat, userLocation.lng], 16);
    return;
  }
  const coords = journeyCoords();
  if (coords.length > 1 && routeLayer) fitJourneyMap();
}

async function renderNearby() {
  if (!userLocation) {
    const located = await requestUserLocation({ showNearby: false });
    if (!located) {
      els.results.innerHTML = "";
      if (!els.statusText.textContent) els.statusText.textContent = t("nearbyNeedsLocation");
      return;
    }
  }
  renderNearbyList();
}

els.langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "zh" : "en";
  renderText();
  els.results.innerHTML = "";
});

function getPhonePosition(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

async function requestUserLocation(options = {}) {
  const { showNearby = true } = options;
  if (!navigator.geolocation) {
    els.statusText.textContent = t("locationUnavailable");
    return false;
  }
  if (!window.isSecureContext) {
    els.statusText.textContent = t("locationSecure");
    return false;
  }

  els.statusText.textContent = t("locationFinding");
  try {
    let position;
    try {
      position = await getPhonePosition({ enableHighAccuracy: false, timeout: 20000, maximumAge: 300000 });
    } catch (firstError) {
      if (firstError.code === firstError.PERMISSION_DENIED) throw firstError;
      position = await getPhonePosition({ enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 });
    }

    userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    const station = nearestStation(userLocation);
    els.fromInput.value = stationName(station);
    els.statusText.textContent = t("locationReady");
    if (showNearby) renderNearbyList();
    return true;
  } catch (error) {
    userLocation = null;
    els.results.innerHTML = "";
    if (error.code === error.PERMISSION_DENIED) {
      els.statusText.textContent = t("locationDenied");
    } else if (error.code === error.TIMEOUT) {
      els.statusText.textContent = t("locationTimeout");
    } else {
      els.statusText.textContent = t("locationUnavailable");
    }
    return false;
  }
}

els.locateBtn.addEventListener("click", () => {
  requestUserLocation();
});

bindStationSuggestions(els.fromInput, els.fromSuggestions);
bindStationSuggestions(els.toInput, els.toSuggestions);
document.addEventListener("click", (event) => {
  if (event.target.closest("label")) return;
  closeSuggestions();
});

els.routeBtn.addEventListener("click", renderRoute);
els.nearbyBtn.addEventListener("click", renderNearby);
els.backToPlannerBtn.addEventListener("click", backToPlanner);
els.recenterBtn.addEventListener("click", recenterJourney);
els.swapBtn.addEventListener("click", () => {
  const from = els.fromInput.value;
  els.fromInput.value = els.toInput.value;
  els.toInput.value = from;
});

renderText();
checkNetworkUpdates();
