const apiKey = 'fdb9776aeaf5451d9f622810232303';

async function fetchWeatherData(cityName){
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    
    const data = await response.json();
    return data;
}

document.addEventListener('DOMContentLoaded', () => {
    const getWeatherDataButton = document.getElementById('weatherForm');
    
    if (getWeatherDataButton) {
        getWeatherDataButton.addEventListener('submit', (event) => {
            event.preventDefault();

            (async () => {
                const cityName = document.getElementById('cityInput').value;
                const weatherDataElement = document.getElementById('weatherData');
                    try {
                    const weatherData = await fetchWeatherData(cityName);

                    const temperature = weatherData.current.temp_c;
                    const condition = weatherData.current.condition.text;

                    //Displaying in the page
                    weatherDataElement.innerHTML = `<h2>${cityName}</h2><p>Temperature: ${temperature}°C</p><p>Condition: ${condition}</p>`;
                } catch (error) {
                    console.error("Error", error);
                    weatherDataElement.innerHTML = `<p class="error-message">Error: Invalid city name or unable to fetch data. Please try again.</p>`;
                }
            })();
      });
    }
});
