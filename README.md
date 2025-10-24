# 🧱 Go Away Ads!

**Go Away Ads!** is a simple, lightweight ad blocker that uses only CSS to hide annoying ads on websites — no heavy scripts, no trackers, no resource drain.

It’s designed for **Chromium-based browsers** (Google Chrome, Opera, Brave, Vivaldi, etc.).
A userscript-compatible Pale Moon version is also available on GitHub Gist.

---

## 🚀 Features

* 🧹 **CSS-based ad blocking** – Hides ads using style rules, not JavaScript injection.
* ⚙️ **Per-site toggle** – Quickly disable the ad blocker for specific websites from the popup.
* 🪶 **Lightweight** – Uses minimal memory and runs instantly on page load.
* 🔒 **Private** – No tracking, no analytics, no remote rule lists.

---

## 🧩 Installation (for Chrome & other Chromium browsers)

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions`
3. Turn on **Developer Mode** (top-right corner).
4. Click **Load unpacked** and select the `go-away-ads` folder.
5. Done! The extension will appear in your toolbar.

You can click the icon to disable it per-site.

---

## 🧠 How It Works

Unlike traditional ad blockers that use network filters or JavaScript,
**Go Away Ads!** works purely by hiding ad elements with CSS.

It targets elements with names like:

```css
.ad, .ads, .adsbygoogle, [data-ad], iframe[id^="ad"], [class*="advert"]
```

This means it won’t block network requests — it just visually removes the ads.
Fast, simple, and low-power.

---

## 🧱 Folder Structure

```
go-away-ads/
 ├─ manifest.json
 ├─ content.css
 ├─ content_script.js
 ├─ popup.html
 ├─ popup.js
 ├─ background.js
 ├─ icons/
 │   ├─ 16.png
 │   ├─ 48.png
 │   └─ 128.png
 └─ README.md
```

---

## 🧰 Tech Info

* **Manifest Version:** 3
* **Language:** JavaScript / CSS
* **Permissions:** `storage`, `scripting`, `activeTab`
* **License:** MIT (free for personal and commercial use)

---

## 🧑‍💻 Credits

Created by **Pixelpaw Paramount**
© 2025 – All rights reserved.

---

## ❤️ Support

If you enjoy *Go Away Ads!*, consider:

* ⭐ Starring this repo on GitHub
* 🐞 Reporting bugs or sites with unblocked ads via Issues
* 💬 Sharing feedback or improvement ideas
