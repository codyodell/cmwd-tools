<template>
	<div id="app">
		<layout-default>
			<transition 
				name="fade" 
				mode="out-in"
			>
				<router-view 
					class="view" 
				/>
			</transition>
			<mu-content-block>
				<h3>
					<strong>{{ Posts.length }}</strong>
					<span>Posts</span>
				</h3>
				<mu-list>
					<mu-list-item
						v-for="(Post, idxPost) in Posts"
						:key="idxPost"
					>
						<h3>
							<span>{{ post.title.rendered }}</span>
						</h3>
					</mu-list-item>
				</mu-list>
			</mu-content-block>
		</layout-default>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import LayoutDefault from '/layouts/default'

export default {
	name: 'app',
	components: {
		LayoutDefault
	},
	computed: {
		...mapState(['Posts'])
	},
	methods: {
		...mapActions(['getPosts'])
	},
	created() {
		this.getPosts()
	}
}
</script>
