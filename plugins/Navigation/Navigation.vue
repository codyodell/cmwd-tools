<template>
  <nav>
    <mu-list>
      <slot>
        <navigation-item
          v-for="(item, idxItem) in items"
          :item="item"
          :key="idxItem"
          :idx="idxItem"
          :name="item.name"
          :route="item.route"
          :icon="item.icon"
          :tooltip="item.tooltip"
          :children="item.children"
          :show_switch="item.show_switch"
          :disabled="item.disabled"
        ></navigation-item>
      </slot>
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
			if (path && path.length) {
				this.$router.push(path)
			}
		}
	}
}
</script>
