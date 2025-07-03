import countries_data from "../data/countries_data.js";

const langCount = {};

for (const country of countries_data) {
  for (const lang of country.languages) {
    if (langCount[lang]) {
      langCount[lang] += 1;
    } else {
      langCount[lang] = 1;
    }
  }
}

const topLang = Object.entries(langCount)
  .map(([language, count]) => ({ language, count }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

console.log(topLang);

const topPopulatedCountries = countries_data
  .map((country) => ({ name: country.name, population: country.population }))
  .sort((a, b) => b.population - a.population)
  .slice(0, 10);

console.log(topPopulatedCountries);

function renderHorizontalBarGraph(dataArray, titleText, keyName) {
  const stat = document.getElementById("stat");
  const graphTitle = document.querySelector(".graph-title");

  graphTitle.textContent = titleText;
  stat.innerHTML = "";

  const maxValue = dataArray[0][keyName];

  for (const data of dataArray) {
    const row = document.createElement("div");
    row.className = "bar-container";

    const nameBox = document.createElement("div");
    nameBox.className = "name";
    nameBox.textContent = data.name || data.language;

    const barBox = document.createElement("div");
    barBox.className = "bar";
    const widthPercent = (data[keyName] / maxValue) * 100;
    barBox.style.width = widthPercent + "%";

    const valueBox = document.createElement("div");
    valueBox.className = "bar-value";
    valueBox.textContent = data[keyName].toLocaleString();

    row.appendChild(nameBox);
    row.appendChild(barBox);
    row.appendChild(valueBox);

    stat.appendChild(row);
  }
}

let btn = document.querySelector(".population");
btn.addEventListener("click", () => {
  renderHorizontalBarGraph(
    topPopulatedCountries,
    "Top 10 Most Populated Countries",
    "population"
  );
});

let btn1 = document.querySelector(".languages");
btn1.addEventListener("click", () => {
  renderHorizontalBarGraph(topLang, "Top 10 Most Spoken Languages", "count");
});
