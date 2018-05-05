<template>
  <nav>
    <mu-list>
      <navigation-item
        v-for="(itemNav, idxItemNav) in items"
        :key="idxItemNav"
        :idx="idxItemNav"
        :name="itemNav.name"
        :route="itemNav.route"
        :icon="itemNav.icon"
        :tooltip="itemNav.tooltip"
        :children="itemNav.children"
        :show_switch="itemNav.show_switch"
        :disabled="itemNav.disabled"
      ></navigation-item>
    </mu-list>
    <mu-raised-button 
      v-if="!show_items"
      icon="info_outline"
      title="No Items."
    />
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
	methods: {
		show_items() {
			return this.items && this.items.length
		},
		go(path) {
			if (path && path.length) this.$router.push(path)
		}
	}
}
</script>
