// ==========================================
// CALCVERSE - JAVASCRIPT
// ==========================================


// ==========================================
// CAMBIO DE TEMA
// ==========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀️";
  }

});


// ==========================================
// CALCULADORA DE IMC
// ==========================================

const calculateBMI = document.getElementById("calculateBMI");
const bmiResult = document.getElementById("bmiResult");

calculateBMI.addEventListener("click", () => {

  const weight = parseFloat(
    document.getElementById("weight").value
  );

  const height = parseFloat(
    document.getElementById("height").value
  );

  if (!weight || !height || weight <= 0 || height <= 0) {

    bmiResult.classList.add("show");

    bmiResult.innerHTML = `
      <strong>⚠️</strong>
      Introduce un peso y una altura válidos.
    `;

    return;
  }

  const heightMeters = height / 100;

  const bmi = weight / (heightMeters * heightMeters);

  let classification = "";

  if (bmi < 18.5) {
    classification = "Bajo peso";
  } else if (bmi < 25) {
    classification = "Rango normal";
  } else if (bmi < 30) {
    classification = "Sobrepeso";
  } else {
    classification = "Obesidad";
  }

  bmiResult.classList.add("show");

  bmiResult.innerHTML = `
    <div class="result-number">
      ${bmi.toFixed(1)}
    </div>

    <div class="result-text">
      ${classification}
    </div>

    <small>
      El IMC es una medida orientativa. En adolescentes
      debe interpretarse considerando la edad y el desarrollo.
    </small>
  `;

});


// ==========================================
// CALCULADORA DE CALORÍAS
// ==========================================

const calculateCalories =
  document.getElementById("calculateCalories");

const calorieResult =
  document.getElementById("calorieResult");

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


  if (
    !age ||
    !weight ||
    !height ||
    age <= 0 ||
    weight <= 0 ||
    height <= 0
  ) {

    calorieResult.classList.add("show");

    calorieResult.innerHTML = `
      <strong>⚠️</strong>
      Completa todos los campos correctamente.
    `;

    return;
  }


  // Fórmula Mifflin-St Jeor

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


  const calories =
    Math.round(bmr * activity);


  calorieResult.classList.add("show");

  calorieResult.innerHTML = `
    <div class="result-number">
      ${calories.toLocaleString()} kcal
    </div>

    <div class="result-text">
      Estimación diaria
    </div>

    <small>
      Es una estimación y puede variar según la persona.
    </small>
  `;

});


// ==========================================
// CATEGORÍAS
// ==========================================

const categories =
  document.querySelectorAll(".category-card");

const calculators =
  document.querySelectorAll(".calculator-card");


categories.forEach(category => {

  category.addEventListener("click", () => {

    const selectedCategory =
      category.dataset.category;


    // Salud
    if (selectedCategory === "salud") {

      document
        .getElementById("calculadoras")
        .scrollIntoView({
          behavior: "smooth"
        });


      calculators.forEach(calculator => {

        if (
          calculator.dataset.category === "salud"
        ) {

          calculator.style.display = "block";

        } else {

          calculator.style.display = "none";

        }

      });

    } else if (selectedCategory === "finanzas") {

    document
        .getElementById("finanzas")
        .scrollIntoView({
            behavior: "smooth"
        });

} else {

    alert(
        "🚀 Esta categoría estará disponible próximamente."
    );

    }

  });

});


// ==========================================
// BLOG
// ==========================================

const articles = {

  imc: {

    title: "¿Qué es el IMC?",

    content: `
      <p>
        El índice de masa corporal (IMC) es una medida
        que relaciona el peso y la altura de una persona.
      </p>

      <p>
        Puede utilizarse como una referencia general,
        pero no debe interpretarse de manera aislada.
      </p>

      <p>
        En niños y adolescentes, la interpretación debe
        considerar la edad, el sexo y el crecimiento.
      </p>
    `

  },


  calorias: {

    title: "¿Cuántas calorías necesito?",

    content: `
      <p>
        Las necesidades energéticas dependen de factores
        como la edad, el tamaño corporal y la actividad física.
      </p>

      <p>
        Las calculadoras de calorías solamente proporcionan
        estimaciones y no sustituyen una valoración profesional.
      </p>
    `

  },


  salud: {

    title: "Consejos para una vida saludable",

    content: `
      <p>
        Mantener hábitos saludables incluye dormir bien,
        mantenerse activo y llevar una alimentación variada.
      </p>

      <p>
        También es importante descansar, cuidar la salud
        mental y mantener buenas relaciones sociales.
      </p>
    `

  }

};


