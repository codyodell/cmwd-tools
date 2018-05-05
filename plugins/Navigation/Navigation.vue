<template>
  <nav>
    <mu-list
      slot="nested"
    >
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
        >
          <mu-list
            v-if="item.children && item.children.length"
          >
            <navigation-item
              v-for="(itemChild, idxItemChild) in item.children"
              :item="itemChild"
              :key="idxItemChild"
              :idx="idxItemChild"
              :name="itemChild.name"
              :route="itemChild.route"
              :icon="itemChild.icon"
              :tooltip="itemChild.tooltip"
              :children="itemChild.children"
              :show_switch="itemChild.show_switch"
              :disabled="itemChild.disabled"
            >
              <mu-list
                v-if="itemChild.children && itemChild.children.length"
              >
                <navigation-item
                  v-for="(itemGrandChild, idxItemGrandChild) in itemChild.children"
                  :item="itemGrandChild"
                  :key="idxItemGrandChild"
                  :idx="idxItemGrandChild"
                  :name="itemGrandChild.name"
                  :route="itemGrandChild.route"
                  :icon="itemGrandChild.icon"
                  :tooltip="itemGrandChild.tooltip"
                  :children="itemGrandChild.children"
                  :show_switch="itemGrandChild.show_switch"
                  :disabled="itemGrandChild.disabled"
                >
                
                </navigation-item>
              </mu-list>
            </navigation-item>
          </mu-list>
        </navigation-item>
      </slot>
    </mu-list>
    <mu-raised-button 
      v-if="!show_items"
      icon="info_outline"
      title="No Items"
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
