const STYLE_ID = 'go-away-ads-style';
const cssText = 'iframe[id^="ad"], iframe[class*="ad"], .ad, .ads, .adsbygoogle, [class*="advert"], [id*="advert"], [data-ad], [data-ad-client], div[id^="google_ads"], div[class*="sponsor"], [class*="banner"], section[class*="ad"], [aria-label*="advertisement"] { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important; }';

function injectStyle() {
  let style = document.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = cssText;
    document.head.appendChild(style);
  }
}

function removeStyle() {
  const style = document.getElementById(STYLE_ID);
  if (style) style.remove();
}

function removeAds() {
  const ads = document.querySelectorAll('iframe[id^="ad"], iframe[class*="ad"], .ad, .ads, .adsbygoogle, [class*="advert"], [id*="advert"], [data-ad], [data-ad-client], div[id^="google_ads"], div[class*="sponsor"], [class*="banner"], section[class*="ad"], [aria-label*="advertisement"]');
  ads.forEach(ad => ad.remove());
}

injectStyle();
removeAds();

const observer = new MutationObserver(() => {
  injectStyle();
  removeAds();
});
observer.observe(document.body, { childList: true, subtree: true });

chrome.runtime.onMessage.addListener(msg => {
  if (msg.action === 'toggle-site') {
    if (msg.disable) removeStyle();
    else { injectStyle(); removeAds(); }
  }
});
