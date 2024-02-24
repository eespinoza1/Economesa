document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("currencyForm");
  const amountInput = document.getElementById("amountInput");
  const currencyInput = document.getElementById("currencyInput");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    calculate();
  });

  amountInput.addEventListener("input", function () {
    resultDiv.innerHTML = "";
  });

  function calculate() {
    const amount = parseFloat(amountInput.value.replace(/,/g, ""));
    if (isNaN(amount)) {
      alert("Por favor, ingrese un monto válido.");
      return;
    }

    let exchangeRate;
    switch (currencyInput.value) {
      case "usd":
        exchangeRate = 1; // 1 dólar = X bolívares (tasa de cambio)
        break;
      case "cop":
        exchangeRate = 0.00026; // 1 peso colombiano = X bolívares (tasa de cambio)
        break;
      case "clp":
        exchangeRate = 0.0012; // 1 peso chileno = X bolívares (tasa de cambio)
        break;
      default:
        exchangeRate = 0;
    }

    if (exchangeRate === 0) {
      resultDiv.innerHTML = "Seleccione una moneda válida.";
    } else {
      const result = amount * exchangeRate;
      resultDiv.innerHTML = `<p>El monto en bolívares venezolanos es: ${result
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>`;
    }
  }
});
