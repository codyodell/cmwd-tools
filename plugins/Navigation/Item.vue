<template>
  <mu-list-item
    :title="name"
    :to="route"
    :key="idx"
    :tooltip="tooltip"
    :disabled="is_disabled"
    :toggleNested="show_toggle"
    :disableRipple="!show_toggle"
    :class="{'open': is_open, 'has_children': has_children}"
  >
    <mu-icon
      :value="icon"
      slot="left" 
    />
    <mu-switch 
      v-if="show_switch" 
      slot="right" 
    />
    <slot></slot>
  </mu-list-item>
</template>
<script>
import Navigation from '/plugins/Navigation/Navigation.vue'

export default {
	components: {
		Navigation
	},
	props: {
		idx: {
			type: [Number, String],
			required: true,
			default: () => {
				return 0
			}
		},
		name: {
			type: String,
			required: true,
			default: () => {
				return 'Home'
			}
		},
		icon: {
			type: String,
			required: false,
			default: () => {
				return 'home'
			}
		},
		route: {
			type: Object,
			required: true,
			default: () => {
				return {
					path: '/'
				}
			}
		},
		disabled: {
			type: Boolean,
			default: () => {
				return false
			}
		},
		show_switch: {
			type: Boolean,
			default: () => {
				return false
			}
		},
		tooltip: {
			type: [Boolean, String],
			default: () => {
				return false
			}
		},
		item: {
			type: [Boolean, Object],
			default: () => {
				return {
					route: { path: '/' },
					name: 'Home',
					icon: 'home',
					children: []
				}
			}
		},
		children: {
			type: [Boolean, Array],
			default: () => {
				return [
					{
						route: { path: '/overview' },
						name: 'Overview',
						icon: 'view_module'
					}
				]
			}
		}
	},
	computed: {
		has_children() {
			let is_valid = true
			if (!this.in_array('children', this) || this.is_empty(this.children)) {
				is_valid = false
			}
			return is_valid
		},
		// Show/Hide Elements
		show_toggle() {
			return this.is_link && this.has_children
		},
		show_icon() {
			return !this.is_empty(this.icon)
		},
		show_item() {
			let is_valid = true
			if (this.is_empty(this.name) || !this.is_link) {
				is_valid = false
			}
			return is_valid
		},
		is_link() {
			return !this.is_empty(this.route) && !this.is_empty(this.route.path)
		},
		is_disabled() {
			return this.is_bool(this.disabled) ? this.disabled : !this.is_link
		},
		is_first_item() {
			return this.idx === 0
		},
		is_open() {
			return true //this.is_first_item
		}
	},
	methods: {
		is_empty(test) {
			return test && test.length
		},
		is_bool(test) {
			let is_bool = typeof test === 'boolean'
			return is_bool && test.length
		},
		is_string(test) {
			let is_string = typeof test === 'string'
			return is_string && !this.is_empty(test)
		},
		in_array(Needle, Haystack) {
			return Needle in Haystack
		},
		event_click__item() {
			console.log('event_click__item', this.is_open)
			if (this.is_docked) {
				//this.toggleSidebar(false)
			}
		}
	},
	mounted() {
		console.log('Navigation > Item', this, this.children)
	}
}
</script>
