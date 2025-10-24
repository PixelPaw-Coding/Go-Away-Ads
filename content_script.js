const STYLE_ID = 'go-away-ads-style';
const cssText = `
iframe[id^="ad"], iframe[class*="ad"], .ad, .ads, .adsbygoogle,
[class*="advert"], [id*="advert"], [data-ad], [data-ad-client],
div[id^="google_ads"], div[class*="sponsor"], [class*="banner"],
section[class*="ad"], [aria-label*="advertisement"] {
display: none !important;
visibility: hidden !important;
height: 0 !important;
width: 0 !important;
overflow: hidden !important;
margin: 0 !important;
padding: 0 !important;
}`;


function injectStyle() {
if (!document.getElementById(STYLE_ID)) {
const style = document.createElement('style');
style.id = STYLE_ID;
style.textContent = cssText;
document.head.appendChild(style);
}
}


function removeStyle() {
const style = document.getElementById(STYLE_ID);
if (style) style.remove();
}


// Check if site is disabled
const hostname = location.hostname;
chrome.storage.sync.get({ disabledSites: [] }, data => {
if (!data.disabledSites.includes(hostname)) injectStyle();
else removeStyle();
});


// Listen for toggle from popup
chrome.runtime.onMessage.addListener(msg => {
if (msg.action === 'toggle-site') {
if (msg.disable) removeStyle();
else injectStyle();
}
});


// MutationObserver to handle dynamically added ads
const observer = new MutationObserver(() => injectStyle());
observer.observe(document.body, { childList: true, subtree: true });
