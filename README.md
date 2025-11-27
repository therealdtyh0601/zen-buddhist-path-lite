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

