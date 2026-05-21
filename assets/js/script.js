function enviarWhatsApp(mensaje) {
  const numero = "52XXXXXXXXXX"; // tu número
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}