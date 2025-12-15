const greeting = document.getElementById("greeting");
const icon = document.getElementById("time-icon");
const btn = document.querySelector(".btn");
const iconCircle = document.querySelector(".icon-circle");
const pageHeader = document.querySelector(".page-header"); // header del menú

function setGreeting() {
  const hour = new Date().getHours();

  // Valores por hora
  let message = "";
  let bgColor = "";
  let iconClass = "";
  let iconColor = "";
  let btnColor = "";
  let circleColor = "";
  let headerBg = "";
  let headerTextColor = "";

  if (hour >= 6 && hour < 12) {
    message = "¡Buenos días, Leo!";
    bgColor = "linear-gradient(to bottom right, #3F2774, #5843A5)";
    iconClass = "fa-heart";
    iconColor = "#ADA1C8";
    btnColor = "#41307F";
    circleColor = "#41307F";
    headerBg = "rgba(88, 67, 165, 1)";
    headerTextColor = "#ffffffff"; 
  } else if (hour >= 12 && hour < 18) {
    message = "¡Buenas tardes, Leo!";
    bgColor = "linear-gradient(to bottom right, #2B7427, #48A543)";
    iconClass = "fa-sun";
    iconColor = "#A4C8A1";
    btnColor = "#347F30";
    circleColor = "#2B7427";
    headerBg = "#48A543";
    headerTextColor = "#FFFFFF"; 
  } else {
    message = "¡Buenas noches, Leo!";
    bgColor = "linear-gradient(to bottom right, #273474, #4354A5)";
    iconClass = "fa-moon";
    iconColor = "#A1A8C8";
    btnColor = "#303C7C";
    circleColor = "#303C7C";
    headerBg = "#4354A5";
    headerTextColor = "#ffffffff";
  }

  // Actualiza el header
  if (pageHeader) {
    pageHeader.style.background = headerBg;
    pageHeader.style.color = headerTextColor;
  }

  if (greeting) greeting.textContent = message;
  if (icon) {
    icon.className = `fas ${iconClass}`;
    icon.style.color = iconColor;
  }
  if (btn) btn.style.background = btnColor;
  if (iconCircle) iconCircle.style.background = circleColor;

  // Fondo del body
  document.body.style.background = bgColor;
}

setGreeting();
