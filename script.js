function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const sr = ScrollReveal ({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true
});


sr.reveal(`.home-text, .home-img,
          .about-img, .about-text,
          .box, .s-box,
          .btn, .connect-text,
          .contact-box`, {
  interval: 200
})