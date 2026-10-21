// ---------- Helpers ----------
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const waNumber = ((typeof WHATSAPP !== "undefined" && WHATSAPP) || "").replace(/\D/g, "");
const waLink = (msg) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
const ALL = typeof COURSES !== "undefined" ? COURSES : [];

// ---------- Course count ----------
document.querySelectorAll("#course-count, .course-count").forEach((el) => (el.textContent = ALL.length));

// ---------- Courses list ----------
// data-mode="random" → عدد عشوائي (الصفحة الرئيسية) / غير كده → كل المواد
function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const list = document.getElementById("courses-list");
if (list) {
  const n = (typeof HOME_COUNT !== "undefined" && HOME_COUNT) || 4;
  const items = list.dataset.mode === "random" ? shuffle(ALL).slice(0, n) : ALL;
  list.innerHTML = items.map((c) => {
    const btn = c.form
      ? `<a class="btn btn-gold" href="${esc(c.form)}" target="_blank" rel="noopener">سجّل الآن</a>`
      : waNumber
        ? `<a class="btn btn-gold" href="${esc(waLink(`السلام عليكم، أرغب في التسجيل في مادة ${c.name}`))}" target="_blank" rel="noopener">سجّل الآن</a>`
        : `<span class="btn btn-gold disabled">قريبًا</span>`;
    return `
    <article class="course-row">
      <div class="ico">${(typeof ICONS !== "undefined" && ICONS[c.icon]) || ""}</div>
      <div class="info">
        <h3><span dir="ltr">${esc(c.name)}</span><span class="ar">${esc(c.ar || "")}</span></h3>
      </div>
      <div class="act">
        ${btn}
      </div>
    </article>`;
  }).join("");
}

// ---------- WhatsApp floating button ----------
const waFloat = document.getElementById("wa-float");
if (waFloat && waNumber) { waFloat.href = waLink("السلام عليكم، أرغب في الاستفسار عن المحاضرات"); waFloat.hidden = false; }
