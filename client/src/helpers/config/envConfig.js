const useLocalApi = String(process.env.REACT_APP_USE_LOCAL_API).toLowerCase() === 'true';

const liveUrl = 'https://medibook-5evj.onrender.com';
const reactAppUrl = process.env.REACT_APP_API_BASE_URL ||
                    (useLocalApi ? process.env.REACT_APP_API_BASE_URL_LOCAL : process.env.REACT_APP_API_BASE_URL_LIVE) || 
                    liveUrl;

export const getBaseUrl = () => {
    const baseUrl = reactAppUrl;
    const trimmed = String(baseUrl).trim().replace(/\/+$/, '');
    if (!trimmed) return baseUrl;
    if (/\/api\/v1$/i.test(trimmed)) return trimmed;
    return `${trimmed}/api/v1`;
};
