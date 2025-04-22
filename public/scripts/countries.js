const countriesData = {
  bn: { name: "Brunei", description: "A small but wealthy nation on the island of Borneo." },
  id: { name: "Indonesia", description: "An archipelago of over 17,000 islands known for its biodiversity and culture." },
  kh: { name: "Cambodia", description: "Home to the ancient Angkor Wat temple complex." },
  la: { name: "Laos", description: "A landlocked country known for mountainous terrain and Buddhist monasteries." },
  mm: { name: "Myanmar", description: "A nation with a rich cultural heritage and diverse ethnic groups." },
  my: { name: "Malaysia", description: "Known for a mix of modern cities and lush rainforests." },
  ph: { name: "Philippines", description: "An archipelago of over 7,000 islands known for its beaches and festivals." },
  sg: { name: "Singapore", description: "A global financial hub and island city-state." },
  th: { name: "Thailand", description: "A cultural hub famous for temples, food, and tropical islands." },
  tl: { name: "Timor-Leste", description: "A young nation with a strong sense of identity and scenic landscapes." },
  vn: { name: "Vietnam", description: "Rich in history, with stunning landscapes from Halong Bay to rice terraces." },
};

const originalFills = {}; // Cache for original fill colors

function highlightCountry(svgRoot, id, highlight = true) {
  const country = svgRoot.getElementById(id);
  if (!country) return;

  const elements = country.querySelectorAll("path, polygon, rect, circle");

  if (elements.length > 0) {
    elements.forEach(el => {
      const key = `${id}-${el.tagName}-${el.getAttribute("d") || el.getAttribute("points") || el.getAttribute("x") || el.getAttribute("cx")}`;
      el.style.fill = highlight ? "#50C878" : originalFills[key] || "";
    });
  } else {
    const key = `${id}-main`;
    country.style.fill = highlight ? "#50C878" : originalFills[key] || "";
  }
}

function attachInteractions(svgRoot) {
  // Step 1: Cache original fills
  Object.keys(countriesData).forEach(id => {
    const country = svgRoot.getElementById(id);
    if (!country) return;

    const elements = country.querySelectorAll("path, polygon, rect, circle");

    if (elements.length > 0) {
      elements.forEach(el => {
        const key = `${id}-${el.tagName}-${el.getAttribute("d") || el.getAttribute("points") || el.getAttribute("x") || el.getAttribute("cx")}`;
        if (!(key in originalFills)) {
          originalFills[key] = el.getAttribute("fill") || window.getComputedStyle(el).fill;
        }
      });
    } else {
      const key = `${id}-main`;
      if (!(key in originalFills)) {
        originalFills[key] = country.getAttribute("fill") || window.getComputedStyle(country).fill;
      }
    }
  });

  // Step 2: Grey out all countries not in countriesData
  const allCountryGroups = svgRoot.querySelectorAll("g[id]");
  allCountryGroups.forEach(group => {
    const id = group.id;
    if (!countriesData[id]) {
      const elements = group.querySelectorAll("path, polygon, rect, circle");
      if (elements.length > 0) {
        elements.forEach(el => el.style.fill = "#d3d3d3");
      } else {
        group.style.fill = "#d3d3d3";
      }
    }
  });

  // Step 3: Grey out non-water loose elements
  const allElements = svgRoot.querySelectorAll("path, polygon, rect, circle");
  allElements.forEach(el => {
    const parentGroup = el.closest("g");
    const elId = el.id?.toLowerCase() || "";
    const elClass = el.getAttribute("class")?.toLowerCase() || "";

    if (
      (parentGroup && countriesData[parentGroup.id]) ||
      elId.includes("ocean") ||
      elId.includes("sea") ||
      elClass.includes("ocean") ||
      elClass.includes("sea") ||
      elClass.includes("water") ||
      elClass.includes("bg") ||
      el.style.fill === "none"
    ) {
      return;
    }

    el.style.fill = "#d3d3d3";
  });

  // ✅ Step 4: Restore original fills for SEA countries (especially Laos and Brunei)
  Object.keys(countriesData).forEach(id => {
    const country = svgRoot.getElementById(id);
    if (!country) return;

    const elements = country.querySelectorAll("path, polygon, rect, circle");

    if (elements.length > 0) {
      elements.forEach(el => {
        const key = `${id}-${el.tagName}-${el.getAttribute("d") || el.getAttribute("points") || el.getAttribute("x") || el.getAttribute("cx")}`;
        if (originalFills[key]) {
          el.style.fill = originalFills[key];
        }
      });
    } else {
      const key = `${id}-main`;
      if (originalFills[key]) {
        country.style.fill = originalFills[key];
      }
    }
  });

  // Step 5: Add interactions to SEA countries (SVG → List & back)
  Object.keys(countriesData).forEach(id => {
    const country = svgRoot.getElementById(id);
    if (!country) return;

    const listItem = document.querySelector(`.country-item[data-country="${id}"]`);
    if (!listItem) return;

    country.style.cursor = "pointer";

    country.addEventListener("mouseover", () => {
      highlightCountry(svgRoot, id, true);
      listItem.classList.add("active-highlight");
    });

    country.addEventListener("mouseout", () => {
      highlightCountry(svgRoot, id, false);
      listItem.classList.remove("active-highlight");
    });
  });

  // Step 6: List hover interaction
  const listItems = document.querySelectorAll(".country-item");
  listItems.forEach(item => {
    const id = item.dataset.country;

    item.addEventListener("mouseover", () => {
      highlightCountry(svgRoot, id, true);
    });

    item.addEventListener("mouseout", () => {
      highlightCountry(svgRoot, id, false);
    });
  });

  listItems.forEach(item => {
    const id = item.dataset.country;
    item.addEventListener("click", () => {
      window.location.href = `/countryinfo.html?country=${id}`;
    });
  });
}

// Load SVG and apply logic
const svgObject = document.getElementById("sea-map");

if (svgObject instanceof SVGSVGElement) {
  attachInteractions(document);
} else if (svgObject instanceof HTMLObjectElement) {
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    attachInteractions(svgDoc);
  });
}
