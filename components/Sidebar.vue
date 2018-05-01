<template>
  <aside
    data-open="open"
    data-loading="loading"
  >
    <mu-drawer
      :open.sync="open" 
      :docked.sync="docked" 
      @close="toggle()"
    >
      <mu-appbar>
        <slot 
          name="close"
        >
          <mu-icon-button 
            title="Close Menu"
            slot="right" 
            @click.native="event_close" 
          >
            <mu-icon 
              value="close" 
            />
          </mu-icon-button>
        </slot>
        <div 
          class="logo"
        >
          <slot 
            name="logo"
          ></slot>
        </div>
      </mu-appbar>
      <mu-list 
        @itemClick="event_click__item"
      >
        <mu-sub-header>
          <span>{{ title }}</span>
        </mu-sub-header>
        <mu-list
          v-if="items && items.length"
          v-for="(item, idxItem) in items"
          :key="idxItem"
        >
          <mu-list-item
            v-if="item.name && item.route"
            :title="item.name"
            :to="item.route"
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
            <mu-list
              v-if="item.children && item.children.length"
            >
              <mu-list-item
                :title="child.name"
                v-if="child.name && child.route"
                v-for="(child, idxChild) in item.children"
                :key="idxItem + '-' + idxChild"
                :to="child.route"
                :tooltip="child.tooltip"
              >
                <mu-icon 
                  v-if="child.icon" 
                  slot="left" 
                  :value="child.icon"
                />
                <mu-switch 
                  v-if="child.switch" 
                  slot="right" 
                />
                <mu-list
                  v-if="child.children && child.children.length"
                >
                  <mu-list-item
                    :title="child.children.name"
                    v-if="child.children.name && child.children.route"
                    v-for="(grandChild, idxGrandchild) in child.children"
                    :key="idxChild + '-' + idxGrandchild"
                    :to="grandChild.route"
                    :tooltip="grandChild.tooltip"
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
                    <!-- Great Grandchildren -->
                    <mu-list
                      v-if="grandChild.children && grandChild.children.length"
                    >
                      <mu-list-item
                        :title="grandChild.children.name"
                        v-if="grandChild.children.name && grandChild.children.route"
                        v-for="(greatgrandChild, idxGreatgrandChild) in grandChild.children"
                        :key="idxChild + '-' + idxGrandchild"
                        :to="greatgrandChild.route"
                        :tooltip="greatgrandChild.tooltip"
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
                      </mu-list-item>
                    </mu-list>
                    <!-- //GreatGrandchildren -->
                  </mu-list-item>
                </mu-list>
              </mu-list-item>
            </mu-list>
          </mu-list-item>
        </mu-list>
      </mu-list>
    </mu-drawer>
  </aside>
</template>
<script>
export default {
	name: 'cmwd-sidebar',
	components: {
		SidebarItem: {
			template: ``
		}
	},
	methods: {
		toggle(bool) {
			bool = bool ? bool : !this.open
			this.open = bool
		},
		event_click__item() {
			if (this.docked) this.toggle()
		},
		event_open() {
			this.toggle(true)
			this.$emit('open')
		},
		event_close() {
			this.toggle(false)
			this.$emit('close')
		},
		go(path) {
			if (path) this.$router.push(path)
		}
	},
	data() {
		return {
			theme: 'default',
			slug: 'cmwd-tools',
			title: 'CMWD Tools',
			subtitle: '',
			loading: false,
			open: true,
			docked: true,
			overlay: false,
			position: 'left', //right
			items: [
				{
					route: { path: '#/ecommerce' },
					name: 'eCommerce',
					icon: 'store',
					tooltip: 'Coming Soon.',
					disabled: true
				},
				{
					route: { path: '#/marketing' },
					name: 'Marketing',
					icon: 'show_chart',
					tooltip: 'Coming Soon.',
					disabled: true
				},
				{
					route: { path: '/webdev' },
					name: 'Web Development',
					icon: 'mouse',
					children: [
						{
							route: { path: '#/webdev/tools' },
							name: 'Tools',
							icon: 'filter_list',
							children: [
								{
									route: { path: '/webdev/tools/devices' },
									name: 'Devices',
									icon: 'devices_other',
									switch: true
								},
								{
									route: { path: '/webdev/tools/api' },
									name: 'API',
									icon: 'dns',
									switch: true
								},
								{
									route: { path: '/webdev/tools/code-snippets' },
									name: 'Code Snippets',
									icon: 'code'
								},
								{
									route: { path: '/webdev/tools/cms' },
									name: 'CMS',
									icon: 'view_compact',
									children: [
										{
											route: { path: '/webdev/tools/cms/wordpress' },
											name: 'Wordpress',
											icon: 'view_compact'
										}
									]
								}
							]
						}
					]
				},
				{
					route: { path: '/design' },
					name: 'Design',
					icon: 'opacity',
					children: [
						{
							route: { path: '#/design/tools' },
							name: 'Tools',
							icon: 'filter_list',
							children: [
								{
									route: { path: '/design/tools/icons' },
									name: 'Icons',
									icon: 'ac_unit'
								},
								{
									route: { path: '/design/tools/colors' },
									name: 'Colors',
									icon: 'palette'
								}
							]
						}
					]
				},
				{
					route: { path: '/activity' },
					name: 'Activity',
					icon: 'weekend',
					switch: true
				},
				{
					route: { path: '/settings' },
					name: 'Settings',
					icon: 'tune'
				}
			]
		}
	}
}
</script>


        <!--
				<mu-list-item 
					title="CMS Tool"
				>
					<mu-icon slot="left" value="tune"/>
				</mu-list-item>
				<mu-list-item title="API Tool">
					<mu-icon slot="left" value="https"/>
					<mu-switch slot="right" />
				</mu-list-item>
				<mu-list-item title="Code Snippets Tool">
					<mu-icon slot="left" value="code"/>
				</mu-list-item>
				<mu-divider />
				<mu-list-item title="Device Preview Tool">
					<mu-icon slot="left" value="devices_other"/>
				</mu-list-item>
				<mu-list-item title="Color Tool">
					<mu-icon slot="left" value="https"/>
					<mu-switch slot="right" />
				</mu-list-item>
				<mu-divider />
				<mu-list-item title="eCommerce">
					<mu-icon slot="left" value="https"/>
					<mu-switch slot="right" />
				</mu-list-item>
				<mu-divider />
				<mu-sub-header>Settings</mu-sub-header>
				<mu-list-item title="Theme">
					<mu-icon slot="left" value="color_invert"/>
				</mu-list-item>
			</mu-list>
      -->
