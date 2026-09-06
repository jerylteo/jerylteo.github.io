/**
 * RunLab service worker — app shell only.
 *
 * Deliberately small. Its entire job is that launching from the iOS home screen
 * with no connectivity shows the app rather than Safari's error page; the app
 * then renders its own "can't reach Supabase" state, which is a screen the user
 * can act on.
 *
 * It never caches a Supabase response. Health data and auth tokens do not belong
 * in a cache the app cannot invalidate, and a stale activity list is worse than
 * an honest empty one — the whole degradation design depends on the app knowing
 * what it actually knows.
 */

const VERSION = "runlab-shell-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // Same-origin only: Supabase, the Edge Function and Google are never cached.
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(new URL("./", self.location.href).pathname)) return;

  // Navigations: network first, so a deploy is picked up immediately; fall back
  // to the cached shell only when the network is genuinely unavailable.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html").then((r) => r ?? Response.error())),
    );
    return;
  }

  // Hashed build assets are immutable, so cache-first is safe and instant.
  event.respondWith(
    caches.match(request).then(
      (hit) =>
        hit ??
        fetch(request).then((res) => {
          if (res.ok && res.type === "basic") {
            const copy = res.clone();
            caches.open(VERSION).then((c) => c.put(request, copy));
          }
          return res;
        }),
    ),
  );
});
