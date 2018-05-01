const Defaults = {
	baseURL: 'https://www.codyodell.net/',
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
}
