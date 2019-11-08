const host = process.env.REACT_APP_API_HOST;
const headers = {
    'Content-Type': 'application/json'
};

export function verifyUser() {
    return dispatch => {
        let token = localStorage.getItem('token') ?
            localStorage.getItem('token') :
            sessionStorage.getItem('token') ?
                sessionStorage.getItem('token') :
                false;
        fetch(host + 'verify', {
            method: 'POST',
            headers,
            body: JSON.stringify({token})
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'VERIFY_USER', result}));
    }
}
export function loginUser(user, remember) {
    return dispatch => {
        fetch(host + 'login', {
            method: 'POST',
            headers,
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'LOGIN_USER', result, remember}));
    }
}

export function signInUser(user, remember) {
    return dispatch => {
        fetch(host + 'signIn', {
            method: 'POST',
            headers,
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'LOGIN_USER', result, remember}));
    }
}

export function AuthBySN(response, isGoogle) {
    return dispatch => {
        fetch(host + 'loginBySN', {
            method: 'POST',
            headers,
            body: JSON.stringify({response, isGoogle})
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'LOGIN_USER', result, remember: true}));
    }
}
