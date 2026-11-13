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
    title: "国立中央博物馆 → 用山 → BHC",
    hotel: "Hotel Kukdo",
    pace: "博物馆＋商场＋炸鸡",
    summary: "上午国立中央博物馆精华，下午用山 I'Park 只逛任天堂＋宝可梦，晚上 BHC 忠武路店内吃。",
    steps: [
      {
        time: "08:30–09:30",
        title: "酒店热餐与充气候卡",
        detail: "乙支路 4 街一带热餐；充气候卡 3 日 ×2（盖 D2–D4）。",
        meal: "热餐",
        mapQuery: "을지로4가",
      },
      {
        time: "09:30–10:15",
        title: "地铁前往国立中央博物馆",
        detail: "例：乙支路 3 街／忠武路 → 4 号线二村站 → 步行约 10 分钟。",
        transport: "地铁 4 号线",
        mapQuery: "이촌역",
      },
      {
        time: "10:15–12:15",
        title: "国立中央博物馆",
        detail: "常设免费；只看精华约 2 小时。周六可延至约 21:00，仍按午前收束。",
        mapQuery: "국립중앙박물관",
        booking: "常设免费；特展另购",
      },
      {
        time: "12:15–13:00",
        title: "馆内或附近简餐",
        detail: "简餐即可；或留肚子给晚上炸鸡。",
        meal: "简餐",
        mapQuery: "국립중앙박물관 식당",
      },
      {
        time: "13:00–13:30",
        title: "二村→用山",
        detail: "短距地铁或步行至用山 I'Park Mall。",
        transport: "地铁／步行",
        mapQuery: "용산 아이파크몰",
      },
      {
        time: "13:30–16:30",
        title: "用山 I'Park：任天堂＋宝可梦",
        detail: "只逛任天堂与宝可梦；不买衣（始祖鸟／Patagonia 留 D4 百货）。逛完可提前走。",
        mapQuery: "용산 아이파크몰 닌텐도",
      },
      {
        time: "16:30–17:30",
        title: "回 Hotel Kukdo 休整",
        detail: "回酒店放背包、休整；再出门吃炸鸡。",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "17:30–18:00 或 21:00后",
        title: "BHC 忠武路站店",
        detail: "店内吃；避开 18–20 点高峰。甘口／普通辣度。D4 可选再来。",
        meal: "BHC 炸鸡",
        mapQuery: "BHC 충무로역",
      },
    ],
    notes: [
      "气候卡 3 日：今天充，盖 D2–D4；D5 回机场改刷 T-money。",
      "延误时先砍 I'Park，保留博物馆 + BHC。",
    ],
  },
  {
    id: "D3",
    date: "1月3日 周日",
    title: "圣水 + 南山首尔塔",
    hotel: "Hotel Kukdo",
    pace: "白天圣水＋夜间南山",
    summary: "上午圣水咖啡／选品，回酒店休整加衣，晚间南山首尔塔室内展望台；弘大不当主日。",
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
        title: "2号线→圣水站",
        detail: "乙支路 4 街沿线换乘至圣水站。",
        transport: "地铁 2 号线",
        mapQuery: "성수역",
      },
      {
        time: "10:40–13:00",
        title: "圣水洞咖啡与选品",
        detail: "站～延武庄路一带：咖啡／选品／快闪；不买户外衣。",
        mapQuery: "성수동 연무장길",
      },
      {
        time: "13:00–14:30",
        title: "圣水熟食午餐",
        detail: "热汤／盖饭等熟食；不安排生食。",
        meal: "熟食午餐",
        mapQuery: "성수동 맛집",
      },
      {
        time: "14:30–16:30",
        title: "圣水续逛→回酒店",
        detail: "2 号线回乙支路 4 街；回 Kukdo 休整。",
        transport: "地铁 2 号线",
        mapQuery: "을지로4가역",
      },
      {
        time: "16:30–18:00",
        title: "休整加衣",
        detail: "山上风大，加手套帽子厚外套。",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "18:00–19:00",
        title: "明洞／忠武路轻晚餐",
        detail: "热汤轻晚餐，别吃太撑；随后上山。",
        meal: "热汤轻晚餐",
        mapQuery: "명동",
      },
      {
        time: "19:00–21:00",
        title: "南山首尔塔",
        detail: "明洞侧缆车或公交上山；室内展望台为主。星巴克杯同款地标可顺路看，不专程。",
        mapQuery: "남산서울타워",
        booking: "缆车／塔票现场或官方 App",
      },
    ],
    notes: [
      "冬日南山风大、可能结冰，放慢脚步。",
      "延误时先取消登塔，保留圣水半日。",
    ],
  },
  {
    id: "D4",
    date: "1月4日 周一",
    title: "景福宫 → 乐天／新世界购衣",
    hotel: "Hotel Kukdo",
    pace: "宫殿主线＋百货返点",
    summary: "上午景福宫主线（周二休馆故必须今天），下午乐天本店→新世界本店买 Arc'teryx／Patagonia 冲金卡；可选再吃 BHC。",
    steps: [
      {
        time: "08:30–09:15",
        title: "热餐与带护照",
        detail: "酒店热餐；护照随身（百货／退税用）。",
        meal: "热餐",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "09:15–09:45",
        title: "3号线→景福宫站",
        detail: "乙支路 3 街 3 号线至景福宫站；冬日约 09:00 开馆。",
        transport: "地铁 3 号线",
        mapQuery: "경복궁역",
      },
      {
        time: "09:45–12:00",
        title: "景福宫",
        detail: "勤政殿主线即可，约 2 小时；不串昌德宫／北村特种兵。",
        mapQuery: "경복궁",
        booking: "现场或官方预约（旺季）",
      },
      {
        time: "12:00–13:00",
        title: "景福宫站附近午餐",
        detail: "热汤／参鸡汤类熟食午餐。",
        meal: "熟食午餐",
        mapQuery: "경복궁역 맛집",
      },
      {
        time: "13:00–13:40",
        title: "回明洞商圈",
        detail: "3 号线回乙支路一带，步行至乐天本店。",
        transport: "地铁 3 号线",
        mapQuery: "롯데백화점 본점",
      },
      {
        time: "13:40–16:30",
        title: "乐天本店→新世界本店购衣",
        detail: "始祖鸟／Patagonia；冲金卡返点。两家看完再一家成交，不在 I'Park 买衣。",
        mapQuery: "신세계백화점 본점 서울",
        booking: "金卡／返点规则出行前再确认",
      },
      {
        time: "16:30–18:00",
        title: "回酒店放衣打包",
        detail: "放衣服、过秤、打包；预办次日登机牌。",
        mapQuery: "Hotel Kukdo 을지로4가",
      },
      {
        time: "18:00前或21:00后",
        title: "可选 BHC 或近酒店热汤",
        detail: "累则取消第二顿炸鸡；保休息。",
        meal: "可选 BHC",
        mapQuery: "BHC 충무로역",
      },
    ],
    notes: [
      "景福宫周二休馆——D4 是周一，合适；若改期避开周二。",
      "购衣延误：先保景福宫，百货缩到 1 家店 1 个品牌。",
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
  ["出发前", "Climate Card 3日×2", "D2 白天充值，盖 D2–D4 地铁；D1／D5 AREX 用 T-money", "高"],
  ["出发前", "T-money（Apple Pay）", "Visa 地铁弱；入境 AREX 与 D5 回机场依赖 T-money", "高"],
  ["1/3前", "景福宫门票／预约", "D4 周一开馆；旺季可官方预约。勿改到周二", "中"],
  ["1/3上午", "南山缆车／塔票", "按排队决定是否登塔；可看官方 App", "中"],
  ["1/4出门前", "乐天／新世界金卡返点", "Arc'teryx、Patagonia 只在可返点百货买", "高"],
  ["1/1晚或1/2早", "国立中央博物馆开放", "确认官网闭馆日与特展", "中"],
  ["出发前7天", "航班与航站楼复核", "OZ336／OZ335、仁川 T2、首都 T3", "高"],
];

export const fallbackRows = [
  ["严寒／冰雪", "缩减南山户外与长步行；博物馆、百货、圣水室内咖啡顶上", "保每日主轴"],
  ["D2 博物馆人多或异常", "改 I'Park 室内为主，傍晚仍可 BHC；宫殿留 D4", "保 BHC"],
  ["D3 南山停运或风大", "取消登塔，圣水延长；晚间忠武路收工", "不硬排队"],
  ["D4 购衣排队过长", "只进 1 家百货 1 个品牌", "景福宫不动"],
  ["D5 回程延误风险", "取消一切购物，只保退房→弘大→AREX→值机", "国际航班优先"],
  ["BHC 18–20点排队", "改 17:30–18:00 或 21:00 后；或改近酒店热汤", "不强求店内久坐"],
];

export const hotelSummary = [{ days: "D1–D4", hotel: "Hotel Kukdo（乙支路／明洞）" }];

export const flightSummary = [
  { flight: "OZ336", route: "北京首都 → 仁川 T2（约 17:30–20:30）" },
  { flight: "OZ335", route: "仁川 T2 → 北京首都（约 15:00–16:25）" },
];
