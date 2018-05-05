import { resources } from 'x-resources'

const baseURL = 'https://www.codyodell.com/wp-json/v2'

const actions = {
  users: { method: 'GET', url: '/users' },
  user: { method: 'GET', url: '/users/:id' },
  categories: { method: 'GET', url: '/categories' },
  base: { method: 'GET', url: '' },
  post: { method: 'GET', url: '/posts/:id' },
  page: { method: 'GET', url: '/pages/:id' }
}

export default resources(baseURL, actions)