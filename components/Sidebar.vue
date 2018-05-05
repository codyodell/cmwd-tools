<template>
  <aside
    :id="htmlAttrID"
    :is_open.sync="is_open"
    :is_docked.sync="is_docked"
    :is_loading.sync="is_sidebar_loading"
    :class="{'open': is_open, 'docked': is_docked, 'loading': is_sidebar_loading}"
  >
    <mu-drawer
      :open.sync="is_open" 
      :docked.sync="is_docked" 
      @close="event_close()"
    >
      <!-- Header -->
      <mu-appbar>
        <!-- Close/Open Button -->
        <mu-icon-button 
          slot="right" 
          :title="title_loading"
          disabled 
        >
          <mu-icon 
            value="circle" 
          />
        </mu-icon-button>
        <!-- Logo -->
        <span 
          class="logo"
        >
          <slot 
            name="logo"
          >
            <h4
              v-if="!is_empty(title)"
            >
              <span
                v-html="title"
              ></span>
            </h4>
          </slot>
        </span>
        <!-- Loading -->
        <loading 
          :active.sync="is_sidebar_loading"
        />
      </mu-appbar>
      <!-- Body -->
      <div 
        class="body"
      >
        <!-- Items List -->
        <mu-list 
          @itemClick="event_click__item"
        >
          <mu-sub-header
            v-if="!is_empty(subtitle)"
          >
            <span
              v-html="subtitle"
            ></span>
          </mu-sub-header>
          <!-- Items Level 1 -->
            <mu-list-item
              v-if="!is_empty(items)"
              v-for="(item, idxItem) in items"
              :title="item.name"
              :to="item.route"
              :key="idxItem"
              :disabled="is_disabled(item)"
              :disableRipple="!has_children(item)"
              :toggleNested="show_toggle(item)"
            >
              <mu-icon 
                v-if="item.icon" 
                slot="left" 
                :value="item.icon"
              />
              <mu-switch 
                v-if="item.switch" 
                slot="right" 
              />
              <!-- Items Level 2 -->
              <mu-list
                v-if="has_children(item)"
                slot="nested"
              >
                <mu-list-item
                  v-if="show_item(itemChild)"
                  :title="itemChild.name"
                  v-for="(itemChild, idxChild) in item.children"
                  :key="[idxItem, idxChild].join('-')"
                  :to="itemChild.route"
                  :tooltip="itemChild.tooltip"
                  :disabled="is_disabled(itemChild)"
                  :toggleNested="show_toggle(itemChild)"
                  :disableRipple="!show_toggle(itemChild)"
                >
                  <mu-icon 
                    v-if="itemChild.icon" 
                    slot="left" 
                    :value="itemChild.icon"
                  />
                  <mu-switch 
                    v-if="itemChild.switch" 
                    slot="right" 
                  />
                  <!-- Items Level 3 -->
                  <mu-list
                    v-if="has_children(itemChild)"
                    slot="nested"
                  >
                    <mu-list-item
                      v-if="show_item(grandChild)"
                      :title="grandChild.name"
                      v-for="(grandChild, idxGrandchild) in itemChild.children"
                      :key="[idxItem, idxChild, idxGrandchild].join('-')"
                      :to="grandChild.route"
                      :tooltip="grandChild.tooltip"
                      :disabled="is_disabled(grandChild)"
                      :toggleNested="show_toggle(grandChild)"
                      :disableRipple="!show_toggle(grandChild)"
                    >
                      <mu-icon 
                        v-if="grandChild.icon" 
                        slot="left" 
                        :value="grandChild.icon"
                      />
                      <mu-switch 
                        v-if="grandChild.switch" 
                        slot="right" 
                      />
                      <!-- Items Level 4 -->
                      <mu-list
                        v-if="has_children(grandChild)"
                        slot="nested"
                      >
                        <mu-list-item
                          v-if="show_item(greatgrandChild)"
                          :title="greatgrandChild.name"
                          v-for="(greatgrandChild, idxGreatgrandChild) in grandChild.children"
                          :key="[idxItem, idxChild, idxGrandchild, idxGreatgrandChild].join('-')"
                          :to="greatgrandChild.route"
                          :tooltip="greatgrandChild.tooltip"
                          :disabled="is_disabled(greatgrandChild)"
                          :toggleNested="show_toggle(greatgrandChild)"
                          :disableRipple="!show_toggle(greatgrandChild)"
                        >
                          <mu-icon 
                            v-if="greatgrandChild.icon" 
                            slot="left" 
                            :value="greatgrandChild.icon"
                          />
                          <mu-switch 
                            v-if="greatgrandChild.switch" 
                            slot="right" 
                          />
                          <!-- Items Level 5 -->
                          <mu-list
                            v-if="has_children(greatgrandChild)"
                            slot="nested"
                          >
                            <mu-list-item
                              v-if="show_item(greatgreatgrandChild)"
                              :title="greatgreatgrandChild.name"
                              v-for="(greatgreatgrandChild, idxGreatgreatgrandChild) in greatgrandChild.children"
                              :key="[idxItem, idxChild, idxGrandchild, idxGreatgrandChild, idxGreatgreatgrandChild].join('-')"
                              :to="greatgreatgrandChild.route"
                              :tooltip="greatgreatgrandChild.tooltip"
                              :disabled="is_disabled(greatgreatgrandChild)"
                              :toggleNested="show_toggle(greatgreatgrandChild)"
                              :disableRipple="!show_toggle(greatgreatgrandChild)"
                            >
                              <mu-icon 
                                v-if="greatgreatgrandChild.icon" 
                                slot="left" 
                                :value="greatgreatgrandChild.icon"
                              />
                              <mu-switch 
                                v-if="greatgreatgrandChild.switch" 
                                slot="right" 
                              />
                            </mu-list-item>
                          </mu-list>
                          <!-- //Level 5 -->
                        </mu-list-item>
                      </mu-list>
                      <!-- //Level 4 -->
                    </mu-list-item>
                  </mu-list>
                  <!-- //Level 3 -->
                </mu-list-item>
              </mu-list>
              <!-- //Level 2 -->
            </mu-list-item>
        </mu-list>
        <!-- //Level 1 -->
      </div>
    </mu-drawer>
  </aside>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Navigation from '/plugins/Navigation'
import Loading from 'vue-loading-overlay'
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
		event_toggle(bool) {
			this.toggleSidebar(bool)
			this.store.commit('TOGGLE_SIDEBAR', bool)
			this.$emit('changed')
		},
		event_open() {
			this.event_toggle(true)
			this.$emit('open')
		},
		event_close() {
			this.event_toggle(false)
			this.$emit('close')
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
		//console.log(this.items)
	}
}
</script>
