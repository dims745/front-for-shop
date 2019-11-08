const host = process.env.REACT_APP_API_HOST;
const headers = {
    'Content-Type': 'application/json'
};

export function getCategory() {
    return dispatch => {
        fetch( host + 'categories', {
            method: 'GET',
            headers
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'GET_CATEGORY', result}));
    }
}

export function getPopular() {
    return dispatch => {
        fetch(host + 'products/popular', {
            method: 'GET',
            headers
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'GET_POP_ITEMS', result}));
    }
}

