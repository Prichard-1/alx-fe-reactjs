// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
