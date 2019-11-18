const host = process.env.REACT_APP_API_HOST;
const headers = {
    'Content-Type': 'application/json'
};

export function getFromCategory(category, page) {
    return dispatch => {
        fetch(host + 'products?category=' + category + '&page=' + page, {
            method: 'GET',
            headers
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'GET_ITEMS', result}));
    }
}
