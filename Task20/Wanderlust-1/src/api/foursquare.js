import axios from 'axios';

const FOURSQUARE_API_URL = 'https://api.foursquare.com/v2/venues/explore';
const CLIENT_ID = process.env.FOURSQUARE_CLIENT_ID;
const CLIENT_SECRET = process.env.FOURSQUARE_CLIENT_SECRET;
const VERSION = '20230301'; // Use a specific version date

export const getVenues = async (location) => {
    try {
        const response = await axios.get(FOURSQUARE_API_URL, {
            params: {
                near: location,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                v: VERSION,
            },
        });
        return response.data.response.groups[0].items;
    } catch (error) {
        console.error('Error fetching venues:', error);
        throw error;
    }
};