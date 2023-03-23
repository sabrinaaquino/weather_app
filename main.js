const apiKey = 'fdb9776aeaf5451d9f622810232303';
const yaccdURL = 'https://yacdn.org/proxy/';


async function fetchWeatherData(cityName){
    const apiUrl = `http://localhost:3000/weather?cityName=${cityName}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log('Received data from server:', data);
    return data;
}

function updateBackgroundVideo(temperature) {
    const videoElement = document.getElementById('bgVideo');
    const sourceElement = videoElement.getElementsByTagName('source')[0];
    const videoName = temperature > 25 ? 'sunny' : 'partlycloudy';
    sourceElement.src = `${videoName}.mp4`;
    videoElement.load();
    videoElement.play();
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
                    const weatherData= await fetchWeatherData(cityName);

                    if (weatherData && weatherData.temperature && weatherData.condition) {
                        const temperature = weatherData.temperature;
                        const condition = weatherData.condition;

                        updateBackgroundVideo(temperature);

                        // Displaying in the page
                        weatherDataElement.innerHTML = `<h2>${cityName}</h2><p>Temperature: ${temperature}°C</p><p>Condition: ${condition}</p>`;
                    } else {
                        throw new Error('Invalid data');
                    }
                } catch (error) {
                    console.error("Error", error);
                    weatherDataElement.innerHTML = `<p class="error-message">Error: Invalid city name or unable to fetch data. Please try again.</p>`;
                }   
            })();
      });
    }
});
