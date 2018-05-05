<template>
	<div
		:class="class_main"
	>
		<mu-breadcrumb>
			<mu-breadcrumb-item href="/">Home</mu-breadcrumb-item>
			<mu-breadcrumb-item>Overview</mu-breadcrumb-item>
		</mu-breadcrumb>
		<header>
			<h1
				v-if="title"
			>
				<span 
					v-html="title"
				></span>
			</h1>
			<p
				v-if="subtitle"
			>
				<span 
					v-html="subtitle"
				></span>
			</p>
		</header>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
	props: {
		class_main: {
			type: String,
			default: () => {
				return 'content-header'
			}
		},
		title: {
			type: String,
			default: () => {
				return ''
			}
		},
		subtitle: {
			type: String,
			default: () => {
				return ''
			}
		},
		itemsBreadcrumb: {
			type: Array,
			default: () => {
				return [
					{
						route: { path: '/' },
						name: 'CMWD',
						icon: 'home'
					},
					{
						route: { path: '/overview' },
						name: 'Overview',
						icon: 'filter_list'
					}
				]
			}
		}
	}
}
</script>
