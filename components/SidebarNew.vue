<template>
  <aside
    :id="htmlAttrID"
    :is_open.sync="is_open"
    :is_docked.sync="is_docked"
    :is_loading.sync="is_loading || is_sidebar_loading"
    :class="{'open': is_open, 'docked': is_docked, 'loading': (is_loading || is_sidebar_loading)}"
  >
    <mu-drawer
      :open.sync="is_open" 
      :docked.sync="is_docked" 
      @close="event_close()"
    >
      <!-- Header -->
      <mu-appbar
        title="title"
      >
        <!-- Close Button -->
        <mu-icon-button 
          slot="right" 
          :title="title_close" 
        >
          <mu-icon 
            value="close" 
          />
        </mu-icon-button>
        <!-- Logo -->
        <span 
          v-if="$slots.logo"
          class="logo"
        >
          <slot 
            name="logo"
          ></slot>
        </span>
        <!-- Loading -->
        <loading 
          :active.sync="show_loading"
        />
      </mu-appbar>
      <!-- Body -->
      <div 
        class="body"
      >
        <mu-linear-progress
          v-show="is_loading"
          size="14"
          color="rgba(255, 255, 255, .366)"
        />
        <slot>
          <navigation
            :items="items"
          ></navigation>
        </slot>
      </div>
    </mu-drawer>
  </aside>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
import Navigation from '/plugins/Navigation/Navigation.vue'
import 'vue-loading-overlay/dist/vue-loading.min.css'

export default {
	name: 'cmwd-sidebar',
	components: {
		Loading,
		Navigation
	},
	computed: {
		...mapGetters({
			items: 'nav_items_sidebar',
			is_open: 'is_sidebar_open',
			is_loading: 'is_loading',
			is_docked: 'is_sidebar_docked',
			is_sidebar_loading: 'is_sidebar_loading'
		})
	},
	methods: {
		show_loading() {
			return this.is_loading || this.is_sidebar_loading
		},
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
		is_link(objItemRoute) {
			return !this.is_empty(objItemRoute) && !this.is_empty(objItemRoute.path)
		},
		is_disabled(objItem) {
			return this.is_bool(objItem.disabled)
				? objItem.disabled
				: !this.is_link(objItem.route)
		},
		// Events
		event_click__item() {
			console.log('event_click__item', this.is_open)
			if (this.is_docked) {
				this.event_close()
			}
		},
		event_toggle() {
			this.toggleSidebar()
			this.store.commit('TOGGLE_SIDEBAR')
			return this.is_open
		},
		event_open() {
			this.openSidebar()
			this.$emit('open')
			return this.is_open
		},
		event_close() {
			this.closeSidebar()
			this.$emit('close')
			return this.is_open
		},
		go(path) {
			if (!this.is_empty(path)) {
				this.$router.push(path)
			}
		},
		...mapActions({
			toggleSidebar: 'toggleSidebar',
			openSidebar: 'openSidebar',
			closeSidebar: 'closeSidebar'
		})
	},
	data() {
		return {
			htmlAttrID: 'sidebar',
			theme: 'default',
			slug: 'cmwd-nav-sidebar',
			title: '',
			subtitle: '',
			title_close: 'Close Navigation',
			title_loading: 'Loading..',
			overlay: true,
			position: 'left' //right
		}
	},
	mounted() {
		console.log(this.items)
	}
}
</script>
