const url = 'https://api.freeapi.app/api/v1/public/randomjokes'
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
    const response = await fetch(url, options);
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.error(error);
}