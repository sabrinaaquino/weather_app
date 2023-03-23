# Weather App

## Description
The Weather App is a simple web application that displays the current weather and background videos based on the temperature of a given location. The user can search for a location by entering a city name or a zip code, and the application will retrieve the weather data from the Weather API.

## Installation

Clone the repository to your local machine using git clone.
Navigate to the project directory using cd weather-app.
Install the project dependencies using npm install.
Create a .env file in the project directory, and add your OpenWeatherMap API key as follows: API_KEY=<your-api-key>.
Start the server using npm start.
Open another terminal window and build the client-side code using npm run build.
Start the client-side code using npm run serve.
Open your web browser and navigate to http://localhost:5000 to view the application.
  
## Usage 

To use the Weather App, follow these steps:

Enter a city name in the search bar.
Press the "Search" button or press Enter.
The application will retrieve the weather data for the location you entered and display it in the weather display.
If the temperature is above 25°C, the application will play the "sunny" video in the background; otherwise, it will play the "partlycloudy" video.
