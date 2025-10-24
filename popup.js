const toggle = document.getElementById("toggle");
const status = document.getElementById("status");

let hostname;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const url = new URL(tabs[0].url);
  hostname = url.hostname;

  chrome.storage.sync.get({ disabledSites: [] }, (data) => {
    toggle.checked = data.disabledSites.includes(hostname);
    updateStatus();
  });
});

toggle.addEventListener("change", () => {
  chrome.storage.sync.get({ disabledSites: [] }, (data) => {
    let disabledSites = data.disabledSites;
    if (toggle.checked) {
      disabledSites = [...new Set([...disabledSites, hostname])];
      sendMessage(true);
    } else {
      disabledSites = disabledSites.filter((s) => s !== hostname);
      sendMessage(false);
    }
    chrome.storage.sync.set({ disabledSites }, updateStatus);
  });
});

function sendMessage(disable) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggle-site", disable });
  });
}

function updateStatus() {
  status.textContent = toggle.checked
    ? "Ad blocker disabled for this site"
    : "Ad blocker active";
}
