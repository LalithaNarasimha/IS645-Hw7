// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
}
//function to load houses name in the dropdown
const loadHouses = (event) => {
    //for loop to insert the houses
    houses.forEach(house=>{
        const optionElemt = document.createElement("option");
        optionElemt.value = house.code;
        optionElemt.textContent = house.name;
        selectElemt.appendChild(optionElemt);
    })
}
//function to display characters using change event
const displayCharacters = (event)=>{
    let code = event.target.value; // get house code
    let arraylist = getCharacters(code);//get characters based on house code
    //insert the values in unordered list
    //create ul element 
    const ulElement = document.getElementById("characters");
    //clear ulElement before appending new set of values
    ulElement.innerHTML = "";
    //insert the characters within UnOrdered list
    for (const name of arraylist){
        //create list element
        const listElemt = document.createElement("li");
        listElemt.textContent = name;
        ulElement.appendChild(listElemt);
    }   
}


//load houses name
const selectElemt = document.getElementById("house");
window.addEventListener("load",loadHouses);
//Display the characters in the screen through javascript
selectElemt.addEventListener("change",displayCharacters);