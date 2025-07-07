const addPlayerButton = document.getElementById("btn-add-player");
const playerListContainer = document.getElementById("player-list");

const firstNameInput = document.getElementById("input-first-name");
const lastNameInput = document.getElementById("input-last-name");
const countryInput = document.getElementById("input-country");
const pointsInput = document.getElementById("input-points");

const errorMessage = document.getElementById("error-message");

let players = [];

const renderPlayers = () => {
  playerListContainer.innerHTML = "";

  players.forEach((player, index) => {
    const row = document.createElement("div");
    row.classList.add("row");

    const infoElements = [
      `First Name: ${player.firstName}`,
      `Last Name: ${player.lastName}`,
      `Country: ${player.country}`,
      `Points: ${player.points}`,
    ];

    infoElements.forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      row.appendChild(p);
    });

    const deleteBtn = createActionButton("Del", () => {
      players.splice(index, 1);
      renderPlayers();
    });

    const incrementBtn = createActionButton("+5", () => {
      players[index].points += 5;
      renderPlayers();
    });

    const decrementBtn = createActionButton("-5", () => {
      players[index].points -= 5;
      renderPlayers();
    });

    row.append(deleteBtn, incrementBtn, decrementBtn);
    playerListContainer.appendChild(row);
  });
};

const createActionButton = (label, callback) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.className = "pButton";
  button.addEventListener("click", callback);
  return button;
};

const clearInputs = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  countryInput.value = "";
  pointsInput.value = "";
};

const displayError = (message) => {
  errorMessage.textContent = message;
  errorMessage.style.color = "red";
  errorMessage.style.fontSize = "18px";
};

const clearError = () => {
  errorMessage.textContent = "";
};

addPlayerButton.addEventListener("click", () => {
  const firstName = firstNameInput.value.trim().toUpperCase();
  const lastName = lastNameInput.value.trim().toUpperCase();
  const country = countryInput.value.trim().toUpperCase();
  const points = Number(pointsInput.value);

  if (!firstName || !lastName || !country || isNaN(points)) {
    displayError("All fields are required and points must be a number.");
    return;
  }

  clearError();

  const duplicate = players.find(player =>
    player.firstName === firstName &&
    player.lastName === lastName &&
    player.country === country &&
    player.points === points
  );

  if (duplicate) {
    displayError("This player already exists.");
    return;
  }

  players.push({ firstName, lastName, country, points });
  clearInputs();
  renderPlayers();
});
