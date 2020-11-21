export const getMetrics = () => {
    return fetch(`kotopes.lukojo.com/api/v1/history_data`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((res) => res.json())
}