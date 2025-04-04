// QUESTION2/services/apiClient.js
const axios = require('axios');

const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQ3OTQ2LCJpYXQiOjE3NDM3NDc2NDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM2MjE2MzFmLWJmNzktNGVmMi04MWE0LWI1MWJkN2NkNDVkOSIsInN1YiI6ImUyMmNzZXUxNjg2QGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTE2ODZAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoicHJla3NoYSB0YW5lamEiLCJyb2xsTm8iOiJlMjJjc2V1MTY4NiIsImFjY2Vzc0NvZGUiOiJydENIWkoiLCJjbGllbnRJRCI6ImM2MjE2MzFmLWJmNzktNGVmMi04MWE0LWI1MWJkN2NkNDVkOSIsImNsaWVudFNlY3JldCI6InNFWUtja1JoRkhEVVRjeUUifQ.HQTK6Al7TWvxFMfXe5t5Jq8H65jwicTZxGYV_tfotrM'; // 🔁 replace with your actual token
const BASE_URL = 'http://20.244.56.144/evaluation-service';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});

module.exports = apiClient;