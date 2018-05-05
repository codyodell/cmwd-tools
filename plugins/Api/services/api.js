const Defaults = {
	baseURL: 'https://www.codyodell.net/wp-json/v2',
	timeout: 5000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest'
	}
}

class ApiService {
	constructor(options = OPTIONS) {
		const $request = {
			baseURL: Defaults.baseUrl || options.baseUrl,
			timeout: Defaults.timeout,
			headers: Defaults.headers
		}
		this.$http = axios.create($request)
		this.$events = Events
		this.$cookies = Cookies
		this.$store = options.store
		this.options = options
		this.bindInterceptors()
		this.mapRoutes()
	}
	bindInterceptors() {
		this.$http.interceptors.request.use(config => this.httpRequest(config))
		this.$http.interceptors.response.use(
			response => this.httpResponse(response),
			error => this.httpError(error)
		)
	}
	httpRequest(config) {
		return Promise.resolve(config)
	}
	httpResponse(response) {
		return Promise.resolve(response)
	}
	httpError(error) {
		return Promise.reject(error)
	}
	async load(request) {
		this.log(request)
		const response = await this.$http.request(request)
		this.log(response)
		return response
	}
	mapRoutes() {
		this.routes = {
			auth: {}
		}
	}
}

export default ApiService
