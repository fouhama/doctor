import axios from "axios"
const baseURl = import.meta.env.VITE_API_URL_BACK as string
const api = axios.create({
    baseURL: baseURl || 'http://localhost:8000' ,
    withCredentials: true,
    withXSRFToken: true,
})

// Add request interceptor to include the auth token from cookie in Authorization header
api.interceptors.request.use((config) => {
    const token = getCookie('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add response interceptor to handle 401 errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Clear the auth token from cookies
            deleteCookie('auth_token');
        }
        return Promise.reject(error);
    }
);

// Helper function to get cookie value
function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
}

// Helper function to delete cookie
function deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default api