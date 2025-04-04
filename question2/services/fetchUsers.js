// QUESTION2/services/fetchUsers.js
const apiClient = require('./apiClient');

const fetchUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data.users;
};

module.exports = fetchUsers;