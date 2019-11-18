const host = process.env.REACT_APP_API_HOST;
const headers = {
    'Content-Type': 'application/json'
};

export function getItems(items) {
    return dispatch => {
        if(Object.keys(items).join())
        fetch(host + 'products?items=' + Object.keys(items).join(), {
            method: 'GET',
            headers
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'GET_ITEMS', result}));
        dispatch({type: 'NOTHING'});
    }
}

