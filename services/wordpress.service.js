import { resources } from 'x-resources'

const config = {
	secure: true,
	www: true,
	domain: 'codyodell.net',
	path: '/wp-json/v2'
}

const baseURL = makeUrl(config)

const actions = {
	users: { method: 'GET', url: '/users' },
	user: { method: 'GET', url: '/users/:id' },
	categories: { method: 'GET', url: '/categories' },
	base: { method: 'GET', url: '' },
	post: { method: 'GET', url: '/posts/:id' },
	page: { method: 'GET', url: '/pages/:id' }
}

let makeUrl = (options = {}) {
	if (!options.domain) return false
	const PROTOCOL = !!options.secure ? 'https' : 'http'
	const WWW = !!options.www ? 'www.' : null
	const URL = PROTOCOL + WWW + options.domain + options.path
	return URL
}

export default resources(baseURL, actions)
