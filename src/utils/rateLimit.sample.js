const buckets = new Map();

/*
  Sample in-memory rate limit for public demo purposes.
  Production uses a proper strategy and environment-aware behavior.
*/
export function rateLimitSample(key, limit = 20, windowMs = 60_000) {
  const now = Date.now();
  const cur = buckets.get(key) || { count: 0, resetAt: now + windowMs };

  if (now > cur.resetAt) {
    cur.count = 0;
    cur.resetAt = now + windowMs;
  }

  cur.count += 1;
  buckets.set(key, cur);

  if (cur.count > limit) {
    return { ok: false, resetAt: cur.resetAt };
  }
  return { ok: true, resetAt: cur.resetAt };
}
