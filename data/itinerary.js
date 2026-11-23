const rawDays = [
  {
    id: "D1",
    date: "1月1日 周五",
    title: "北京 → 仁川 → Hotel Kukdo",
    hotel: "Hotel Kukdo",
    pace: "晚班进城",
    summary: "OZ336 晚到仁川，AREX 普通经弘大换乘 2 号线到乙支路 4 街入住；只完成入境与补给。",
    steps: [
      {
        time: "~14:30前",
        title: "抵达北京首都机场T3",
        detail: "值机托运；机场热餐。28寸托运、20寸按航司限额。",
        mapQuery: "北京首都国际机场T3",
      },
      {
        time: "17:30–20:30",
        title: "OZ336 北京→仁川",
        detail: "当地约 20:30 抵仁川 T2；日本/韩国比北京快 1 小时量级按机票核对。",
        transport: "韩亚 OZ336",
        mapQuery: "인천국제공항 T2",
      },
      {
        time: "20:30–22:00",
        title: "入境、取行李、T-money",
        detail: "仁川 T2 入境取行李；T-money 就绪（Apple Pay 或实体）。Climate Card 不覆盖入境 AREX。",
        mapQuery: "인천공항 T2",
      },
      {
        time: "22:00–23:50",
        title: "AREX 普通→弘大→2号线",
        detail: "刷 T-money 坐 AREX 普通（勿 Express）；弘大站内换乘 2 号线不出闸，往乙支路 4 街。",
        transport: "AREX 普通 + 2号线",
        mapQuery: "홍대입구역 AREX",
      },
      {
        time: "~23:45–00:15",
        title: "步行至 Hotel Kukdo",
        detail: "乙支路 4 街站 9／10 出口步行约 1 分钟入住；大件行李一次到位。",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "入住后",
        title: "酒店周边便利店",
        detail: "热餐；早睡。不再安排夜游。",
        meal: "便利店熟食",
        mapQuery: "을지로4가 편의점",
      },
    ],
    notes: [
      "入住 4 晚：Hotel Kukdo（明洞／乙支路），通常不含早餐。",
      "首日 AREX 用 T-money；气候卡建议 D2 白天充 3 日×2。",
    ],
  },
  {
    id: "D2",
    date: "1月2日 周六",
    title: "色彩化妆 → 景福宫 → 逛乐天／新世界免税店",
    hotel: "Hotel Kukdo",
    pace: "素颜色彩后进宫再买衣",
    summary: "素颜做色彩并化妆，下午景福宫主线，出宫后逛乐天免税店和新世界免税店。BHC 改到 21:00 后。",
    steps: [
      {
        time: "08:30–09:15",
        title: "酒店热餐与充气候卡",
        detail: "乙支路 4 街一带热餐；充气候卡 3 日 ×2（盖 D2–D4）。素颜出门。护照放随身包，晚上百货返点要用。",
        meal: "热餐",
        mapQuery: "을지로4가",
      },
      {
        time: "09:20–09:50",
        title: "素颜步行到色彩店",
        detail: "不出门化妆。店还没定，从 Kukdo 步行到明洞一带。检索「명동 퍼스널 컬러」。",
        transport: "步行",
        mapQuery: "명동 퍼스널 컬러",
      },
      {
        time: "10:00–13:30",
        title: "明洞附近做色彩测试",
        detail: "店还没定。订 10:00。两人先素颜做色彩（约 90 分钟），再化妆。全妆按每人约 60 分钟、先后做，整段按 3 小时。问清化妆是同时还是排队。",
        mapQuery: "명동 퍼스널 컬러",
        booking: "出发前预约 1/2 10:00，两人。店还没定",
      },
      {
        time: "13:30–14:10",
        title: "明洞熟食午餐",
        detail: "店附近热食，彻底加热。不安排生食。",
        meal: "熟食午餐",
        mapQuery: "명동 맛집",
      },
      {
        time: "14:10–14:50",
        title: "地铁前往景福宫",
        detail: "明洞站 4 号线到忠武路，换乘 3 号线到景福宫站，再步行进宫。冬季 16:00 停止入场。",
        transport: "地铁 4 号线转 3 号线",
        mapQuery: "경복궁",
      },
      {
        time: "15:00–16:40",
        title: "景福宫",
        detail: "化完妆再进。勤政殿主线；冬季 09:00–17:00，16:00 停止入场。出宫在光化门前留约 15 分钟拍照。不串昌德宫／北村。出门晚于 15:00 则当天不进宫。",
        mapQuery: "경복궁",
        booking: "散客现场票",
      },
      {
        time: "17:10–18:20",
        title: "逛乐天免税店",
        detail: "3 号线回乙支路一带，乙支路 1 街 7 号出口。Arc'teryx 在乐天本店 7 层，Patagonia 同层可试。带护照，问金卡返点。周六约开到 20:30。",
        transport: "地铁 3 号线",
        mapQuery: "롯데백화점 본점 아크테릭스",
        booking: "金卡返点规则出行前再确认",
      },
      {
        time: "18:20–19:50",
        title: "逛新世界免税店",
        detail: "步行约 10 分钟到本馆。1 层 LV 可烫印：带上已有皮具或名牌，先问能不能做、要不要钱、哪天能取。周六常常当天取不了。取件日必须在 1/5 上午回机场之前，取不回就不要把东西留下。然后上 5 层逛 Patagonia 和 Arc'teryx，和乐天试完再一家成交。",
        transport: "步行",
        mapQuery: "신세계백화점 본점",
      },
      {
        time: "19:50–20:20",
        title: "回酒店放衣服",
        detail: "回 Kukdo 把衣服放下，再出门吃炸鸡。",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "21:00后",
        title: "BHC 忠武路站店",
        detail: "店内吃。百货占了 18:00–20:00，所以改到 21:00 后。甘口或普通辣。累了改酒店附近热汤。",
        meal: "BHC 炸鸡",
        mapQuery: "BHC 충무로역",
      },
    ],
    notes: [
      "气候卡 3 日：今天充，盖 D2–D4；D5 回机场改刷 T-money。",
      "化妆出门晚于 15:00：当天不进景福宫。乐天和新世界至少留一家成交，BHC 仍放 21:00 后。宫殿改到周一上午，博物馆缩到 2 小时。",
      "新世界时间紧：先放弃 LV 烫印，保 5 层 Patagonia 和 Arc'teryx。烫印不在回程前可取，就不要交件。",
    ],
  },
  {
    id: "D3",
    date: "1月3日 周日",
    title: "圣水 → 首尔林 → 户外背包 → 清溪川",
    hotel: "Hotel Kukdo",
    pace: "东线选品＋溪边散步",
    summary: "上午圣水延武装路，接着首尔林 SM 地下店，再到纛岛买户外背包。晚上清溪川，不爬南山。",
    steps: [
      {
        time: "09:00–10:00",
        title: "慢起与热餐",
        detail: "Hotel Kukdo；热餐，少带行李只背小包。",
        meal: "热餐",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "10:00–10:40",
        title: "2号线到圣水站",
        detail: "乙支路 4 街坐 2 号线到圣水站，先逛延武装路。",
        transport: "地铁 2 号线",
        mapQuery: "성수역",
      },
      {
        time: "10:40–12:00",
        title: "圣水洞咖啡与选品",
        detail: "延武装路一带咖啡和选品。户外服饰不在这里买。背包店不在这条巷里。",
        mapQuery: "성수동 연무장길",
      },
      {
        time: "12:00–12:25",
        title: "步行到首尔林",
        detail: "从延武装路步行到首尔林站一带，约 20 分钟。检索「광야@서울」。",
        transport: "步行",
        mapQuery: "서울숲역 5번출구",
      },
      {
        time: "12:25–13:05",
        title: "首尔林 SM 店",
        detail: "往十里路 83-21，Acro 首尔森林 D 塔地下 1 层 KWANGYA@SEOUL。首尔林站 5 号出口约 70 米。免费，每天 10:30–20:00。办公室不开放。看少女时代、东方神起的专辑和官方周边，没有就走。",
        mapQuery: "KWANGYA@SEOUL 왕십리로 83-21",
      },
      {
        time: "13:05–13:45",
        title: "首尔林附近熟食",
        detail: "热汤或盖饭，彻底加热。不安排生食。",
        meal: "熟食午餐",
        mapQuery: "서울숲역 맛집",
      },
      {
        time: "13:45–14:10",
        title: "首尔林到纛岛站",
        detail: "回到 2 号线圣水站，再坐一站到纛岛，5 号出口步行约 40 米。",
        transport: "地铁 2 号线",
        mapQuery: "뚝섬역 5번출구",
      },
      {
        time: "14:10–15:00",
        title: "圣水买户外背包",
        detail: "Trailhead 圣水店，阿且山路 54 号 1 层。每天 10:00–19:00。试背包。钟路 5 街那家不顺路，没码再周一去。",
        mapQuery: "오스프리 트레일헤드 성수점 아차산로 54",
      },
      {
        time: "15:00–15:40",
        title: "回酒店放下背包",
        detail: "2 号线回乙支路 4 街，把包放进房间。下午留在酒店休息。",
        transport: "地铁 2 号线",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "18:30–19:30",
        title: "清溪川散步",
        detail: "从乙支路下到清溪川，走到清溪广场再折返。1 月步道开着，广场瀑布有水，其余喷泉多半停。冷就只走到前两座桥。不爬南山。",
        mapQuery: "청계천 청계광장",
      },
    ],
    notes: [
      "SM 办公室不开放。店里没有想要的专辑就离开，不改后面的背包和清溪川。",
      "延误时先取消首尔林 SM 店，再缩短清溪川。背包仍要在 19:00 前试完。",
    ],
  },
  {
    id: "D4",
    date: "1月4日 周一",
    title: "博物馆 → 远观塔 → 用山 → BHC",
    hotel: "Hotel Kukdo",
    pace: "西线周一人少",
    summary: "周一上午博物馆精华，下午用山只逛任天堂和宝可梦，天黑后在博物馆庭院远看南山塔，晚上可再吃一顿 BHC。",
    steps: [
      {
        time: "08:30–09:20",
        title: "周一热餐出发",
        detail: "酒店热餐。若周六没进成景福宫，今天上午先去宫殿，博物馆改到下午 2 小时。",
        meal: "热餐",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "09:20–10:10",
        title: "地铁前往国立中央博物馆",
        detail: "乙支路或忠武路转 4 号线，二村站 2 号出口，步行约 10 分钟。周一 09:30 开馆，17:30 闭馆。",
        transport: "地铁 4 号线",
        mapQuery: "국립중앙박물관",
      },
      {
        time: "10:15–12:15",
        title: "国立中央博物馆",
        detail: "常设免费，只看精华约 2 小时。1 月 4 日不是定期休室日。",
        mapQuery: "국립중앙박물관",
        booking: "常设免费；特展另购",
      },
      {
        time: "12:15–13:00",
        title: "馆内或附近简餐",
        detail: "熟食简餐。限量宝可梦卡盒不排通宵队，下午只逛店。",
        meal: "简餐",
        mapQuery: "국립중앙박물관 식당",
      },
      {
        time: "13:00–13:30",
        title: "二村到用山",
        detail: "短途地铁到用山 I'Park。任天堂店周日到周四约 10:30–20:30。",
        transport: "地铁",
        mapQuery: "용산 아이파크몰",
      },
      {
        time: "13:30–16:20",
        title: "用山 I'Park：任天堂＋宝可梦",
        detail: "只逛任天堂和宝可梦，不买衣服。周一队伍短于周末，卡店仍可能中午停止发号。",
        mapQuery: "용산 아이파크몰 닌텐도",
      },
      {
        time: "16:30–17:20",
        title: "庭院远观南山塔",
        detail: "回到博物馆室外庭院，朝北看南山脊线上的塔。庭院开到 22:00。1 月日落约 17:25，看灯即可离开。雾霾重就取消。不进塔、不爬南山。",
        mapQuery: "국립중앙박물관 야외",
      },
      {
        time: "17:30–20:30",
        title: "回酒店等到炸鸡",
        detail: "回 Kukdo 休息。预办次日登机牌。避开 BHC 的 18:00–20:00。",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "21:00后",
        title: "BHC 忠武路站店",
        detail: "第二顿可选。累了就改酒店附近热汤。甘口或普通辣。",
        meal: "BHC 炸鸡",
        mapQuery: "BHC 충무로역",
      },
    ],
    notes: [
      "周一人少，所以博物馆和用山放今天。景福宫已在周六。",
      "小鹰圣水没码时，今天下班前可改去钟路 5 街直营（平日 10:00–20:30，钟路 5 街站 6 号出口）。会挤掉远观塔或第二顿炸鸡。",
    ],
  },
  {
    id: "D5",
    date: "1月5日 周二",
    title: "退房 → AREX → OZ335 回京",
    hotel: "返程",
    pace: "稳妥转场",
    summary: "退房后乙支路 4 街刷 T-money，2 号线经弘大转 AREX 普通，OZ335 飞回北京首都。",
    steps: [
      {
        time: "07:30–09:30",
        title: "早餐、退房、拖箱",
        detail: "酒店多不含早；大件一次带出。气候卡已过期，改刷 T-money。",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "09:45–10:15",
        title: "乙支路4街进站",
        detail: "刷 T-money 进站；预留找站台时间。",
        transport: "地铁",
        mapQuery: "을지로4가역",
      },
      {
        time: "10:15–11:45",
        title: "2号线→弘大→AREX普通",
        detail: "弘大不出闸换乘 AREX 普通；勿坐 Express。目标 12:00 前到仁川 T2。",
        transport: "2号线 + AREX 普通",
        mapQuery: "인천국제공항 T2",
      },
      {
        time: "12:00前",
        title: "值机、托运、安检",
        detail: "OZ335；退税与购物压缩，优先安检与登机口。",
        mapQuery: "인천공항 출국",
      },
      {
        time: "15:00–16:25",
        title: "OZ335 仁川→北京",
        detail: "以机票实际时刻为准；抵达北京首都后自行回家程。",
        transport: "韩亚 OZ335",
        mapQuery: "北京首都国际机场",
      },
    ],
    notes: [
      "出发前一日再核对 OZ335 时刻与航站楼（T2）。",
      "严重延误：取消一切购物，只保退房 → 弘大 → AREX → 值机。",
    ],
  },
];

