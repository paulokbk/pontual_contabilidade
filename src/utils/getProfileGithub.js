import axios from "axios";

async function getGitHubData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);

    const userData = response.data

    if (userData) {
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar informações do GitHub:", error.message);
    return null;
  }
}

export default getGitHubData;

