// Función Timeline
const timelineButtons = document.querySelectorAll(
  ".timeline-navigation button"
);
const timelineCard = document.querySelector(".milestone-text");
const timelineImg = document.querySelector(".milestone-img");
const timelineImages = [
  "assets/img/muiscas.jpg",
  "assets/img/miles2.jpg",
  "assets/img/miles3.jpg",
  "assets/img/miles4.png",
  "assets/img/miles5.jpg",
];
const timelineTitles = [
  "Culturas Precolombinas",
  "Fundación de Cartagena de Indias",
  "Independencia de Colombia",
  "Nueva Constitución",
  "Consolidación de la Paz",
];
const timelineDescriptions = [
  "Colombia albergó diversas culturas indígenas como los Taironas, Muiscas y Zenúes, quienes desarrollaron avanzadas sociedades y tecnologías.",
  "Cartagena se convirtió en uno de los puertos más importantes del Imperio español en América. Fue clave en la defensa contra los piratas y el comercio de esclavos africanos.",
  "Luego de siglos de dominio español, Colombia declaró su independencia y se convirtió en una república soberana tras una larga lucha.",
  "Después de siglos de dominio colonial español, Colombia logró su independencia y se estableció como una república soberana tras una prolongada y ardua lucha por la libertad, marcando un hito trascendental en la historia del país.",
  "La nueva Constitución de Colombia reconoció la diversidad étnica y cultural del país, otorgando más derechos y garantías a los pueblos indígenas, afrocolombianos y otras minorías tradicionalmente marginadas, sentando las bases para una sociedad más justa e inclusiva.",
];
const timeline2Descriptions = [
  "Estos pueblos originarios dejaron un legado cultural y arquitectónico único en la región, con un manejo sofisticado de los recursos naturales, orfebrería y cerámica de alta calidad, así como sistemas de organización social y política complejos.",
  "Fue fundamental en la defensa de la región contra los ataques de piratas y corsarios, así como en el lucrativo comercio de esclavos africanos, dejando un legado cultural y arquitectónico destacado.",
  "Este proceso estuvo liderado por figuras emblemáticas como Simón Bolívar, quienes encabezaron la lucha por la libertad y la autodeterminación del pueblo colombiano.",
  "Colombia adoptó una nueva Constitución que reconoció la diversidad étnica y cultural del país, otorgando más derechos a los pueblos indígenas y afrocolombianos.",
  "Tras décadas de conflicto armado, Colombia ha logrado avances significativos en su proceso de paz y reconciliación nacional, sentando las bases para una sociedad más justa, inclusiva y próspera.",
];

timelineButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    timelineButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    timelineImg.querySelector(".milestone-img img").src = timelineImages[index];
    timelineCard.querySelector(".milestone-text h3").textContent =
      timelineTitles[index];
    timelineCard.querySelector(".milestone-text p").textContent =
      timelineDescriptions[index];
    timelineCard.querySelector(".p2").textContent =
      timeline2Descriptions[index];
  });
});

// Función Experiencias
function toggleContent(contentId, button) {
  const content = document.getElementById(contentId);
  const parent = content.parentElement;

  // Alternar la visibilidad
  parent.classList.toggle("show");

  // Cambiar el símbolo del botón (→ ↔ X)
  if (parent.classList.contains("show")) {
    button.textContent = "✕";
    button.classList.add("rotate");
  } else {
    button.textContent = "→";
    button.classList.remove("rotate");
  }
}

/* BOTON BACK TO TOP */
// Mostrar/ocultar botón basado en el scroll
window.onscroll = function () {
  const btn = document.getElementById("scrollBtn");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

// Función scroll to top
document.getElementById("scrollBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
