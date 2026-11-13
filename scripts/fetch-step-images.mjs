/**
 * Download place-matching photos for each itinerary step.
 * Prefer curated Wikimedia Commons filenames; fall back to Commons search.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { days } from "../data/itinerary.js";
import { getStepImageBasename } from "../lib/site.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const imageDirectory = resolve(root, "assets", "images");
const extensionsPath = resolve(root, "data", "local-image-extensions.js");
const creditsPath = resolve(root, "data", "image-credits.js");

/** @type {Record<string, { file?: string, search: string, note: string }>} */
const STEP_SOURCES = {
  "抵达北京首都机场T3": {
    file: "Beijing Capital International Airport Terminal 3.jpg",
    search: "Beijing Capital International Airport Terminal 3",
    note: "首都机场 T3",
  },
  "OZ336 北京→仁川": {
    file: "Asiana Airlines Airbus A350-900 HL8078 ICN 2018-07-28.jpg",
    search: "Asiana Airlines aircraft Incheon",
    note: "韩亚客机",
  },
  "入境、取行李、T-money": {
    file: "Incheon International Airport Terminal 2 Arrival Hall.jpg",
    search: "Incheon International Airport Terminal 2",
    note: "仁川机场到达",
  },
  "AREX 普通→弘大→2号线": {
    file: "AREX train at Incheon International Airport Station.jpg",
    search: "AREX train Seoul",
    note: "AREX 机场铁路",
  },
  "步行至 Hotel Kukdo": {
    file: "Euljiro, Seoul.jpg",
    search: "Euljiro Seoul street",
    note: "乙支路酒店一带",
  },
  "酒店周边便利店": {
    file: "CU convenience store in South Korea.jpg",
    search: "CU convenience store Korea",
    note: "韩国便利店",
  },
  "酒店热餐与充气候卡": {
    file: "T-money card.jpg",
    search: "T-money Seoul card",
    note: "交通卡／气候卡",
  },
  "地铁前往国立中央博物馆": {
    file: "Seoul Metro Line 4 train.jpg",
    search: "Seoul Metro Line 4",
    note: "首尔地铁 4 号线",
  },
  "国立中央博物馆": {
    file: "National Museum of Korea.jpg",
    search: "National Museum of Korea exterior",
    note: "国立中央博物馆外观",
  },
  "馆内或附近简餐": {
    file: "Interior of the National Museum of Korea.jpg",
    search: "National Museum of Korea interior hall",
    note: "博物馆内部",
  },
  "二村→用山": {
    file: "Yongsan Station Seoul.jpg",
    search: "Yongsan Station Seoul",
    note: "龙山／用山站",
  },
  "用山 I'Park：任天堂＋宝可梦": {
    file: "I-Park Mall Yongsan.jpg",
    search: "I'Park Mall Yongsan Seoul",
    note: "用山 I'Park Mall",
  },
  "回 Hotel Kukdo 休整": {
    file: "Myeongdong Seoul night street.jpg",
    search: "Myeongdong Seoul street daytime",
    note: "明洞／乙支路街区",
  },
  "BHC 忠武路站店": {
    file: "Korean fried chicken.jpg",
    search: "Korean fried chicken BHC",
    note: "韩式炸鸡",
  },
  "慢起与热餐": {
    file: "Korean breakfast table.jpg",
    search: "Korean breakfast banchan",
    note: "韩式热餐",
  },
  "2号线→圣水站": {
    file: "Seoul Subway Line 2.jpg",
    search: "Seoul Metro Line 2 train",
    note: "2 号线",
  },
  "圣水洞咖啡与选品": {
    file: "Seongsu-dong Seoul.jpg",
    search: "Seongsu-dong cafe Seoul",
    note: "圣水洞街区",
  },
  "圣水熟食午餐": {
    file: "Korean cuisine jjigae.jpg",
    search: "Korean hot soup jjigae",
    note: "韩式热汤盖饭",
  },
  "圣水续逛→回酒店": {
    file: "Seongdong Bridge Seoul.jpg",
    search: "Seongsu Seoul factory cafe street",
    note: "圣水街道",
  },
  "休整加衣": {
    file: "Seoul winter snow street.jpg",
    search: "Seoul winter cold weather coat",
    note: "首尔冬日加衣",
  },
  "明洞／忠武路轻晚餐": {
    file: "Myeongdong shopping street Seoul.jpg",
    search: "Myeongdong Seoul night",
    note: "明洞夜市街道",
  },
  "南山首尔塔": {
    file: "N Seoul Tower at night.jpg",
    search: "N Seoul Tower Namsan night",
    note: "南山首尔塔夜景",
  },
  "热餐与带护照": {
    file: "Republic of China passport.jpg",
    search: "Chinese passport travel documents",
    note: "出行证件（示意）",
  },
  "3号线→景福宫站": {
    file: "Gyeongbokgung Station.jpg",
    search: "Gyeongbokgung Station Seoul Metro",
    note: "景福宫站",
  },
  "景福宫": {
    file: "Geunjeongjeon at Gyeongbokgung.jpg",
    search: "Gyeongbokgung Geunjeongjeon",
    note: "景福宫勤政殿",
  },
  "景福宫站附近午餐": {
    file: "Samgyetang Korean chicken soup.jpg",
    search: "Samgyetang Korean food",
    note: "参鸡汤类熟食",
  },
  "回明洞商圈": {
    file: "Lotte Department Store Myeongdong.jpg",
    search: "Lotte Department Store Myeongdong Seoul",
    note: "乐天本店／明洞",
  },
  "乐天本店→新世界本店": {
    file: "Shinsegae Department Store Seoul.jpg",
    search: "Shinsegae Department Store main Seoul",
    note: "新世界本店",
  },
  "回酒店放衣打包": {
    file: "Suitcase packing travel.jpg",
    search: "packing suitcase travel clothes",
    note: "收拾行李",
  },
  "可选 BHC 或近酒店热汤": {
    file: "Yangnyeom chicken Korean.jpg",
    search: "Korean seasoned fried chicken",
    note: "可选炸鸡／热汤",
  },
  "早餐、退房、拖箱": {
    file: "Hotel lobby suitcase checkout.jpg",
    search: "hotel checkout luggage trolley",
    note: "退房拖箱",
  },
  "乙支路4街进站": {
    file: "Euljiro 4-ga Station.jpg",
    search: "Euljiro 4-ga Station Seoul",
    note: "乙支路 4 街站",
  },
  "2号线→弘大→AREX普通": {
    file: "Hongik University Station AREX.jpg",
    search: "Hongik University Station AREX Seoul",
    note: "弘大 AREX 换乘",
  },
  "值机、托运、安检": {
    file: "Incheon Airport departure hall.jpg",
    search: "Incheon Airport Terminal 2 departure",
    note: "仁川值机大厅",
  },
  "OZ335 仁川→北京": {
    file: "Asiana Airlines Boeing 777.jpg",
    search: "Asiana Airlines plane takeoff",
    note: "返程客机",
  },
};

