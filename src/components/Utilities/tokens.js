const namespace = 'auth_token';

const getToken = () => {
    return localStorage.getItem(namespace);
};

const setToken = (token) => {
    return localStorage.setItem(namespace, token);
};

const removeToken = () => {
    return localStorage.removeItem(namespace);
}

export {
    getToken, setToken, removeToken
}