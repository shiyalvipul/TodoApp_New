
const API_URL = process.env.API_URL || `${window.location.protocol}//${window.location.host}/api/`;
export const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'DEVELOPMENT';
export const BASE_URL = NODE_ENV === 'DEVELOPMENT' ? 'http://5d0236499ce12c0014e0f3d7.mockapi.io/api/v1/' : API_URL;

console.log(process.env, BASE_URL);
