// QUESTION2/services/fetchComments.js
const apiClient = require('./apiClient');

const fetchCommentsByPost = async (postId) => {
  const response = await apiClient.get(`/posts/${postId}/comments`);
  return response.data.comments;
};

module.exports = fetchCommentsByPost;