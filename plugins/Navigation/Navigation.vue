<template>
  <nav>
    <mu-list>
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
        :subheader="item.subheader"
      >
        <navigation-item
          v-for="(itemChild, idxItemChild) in item.children"
          :item="itemChild"
          :key="[idxItem, idxItemChild].join('-')"
          :idx="[idxItem, idxItemChild].join('-')"
          :name="itemChild.name"
          :route="itemChild.route"
          :icon="itemChild.icon"
          :tooltip="itemChild.tooltip"
          :children="itemChild.children"
          :show_switch="itemChild.show_switch"
          :disabled="itemChild.disabled"
          :subheader="itemChild.subheader"
        >
          <navigation-item
            v-for="(itemGrandChild, idxItemGrandChild) in itemChild.children"
            :item="itemGrandChild"
            :key="idxItemGrandChild"
            :idx="[idxItem, idxItemChild, idxItemGrandChild].join('-')"
            :name="itemGrandChild.name"
            :route="itemGrandChild.route"
            :icon="itemGrandChild.icon"
            :tooltip="itemGrandChild.tooltip"
            :children="itemGrandChild.children"
            :show_switch="itemGrandChild.show_switch"
            :disabled="itemGrandChild.disabled"
            :subheader="itemGrandChild.subheader"
          ></navigation-item>
        </navigation-item>
      </navigation-item>
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
		has_children(objItem) {
			return (
				objItem &&
				objItem.length &&
				('children' in objItem && objItem.children.length)
			)
		}
	}
}
</script>