const readMoreButtons =
  document.querySelectorAll(".read-more");


readMoreButtons.forEach(button => {

  button.addEventListener("click", event => {

    event.preventDefault();


    const article =
      articles[button.dataset.article];


    if (!article) return;


    const modal =
      document.createElement("div");


    modal.className =
      "article-modal";


    modal.innerHTML = `

      <div class="article-modal-content">

        <button
          class="close-modal"
          aria-label="Cerrar artículo">

          ×

        </button>

        <span>
          BLOG · CALCVERSE
        </span>

        <h2>
          ${article.title}
        </h2>

        <div class="article-text">
          ${article.content}
        </div>

      </div>

    `;


    document.body.appendChild(modal);


    // Cerrar con X

    modal
      .querySelector(".close-modal")
      .addEventListener("click", () => {

        modal.remove();

      });


    // Cerrar tocando fuera

    modal.addEventListener("click", event => {

      if (event.target === modal) {

        modal.remove();

      }

    });

  });

});


// ==========================================
// BOTÓN VOLVER ARRIBA
// ==========================================

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


// ==========================================
// CONSOLA
// ==========================================

console.log(
  "🚀 CalcVerse funcionando correctamente."
);
// ==========================================
// CALCULADORA DE PORCENTAJE
// ==========================================

const calculatePercent = document.getElementById("calculatePercent");

if (calculatePercent) {

  calculatePercent.addEventListener("click", () => {

    const value = parseFloat(
      document.getElementById("percentValue").value
    );

    const percent = parseFloat(
      document.getElementById("percentNumber").value
    );

    const result = document.getElementById("percentResult");

    if (isNaN(value) || isNaN(percent)) {
      result.innerHTML = "⚠️ Introduce valores válidos.";
      result.classList.add("show");
      return;
    }

    const answer = value * (percent / 100);

    result.innerHTML = `
      <div class="result-number">
        ${answer.toLocaleString()}
      </div>
      <div class="result-text">
        El ${percent}% de ${value} es ${answer}
      </div>
    `;

    result.classList.add("show");

  });

}


// ==========================================
// CALCULADORA DE DESCUENTO
// ==========================================

const calculateDiscount =
  document.getElementById("calculateDiscount");

if (calculateDiscount) {

  calculateDiscount.addEventListener("click", () => {

    const price = parseFloat(
      document.getElementById("discountPrice").value
    );

    const discount = parseFloat(
      document.getElementById("discountPercent").value
    );

    const result =
      document.getElementById("discountResult");

    if (isNaN(price) || isNaN(discount)) {

      result.innerHTML =
        "⚠️ Introduce valores válidos.";

      result.classList.add("show");

      return;
    }

    const saved = price * (discount / 100);

    const finalPrice = price - saved;

    result.innerHTML = `
      <div class="result-number">
        $${finalPrice.toLocaleString()}
      </div>

      <div class="result-text">
        Ahorras $${saved.toLocaleString()}
      </div>
    `;

    result.classList.add("show");

  });

}


// ==========================================
// INTERÉS SIMPLE
// ==========================================

const calculateInterest =
  document.getElementById("calculateInterest");

