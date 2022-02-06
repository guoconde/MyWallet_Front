import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

function createConfig(token) {
    return { headers: { authorization: `Bearer ${token}` } }
}

function login(data) {
    const promise = axios.post(`${BASE_URL}/`, data);

    return promise;
}

function signUp(data) {
    const promise = axios.post(`${BASE_URL}/cadastrar`, data);

    return promise;
}

function getUser(token) {
    const config = createConfig(token);

    const promise = axios.get(`${BASE_URL}/carteira`, config);

    return promise;
}

function postInputsAndOutputs(data, token, path) {
    const config = createConfig(token);

    const promise = axios.post(`${BASE_URL}/${path}`, data, config);

    return promise;
}

function deleteRegistry(id, token) {
    const config = createConfig(token);

    const promise = axios.delete(`${BASE_URL}/carteira/${id}`, config);

    return promise;
}

function updateRegistry(id, token, path, data) {
    const config = createConfig(token);

    const promise = axios.put(`${BASE_URL}/${path}/${id}`, data ,config);

    return promise;
}

const api = {
    login,
    signUp,
    getUser,
    postInputsAndOutputs,
    deleteRegistry,
    updateRegistry
}

export default api