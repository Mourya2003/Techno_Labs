export function createVenueHTML(venue) {
    return `
        <div class="venue-card">
            <h2>${venue.name}</h2>
            <p>${venue.location.address || ''}, ${venue.location.city || ''}</p>
            <p>Rating: ${venue.rating || 'N/A'}</p>
            <a href="${venue.url}" target="_blank">More Info</a>
        </div>
    `;
}

export function createWeatherHTML(weather) {
    return `
        <div class="weather-card">
            <h2>Weather in ${weather.name}</h2>
            <p>Temperature: ${Math.round(weather.main.temp - 273.15)}°C</p>
            <p>Condition: ${weather.weather[0].description}</p>
            <p>Humidity: ${weather.main.humidity}%</p>
        </div>
    `;
}