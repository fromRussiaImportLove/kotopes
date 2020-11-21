export const getMetrics = () => {
    return fetch(`http://kotopes.lukojo.com/api/v1/history_data`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((res) => res.json())
}

export const getNewMetrics = () => {
    return fetch(`kotopes.lukojo.com/api/v1/calculate_newdata?min_price=100&n_sales=1000`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain',
        }
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .catch(err => console.log(err))
}

