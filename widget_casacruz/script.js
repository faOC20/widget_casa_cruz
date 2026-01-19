document.getElementById("btn").onclick = () => {
  const user = AMOCRM.constant('user');   // SDK de Kommo
  const nombre = user.name;

  fetch("https://script.google.com/macros/s/AKfycbxAEyM4c-bKPHsknKLNdfoQOYZAXnZ5fp8PlYlckdYk76iUr1pHh9gpsJ5g167sgMyspw/exec?nombre="
    + encodeURIComponent(nombre))
    .then(r => r.text())
    .then(texto => {
      document.getElementById("respuesta").textContent = texto;
    })
    .catch(err => {
      document.getElementById("respuesta").textContent = "Error: " + err;
    });
};