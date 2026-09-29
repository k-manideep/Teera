const CAM = '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';
// Local images only (src/images/).
const EQIMG = ["src/images/Patient-Care-Equipment.png", "src/images/Patient-Monitoring-Equipment.png", "src/images/Diagnostic-Equipment.png", "src/images/Hospital-Furniture.png", "src/images/Emergency-Critical-Care .png", "src/images/ot-surgical-equipment.png", "src/images/medical-equipment.png", "src/images/Healthcare-Support-Equipment-2.png"];
function fbk(i) { const d = document.createElement("div"); d.className = "empty"; d.innerHTML = CAM + "Image unavailable<br>" + i.alt; i.replaceWith(d) }
window.fbk = fbk;
const media = (src, alt, label) => src ? `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" onload="this.classList.add('ld')" onerror="fbk(this)">` : `<div class="empty">${CAM}Equipment photo<br>${label}</div>`;
// Configure later: set a confirmed WhatsApp-enabled number (digits with country code) to switch the button to WhatsApp.
const WHATSAPP_NUMBER = "";
if (WHATSAPP_NUMBER) { const f = document.getElementById("fab"); f.href = "https://wa.me/" + WHATSAPP_NUMBER; f.querySelector("span").textContent = "WhatsApp" }
// logo sunburst
let s = ""; for (let i = 0; i < 24; i++) { const a = i * Math.PI / 12; s += `<path d="M${(6 * Math.cos(a)).toFixed(1)} ${(6 * Math.sin(a)).toFixed(1)}L${(17 * Math.cos(a + .15)).toFixed(1)} ${(17 * Math.sin(a + .15)).toFixed(1)}"/>` }
document.getElementById("sb").innerHTML = s;
const P = {
    pc: '<path d="M4 18h16M6 18v-6h12v6M6 12V8a2 2 0 012-2h3"/>',
    pm: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M6 11h3l2-3 2 6 2-3h3M9 21h6"/>',
    dg: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3"/>',
    hf: '<path d="M3 17h18M5 17v3M19 17v3M4 17v-5h16v5M6 12V8h5v4"/>',
    ec: '<path d="M12 21C5 15 3 11 3 8a4.5 4.5 0 019-1 4.5 4.5 0 019 1c0 3-2 7-9 13z"/><path d="M7 11h3l1.5-3 2 5 1.5-2h2"/>',
    ot: '<path d="M14 4l6 6-3 3-6-6zM11 9L4 20l3-1 7-8"/>',
    ac: '<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M9 8V5h6v3M12 11v6M9 14h6"/>',
    hs: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 9v6M9 12h6"/>'
};
const svg = k => `<svg class="ic" viewBox="0 0 24 24">${P[k]}</svg>`;
const eq = [["pc", "Patient Care Equipment", "Equipment for everyday bedside patient care."], ["pm", "Patient Monitoring Equipment", "Monitoring solutions for ward and critical settings."], ["dg", "Diagnostic Equipment", "Diagnostic equipment for clinics and centres."], ["hf", "Hospital Furniture", "Beds, trolleys and furnishings for hospital use."], ["ec", "Emergency & Critical Care", "Equipment to support urgent and critical care."], ["ot", "OT & Surgical Equipment", "Operating theatre and surgical requirements."], ["ac", "Medical Accessories", "Accessories and consumable support items."], ["hs", "Healthcare Support Equipment", "General support equipment for facilities."]];
document.getElementById("cards").innerHTML = eq.map((e, i) => `<article class="card r d${i % 4}"><div class="im">${media(EQIMG[i], e[1], e[1])}</div><div class="b"><span class="n">0${i + 1}</span><h3>${e[1]}</h3><p>${e[2]}</p><a href="#contact">Explore <i>→</i></a></div></article>`).join("");
const sv = [["ac", "Equipment Sales", "Hospital equipment supplied to match your requirement."], ["ot", "Equipment Installation", "Careful installation so equipment is ready for use."], ["hs", "Equipment Maintenance", "Routine care to help keep equipment dependable."], ["pc", "Equipment Servicing", "Servicing and repair support when it's needed."], ["pm", "Technical Support", "Responsive help for equipment questions."], ["dg", "Equipment Consultation", "Guidance on choosing suitable equipment."]];
document.getElementById("sv").innerHTML = sv.map((e, i) => `<div class="r d${i % 3}">${svg(e[0])}<h3>${e[1]}</h3><p>${e[2]}</p></div>`).join("");
const wy = ["Quality-Focused Solutions", "Professional Service", "Responsive Support", "Hospital-Focused Approach", "Equipment Assistance", "Long-Term Service Support"];
document.getElementById("wg").innerHTML = wy.map((t, i) => `<div class="r d${i % 3}"><div class="big">0${i + 1}</div><h3>${t}</h3></div>`).join("");
const st = [["Understand Your Requirement", "We learn what your facility needs."], ["Recommend Suitable Solutions", "We suggest equipment that fits."], ["Supply & Installation", "Equipment delivered and set up."], ["Service & Support", "Ongoing help after installation."]];
document.getElementById("tl").insertAdjacentHTML("beforeend", st.map((t, i) => `<div class="s"><span class="dot">0${i + 1}</span><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join(""));
// Dummy JPGs live in src/images/. Replace the files (same names) with real photos.
const PHOTOS = { intro: { src: "src/images/about-us.png", alt: "About Medical Equipment" }, feat: { src: "src/images/Featured-image-2.png", alt: "Medical Equipment" } };
const GALLERY = [{ t: "Patient Monitoring", c: "Patient Monitoring Equipment", src: "src/images/Patient-Monitoring-Equipment-Gallery.png" }, { t: "Diagnostic Equipment", c: "Diagnostic Equipment", src: "src/images/Diagnostic-Equipment-Gallery.png" }, { t: "Patient Care", c: "Patient Care Equipment", src: "src/images/Patient-Care-Equipment-gallery.png" }, { t: "Emergency & Critical Care", c: "Emergency & Critical Care", src: "src/images/Emergency-Critical-Care-Gallery.png" }, { t: "Hospital Support Equipment", c: "Healthcare Support Equipment", src: "src/images/Healthcare-Support-Equipment-Gallery.png" }];
document.querySelectorAll(".slot").forEach(el => { const p = PHOTOS[el.dataset.slot]; el.innerHTML = media(p.src, p.alt, p.alt) });
const gal = document.getElementById("gal");
const GRP = { "Patient Monitoring Equipment": "Monitoring", "Diagnostic Equipment": "Diagnostics", "Patient Care Equipment": "Patient Care", "Hospital Furniture": "Patient Care", "Emergency & Critical Care": "Critical Care", "OT & Surgical Equipment": "Support & Surgical", "Healthcare Support Equipment": "Support & Surgical" };
let LIST = GALLERY;
function renderGal(f, now) { LIST = f === "All" ? GALLERY : GALLERY.filter(g => GRP[g.c] === f); gal.classList.toggle("f", f !== "All"); gal.innerHTML = LIST.map((g, i) => `<button class="gi r" style="transition-delay:${(i % 4) * .1}s" data-i="${i}" aria-label="View ${g.t}">${media(g.src, g.t, g.t)}<span class="ov"><b>${g.c}</b><span>View Equipment <i>→</i></span></span></button>`).join(""); if (now) requestAnimationFrame(() => requestAnimationFrame(() => gal.querySelectorAll(".gi").forEach(b => b.classList.add("in")))) }
const chips = document.getElementById("chips");
chips.innerHTML = ["All", "Monitoring", "Diagnostics", "Patient Care", "Critical Care", "Support & Surgical"].map((c, i) => `<button class="chip${i ? "" : " on"}" data-f="${c}">${c}</button>`).join("");
chips.addEventListener("click", e => { const b = e.target.closest(".chip"); if (!b) return; chips.querySelectorAll(".chip").forEach(x => x.classList.toggle("on", x === b)); renderGal(b.dataset.f, true) });
renderGal("All", false);
const lb = document.createElement("div"); lb.className = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
lb.innerHTML = '<button class="x" aria-label="Close">✕</button><button class="pv" aria-label="Previous">←</button><button class="nx" aria-label="Next">→</button><div class="st"></div><div class="cap"></div>';
document.body.appendChild(lb);
let cur = 0;
function show(i) { cur = (i + LIST.length) % LIST.length; const g = LIST[cur]; lb.querySelector(".st").innerHTML = media(g.src, g.t, g.t).replace('class="empty"', 'class="empty" style="color:#9fb0c9"'); lb.querySelector(".cap").innerHTML = `${g.t}<small>${g.c.toUpperCase()} · ${cur + 1} / ${LIST.length}</small>` }
function openLb(i) { show(i); lb.classList.add("open"); requestAnimationFrame(() => lb.classList.add("show")); document.body.style.overflow = "hidden"; lb.querySelector(".x").focus() }
function closeLb() { lb.classList.remove("show"); setTimeout(() => lb.classList.remove("open"), 400); document.body.style.overflow = "" }
gal.addEventListener("click", e => { const b = e.target.closest(".gi"); if (b) openLb(+b.dataset.i) });
lb.querySelector(".x").onclick = closeLb; lb.querySelector(".pv").onclick = () => show(cur - 1); lb.querySelector(".nx").onclick = () => show(cur + 1);
lb.addEventListener("click", e => { if (e.target === lb) closeLb() });
addEventListener("keydown", e => { if (!lb.classList.contains("open")) return; if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1) });
// scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) } }), { threshold: .15 });
document.querySelectorAll(".r,.tl").forEach(el => io.observe(el));
requestAnimationFrame(() => document.querySelectorAll(".hero .r").forEach(e => e.classList.add("in")));
const nav = document.getElementById("nav"), ls = [...document.querySelectorAll(".links a")], secs = ls.map(a => document.querySelector(a.getAttribute("href")));
addEventListener("scroll", () => {
    nav.classList.toggle("s", scrollY > 20); let c = 0, m = -1e9; secs.forEach((s, i) => { const t = s ? s.getBoundingClientRect().top : 1e9; if (t < 200 && t > m) { m = t; c = i } }); ls.forEach((a, i) => a.classList.toggle("on", i === c));
    const v = document.querySelector(".vis"); if (v && scrollY < 900) v.style.transform = `translateY(${scrollY * .05}px)`
}, { passive: true });
document.getElementById("bg").onclick = () => document.getElementById("links").classList.toggle("open");
ls.forEach(a => a.onclick = () => document.getElementById("links").classList.remove("open"));
// form
document.getElementById("f").addEventListener("submit", e => {
    e.preventDefault(); const f = e.target; let ok = true;
    const chk = (el, test, msg) => { const er = el.parentNode.querySelector(".err"); const bad = !test; el.classList.toggle("bad", bad); er.textContent = bad ? msg : ""; if (bad) ok = false };
    chk(f.n, f.n.value.trim().length > 1, "Please enter your name.");
    chk(f.p, /^[+\d][\d\s-]{8,13}$/.test(f.p.value.trim()), "Enter a valid phone number.");
    chk(f.e, !f.e.value || /^\S+@\S+\.\S+$/.test(f.e.value), "Enter a valid email.");
    chk(f.s, !!f.s.value, "Please choose a requirement.");
    if (ok) document.getElementById("ok").style.display = "block"
});
