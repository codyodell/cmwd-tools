<template>
  <mu-list-item
    :title="name"
    :key="idx"
    v-model="open"
    :value="route.path"
    :disabled="is_disabled"
    :toggleNested="show_toggle"
    :disableRipple="show_toggle"
    :class="{'is_open': open, 'show_children': show_children, 'show_toggle': show_toggle}"
    @click.prevent="handleClick"
  >
    <mu-icon-button
      slot="left"
      v-if="show_icon"
      :tooltip="[n_children + ' Links', tooltip].join(' | ')"
    >
      <mu-icon
        :value="icon"
      />
    </mu-icon-button>
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
			default: () => {
				return 'home'
			}
		},
		route: {
			type: Object,
			required: true,
			default: () => {
				return { path: '/' }
			}
		},
		disabled: {
			type: Boolean,
			default: () => {
				return false
			}
		},
		subheader: {
			type: Boolean,
			default: () => {
				return false
			}
		},
		open: {
			type: Boolean,
			default: () => {
				return true
			}
		},
		show_switch: {
			type: Boolean,
			default: () => {
				return false
			}
		},
		tooltip: {
			type: String,
			default: () => {
				return ''
			}
		},
		item: {
			type: Object,
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
			type: Array,
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
		n_children() {
			let nItemChildren = 0
			if (this.show_children) {
				nItemChildren = this.children.length
			}
			return nItemChildren
		},
		show_children() {
			let is_valid = true
			if (this.is_empty(this.children)) {
				is_valid = false
			}
			return is_valid
		},
		// Show/Hide Elements
		show_toggle() {
			return this.show_item && this.show_children
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
			let is_disabled = false
			if (!this.is_link || this.disabled) {
				is_disabled = true
			}
			return is_disabled
		},
		is_first_item() {
			return this.idx === 0
		}
	},
	methods: {
		is_empty(test) {
			return !test || !test.length
		},
		is_bool(test) {
			let is_bool = typeof test === 'boolean'
			return is_bool && test.length
		},
		is_string(test) {
			let is_string = typeof test === 'string'
			return is_string && !this.is_empty(test)
		},
		is_array(test) {
			let is_array = typeof test === 'array'
			return is_array && !this.is_empty(test)
		},
		in_array(Needle, Haystack) {
			return Needle in Haystack
		},
		handleClick(event) {
			console.log(event)
			let isExpandable = this.show_children && !this.open
			if (isExpandable) {
				this.toggle()
			} else {
				this.go(event.target)
			}
			this.$emit('click', event)
		},
		toggle(bool) {
			let is_bool = typeof bool === 'boolean'
			this.open = is_bool ? bool : !this.open
			if (this.is_docked) {
				this.$store.commit('toggleSidebar', this.open)
			}
			this.$emit('toggle', this.open)
		},
		go(objRoute) {
			if (!this.is_empty(objRoute)) {
				this.$router.push(objRoute)
			}
		}
	},
	created() {
		console.log('Plugins > Navigation > Item', this, this.children)
	}
}
</script>
