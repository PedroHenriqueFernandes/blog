import axios from 'axios'

export const apiIssues = axios.create({
  baseURL: 'https://api.github.com/repos/PedroHenriqueFernandes/blog/issues',
})
