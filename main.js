const apiKey = 'fdb9776aeaf5451d9f622810232303';
const cityName = 'San Francisco';

async function fetchWeatherData(cityName){
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

document.addEventListener('DOMContentLoaded', () => {
    const getWeatherDataButton = document.getElementById('getWeatherData');
    
    if (getWeatherDataButton) {
        getWeatherDataButton.addEventListener('click', () => {
            (async () => {
                try {
                    const cityName = document.getElementById('cityInput').value;
                    const weatherData = await fetchWeatherData(cityName);
                    const weatherDataElement = document.getElementById('weatherData');

                    const temperature = weatherData.current.temp_c;
                    const condition = weatherData.current.condition.text;

                    //Displaying in the page
                    weatherDataElement.innerHTML = `<h2>${cityName}</h2><p>Temperature: ${temperature}°C</p><p>Condition: ${condition}</p>`;
                } catch (error) {
                    console.error("Error", error);
                }
            })();
      });
    }
});
