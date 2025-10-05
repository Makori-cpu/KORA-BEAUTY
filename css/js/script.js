// Gentle Standard Do’s interactive circle
document.addEventListener('DOMContentLoaded', function () {
  const dos = [
    "Choose gentle cleansers that don’t strip your skin.",
    "Moisturize daily to keep your barrier strong and hydrated.",
    "Use sunscreen every morning to protect from UV damage.",
    "Introduce actives slowly so your skin can adapt with ease.",
    "Listen to your skin — simplify when it feels sensitive or stressed.",
    "Be consistent, not excessive — a simple routine done daily beats a complicated one."
  ];
  const numbers = document.querySelectorAll('.gentle-dos-number');
  const text = document.getElementById('gentleDosText');
  let active = 0;

  function setActive(idx) {
    if (active === idx) return;
    numbers[active].classList.remove('active');
    numbers[idx].classList.add('active');
    // Animate out
    text.classList.remove('fade-in');
    text.classList.add('fade-out');
    setTimeout(() => {
      text.textContent = dos[idx];
      text.classList.remove('fade-out');
      text.classList.add('fade-in');
    }, 350);
    active = idx;
  }

  numbers.forEach((el, idx) => {
    el.addEventListener('mouseenter', () => setActive(idx));
    el.addEventListener('click', () => setActive(idx));
  });
  // Set initial active
  numbers[0].classList.add('active');
  text.classList.add('fade-in');
});
function shopNow() {
  alert("Welcome to Kora Beauty! The shop feature is coming soon.");
}
