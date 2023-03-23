const apiKey = 'fdb9776aeaf5451d9f622810232303';
const cityName = 'San Francisco';
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

async function fetchWeatherData(apiUrl){
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const weatherData = await fetchWeatherData(apiUrl);
        const weatherDataElement = document.getElementById('weatherData');

        const temperature = weatherData.current.temp_c;
        const condition = weatherData.current.condition.text;

        //Displaying in the page
        weatherDataElement.innerHTML = `<h2>${cityName}</h2><p>Temperature: ${temperature}°C</p><p>Condition: ${condition}</p>`;
    } catch (error) {
        console.error("Error", error);
    }
})();

