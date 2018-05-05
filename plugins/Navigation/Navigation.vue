<template>
  <nav>
    <mu-list>
      <navigation-item
        v-if="show_items"
        v-for="(itemNav, idxItemNav) in items"
        :key="idxItemNav"
        :idx="idxItemNav"
        :name="itemNav.name"
        :route="itemNav.route"
        :children="itemNav.children"
      ></navigation-item>
      <mu-list-item 
        v-else
      >
        <mu-raised-button 
          icon="info_outline"
          title="No Nav Items"
        />
      </mu-list-item>
    </mu-list>
  </nav>
</template>
<script>
import NavigationItem from './Item.vue'

export default {
	components: {
		NavigationItem
	},
	props: {
		items: {
			type: Array,
			default: () => {
				return [
					{
						route: { path: '/' },
						name: 'CMWD',
						icon: 'home',
						children: [
							{
								route: { path: '/overview' },
								name: 'Overview',
								icon: 'filter_list'
							}
						]
					}
				]
			}
		}
	},
	computed: {
		show_items() {
			return this.items && this.items.length
		}
	},
	methods: {
		go(path) {
			if (path && path.length) this.$router.push(path)
		}
	}
}
</script>
