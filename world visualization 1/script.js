const display_content = (val, label, option) => {
  let row = document.createElement("div");
  row.className = "graph-row";

  let name = document.createElement("div");
  name.className = option === 0 ? "country-label" : "language-label";
  name.innerText = label;

  let bar = document.createElement("div");
  bar.className = "bar";
  bar.style.width = option === 0 ? (val * 0.00000055) + 'px' : (val * 10) + 'px';

  let value = document.createElement("div");
  value.className = "value-label";
  value.innerText = val.toLocaleString();

  row.append(name, bar, value);
  return row;
};

let frequencyOfCountry = countries.reduce((res, val) => {
  val.languages.forEach(lang => {
    const lowerLang = lang.toLocaleLowerCase();
    res[lowerLang] = (res[lowerLang] || 0) + 1;
  });
  return res;
}, {});

let languages = document.querySelector(".languages");
languages.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.innerText = "TOP 10 LANGUAGES";

  const graph = document.querySelector("#graph");
  if (!graph.querySelector(".language-label")) {
    graph.querySelectorAll(".graph-row").forEach(row => graph.removeChild(row));
  }

  if (graph.innerHTML === "") {
    let topLanguages = Object.entries(frequencyOfCountry)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    topLanguages.forEach(([lang, count]) => {
      graph.append(display_content(count, lang, 1)); // 1 is for languages
    });
  }
});

let population = document.querySelector(".population");
population.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.innerText = "TOP 10 COUNTRIES";

  const graph = document.querySelector("#graph");
  if (!graph.querySelector(".country-label")) {
    graph.querySelectorAll(".graph-row").forEach(row => graph.removeChild(row));
  }

  if (graph.innerHTML === "") {
    let topCountries = countries
      .sort((a, b) => b.population - a.population)
      .slice(0, 10);

    topCountries.forEach(country => {
      graph.append(display_content(country.population, country.name, 0)); // 0 is for population
    });
  }
});
