<template>
  <mu-list-item
    :title="name"
    :to="route"
    :key="idx"
    :tooltip="tooltip"
    :disabled="is_disabled"
    :toggleNested="show_toggle"
    :disableRipple="!show_toggle"
  >
    <mu-icon 
      v-if="icon" 
      :value="icon"
      slot="left" 
    />
    <mu-switch 
      v-if="show_switch" 
      slot="right" 
    />
    <slot 
      name="children"
    >
      <navigation
        items="children"
        slot="nested"
      />
    </slot>
  </mu-list-item>
</template>
<script>
import Navigation from './Navigation.vue'

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
			return this.show_item && this.has_children
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
			return Need in Haystack
		},
		event_click__item() {
			console.log('event_click__item', this.is_open)
			if (this.is_docked) this.event_close()
		}
	}
}
</script>
