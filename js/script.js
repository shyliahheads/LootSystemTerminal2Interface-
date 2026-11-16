
// Store all loot items in an array
let lootItems = [];

// Get the HTML elements
const lootNameInput = document.getElementById("lootName");
const lootValueInput = document.getElementById("lootValue");
const addLootButton = document.getElementById("addLoot");
const lootList = document.getElementById("lootList");
const totalValueDisplay = document.getElementById("totalValue");
const messageDisplay = document.getElementById("message");

// Listen for a click on the Add Loot button
addLootButton.addEventListener("click", function() {

    // Get the values entered by the user
    let lootName = lootNameInput.value.trim();
    let lootValue = lootValueInput.value.trim();

    // Check if the loot name is empty
    if (lootName === "") {
        messageDisplay.textContent = "Please enter a loot item name.";
        return;
    }

    // Check if the value is empty or not a valid number
    if (lootValue === "" || isNaN(Number(lootValue))) {
        messageDisplay.textContent = "Please enter a valid loot value.";
        return;
    }

    // Convert the value into a number
    lootValue = Number(lootValue);

    // Check if the value is negative
    if (lootValue < 0) {
        messageDisplay.textContent = "Loot value cannot be negative.";
        return;
    }

    // Create a new loot object
    let newLoot = {
        name: lootName,
        value: lootValue
    };

    // Add the new object to the array
    lootItems.push(newLoot);

    // Clear any previous validation messages
    messageDisplay.textContent = "Loot added successfully!";

    // Clear the previous list before displaying updated items
    lootList.textContent = "";

    // Display each loot item from the array
    for (let i = 0; i < lootItems.length; i++) {

        let listItem = document.createElement("li");

        listItem.textContent = lootItems[i].name +
            " - Value: " + lootItems[i].value;

        lootList.appendChild(listItem);
    }

    // Calculate the total value of all loot
    let total = 0;

    for (let i = 0; i < lootItems.length; i++) {
        total += lootItems[i].value;
    }

    // Display the updated total
    totalValueDisplay.textContent = "Total: " + total;

    // Clear the input fields after adding loot
    lootNameInput.value = "";
    lootValueInput.value = "";

});

// Debugging Reflection:
//
// During debugging, I observed that the loot array starts empty.
// When the Add Loot button is clicked and the information passes
// validation, the new loot object is added to the array.
// The array changes when lootItems.push(newLoot) executes.
// After the loops run, the webpage updates to show the new loot
// item and the recalculated total.
//
// I used a breakpoint inside the event handler to observe the
// array before and after adding an item.
