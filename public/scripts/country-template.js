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

const params = new URLSearchParams(window.location.search);
const code = params.get("country");

const content = countriesData[code];

if (content) {
  document.getElementById("country-name").textContent = content.name;
  document.getElementById("country-description").textContent = content.description;
} else {
  document.getElementById("country-name").textContent = "Country Not Found";
  document.getElementById("country-description").textContent = "The requested country data is unavailable.";
}

const flagDiv = document.getElementById("flag");
flagDiv.style.backgroundImage = `url('/flags/${code}.svg')`;
document.getElementById("cover-photo").src = `/covers/${code}.jpg`;
document.getElementById("country-name").textContent = country.name;
document.getElementById("country-description").textContent = country.description;
