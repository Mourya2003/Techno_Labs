document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const weatherContainer = document.getElementById('weather');
    const venuesContainer = document.getElementById('venues');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const location = document.getElementById('location-input').value;

        if (location) {
            const weatherData = await getWeather(location);
            const venuesData = await getVenues(location);

            renderWeather(weatherData);
            renderVenues(venuesData);
        }
    });

    async function getWeather(location) {
        const response = await fetch(`/api/weather?location=${location}`);
        return response.json();
    }

    async function getVenues(location) {
        const response = await fetch(`/api/venues?location=${location}`);
        return response.json();
    }

    function renderWeather(data) {
        weatherContainer.innerHTML = createWeatherHTML(data);
    }

    function renderVenues(data) {
        venuesContainer.innerHTML = data.map(createVenueHTML).join('');
    }
});