// ===============================
// SCROLL SUAVE GLOBAL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ===============================
// ANIMACIONES EN SCROLL (FADE IN)
// ===============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('section, .card').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});


// ===============================
// EFECTO PARALLAX HERO
// ===============================
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    let scroll = window.scrollY;
    heroBg.style.transform = `scale(1.1) translateY(${scroll * 0.3}px)`;
  }
});


// ===============================
// HOVER 3D EN CARDS
// ===============================
document.querySelectorAll('.card').forEach(card => {

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });

});


// ===============================
// BOTÓN WHATSAPP INTELIGENTE
// ===============================
function enviarWhatsApp() {

  const mensaje = `Hola, quiero cotizar botellas personalizadas de TKIGUARO 🍾

Me interesa:
- Tipo de producto:
- Cantidad:
- Evento:

Gracias!`;

  const telefono = "521XXXXXXXXXX"; // 🔥 CAMBIAR POR TU NÚMERO

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');
}


// ===============================
// BOTÓN FLOTANTE WHATSAPP
// ===============================
const btn = document.createElement('div');
btn.innerHTML = "💬";
btn.style.position = "fixed";
btn.style.bottom = "30px";
btn.style.right = "30px";
btn.style.background = "#25D366";
btn.style.color = "white";
btn.style.width = "60px";
btn.style.height = "60px";
btn.style.display = "flex";
btn.style.alignItems = "center";
btn.style.justifyContent = "center";
btn.style.borderRadius = "50%";
btn.style.fontSize = "28px";
btn.style.cursor = "pointer";
btn.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
btn.style.zIndex = "999";

btn.addEventListener('click', enviarWhatsApp);

document.body.appendChild(btn);


// ===============================
// EFECTO HEADER SCROLL (si agregas header después)
// ===============================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});


// ===============================
// MICRO INTERACCIONES BOTONES
// ===============================
document.querySelectorAll('button, .btn-primary').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});