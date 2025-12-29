const routes = [
  {
    id: 1,
    city: "Nueva York",
    position: { top: "40%", left: "25%" },
    details: {
      duration: "6 horas",
      airlines: "Avianca, American Airlines",
      frequency: "Vuelos diarios",
      tips: "Conexión directa a Bogotá y Medellín",
    },
  },
  {
    id: 2,
    city: "Madrid",
    position: { top: "35%", left: "45%" },
    details: {
      duration: "11 horas",
      airlines: "Iberia, Air Europa",
      frequency: "Vuelos diarios",
      tips: "Mejor conexión desde Europa",
    },
  },
  {
    id: 3,
    city: "Ciudad de México",
    position: { top: "50%", left: "20%" },
    details: {
      duration: "4.5 horas",
      airlines: "Aeroméxico, Avianca",
      frequency: "Múltiples vuelos diarios",
      tips: "Excelente para conexiones",
    },
  },
  {
    id: 4,
    city: "Buenos Aires",
    position: { top: "80%", left: "30%" },
    details: {
      duration: "7 horas",
      airlines: "LATAM, Avianca",
      frequency: "Vuelos diarios",
      tips: "Conexiones a múltiples ciudades colombianas",
    },
  },
  {
    id: 5,
    city: "Sidney",
    position: { top: "78%", left: "87%" },
    details: {
      duration: "26-34 horas",
      airlines: "United Airlines, Turkish Airlines",
      frequency: "Vuelos diarios",
      tips: "Implica varias escalas",
    },
  },
  {
    id: 6,
    city: "Tokio",
    position: { top: "38%", left: "84%" },
    details: {
      duration: "23-35 horas",
      airlines: "United Airlines, Turkish Airlines",
      frequency: "Vuelos diarios",
      tips: "Implica al menos una escala",
    },
  },
];

function createCityMarkers() {
  const mapContainer = document.getElementById("mapContainer");

  routes.forEach((route) => {
    const marker = document.createElement("div");
    marker.className = "city-marker";
    marker.setAttribute("data-id", route.id);
    marker.style.top = route.position.top;
    marker.style.left = route.position.left;

    marker.innerHTML = `
        <div class="plane-icon">✈️</div>
        <span class="city-name">${route.city}</span>
      `;

    marker.addEventListener("mouseenter", () => highlightRoute(route.id));
    marker.addEventListener("mouseleave", () => removeHighlight());

    mapContainer.appendChild(marker);
  });
}

function createRouteCards() {
  const cardsContainer = document.getElementById("routeCards");

  routes.forEach((route) => {
    const card = document.createElement("div");
    card.className = "route-card";
    card.setAttribute("data-id", route.id);

    card.innerHTML = `
        <h3>${route.city}</h3>
        <p class="route-info">⏰ Duración: ${route.details.duration}</p>
        <p class="route-info">✈️ Aerolíneas: ${route.details.airlines}</p>
        <p class="route-info">🗓️ ${route.details.frequency}</p>
        <p class="route-info">💡 ${route.details.tips}</p>
      `;

    card.addEventListener("mouseenter", () => highlightRoute(route.id));
    card.addEventListener("mouseleave", () => removeHighlight());

    cardsContainer.appendChild(card);
  });
}

function highlightRoute(id) {
  document
    .querySelectorAll(`.city-marker[data-id="${id}"]`)
    .forEach((el) => el.classList.add("active"));
  document
    .querySelectorAll(`.route-card[data-id="${id}"]`)
    .forEach((el) => el.classList.add("active"));
}

function removeHighlight() {
  document
    .querySelectorAll(".city-marker.active, .route-card.active")
    .forEach((el) => el.classList.remove("active"));
}

document.addEventListener("DOMContentLoaded", () => {
  createCityMarkers();
  createRouteCards();
});
