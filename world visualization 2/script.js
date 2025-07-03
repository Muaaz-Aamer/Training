let startingWord = 0;
let searchWith = 0;

const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const inputed = document.querySelector("#inputed");
const graph = document.querySelector("#countries");

choice1.addEventListener("click", () => {
    startingWord = 1;
    searchWith = 0;
    inputed.value = "";
    graph.innerHTML = ""; 
});

choice2.addEventListener("click", () => {
    searchWith = 1;
    startingWord = 0;
    inputed.value = "";
    graph.innerHTML = ""; // clear output
});

function createBox(nameList) {
    return nameList.map((country) => {
        const box = document.createElement("div");
        box.className = "country-box";
        box.innerText = country.toUpperCase();
        return box;
    });
}


inputed.addEventListener("input", (e) => {
    const input = e.target.value.toLowerCase();
    graph.innerHTML = "";

    if (!input) return;

    let filtered = [];

    if (startingWord === 1) {
        filtered = countries.filter(country =>
            country.toLowerCase().startsWith(input)
        );
    } else if (searchWith === 1) {
        filtered = countries.filter(country =>
            country.toLowerCase().includes(input)
        );
    }

    if (filtered.length === 0) {
        graph.innerHTML = "<p>No matching countries found.</p>";
        return;
    }

    const boxes = createBox(filtered);
    boxes.forEach(box => graph.appendChild(box));
});
