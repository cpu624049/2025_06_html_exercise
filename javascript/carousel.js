document.addEventListener('DOMContentLoaded', function() {
  const slidesEl = document.querySelector('.vertical_carousel .slides');
  const total = document.querySelectorAll('.vertical_carousel .slide').length;
  let idx = 0;

  function update() {
    const offset = -idx * 100; // translateY: -0%, -100%, -200% ...
    slidesEl.style.transform = `translateY(${offset}%)`;  /* translateY()로 수직 이동 :contentReference[oaicite:1]{index=1} */
  }

  document.querySelector('.vertical_carousel .prev').addEventListener('click', () => {
    idx = (idx - 1 + total) % total;
    update();
  });

  document.querySelector('.vertical_carousel .next').addEventListener('click', () => {
    idx = (idx + 1) % total;
    update();
  });

  setInterval(() => {
    idx = (idx + 1) % total;
    update();
  }, 5000);
});
