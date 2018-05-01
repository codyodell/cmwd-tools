/** API Class **/
class ApiService {
	/** Vue $api Prototype **/
	constructor(options = OPTIONS) {
		this.$http = axios.create({
			baseURL: options.baseUrl,
			timeout: 5000,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest' //IMPORTANT!!
			}
		})
		this.$events = Events
		this.$cookies = Cookies
		this.$store = options.store
		this.options = options
		this.bindInterceptors()
		this.mapRoutes()
	}
}
