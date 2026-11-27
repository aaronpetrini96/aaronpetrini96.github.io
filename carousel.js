document.querySelectorAll(".carousel").forEach((carousel) => {
  const slides = carousel.querySelectorAll(".project-image");
  let current = 0;
  const caption = carousel.parentElement.querySelector(".carousel-caption");
  let timer;
  const show = (index) => {
    slides[current].classList.remove("is-active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    caption.textContent = slides[current].dataset.caption;
    clearInterval(timer);
    timer = setInterval(() => show(current + 1), 4000);
  };
  show(0);
  carousel.querySelector(".carousel-prev")?.addEventListener("click", () => show(current - 1));
  carousel.querySelector(".carousel-next")?.addEventListener("click", () => show(current + 1));
});