export function createStepId(dayId, time, title) {
  const input = `${dayId}\u001f${time}\u001f${title}`;
  let hash = 0x811c9dc5;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }

  return `${dayId.toLowerCase()}-${(hash >>> 0).toString(16).padStart(8, "0")}`;
}

export const days = rawDays.map((day) => ({
  ...day,
  steps: day.steps.map((step, index, steps) => ({
    ...step,
    id: createStepId(day.id, step.time, step.title),
    imageQuery: `${day.date.split(" ")[0]} ${step.title} 韩国旅行`,
    mapQuery: step.mapQuery || `${step.title} 서울`,
    ...(index > 0 ? { routeFrom: steps[index - 1].title } : {}),
  })),
}));

export const confirmedBookings = [
  {
    id: "flight-oz336",
    date: "1/1",
    category: "机票",
    title: "OZ336 北京→仁川",
    status: "已购票",
    details: ["北京首都 T3 → 仁川 T2", "当地约 17:30–20:30（以机票为准）"],
  },
  {
    id: "flight-oz335",
    date: "1/5",
    category: "机票",
    title: "OZ335 仁川→北京",
    status: "已购票",
    details: ["仁川 T2 → 北京首都", "当地约 15:00–16:25（以机票为准）"],
  },
  {
    id: "hotel-kukdo",
    date: "1/1–1/5",
    category: "酒店",
    title: "Hotel Kukdo × 4 晚",
    status: "已确认",
    details: ["明洞／乙支路；通常不含早餐", "乙支路 4 街站 9／10 出口步行约 1 分钟"],
  },
];

