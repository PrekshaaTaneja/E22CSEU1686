const axios = require('axios');

// Replace with your real token
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNzQ1NjA0LCJpYXQiOjE3NDM3NDUzMDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImM2MjE2MzFmLWJmNzktNGVmMi04MWE0LWI1MWJkN2NkNDVkOSIsInN1YiI6ImUyMmNzZXUxNjg2QGJlbm5ldHQuZWR1LmluIn0sImVtYWlsIjoiZTIyY3NldTE2ODZAYmVubmV0dC5lZHUuaW4iLCJuYW1lIjoicHJla3NoYSB0YW5lamEiLCJyb2xsTm8iOiJlMjJjc2V1MTY4NiIsImFjY2Vzc0NvZGUiOiJydENIWkoiLCJjbGllbnRJRCI6ImM2MjE2MzFmLWJmNzktNGVmMi04MWE0LWI1MWJkN2NkNDVkOSIsImNsaWVudFNlY3JldCI6InNFWUtja1JoRkhEVVRjeUUifQ.u9lCFmBpRUt5_YwFu1wvlisIrdk198ISWmdVhx-JB3g";
const fetchNumbers = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: TOKEN },
      timeout: 5000
    });
    return response.data.numbers || [];
  } catch (err) {
    console.warn("Error or timeout in fetching", err.message);
    return [];
  }
};

module.exports = fetchNumbers;