const UA =
  "SEL2701-travel-itinerary/1.0 (personal offline guide; Wikimedia Commons fetch)";

async function commonsFileUrl(filename) {
  const title = filename.startsWith("File:") ? filename : `File:${filename}`;
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", title);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url|mime|size");
  api.searchParams.set("iiurlwidth", "1280");
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Commons file lookup failed: ${res.status}`);
  const data = await res.json();
  const page = Object.values(data.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  if (!info) return null;
  return {
    url: info.thumburl || info.url,
    fullUrl: info.url,
    mime: info.mime,
    title: page.title,
    pageUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replaceAll(" ", "_"))}`,
  };
}

async function commonsSearch(query) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("generator", "search");
  api.searchParams.set("gsrsearch", `filetype:bitmap ${query}`);
  api.searchParams.set("gsrnamespace", "6");
  api.searchParams.set("gsrlimit", "8");
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url|mime|size");
  api.searchParams.set("iiurlwidth", "1280");
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Commons search failed: ${res.status}`);
  const data = await res.json();
  const pages = Object.values(data.query?.pages ?? {}).sort(
    (a, b) => (a.index ?? 99) - (b.index ?? 99),
  );

  for (const page of pages) {
    const info = page.imageinfo?.[0];
    if (!info?.url) continue;
    if (!/^image\/(jpeg|png|webp)$/i.test(info.mime ?? "")) continue;
    // Skip tiny icons / logos when possible
    if ((info.size ?? 0) > 0 && info.size < 40_000) continue;
    return {
      url: info.thumburl || info.url,
      fullUrl: info.url,
      mime: info.mime,
      title: page.title,
      pageUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replaceAll(" ", "_"))}`,
    };
  }
  return null;
}

function extensionFromMime(mime, url) {
  if (mime?.includes("png")) return "png";
  if (mime?.includes("webp")) return "webp";
  if (mime?.includes("jpeg") || mime?.includes("jpg")) return "jpg";
  const match = String(url).match(/\.(png|jpe?g|webp)(?:\?|$)/i);
  return match ? match[1].toLowerCase().replace("jpeg", "jpg") : "jpg";
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download failed ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5_000) throw new Error(`File too small (${buf.length}) for ${url}`);
  await writeFile(dest, buf);
  return buf.length;
}

async function resolveSource(title) {
  const spec = STEP_SOURCES[title];
  if (!spec) throw new Error(`No source mapping for: ${title}`);

  if (spec.file) {
    try {
      const hit = await commonsFileUrl(spec.file);
      if (hit) return { ...hit, note: spec.note, query: spec.file };
    } catch {
      // fall through to search
    }
  }

  const hit = await commonsSearch(spec.search);
  if (!hit) throw new Error(`No Commons hit for "${title}" (${spec.search})`);
  return { ...hit, note: spec.note, query: spec.search };
}

await mkdir(imageDirectory, { recursive: true });

const steps = days.flatMap((day) => day.steps);
const extensions = {};
const credits = [];

for (const step of steps) {
  const stem = getStepImageBasename(step);
  process.stdout.write(`→ ${stem} ... `);
  const source = await resolveSource(step.title);
  const ext = extensionFromMime(source.mime, source.url);
  const filename = `${stem}.${ext}`;
  const dest = resolve(imageDirectory, filename);
  const bytes = await download(source.url, dest);
  extensions[stem] = ext;
  credits.push({
    stepId: step.id,
    localFile: `assets/images/${filename}`,
    title: `${source.note} — ${step.title}`,
    creator: "Wikimedia Commons",
    license: "see source page",
    licenseUrl: source.pageUrl,
    sourceUrl: source.pageUrl,
    retrievedAt: new Date().toISOString().slice(0, 10),
    commonsTitle: source.title,
    query: source.query,
  });
  console.log(`ok (${Math.round(bytes / 1024)} KB) ← ${source.title}`);
  await new Promise((r) => setTimeout(r, 350));
}

await writeFile(
  extensionsPath,
  "// Auto-generated by scripts/fetch-step-images.mjs\n" +
    `export const localImageExtensions = ${JSON.stringify(extensions, null, 2)};\n`,
  "utf8",
);

await writeFile(
  creditsPath,
  "// Generated by scripts/fetch-step-images.mjs\n" +
    `export const imageCredits = ${JSON.stringify(credits, null, 2)};\n`,
  "utf8",
);

console.log(`\nDone: ${Object.keys(extensions).length} images.`);