if (calculateInterest) {

  calculateInterest.addEventListener("click", () => {

    const principal = parseFloat(
      document.getElementById("interestPrincipal").value
    );

    const rate = parseFloat(
      document.getElementById("interestRate").value
    );

    const years = parseFloat(
      document.getElementById("interestYears").value
    );

    const result =
      document.getElementById("interestResult");

    if (
      isNaN(principal) ||
      isNaN(rate) ||
      isNaN(years)
    ) {

      result.innerHTML =
        "⚠️ Introduce valores válidos.";

      result.classList.add("show");

      return;
    }

    const interest =
      principal * (rate / 100) * years;

    const total =
      principal + interest;

    result.innerHTML = `
      <div class="result-number">
        $${total.toLocaleString()}
      </div>

      <div class="result-text">
        Interés generado: $${interest.toLocaleString()}
      </div>
    `;

    result.classList.add("show");

  });

}


// ==========================================
// CALCULADORA DE PROPINA
// ==========================================

const calculateTip =
  document.getElementById("calculateTip");

if (calculateTip) {

  calculateTip.addEventListener("click", () => {

    const bill = parseFloat(
      document.getElementById("tipBill").value
    );

    const percent = parseFloat(
      document.getElementById("tipPercent").value
    );

    const result =
      document.getElementById("tipResult");

    if (isNaN(bill) || isNaN(percent)) {

      result.innerHTML =
        "⚠️ Introduce valores válidos.";

      result.classList.add("show");

      return;
    }

    const tip =
      bill * (percent / 100);

    const total =
      bill + tip;

    result.innerHTML = `
      <div class="result-number">
        $${total.toLocaleString()}
      </div>

      <div class="result-text">
        Propina: $${tip.toLocaleString()}
      </div>
    `;

    result.classList.add("show");

  });

                                    }
// ==========================================
// CALCULADORA DE PROMEDIO - EDUCACIÓN
// ==========================================

const calculateAverage = document.getElementById("calculateAverage");
const averageResult = document.getElementById("averageResult");

if (calculateAverage) {

  calculateAverage.addEventListener("click", () => {

    const grade1 = parseFloat(document.getElementById("grade1").value);
    const grade2 = parseFloat(document.getElementById("grade2").value);
    const grade3 = parseFloat(document.getElementById("grade3").value);

    if (
      isNaN(grade1) ||
      isNaN(grade2) ||
      isNaN(grade3)
    ) {
      averageResult.textContent =
        "⚠️ Introduce las tres calificaciones.";
      return;
    }

    const average = (grade1 + grade2 + grade3) / 3;

    averageResult.innerHTML =
      `📚 Tu promedio es: <strong>${average.toFixed(2)}</strong>`;
  });

}
// ==========================================
// CALIFICACIÓN NECESARIA - EDUCACIÓN
// ==========================================

const calculateNeeded = document.getElementById("calculateNeeded");

if (calculateNeeded) {

  calculateNeeded.addEventListener("click", () => {

    const current = parseFloat(
      document.getElementById("currentAverage").value
    );

    const desired = parseFloat(
      document.getElementById("desiredAverage").value
    );

    const weight = parseFloat(
      document.getElementById("nextWeight").value
    );

    const result = document.getElementById("neededResult");

    if (isNaN(current) || isNaN(desired) || isNaN(weight)) {
      result.innerHTML = "⚠️ Completa todos los campos.";
      return;
    }

    if (weight <= 0 || weight > 100) {
      result.innerHTML = "⚠️ El porcentaje debe estar entre 1 y 100.";
      return;
    }

    const needed =
      (desired - current * (1 - weight / 100)) / (weight / 100);

    if (needed > 100) {
      result.innerHTML =
        "❌ Necesitarías más de 100 puntos. Ese promedio no sería posible con esa evaluación.";
      return;
    }

    if (needed <= 0) {
      result.innerHTML =
        "🔥 ¡Ya tienes el promedio deseado!";
      return;
    }

    result.innerHTML = `
      🎯 Necesitas sacar:
      <strong>${needed.toFixed(2)}</strong>
    `;
  });

      }
// ==========================================
// PROMEDIO PONDERADO - EDUCACIÓN
// ==========================================

const calculateWeighted =
  document.getElementById("calculateWeighted");

