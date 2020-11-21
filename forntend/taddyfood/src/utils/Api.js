export const getMetrics = () => {
    return fetch(`http://kotopes.lukojo.com/api/v1/history_data`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((res) => res.json())
}

export const getNewMetrics = (n_sales, min_price) => {
    return fetch(`http://kotopes.lukojo.com/api/v1/calculate_newdata`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify({n_sales: n_sales, min_price: min_price})
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .catch(err => console.log(err))
}

