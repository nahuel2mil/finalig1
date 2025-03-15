document.getElementById("contact-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    e.preventDefault(); // Evita el envío del formulario
    alert("Por favor completa todos los campos.");
  }
});