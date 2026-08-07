/* =================================
   CALCVERSE - JAVASCRIPT
   ================================= */


/* ================================
   CAMBIAR TEMA
   ================================ */

const themeToggle = document.getElementById("themeToggle");

let lightMode = false;

themeToggle.addEventListener("click", () => {

  lightMode = !lightMode;

  if (lightMode) {

    document.documentElement.style.setProperty("--bg", "#f5f5f7");
    document.documentElement.style.setProperty("--bg-secondary", "#ffffff");
    document.documentElement.style.setProperty("--card", "#ffffff");
    document.documentElement.style.setProperty("--card-hover", "#f1f1f5");
    document.documentElement.style.setProperty("--border", "rgba(0,0,0,0.1)");
    document.documentElement.style.setProperty("--text", "#111111");
    document.documentElement.style.setProperty("--text-secondary", "#666666");

    themeToggle.textContent = "🌙";

  } else {

    document.documentElement.style.setProperty("--bg", "#0b0b0f");
    document.documentElement.style.setProperty("--bg-secondary", "#101014");
    document.documentElement.style.setProperty("--card", "#15151d");
    document.documentElement.style.setProperty("--card-hover", "#1b1b25");
    document.documentElement.style.setProperty("--border", "rgba(255,255,255,0.09)");
    document.documentElement.style.setProperty("--text", "#ffffff");
    document.documentElement.style.setProperty("--text-secondary", "#a1a1aa");

    themeToggle.textContent = "☀️";
  }

});


/* ================================
   CALCULADORA DE IMC
   ================================ */

const calculateBMI = document.getElementById("calculateBMI");

calculateBMI.addEventListener("click", () => {

  const weight = parseFloat(
    document.getElementById("weight").value
  );

  const height = parseFloat(
    document.getElementById("height").value
  );

  const result = document.getElementById("bmiResult");


  if (!weight || !height || weight <= 0 || height <= 0) {

    result.classList.add("show");

    result.innerHTML = `
      <strong>⚠️</strong>
      Introduce un peso y una altura válidos.
    `;

    return;
  }


  // Convertimos centímetros a metros

  const heightMeters = height / 100;


  // Fórmula del IMC

  const bmi = weight / (heightMeters * heightMeters);


  let category;


  if (bmi < 18.5) {

    category = "Bajo peso";

  } else if (bmi < 25) {

    category = "Rango considerado normal";

  } else if (bmi < 30) {

    category = "Sobrepeso";

  } else {

    category = "Obesidad";

  }


  result.classList.add("show");

  result.innerHTML = `
    <strong>${bmi.toFixed(1)}</strong>
    <span>${category}</span>
  `;

});


/* ================================
   CALCULADORA DE CALORÍAS
   ================================ */

const calculateCalories =
  document.getElementById("calculateCalories");


calculateCalories.addEventListener("click", () => {

  const gender =
    document.getElementById("gender").value;

  const age =
    parseFloat(document.getElementById("age").value);

  const weight =
    parseFloat(document.getElementById("calWeight").value);

  const height =
    parseFloat(document.getElementById("calHeight").value);

  const activity =
    parseFloat(document.getElementById("activity").value);

  const result =
    document.getElementById("calorieResult");


  if (
    !age ||
    !weight ||
    !height ||
    age <= 0 ||
    weight <= 0 ||
    height <= 0
  ) {

    result.classList.add("show");

    result.innerHTML = `
      <strong>⚠️</strong>
      Completa todos los campos correctamente.
    `;

    return;
  }


  /*
    Fórmula Mifflin-St Jeor

    Hombre:
    10 × peso + 6.25 × altura - 5 × edad + 5

    Mujer:
    10 × peso + 6.25 × altura - 5 × edad - 161
  */


  let bmr;


  if (gender === "male") {

    bmr =
      (10 * weight) +
      (6.25 * height) -
      (5 * age) +
      5;

  } else {

    bmr =
      (10 * weight) +
      (6.25 * height) -
      (5 * age) -
      161;

  }


  // Calorías aproximadas de mantenimiento

  const maintenanceCalories =
    Math.round(bmr * activity);


  result.classList.add("show");

  result.innerHTML = `
    <strong>${maintenanceCalories}</strong>
    <span>calorías aproximadas al día</span>
  `;

});


/* ================================
   BOTÓN VOLVER ARRIBA
   ================================ */

const backToTop =
  document.getElementById("backToTop");


window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

});


backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* ================================
   ANIMACIONES AL HACER SCROLL
   ================================ */

const animatedElements =
  document.querySelectorAll(
    ".category-card, .calculator-card, .blog-card"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },
    {
      threshold: 0.1
    }
  );


animatedElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(20px)";

  element.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

  observer.observe(element);

});


/* ================================
   MENSAJE EN CONSOLA
   ================================ */

console.log(
  "🚀 CalcVerse está funcionando correctamente."
);
