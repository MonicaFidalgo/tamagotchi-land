function setName() {
  let ownerName = prompt("Please enter your name:");
  let name = prompt("Please enter the name for your Tamagotchi:", "Tammy");

  if (name !== null && name !== "" && ownerName !== null) {
    alert("Your Tamagotchi's name is: " + name);
    displayTamagotchiName(ownerName, name);
  } else {
    alert("You did not enter a name.");
  }
}

function displayTamagotchiName(ownerName, tamagotchiName) {
  const tamagotchiNameElement = document.querySelector(".name");

  tamagotchiNameElement.innerHTML =
    "Hi " + ownerName + "! Meet " + tamagotchiName + "!";
}
