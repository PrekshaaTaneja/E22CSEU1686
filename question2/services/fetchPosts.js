// QUESTION2/services/fetchPosts.js
const apiClient = require('./apiClient');

const fetchPostsByUser = async (userId) => {
  const response = await apiClient.get(`/users/${userId}/posts`);
  return response.data.posts;
};

module.exports = fetchPostsByUser;