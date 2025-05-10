function createVenueCard(name, location, category, rating, imageUrl) {
    return `
        <div class="venue-card">
            <img src="${imageUrl}" alt="${name}" class="venue-image" />
            <h3 class="venue-name">${name}</h3>
            <p class="venue-location">${location}</p>
            <p class="venue-category">${category}</p>
            <p class="venue-rating">Rating: ${rating}</p>
        </div>
    `;
}

export default createVenueCard;