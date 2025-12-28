function calcularMolaridad() {
  const moles = parseFloat(document.getElementById("moles").value);
  const volumen = parseFloat(document.getElementById("volumen").value);

  if (isNaN(moles) || isNaN(volumen) || volumen <= 0) {
    document.getElementById("resultadoMolaridad").textContent =
      "⚠️ Ingresa valores válidos";
    return;
  }

  const molaridad = moles / volumen;

  document.getElementById("resultadoMolaridad").textContent =
    `M = ${molaridad.toFixed(3)} mol/L`;
}