export const bookingRows = [
  ["出发前", "Climate Card 3日×2", "D2 早上充值，盖 D2–D4 地铁；D1／D5 AREX 用 T-money", "高"],
  ["出发前", "T-money（Apple Pay）", "Visa 地铁弱；入境 AREX 与 D5 回机场依赖 T-money", "高"],
  ["出发前", "明洞色彩测试 10:00", "1/2 两人，店还没定。素颜先色彩再化妆。出门晚于 15:00 则景福宫改周一上午", "高"],
  ["1/2", "景福宫", "周六下午入场，最晚 16:00；冬季 17:00 闭馆。不要改到周二", "中"],
  ["1/3", "圣水买户外背包", "纛岛站 5 号出口，每天 10:00–19:00。没码再周一去钟路 5 街，平日到 20:30", "中"],
  ["1/2下午", "乐天／新世界金卡返点", "景福宫之后。Arc'teryx、Patagonia 只在乐天本店 7 层、新世界本店 5 层买。周六约开到 20:30", "高"],
  ["1/2傍晚", "新世界 LV 烫印", "本馆 1 层。先问能否做、费用和取件日。取件必须在 1/5 上午前；当天取不了或赶不上就不要交", "低"],
  ["1/3", "首尔林 SM 店", "KWANGYA@SEOUL，地下 1 层，免费。出发前看 @kwangya_seoul 有没有想买的专辑", "低"],
  ["1/4", "国立中央博物馆", "周一开馆 09:30–17:30；庭院到 22:00，用来远看南山塔", "中"],
  ["出发前7天", "航班与航站楼复核", "OZ336／OZ335、仁川 T2、首都 T3", "高"],
];

