# Zen Buddhist Path Lite
A minimalist, bilingual (中文 / English), client-side web application that provides
a simple personality-based Buddhist practice recommendation using Tianji-style
energy mapping. All calculations run entirely on the user’s device and require no server.

This project is designed to be:
- 100% free for users  
- AdSense-supported  
- Cloudflare Pages deployable  
- Mobile-first  
- Zero-backend  
- Privacy-friendly (no data storage)  

---

## ✨ Features

### 1. Bilingual UI (中文 / English)
Both languages are included by default. Users can switch instantly without page reload.

### 2. Zero Data Storage
All birthdate and analysis logic runs locally in the browser (client-side JS only).
No databases, cookies, or external APIs are used.

### 3. Consent Modal  
First-time users are shown a friendly consent prompt that meets the privacy,
disclaimer, and AdSense transparency requirements.

### 4. Tianji → Buddhist Practice Mapping  
Basic energy mapping function built into `app.js`.  
You may extend the mapping logic independently.

### 5. Share-Card Generation (Canvas)
The app generates a shareable image containing the user’s result using:
- `/assets/sharecard_clean_4x5.png`
- HTML5 Canvas rendering

Users may save/download the generated image.

### 6. Social Sharing (Facebook / WhatsApp)
Built-in share flows using the platform-native URLs.

### 7. AdSense Integration
Configured for:
- client ID: `ca-pub-9188806824600550`
- responsive ad units  
- Cloudflare-compatible script loading

You may add or modify ad slots as needed.

---

## 🗂 File Structure
/
├── index.html
├── style.css
├── app.js
│
├── terms.html
├── privacy.html
├── disclaimer.html
│
└── assets/
├── sharecard_clean_4x5.png
└── (any additional icons or images)


---

## 🛠 Tech Stack

- HTML5 (Single-Page Application)
- Vanilla JavaScript
- CSS3 (mobile-first, minimalist Zen UI)
- No frameworks required
- Fully static hosting

---

## 🚀 Deployment Guide (Cloudflare Pages)

### Step 1: Push your repository to GitHub
Make sure the root has:
index.html
style.css
app.js
assets/
*.html legal files

### Step 2: Open Cloudflare Dashboard  
Go to:
Workers & Pages → Pages → Create Project

### Step 3: Connect GitHub Repository  
Select your repo:
zen-buddhist-path-lite

### Step 4: Build Settings
Set:
Framework: None
Build command: None
Output directory: /

Cloudflare Pages will deploy exactly as-is.

### Step 5: Confirm Deployment
Your domain will look like:
https://zen-buddhist-path-lite.pages.dev/


(Optional: Connect a custom domain.)

---

## 📡 Google AdSense Integration Notes

- The AdSense script is already included in `index.html`.
- Ensure the domain is *verified inside AdSense*.
- Ads will only appear after AdSense review approves the domain.
- Cloudflare Pages is fully allowed by AdSense.

If you add new ad units, place:
<ins class="adsbygoogle" ... ></ins>

<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

inside visible areas.

---

## 🧪 Local Testing

Option 1: Use VSCode + Live Server  
Option 2: Simple Python static server:
python3 -m http.server 8000


Then visit:
http://localhost:8000

Everything works offline except AdSense.

---

## 🌏 Bilingual System Maintenance

Language strings are stored in `app.js`:
const i18n = { zh: {...}, en: {...} }

To add a new UI label:
1. Add `data-i18n="keyname"` to HTML
2. Add the translations under both `zh` and `en`

---

## 🎨 Asset Workflow

All images are stored in:
assets/
o update the style:
- Replace the file with same name  
- Canvas rendering will automatically adapt  

---

## ⚖ Licensing / Disclaimers

This project includes:
- Terms of Use (`terms.html`)
- Privacy Policy (`privacy.html`)
- Disclaimer (`disclaimer.html`)

These files ensure compliance with:
- AdSense requirements  
- General privacy expectations  
- Non-medical, non-religious, non-predictive guidelines  

---

## 📞 Contact (Optional CTA)
Users may contact via WhatsApp through the CTA button included in `index.html`.

---

## 🧘 Final Notes

Zen Buddhist Path Lite is intentionally simple, calm, minimalistic, and accessible.  
It is designed for personal reflection and user-friendly, non-technical audiences,  
while maintaining a professional codebase for developers and maintainers.

If you extend or modify this project, keep the SPA architecture and bilingual logic consistent.





