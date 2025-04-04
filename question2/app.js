const express = require('express');
const app = express();
const PORT = 9877;

const analyticsRoutes = require('./routes/analytics');

app.use('/api', analyticsRoutes);

app.listen(PORT, () => {
  console.log(`Social Media Analytics service running at http://localhost:${PORT}`);
});