export const fallbackRows = [
  ["严寒", "清溪川缩短到清溪广场；不爬南山。博物馆、百货、圣水室内顶上", "保买衣和 BHC"],
  ["D2 化妆超时", "出门晚于 15:00 不进宫。乐天和新世界至少留一家，BHC 放 21:00 后", "保返点"],
  ["D2 试衣排队", "两家都看，在人少的那家成交", "周六店开到约 20:30"],
  ["D3 圣水超时", "先取消首尔林 SM 店。19:00 前仍试背包", "保背包和清溪川"],
  ["D4 雾霾或宝可梦大排", "取消远观塔；卡盒不排通宵，只逛任天堂", "保博物馆"],
  ["D5 回程延误风险", "取消一切购物，只保退房→弘大→AREX→值机", "国际航班优先"],
  ["BHC 18–20点排队", "改 17:15 前或 21:00 后；或改近酒店热汤", "不强求店内久坐"],
];

export const hotelSummary = [{ days: "D1–D4", hotel: "Hotel Kukdo（乙支路／明洞）" }];

export const flightSummary = [
  { flight: "OZ336", route: "北京首都 → 仁川 T2（约 17:30–20:30）" },
  { flight: "OZ335", route: "仁川 T2 → 北京首都（约 15:00–16:25）" },
];
