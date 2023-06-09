# <a href="https://www.theodinproject.com/">The Odin Project</a> : Full Stack JS - JAVASCRIPT Course

## Weather App

The Weather App is a mobile application developed using React Native and TypeScript. It displays weather information for a specific location using data fetched from the WeatherAPI API. The app utilizes jotai for state management and axios for making HTTP requests. The weather icons used in the app are from Google Icons.

<div align="center">
  <img src="https://github.com/lolikana/odin-weather_app/assets/91938540/7de9b444-f4f3-440c-87e9-005a528d444a" width="332" height="650">
  
  <img src="https://github.com/lolikana/odin-weather_app/assets/91938540/f0b78d20-538b-4932-84c3-af25a8fe462a" width="326" height="598">
</div>
  
## Technologies 
The project uses the following technologies:

* React Native
* TypeScript
* jotai
* axios
* WeatherAPI API

## Features
- [x] User can enter a location to fetch weather information 
- [x] Weather data includes temperature, weather condition, wind speed, humidity, etc.
- [x] Weather data includes 3 days forecast.
- [ ] Weather data includes 48h forecast.
- [x] Convert unit conversion funtion
- [x] App displays weather icons from WeatherAPI to represent different weather conditions
- [x] App displays weather icons from Google Icons to represent different weather conditions
- [ ] Error handling for failed API requests or invalid input
- [ ] Landscape version

## Getting Started
### Locally
To run this app locally, follow these steps:

1. Clone this repository to your local machine:

```
https://github.com/lolikana/odin-weather_app.git
```

2. Install dependencies:

```
cd <your-repo-name>
npm install
```

3. Create ```.env``` file  in the root of folder ./:

```
BASE_URL="http://api.weatherapi.com/v1"
WEATHER_KEY="<YOUR_API_KEY>"
```

4. Start the development server:

```
npm run start
```

5. Follow the instructions to run the app on your mobile device or emulator.

APIs
The project uses the following API:

<a href="https://www.weatherapi.com/">WeatherAPI</a> - Provides weather data for locations based on geographic coordinates or city names.
Note: To use the WeatherAPI, you will need to sign up for an API key and replace the placeholder in the code with your actual API key.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Credits
* This app was built as part of The Odin Project's JavaScript curriculum.
* Special thanks to <a href="https://www.weatherapi.com/">WeatherAPI</a> for providing the weather data API.
* Weather icons used in this project are from Google Icons.
* jotai was used for state management.
* axios was used for making HTTP requests.
