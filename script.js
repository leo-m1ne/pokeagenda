const greeting = document.getElementById("greeting");
const icon = document.getElementById("time-icon");

function setGreeting() {
  if (!greeting || !icon) return;

  const hour = new Date().getHours();
  let message = "";
  let bgColor = "";
  let iconClass = "";

  if (hour >= 6 && hour < 12) {
    message = "¡Buenos días, Leo!";
    bgColor = "linear-gradient(to bottom right, #3F2774, #5843A5)";
    iconClass = "fa-heart"; // Corazón
  } else if (hour >= 12 && hour < 18) {
    message = "¡Buenas tardes, Leo!";
    bgColor = "linear-gradient(to bottom right, #2B7427, #48A543)";
    iconClass = "fa-sun"; // Sol
  } else {
    message = "¡Buenas noches, Leo!";
    bgColor = "linear-gradient(to bottom right, #273474, #4354A5)";
    iconClass = "fa-moon"; // Luna
  }

  greeting.textContent = message;
  icon.className = `fas ${iconClass}`; // Actualiza la clase del ícono
  document.body.style.background = bgColor;
}

setGreeting();