if (calculateWeighted) {

  calculateWeighted.addEventListener("click", () => {

    const grade1 = parseFloat(
      document.getElementById("weightedGrade1").value
    );

    const weight1 = parseFloat(
      document.getElementById("weightedWeight1").value
    );

    const grade2 = parseFloat(
      document.getElementById("weightedGrade2").value
    );

    const weight2 = parseFloat(
      document.getElementById("weightedWeight2").value
    );

    const result =
      document.getElementById("weightedResult");

    if (
      isNaN(grade1) ||
      isNaN(weight1) ||
      isNaN(grade2) ||
      isNaN(weight2)
    ) {
      result.innerHTML = "⚠️ Completa todos los campos.";
      return;
    }

    if (weight1 + weight2 !== 100) {
      result.innerHTML =
        "⚠️ Los porcentajes deben sumar exactamente 100%.";
      return;
    }

    const average =
      (grade1 * weight1 / 100) +
      (grade2 * weight2 / 100);

    result.innerHTML = `
      ⚖️ Tu promedio ponderado es:
      <strong>${average.toFixed(2)}</strong>
    `;
  });

}
// ==========================================
// OPERACIONES BÁSICAS - MATEMÁTICAS
// ==========================================

const calculateMath = document.getElementById("calculateMath");

if (calculateMath) {

  calculateMath.addEventListener("click", () => {

    const number1 = parseFloat(
      document.getElementById("mathNumber1").value
    );

    const number2 = parseFloat(
      document.getElementById("mathNumber2").value
    );

    const operation =
      document.getElementById("mathOperation").value;

    const result =
      document.getElementById("mathResult");

    if (isNaN(number1) || isNaN(number2)) {
      result.innerHTML = "⚠️ Introduce los dos números.";
      return;
    }

    let answer;

    if (operation === "sum") {
      answer = number1 + number2;
    }

    if (operation === "subtract") {
      answer = number1 - number2;
    }

    if (operation === "multiply") {
      answer = number1 * number2;
    }

    if (operation === "divide") {

      if (number2 === 0) {
        result.innerHTML = "❌ No se puede dividir entre cero.";
        return;
      }

      answer = number1 / number2;
    }

    result.innerHTML = `
      🧮 Resultado:
      <strong>${answer}</strong>
    `;
  });

}
// ==========================================
// REGLA DE TRES - MATEMÁTICAS
// ==========================================

const calculateRule = document.getElementById("calculateRule");

if (calculateRule) {

  calculateRule.addEventListener("click", () => {

    const a = parseFloat(
      document.getElementById("ruleA").value
    );

    const b = parseFloat(
      document.getElementById("ruleB").value
    );

    const c = parseFloat(
      document.getElementById("ruleC").value
    );

    const result =
      document.getElementById("ruleResult");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      result.innerHTML = "⚠️ Completa los tres valores.";
      return;
    }

    if (a === 0) {
      result.innerHTML = "❌ A no puede ser 0.";
      return;
    }

    const answer = (b * c) / a;

    result.innerHTML = `
      📐 Resultado:
      <strong>${answer.toFixed(2)}</strong>
    `;
  });

}
// ==========================================
// CALCULADORA DE FRACCIONES - MATEMÁTICAS
// ==========================================

const calculateFraction =
  document.getElementById("calculateFraction");

