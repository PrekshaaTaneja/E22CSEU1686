// question2/services/analyticsService.js
const fetchUsers = require('./fetchUsers');
const fetchPostsByUser = require('./fetchPosts');
const fetchCommentsByPost = require('./fetchComments');

const getTopUsers = async (req, res) => {
  try {
    const users = await fetchUsers();
    const userPostCounts = [];

    for (const [userId, name] of Object.entries(users)) {
      const posts = await fetchPostsByUser(userId);
      userPostCounts.push({ userId, name, postCount: posts.length });
    }

    userPostCounts.sort((a, b) => b.postCount - a.postCount);

    res.json({ topUsers: userPostCounts.slice(0, 5) });
  } catch (err) {
    console.error(err);
    res.status(502).json({ error: 'Failed to fetch top users' });
  }
};

const getPopularOrLatestPosts = async (req, res) => {
  const type = req.query.type;
  if (!['popular', 'latest'].includes(type)) {
    return res.status(400).json({ error: 'Invalid type param. Use "popular" or "latest".' });
  }

  try {
    const users = await fetchUsers();
    let allPosts = [];

    for (const userId of Object.keys(users)) {
      const posts = await fetchPostsByUser(userId);
      allPosts.push(...posts);
    }

    if (type === 'latest') {
      allPosts.sort((a, b) => b.id - a.id); // assuming higher id = newer post
      return res.json({ latestPosts: allPosts.slice(0, 5) });
    } else {
      // type === popular
      const postCommentsMap = [];
      for (const post of allPosts) {
        const comments = await fetchCommentsByPost(post.id);
        postCommentsMap.push({ ...post, commentCount: comments.length });
      }

      const maxCommentCount = Math.max(...postCommentsMap.map(p => p.commentCount));
      const popularPosts = postCommentsMap.filter(p => p.commentCount === maxCommentCount);

      return res.json({ popularPosts });
    }
  } catch (err) {
    console.error(err);
    res.status(502).json({ error: 'Failed to fetch posts' });
  }
};

module.exports = { getTopUsers, getPopularOrLatestPosts };