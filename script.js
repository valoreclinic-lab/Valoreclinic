// === Ayarlar ===
// WhatsApp numarasını buradan değiştir (ülke kodu ile, başında + olmadan):
const WHATSAPP_NUMBER = "905000000000"; // Örn: 9053xxxxxxx

function buildWhatsAppLink(text) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function setupWhatsAppButtons() {
  const waLink = document.getElementById("waLink");
  if (waLink) {
    waLink.href = buildWhatsAppLink("Merhaba! Ücretsiz saç ekimi ön değerlendirme almak istiyorum.");
  }

  const form = document.getElementById("leadForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const service = (data.get("service") || "").toString().trim();
    const note = (data.get("note") || "").toString().trim();

    const msg =
`Merhaba! Ücretsiz ön değerlendirme almak istiyorum.
Ad Soyad: ${name}
Telefon: ${phone}
İşlem: ${service}
Not: ${note || "-"}

Fotoğraf gönderebilirim.`;

    window.open(buildWhatsAppLink(msg), "_blank", "noopener");
  });
}

function setupBurger() {
  const burger = document.querySelector(".burger");
  const mobileNav = document.getElementById("mobileNav");
  if (!burger || !mobileNav) return;

  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  });

  // Linke tıklayınca menüyü kapat
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

setYear();
setupWhatsAppButtons();
setupBurger();
