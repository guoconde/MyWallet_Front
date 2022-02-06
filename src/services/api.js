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

function postInputsAndOutputs(data, token) {
    const config = createConfig(token);

    const promise = axios.post(`${BASE_URL}/saida`, data, config);

    return promise;
}

function deleteValue(id, token) {
    const config = createConfig(token);
  
    const promise = axios.delete(`${BASE_URL}/carteira/${id}`, config);
  
    return promise;
  }

const api = {
    login,
    signUp,
    getUser,
    postInputsAndOutputs,
    deleteValue
}

export default api