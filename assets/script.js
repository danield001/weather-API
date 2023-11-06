const citySearch = document.getElementById("city-name");
const searchBtn = document.getElementById("search-btn");
const mainDisp = document.getElementById("day-disp");
const dayOne = document.getElementById("day-1");
const dayTwo = document.getElementById("day-2");
const dayThree = document.getElementById("day-3");
const dayFour = document.getElementById("day-4");
const dayFive = document.getElementById("day-5");


searchBtn.addEventListener("click", function () {
    console.log("Button clicked"); // Add this line
    loadWeather();
});





function loadWeather() {
    const cityName = citySearch.value; // Use .value to get the input value
    const API_Key = "b51dc2d46f6fc44c53594dde06b53feb";
    const endPoint = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_Key}&units=metric`;

    // Use fetch to make the API request and handle the response
    fetch(endPoint)
        .then((response) => response.json())
        .then((data) => {

            console.log(data);
            // Log the weather data
            console.log(data.list[0]);

            const mainWeather = `
                <h2>${cityName}</h2>
                <h3>${data.list[0].dt_txt}</h3>
                <img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png" alt="${data.list[0].weather[0].description}"/>
                <h4>Temp: ${data.list[0].main.temp}℃</h4>
                <h4>Wind: ${data.list[0].wind.speed}kms</h4>
                <h4>Humidity: ${data.list[0].main.humidity}%</h4>
                `;

            console.log(data.list[1]);

            const dayOneCont = `
                <h3>${data.list[8].dt_txt}</h3>
                <h4>Temp: ${data.list[8].main.temp}℃</h4>
                <h4>Wind: ${data.list[8].wind.speed}kms</h4>
                <h4>Humidity: ${data.list[8].main.humidity}% </h4>
                `;
            console.log(data.list[2]);

            const dayTwoCont = `
                <h3>${data.list[16].dt_txt}</h3>
                <h4>Temp: ${data.list[16].main.temp}℃</h4>
                <h4>Wind: ${data.list[16].wind.speed}kms</h4>
                <h4>Humidity: ${data.list[16].main.humidity}% </h4>
                `;
            console.log(data.list[3]);

            const dayThreeCont = `
                <h3>${data.list[24].dt_txt}</h3>
                <h4>Temp: ${data.list[24].main.temp}℃</h4>
                <h4>Wind: ${data.list[24].wind.speed}kms</h4>
                <h4>Humidity: ${data.list[24].main.humidity}% </h4>
                `;
            console.log(data.list[4]);

            const dayFourCont = `
                <h3>${data.list[32].dt_txt}</h3>
                <h4>Temp: ${data.list[32].main.temp}℃</h4>
                <h4>Wind: ${data.list[32].wind.speed}kms</h4>
                <h4>Humidity: ${data.list[32].main.humidity}% </h4>
                `;
            console.log(data.list[5]);

            const dayFiveCont = `
                <h3>${data.list[39].dt_txt}</h3>
                <h4>Temp: ${data.list[39].main.temp}℃</h4>
                <h4>Wind: ${data.list[39].wind.speed}kms</h4>
                <h4>Humidity: ${data.list[39].main.humidity}% </h4>
                `;

            mainDisp.innerHTML = mainWeather;
            dayOne.innerHTML = dayOneCont;
            dayTwo.innerHTML = dayTwoCont;
            dayThree.innerHTML = dayThreeCont;
            dayFour.innerHTML = dayFourCont;
            dayFive.innerHTML = dayFiveCont;


            saveSearch(cityName);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
};



let key = 0;

function saveSearch(cityName) {
    const buttonDisp = document.getElementById("search-history");

    localStorage.setItem(`key_${key}`, cityName);

    const historyBtn = document.createElement("button");
    historyBtn.className = "hist-btn city-name";
    historyBtn.id = `btn_${key}`; // Unique ID for each button
    historyBtn.value = cityName;
    historyBtn.textContent = cityName;

    historyBtn.addEventListener("click", function () {
        console.log("Button clicked");
        loadWeather();
    });

    buttonDisp.appendChild(historyBtn);

    key++;
}

const savedSearchBtn = document.getElementById("btn");
savedSearchBtn.addEventListener("click", function () {
    console.log("Button clicked");
    loadWeather();
});

// You can call this function to save the search history





