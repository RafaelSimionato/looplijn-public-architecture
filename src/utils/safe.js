export function safeString(v, max = 2000) {
  if (v == null) return "";
  const s = String(v).trim();
  if (!s) return "";
  return s.slice(0, max);
}

export function safeArray(arr, maxItems = 30) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, maxItems).map((x) => {
    const role = safeString(x?.role, 20);
    const content = safeString(x?.content, 4000);
    if (!role || !content) return null;
    return { role, content };
  }).filter(Boolean);
}

export function normalizeLang(lng) {
  const v = String(lng || "").toLowerCase().trim();
  if (!v) return "";
  if (v.startsWith("nl")) return "nl";
  if (v.startsWith("en")) return "en";
  return v.slice(0, 10);
}

export function pickClientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.length) return xf.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}
