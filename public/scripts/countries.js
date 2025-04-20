const infoBox = document.getElementById("country-info");

const countriesData = {
  bn: {
    name: "Brunei",
    description: "A small but wealthy nation on the island of Borneo.",
  },
  id: {
    name: "Indonesia",
    description: "An archipelago of over 17,000 islands known for its biodiversity and culture.",
  },
  kh: {
    name: "Cambodia",
    description: "Home to the ancient Angkor Wat temple complex.",
  },
  la: {
    name: "Laos",
    description: "A landlocked country known for mountainous terrain and Buddhist monasteries.",
  },
  mm: {
    name: "Myanmar",
    description: "A nation with a rich cultural heritage and diverse ethnic groups.",
  },
  my: {
    name: "Malaysia",
    description: "Known for a mix of modern cities and lush rainforests.",
  },
  ph: {
    name: "Philippines",
    description: "An archipelago of over 7,000 islands known for its beaches and festivals.",
  },
  sg: {
    name: "Singapore",
    description: "A global financial hub and island city-state.",
  },
  th: {
    name: "Thailand",
    description: "A cultural hub famous for temples, food, and tropical islands.",
  },
  tl: {
    name: "Timor-Leste",
    description: "A young nation with a strong sense of identity and scenic landscapes.",
  },
  vn: {
    name: "Vietnam",
    description: "Rich in history, with stunning landscapes from Halong Bay to rice terraces.",
  },
};

function attachInteractions(svgRoot) {
  Object.keys(countriesData).forEach((id) => {
    const country = svgRoot.getElementById(id);
    if (!country) return;

    const { name, description } = countriesData[id];

    country.style.cursor = "pointer";

   country.addEventListener("mouseover", () => {
     const elements = country.querySelectorAll("path, polygon, rect, circle");

     if (elements.length > 0) {
       elements.forEach(el => {
         el.style.fill = "#50C878"; // Light green
       });
     } else {
       country.style.fill = "#50C878"; // Apply directly to group if no child shapes
     }

     infoBox.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
   });

   country.addEventListener("mouseout", () => {
     const elements = country.querySelectorAll("path, polygon, rect, circle");

     if (elements.length > 0) {
       elements.forEach(el => {
         el.style.fill = "";
       });
     } else {
       country.style.fill = ""; // Revert if applied directly
     }

     infoBox.innerHTML = `<h3>Country Info</h3><p>Hover over or click on a country to learn more.</p>`;
   });
  });
}

// For external SVG via <object>
const svgObject = document.getElementById("sea-map");

if (svgObject instanceof SVGSVGElement) {
  // Inline SVG directly embedded in HTML
  attachInteractions(document);
} else if (svgObject instanceof HTMLObjectElement) {
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    attachInteractions(svgDoc);
  });
}