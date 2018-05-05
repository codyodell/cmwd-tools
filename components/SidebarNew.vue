<template>
  <aside
    :id="htmlAttrID"
    :class="{'content-left': true, 'open': is_open, 'docked': is_docked, 'loading': (is_loading || is_sidebar_loading)}"
  >
    <mu-drawer
      :open.sync="is_open" 
      :docked.sync="is_docked" 
      :zDepth="1"
      @close="event_close()"
    >
      <!-- Header -->
      <mu-appbar
        :title="title"
        :zDepth="0"
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
          v-show="show_loading"
          color="#cdcdcd"
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
		show_loading() {
			return this.is_loading || this.is_sidebar_loading
		},
		...mapGetters({
			items: 'nav_items_sidebar',
			is_open: 'is_sidebar_open',
			is_loading: 'is_loading',
			is_docked: 'is_sidebar_docked',
			is_sidebar_loading: 'is_sidebar_loading'
		})
	},
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
		// Events
		event_toggle(bool) {
			this.toggleSidebar(bool)
			this.$store.dispatch('TOGGLE_SIDEBAR')
			//this.$emit('toggle')
		},
		event_open() {
			this.toggleSidebar(true)
			this.$emit('open')
		},
		event_close() {
			this.toggleSidebar(false)
			this.$emit('close')
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
	}
}
</script>
