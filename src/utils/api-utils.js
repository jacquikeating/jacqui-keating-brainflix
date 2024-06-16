const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "?api_key=d2109fe3-90af-4534-8c02-f75a38d310c8";

export function getAllVideosEndpoint() {
    return `${API_URL}/videos/${API_KEY}`
};

export function getSingleVideoDetailsEndpoint(id) {
    return `${API_URL}/videos/${id}/${API_KEY}`;
}