// index.js

document.addEventListener("DOMContentLoaded", function () {
    // 1) Remove the main element with id 'main'
    var mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.remove();
    }
  
    // 2) Create a new 'h1' element and assign it to the 'newHeader' variable
    var newHeader = document.createElement("h1");
  
    // 3) Assign the id 'victory' to the 'newHeader' element
    newHeader.id = "victory";
  
    // 4) Set the text content of 'newHeader' to "YOUR-NAME is the champion"
    // Replace 'YOUR-NAME' with your actual name
    var yourName = "Sung-Jin"; // Replace with your actual name
    newHeader.textContent = yourName + " is the champion";
  
    // Append the 'newHeader' to the document body or another appropriate location
    document.body.appendChild(newHeader);
  });
  