// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  if (ham && nav) {
    ham.addEventListener('click', () => {
      const expanded = ham.getAttribute('aria-expanded') === 'true' || false;
      ham.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('show');
    });
  }

  // Image Slider
  const slides = document.querySelectorAll('.slides img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let index = 0;
  function showSlide(idx) {
    if (!slides.length) return;
    index = (idx + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
  }
  if (slides.length) {
    showSlide(0);
    let auto = setInterval(() => showSlide(index + 1), 3000);
    [prevBtn, nextBtn].forEach(btn => btn && btn.addEventListener('click', () => {
      clearInterval(auto);
      showSlide(btn === nextBtn ? index + 1 : index - 1);
    }));
  }

  // Form Validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const formMessage = document.getElementById('formMessage');

      if (!name || !email || !message) {
        formMessage.style.color = 'salmon';
        formMessage.textContent = 'Please fill out all fields.';
        return;
      }
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        formMessage.style.color = 'salmon';
        formMessage.textContent = 'Please enter a valid email.';
        return;
      }
      formMessage.style.color = 'lightgreen';
      formMessage.textContent = 'Message sent successfully!';
      form.reset();
    });
  }
});
