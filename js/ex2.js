
const autocomplete = (event) => {
    //get the entered value
    const text = countryElement.value; 
    const divElment = document.getElementById("suggestions");
    if(text === "") {
        divElment.innerHTML = "";
        return;
    } 
    const mapList = countryList.map(country => country.toLowerCase() );
    //get the filtered list of countries for the entered values
    const filteredList = mapList.filter(country => country.startsWith(text));
    //clearing the div element
    divElment.innerHTML = "";
    //display the filtered list 
    for(country of filteredList){
        //create element = input, type = text, value = country names
        const input = document.createElement("input");
        input.type = "text";
        input.readOnly = true;
        input.value = country;
        input.classList.add("capitalize", "suggestion");
        //use click event to show selected country
        input.addEventListener("click", event =>{
            countryElement.value = event.target.value;
            divElment.innerHTML = "";
        });
        //insert the input element into div 
        divElment.appendChild(input);
        divElment.appendChild(document.createElement("br"));
    }
}
//Start of program
// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

//check the letters entered - using keypress event
const countryElement = document.getElementById("country");
countryElement.addEventListener("keyup", autocomplete);
countryElement.className = "capitalize";