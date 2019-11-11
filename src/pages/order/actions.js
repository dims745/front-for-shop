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