import axios from 'axios'

const BASE_URL = 'http://localhost:5000/'

// function creatConfig(token) {
//     return { headers: { Authorization: `Bearer ${token}` } }
// }

function login(data) {
    const promise = axios.post(`${BASE_URL}`, data);

    return promise;
}

const api = {
    login
}

export default api