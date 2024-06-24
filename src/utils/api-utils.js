const API_URL = import.meta.env.VITE_API_URL;

export function getAllVideosEndpoint() {
    return `${API_URL}/videos/`
};

export function getSingleVideoDetailsEndpoint(id) {
    return `${API_URL}/videos/${id}/`;
}