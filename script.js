/* script.js — homepage only extras */
/* Nav.js handles cursor, hamburger, scroll state */
async function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const data = new FormData(form);
  await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
  form.style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}