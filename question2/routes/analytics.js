const express = require('express');
const router = express.Router();

const {
  getTopUsers,
  getPopularOrLatestPosts
} = require('../services/analyticsService');

// GET /api/users
router.get('/users', getTopUsers);

// GET /api/posts?type=popular or latest
router.get('/posts', getPopularOrLatestPosts);

module.exports = router;