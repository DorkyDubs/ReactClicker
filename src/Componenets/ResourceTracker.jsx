export default function resourceTracker() {
  let resourceCount = localStorage.cookieCount || 0;
  let resourcePerSecond = localStorage.cookiesPerSecond || 0;
  return resourceCount, resourcePerSecond;
}
