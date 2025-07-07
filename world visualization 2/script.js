let isSearchByStartingWord = false;
let isSearchByAnyWord = false;

const btnSearchByStart = document.querySelector("#btn-starting-word");
const btnSearchByInclude = document.querySelector("#btn-contains-word");
const searchInput = document.querySelector("#country-search-input");
const countryListContainer = document.querySelector("#country-list");

btnSearchByStart.addEventListener("click", () => {
  isSearchByStartingWord = true;
  isSearchByAnyWord = false;
  searchInput.value = "";
  countryListContainer.innerHTML = "";
});

btnSearchByInclude.addEventListener("click", () => {
  isSearchByAnyWord = true;
  isSearchByStartingWord = false;
  searchInput.value = "";
  countryListContainer.innerHTML = "";
});

function generateCountryBoxes(filteredCountries) {
  return filteredCountries.map((country) => {
    const box = document.createElement("div");
    box.className = "country-box";
    box.innerText = country.toUpperCase();
    return box;
  });
}

searchInput.addEventListener("input", (event) => {
  const userInput = event.target.value.toLowerCase();
  countryListContainer.innerHTML = "";

  if (!userInput) return;

  let matchedCountries = [];

  if (isSearchByStartingWord) {
    matchedCountries = countries.filter(country =>
      country.toLowerCase().startsWith(userInput)
    );
  } else if (isSearchByAnyWord) {
    matchedCountries = countries.filter(country =>
      country.toLowerCase().includes(userInput)
    );
  }

  if (matchedCountries.length === 0) {
    countryListContainer.innerHTML = "<p>No matching countries found.</p>";
    return;
  }

  const boxes = generateCountryBoxes(matchedCountries);
  boxes.forEach(box => countryListContainer.appendChild(box));
});
