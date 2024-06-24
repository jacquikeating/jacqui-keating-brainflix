const API_URL = import.meta.env.VITE_API_URL;

export function getAllVideosEndpoint() {
    return `${API_URL}/videos/`
};

export function getSingleVideoDetailsEndpoint(id) {
    return `${API_URL}/videos/${id}/`;
}

// const API_URL = import.meta.env.VITE_API_URL;
// const API_KEY = "?api_key=d2109fe3-90af-4534-8c02-f75a38d310c8";

// export function getAllVideosEndpoint() {
//     return `${API_URL}/videos/${API_KEY}`
// };

// export function getSingleVideoDetailsEndpoint(id) {
//     return `${API_URL}/videos/${id}/${API_KEY}`;
// }