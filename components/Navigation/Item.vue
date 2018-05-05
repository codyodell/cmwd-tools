<template>
  <mu-list-item
    v-if="show_item(item)"
    :title="name"
    :key="idx"
    :to="route"
    :tooltip="tooltip"
    :disabled="is_disabled(item)"
    :toggleNested="show_toggle(item)"
    :disableRipple="!show_toggle(item)"
  >
    <mu-icon 
      v-if="icon" 
      slot="left" 
      :value="icon"
    />
    <mu-switch 
      v-if="show_switch" 
      slot="right" 
    />
    <!-- Items Level 2 -->
    <mu-list
      v-if="has_children(item)"
      slot="nested"
    >
      <slot 
        name="children"
      ></slot>
    </mu-list>
  </mu-list-item>
</template>
<script>
export default {
	methods: {
		// Boolean
		has_children(objItem) {
			return 'children' in objItem && !this.is_empty(objItem)
		},
		is_empty(test) {
			return test && test.length
		},
		is_bool(test) {
			return typeof test === 'boolean' && test.length
		},
		// Show/Hide Elements
		show_toggle(objItem) {
			return this.show_item(objItem) && this.has_children(objItem)
		},
		show_item(objItem) {
			let is_valid = true
			if (this.is_empty(objItem.name) || !this.is_link(objItem.route)) {
				is_valid = false
			}
			return is_valid
		},
		is_link(objItemRoute) {
			return !this.is_empty(objItemRoute) && !this.is_empty(objItemRoute.path)
		},
		is_disabled(objItem) {
			return this.is_bool(objItem.disabled)
				? objItem.disabled
				: !this.is_link(objItem.route)
		}
  },
  data () {
    idx: 0,
    name: '',
    icon: '',
    tooltip: '',
    route: {path: '/'},
    children: [],
    is_disabled: false,
    is_open: true,
    is_loading: false,
    show_switch: false
  }
}
</script>
