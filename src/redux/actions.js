const host = process.env.REACT_APP_API_HOST;
const headers = {
    'Content-Type': 'application/json'
};

export function makeOrder(bucket, address, token) {
    return dispatch => {
        fetch(host + 'order',{
            method: 'POST',
            headers,
            body: JSON.stringify({
                bucket,
                address,
                token
            })
        })
            .then(res => res.json())
            .then(result => dispatch({type: 'MAKE_ORDER', result}));
    }
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