if (calculateFraction) {

  calculateFraction.addEventListener("click", () => {

    const n1 = parseInt(document.getElementById("fractionNum1").value);
    const d1 = parseInt(document.getElementById("fractionDen1").value);
    const n2 = parseInt(document.getElementById("fractionNum2").value);
    const d2 = parseInt(document.getElementById("fractionDen2").value);

    const operation =
      document.getElementById("fractionOperation").value;

    const result =
      document.getElementById("fractionResult");

    if ([n1, d1, n2, d2].some(isNaN)) {
      result.innerHTML = "⚠️ Completa todos los campos.";
      return;
    }

    if (d1 === 0 || d2 === 0) {
      result.innerHTML = "❌ Los denominadores no pueden ser 0.";
      return;
    }

    let numerator;
    let denominator;

    if (operation === "add") {
      numerator = n1 * d2 + n2 * d1;
      denominator = d1 * d2;
    }

    if (operation === "subtract") {
      numerator = n1 * d2 - n2 * d1;
      denominator = d1 * d2;
    }

    if (operation === "multiply") {
      numerator = n1 * n2;
      denominator = d1 * d2;
    }

    if (operation === "divide") {

      if (n2 === 0) {
        result.innerHTML = "❌ No se puede dividir entre 0.";
        return;
      }

      numerator = n1 * d2;
      denominator = d1 * n2;
    }

    const gcd = (a, b) => {
      a = Math.abs(a);
      b = Math.abs(b);

      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }

      return a;
    };

    const divisor = gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    if (denominator < 0) {
      numerator *= -1;
      denominator *= -1;
    }

    result.innerHTML = `
      🍕 Resultado:
      <strong>${numerator}/${denominator}</strong>
    `;
  });

}
// ==========================================
// POTENCIAS Y RAÍCES - MATEMÁTICAS
// ==========================================

const calculatePower =
  document.getElementById("calculatePower");

const calculateSquareRoot =
  document.getElementById("calculateSquareRoot");

const powerResult =
  document.getElementById("powerResult");

if (calculatePower) {

  calculatePower.addEventListener("click", () => {

    const number =
      parseFloat(document.getElementById("powerNumber").value);

    const exponent =
      parseFloat(document.getElementById("powerExponent").value);

    if (isNaN(number) || isNaN(exponent)) {
      powerResult.innerHTML = "⚠️ Completa los campos.";
      return;
    }

    const result = Math.pow(number, exponent);

    powerResult.innerHTML = `
      ⚡ Resultado: <strong>${result}</strong>
    `;
  });

}

if (calculateSquareRoot) {

  calculateSquareRoot.addEventListener("click", () => {

    const number =
      parseFloat(document.getElementById("powerNumber").value);

    if (isNaN(number)) {
      powerResult.innerHTML = "⚠️ Introduce un número.";
      return;
    }

    if (number < 0) {
      powerResult.innerHTML =
        "❌ No se puede calcular la raíz cuadrada de un número negativo.";
      return;
    }

    const result = Math.sqrt(number);

    powerResult.innerHTML = `
      √ Resultado: <strong>${result.toFixed(2)}</strong>
    `;
  });

  }
// ==========================================
// CONVERSOR DE LONGITUD
// ==========================================

const convertLength = document.getElementById("convertLength");

if (convertLength) {

  convertLength.addEventListener("click", () => {

    const value = parseFloat(
      document.getElementById("lengthValue").value
    );

    const from = document.getElementById("lengthFrom").value;
    const to = document.getElementById("lengthTo").value;
    const result = document.getElementById("lengthResult");

    if (isNaN(value)) {
      result.innerHTML = "⚠️ Introduce un valor.";
      return;
    }

    const meters = {
      m: 1,
      km: 1000,
      cm: 0.01,
      mi: 1609.344
    };

    const converted = value * meters[from] / meters[to];

    result.innerHTML = `
      📏 Resultado:
      <strong>${converted.toFixed(4)}</strong>
    `;
  });

                                  }
// ==========================================
// CONVERSOR DE PESO
// ==========================================

const convertWeight = document.getElementById("convertWeight");

if (convertWeight) {

  convertWeight.addEventListener("click", () => {

    const value = parseFloat(
      document.getElementById("weightValue").value
    );

    const from = document.getElementById("weightFrom").value;
    const to = document.getElementById("weightTo").value;
    const result = document.getElementById("weightResult");

    if (isNaN(value)) {
      result.innerHTML = "⚠️ Introduce un valor.";
      return;
    }

    const toKg = {
      kg: 1,
      g: 0.001,
      lb: 0.45359237,
      oz: 0.0283495231
    };

    const kilograms = value * toKg[from];
    const converted = kilograms / toKg[to];

    result.innerHTML = `
      ⚖️ Resultado:
      <strong>${converted.toFixed(2)}</strong>
    `;
  });

}
