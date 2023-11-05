const citySearch = document.getElementById("city-name");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
    const cityName = citySearch.value; // Use .value to get the input value
    const API_Key = "b51dc2d46f6fc44c53594dde06b53feb";
    const endPoint = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}`;

    // Use fetch to make the API request and handle the response
    fetch(endPoint)
        .then((response) => response.json())
        .then((data) => {
            // Log the weather data
            console.log(data);

            saveSearch(cityName);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });


});


let key = 0; // Initialize the key outside of the loop
// Perform the operation within a loop
function saveSearch(cityName) {
    localStorage.setItem(`key_${key}`, cityName); // Use a unique key for each value
    key++; // Increment the key
};




