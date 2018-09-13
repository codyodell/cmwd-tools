const Helpers = {
	arrayDifference: (arrayA, arrayB) => {
		arrayA.length < arrayB.length && (arrayB = [arrayA, (arrayA = arrayB)][0])
		return arrayA.filter(x => arrayB.indexOf(x) < 0)
	},
	is_empty: test => !test || !test.length,
	is_bool: test => {
		let is_bool = typeof test === 'boolean'
		return is_bool && test.length
	},
	is_string: test => {
		let is_string = typeof test === 'string'
		return is_string && !this.is_empty(test)
	},
	is_array: test => {
		let is_array = typeof test === 'array'
		return is_array && !this.is_empty(test)
	},
	in_array: (Needle, Haystack) => Needle in Haystack
}

export default {
	install: Vue => {
		Vue.prototype.$helpers = Helpers
	}
}
