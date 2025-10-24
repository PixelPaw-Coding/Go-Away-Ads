chrome.runtime.onInstalled.addListener(() => { console.log('Go Away Ads! installed'); });

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => { if (msg.action === 'toggle-site') { sendResponse({status: 'received'}); } });
