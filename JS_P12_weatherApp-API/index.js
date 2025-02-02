

// WeatherAPP


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "87bd9eedddff50bd6f6468a86dcf544b";

weatherForm.addEventListener("submit", async event => {


    event.preventDefault();
    const city = cityInput.value;


    if (city) {
        try {
            const WeatherData = await getWeatherData(city);
            dsiplayWeatherInfo(WeatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please Enter a City");
    }
});


async function getWeatherData(city) {


    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    // console.log(response);
    if (!response.ok) {
        throw new Error("Could not featch Weather Data")
    }
    return await response.json()

}

function dsiplayWeatherInfo(data) {
    console.log(data)

    const { name: city, 
        main: { temp, humidity }, 
        weather: [{ description, id }]} = data;

        card.textContent="";
        card.style.display="flex";

        const cityDisplay =document.createElement("h1");
        const tempDisplay =document.createElement("p");
        const humidityDisplay =document.createElement("p");
        const descDisplay =document.createElement("p");
        const weatherEmoji =document.createElement("p");

        cityDisplay.textContent=city;
        tempDisplay.textContent=`${(temp-273.15).toFixed(1)}°C`;
        // tempDisplay.textContent=`${((temp-273.15)*(9/5)+32).toFixed(1)}°F`;
        humidityDisplay.textContent=`Humidity : ${humidity}%`;
        descDisplay.textContent=description;
        weatherEmoji.textContent=getWeatherEmoji(id);

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("cityDisplay");
        weatherEmoji.classList.add("weatherEmoji");
        


        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherEmoji);

    
}

function getWeatherEmoji(weatherId) { 
    
        switch (true) {
            // Group 2xx: Thunderstorm
            case (weatherId >= 200 && weatherId <= 202):
            case (weatherId >= 210 && weatherId <= 221):
            case (weatherId >= 230 && weatherId <= 232):
                return "⛈️"; // Thunderstorm
            
            // Group 3xx: Drizzle
            case (weatherId >= 300 && weatherId <= 321):
                return "🌧️"; // Drizzle
            
            // Group 5xx: Rain
            case (weatherId >= 500 && weatherId <= 504):
                return "🌧️"; // Rain
            case (weatherId === 511):
                return "🌨️"; // Freezing Rain
            case (weatherId >= 520 && weatherId <= 531):
                return "🌦️"; // Shower Rain
            
            // Group 6xx: Snow
            case (weatherId >= 600 && weatherId <= 602):
                return "❄️"; // Snow
            case (weatherId >= 611 && weatherId <= 613):
                return "🌨️"; // Sleet
            case (weatherId >= 615 && weatherId <= 622):
                return "🌨️"; // Rain and Snow or Shower Snow
            
            // Group 7xx: Atmosphere
            case (weatherId === 701):
                return "🌫️"; // Mist
            case (weatherId === 711):
                return "💨"; // Smoke
            case (weatherId === 721):
                return "🌫️"; // Haze
            case (weatherId === 731 || weatherId === 761):
                return "🌪️"; // Dust or Sand/Dust Whirls
            case (weatherId === 741):
                return "🌫️"; // Fog
            case (weatherId === 751):
                return "🏜️"; // Sand
            case (weatherId === 762):
                return "🌋"; // Volcanic Ash
            case (weatherId === 771):
                return "💨"; // Squalls
            case (weatherId === 781):
                return "🌪️"; // Tornado
            
            // Group 800: Clear
            case (weatherId === 800):
                return "☀️"; // Clear Sky
            
            // Group 80x: Clouds
            case (weatherId === 801):
                return "🌤️"; // Few Clouds
            case (weatherId === 802):
                return "⛅"; // Scattered Clouds
            case (weatherId === 803):
                return "🌥️"; // Broken Clouds
            case (weatherId === 804):
                return "☁️"; // Overcast Clouds
            
            default:
                return "❓"; // Unknown weather condition
        }
    }
    


function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";

    card.style.display = "flex";
    card.appendChild(errorDisplay);
    console.log("ikd");

}


































