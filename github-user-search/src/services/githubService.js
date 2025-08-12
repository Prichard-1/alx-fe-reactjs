const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
headers: {
  Authorization: `token ${apiKey}`
}
// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

