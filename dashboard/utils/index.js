export function getUserToken() {
    if (typeof window === 'undefined') return {user: null, token: null};
    return {
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token')
    }
}

export function setUserToken(user, token) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);

}

export function removeUserToken() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

