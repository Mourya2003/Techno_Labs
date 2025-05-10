# Wanderlust Travel Website

Wanderlust is a travel website that allows users to explore top attractions and get current weather information based on their input. The website integrates the Foursquare API for venue data and the OpenWeather API for weather forecasts.

## Features

- Search for top attractions in a specified location using the Foursquare API.
- Get current weather information for the specified location using the OpenWeather API.
- User-friendly interface with a responsive design.

## Project Structure

```
Wanderlust
├── public
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
│   └── index.html
├── src
│   ├── api
│   │   ├── foursquare.js
│   │   └── openweather.js
│   ├── components
│   │   └── venueCard.js
│   └── utils
│       └── helpers.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/wanderlust.git
   ```
2. Navigate to the project directory:
   ```
   cd wanderlust
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your Foursquare and OpenWeather API keys:
   ```
   FOURSQUARE_CLIENT_ID=your_client_id
   FOURSQUARE_CLIENT_SECRET=your_client_secret
   OPENWEATHER_API_KEY=your_api_key
   ```

## Usage

1. Open `public/index.html` in your web browser.
2. Enter a location in the search form and submit.
3. View the top attractions and current weather information displayed on the page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.