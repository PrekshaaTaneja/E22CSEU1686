const express = require('express');
const fetchNumbers = require('./utils/numberFetcher');

const app = express();
const PORT = 9876;

const WINDOW_SIZE = 10;
let slidingWindow = [];

app.get('/numbers/:numberid', async (req, res) => {
  const { numberid } = req.params;
  const validIds = { 'p': 'primes', 'f': 'fibo', 'e': 'even', 'r': 'rand' };
  if (!validIds[numberid]) return res.status(400).send({ error: 'Invalid number ID' });

  const url = `http://20.244.56.144/evaluation-service/${validIds[numberid]}`;

  const windowPrevState = [...slidingWindow];

  try {
    const fetchedNumbers = await fetchNumbers(url);

    // Filter unique numbers not already in window
    const newUnique = fetchedNumbers.filter(n => !slidingWindow.includes(n));

    // Add unique numbers and maintain window size
    for (let num of newUnique) {
      if (slidingWindow.length >= WINDOW_SIZE) {
        slidingWindow.shift(); // remove oldest
      }
      slidingWindow.push(num);
    }

    const avg = (
      slidingWindow.reduce((sum, num) => sum + num, 0) / slidingWindow.length
    ).toFixed(2);

    res.json({
      windowPrevState,
      windowCurrState: [...slidingWindow],
      numbers: fetchedNumbers,
      avg: parseFloat(avg)
    });

  } catch (err) {
    return res.status(502).json({ error: "Failed to fetch numbers from test server" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});