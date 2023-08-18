// Author: Matthew Menchinton
// Date: 2023-08-18

// Fetch and read the people.json disk file
fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    // Now the data variable contains the content of your people.json file
    const jsonData = data;
    
    // Call your displayJsonData function or any other functions that use the data
    displayJsonData(jsonData);
  })
  .catch(error => {
    console.error(error);
  });

// Step 4: Read and display JSON data using Fetch API
function displayJsonData(data) {
    data.forEach(character => {
        console.log(`Name: ${character.name}, Species: ${character.species}, Birthday: ${character.birthday}`);
        
        // Display data in HTML
        const outputDiv = document.getElementById('output');
        const characterDiv = document.createElement('div');
        characterDiv.innerHTML = `Name: ${character.name}, Species: ${character.species}, Birthday: ${character.birthday}`;
        outputDiv.appendChild(characterDiv);
    });
}

// Step 5: Write three functions to describe JSON data
function describeData(character) {
    return `Name: ${character.name}, Species: ${character.species}, Birthday: ${character.birthday}`;
}

function describeDataAge(character) {
    return `Name: ${character.name}, Age: ${new Date().getFullYear() - new Date(character.birthday).getFullYear()}`;
}

function describeDataStatus(character) {
    return `Name: ${character.name}, Status: ${character.status}`;
}

// Display JSON data and results of functions

