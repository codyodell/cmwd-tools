export default {
	getPosts({ commit, dispatch, state }) {
		return new Promise((resolve, reject) => {
			let nPosts = state.Posts.length
			if (nPosts) {
				resolve()
			} else {
				const objRequest = {
					hooks: {
						before: () => {
							commit('TOGGLE_LOADING', true)
						}
					}
				}
				// @TODO: Fix this.$api...
				/*const { success, $responseGetPosts } = this.api
					.wordpress('getPosts')
					.doFetchRequest(objRequest)
					.on('done', res => {
						console.log('Done', res)
						commit('STORE_POSTS', { res })
						commit('TOGGLE_LOADING', false)
						resolve()
					})
					.on('fail', res => {
						console.log('Fail', res)
						reject(res)
					})
					.on('error', err => {
						console.log('Error', err)
					})*/
			}
		})
	}
}
