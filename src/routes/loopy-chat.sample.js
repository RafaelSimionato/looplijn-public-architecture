import { Router } from "express";
import { safeString, safeArray, normalizeLang, pickClientIp } from "../utils/safe.js";
import { rateLimitSample } from "../utils/rateLimit.sample.js";

const router = Router();

/*
  Sanitized example of a production-style endpoint:
  - validates inputs
  - rate limits
  - returns a stable response shape
  - avoids leaking stack traces
*/
router.post("/", (req, res) => {
  try {
    const ip = pickClientIp(req);

    const limited = rateLimitSample(ip);
    if (!limited.ok) {
      return res.status(429).json({
        ok: false,
        error: "Too many requests. Please try again soon."
      });
    }

    const messages = safeArray(req.body?.messages, 30);
    const lang = normalizeLang(req.body?.lang);

    const lastUser = [...messages].reverse().find((m) => m?.role === "user");
    const userText = safeString(lastUser?.content, 2000);

    if (!userText) {
      return res.status(400).json({ ok: false, error: "Missing user message" });
    }

    // This is where Looplijn calls the real model in production.
    // We return a deterministic response here because this is a public sample.
    const reply = lang === "nl"
      ? "Dank je. Dit is een publieke voorbeeld-endpoint van Looplijn. In productie verwerkt Loopy hier echte gesprekken."
      : "Thanks. This is a public sample endpoint from Looplijn. In production, Loopy processes real conversations here.";

    return res.json({
      ok: true,
      status: "in_progress",
      reply,
      meta: {
        lang: lang || "en",
        receivedMessages: messages.length
      }
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Internal error"
    });
  }
});

export default router;
