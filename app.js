/* ---------------------------------------------------
   Zen Buddhist Path Lite
   app.js — Full Logic
--------------------------------------------------- */

/* ---------------------------------------------------
   1. Internationalization (i18n)
--------------------------------------------------- */

const i18n = {
    zh: {
        app_title: "Zen Buddhist Path Lite",
        birth_label: "出生日期",
        time_label: "出生時間",
        generate_btn: "生成我的修行方向",
        result_title: "你的禪修風格建議",
        share_fb: "分享到 Facebook",
        share_wa: "分享到 WhatsApp",
        save_img: "保存圖片",
        cta_text: "如果你想更完整地理解你的能量與修行方向，你可以選擇透過 WhatsApp 與我們聊聊。（可選）",
        cta_btn: "WhatsApp 諮詢我",
        footer_terms: "使用條款",
        footer_privacy: "隱私政策",
        footer_disclaimer: "免責聲明",
        consent_title: "歡迎使用 Zen Buddhist Path Lite",
        consent_body:
            "在開始之前，請閱讀並同意以下內容：本網站是一個免費、自我反思、心理導向的工具，不構成醫療、宗教、命理或任何形式的專業建議。本網站不儲存您的資料，所有計算均在你的裝置上完成。使用本網站即表示您同意免責聲明與隱私條款。",
        consent_btn: "我同意並開始使用",
        consent_terms: "使用條款",
        consent_privacy: "隱私政策",
        consent_disclaimer: "免責聲明"
    },

    en: {
        app_title: "Zen Buddhist Path Lite",
        birth_label: "Birth Date",
        time_label: "Birth Time",
        generate_btn: "Generate My Practice Guidance",
        result_title: "Your Recommended Meditation Style",
        share_fb: "Share to Facebook",
        share_wa: "Share to WhatsApp",
        save_img: "Save Image",
        cta_text:
            "If you’d like a deeper understanding of your energy and practice direction, you may reach out via WhatsApp. (Optional)",
        cta_btn: "Message on WhatsApp",
        footer_terms: "Terms of Use",
        footer_privacy: "Privacy Policy",
        footer_disclaimer: "Disclaimer",
        consent_title: "Welcome to Zen Buddhist Path Lite",
        consent_body:
            "Before you begin, please review and agree to the following: This website is a free self-reflection tool, not medical, religious, predictive, or professional advice. No data is stored. All calculations occur locally on your device.",
        consent_btn: "I Agree & Begin",
        consent_terms: "Terms",
        consent_privacy: "Privacy",
        consent_disclaimer: "Disclaimer"
    }
};

let currentLang = "zh";

function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = i18n[lang][key];
    });
}

/* ---------------------------------------------------
   2. Consent Modal
--------------------------------------------------- */

window.addEventListener("load", () => {
    if (localStorage.getItem("zen-consent") === "true") {
        document.getElementById("consent-modal").style.display = "none";
    }
});

document.getElementById("agree-btn").addEventListener("click", () => {
    localStorage.setItem("zen-consent", "true");
    document.getElementById("consent-modal").style.display = "none";
});

/* ---------------------------------------------------
   3. Tianji → Buddhist Mapping Logic 
   (Simplified placeholder; you will refine later)
--------------------------------------------------- */

function calculateTianjiProfile(birthdate, birthtime) {
    if (!birthdate || !birthtime) return "未知的能量模式";

    const hour = parseInt(birthtime.split(":")[0]);

    if (hour >= 3 && hour < 7) {
        return currentLang === "zh"
            ? "你屬於『早晨型 · 清明心』：適合觀息、安般念。"
            : "You are an Early-Morning Clarity type: ideal for breath meditation.";
    } else if (hour >= 7 && hour < 12) {
        return currentLang === "zh"
            ? "你屬於『理性明覺型』：適合四念住、觀察法門。"
            : "You are a Rational Awareness type: ideal for Satipatthana-style observation.";
    } else if (hour >= 12 && hour < 18) {
        return currentLang === "zh"
            ? "你屬於『情感深流型』：適合慈心、悲心練習。"
            : "You are an Emotional Depth type: ideal for Metta and Compassion practice.";
    } else {
        return currentLang === "zh"
            ? "你屬於『夜間內觀型』：適合靜坐、止觀、身心鬆開。"
            : "You are a Night Introspection type: ideal for Samatha-Vipassana evening practice.";
    }
}

/* ---------------------------------------------------
   4. Generate Result + Show Result Section
--------------------------------------------------- */

function generateResult() {
    const birthdate = document.getElementById("birthdate").value;
    const birthtime = document.getElementById("birthtime").value;

    const result = calculateTianjiProfile(birthdate, birthtime);
    document.getElementById("result-text").innerHTML = result;

    // Show result section
    document.getElementById("result-section").style.display = "block";

    // Render share card
    renderShareCard(result);
}

/* ---------------------------------------------------
   5. Canvas Share Card Rendering
--------------------------------------------------- */
function renderShareCard(text) {
    const canvas = document.getElementById("shareCanvas");
    const ctx = canvas.getContext("2d");

    const bg = new Image();
    bg.src = "assets/sharecard_clean_4x5.png";

    bg.onload = () => {
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#444";
        ctx.font = "28px 'Noto Sans', sans-serif";
        ctx.textAlign = "center";

        const wrapped = wrapText(ctx, text, canvas.width / 2, 500, 600, 36);
    };
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split("");
    let line = "";

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n];
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n];
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

/* ---------------------------------------------------
   6. Save Image
--------------------------------------------------- */

function saveImage() {
    const canvas = document.getElementById("shareCanvas");
    const link = document.createElement("a");
    link.download = "zen_path_result.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

/* ---------------------------------------------------
   7. Share to WhatsApp
--------------------------------------------------- */

function shareWhatsApp() {
    const text =
        currentLang === "zh"
            ? "看看我的修行風格建議："
            : "Here’s my meditation style insight:";
    const url = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${url}`, "_blank");
}

/* ---------------------------------------------------
   8. Share to Facebook
--------------------------------------------------- */

function shareFacebook() {
    const url = encodeURIComponent("https://yourdomain.com");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
}
