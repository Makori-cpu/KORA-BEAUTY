// Gentle Standard Do’s interactive circle (short explanations)
document.addEventListener('DOMContentLoaded', function () {
  const dos = [
    "Mild cleansers wash away dirt without stripping your skin’s natural oils.",
    "Hydration keeps your skin barrier strong, smooth, and resilient.",
    "Daily SPF protects your skin from sun damage and early aging.",
    "Start small with powerful ingredients so your skin adapts comfortably.",
    "When your skin feels stressed, scale back to simple, calming care.",
    "A simple, steady routine works better than too many products at once."
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
