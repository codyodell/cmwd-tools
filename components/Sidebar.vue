<template>
    <mu-drawer
			:open.sync="open" 
			@close="toggle()"
		>
			<mu-appbar>
        <slot 
          name="close"
        >
          <mu-icon-button 
            title="Close Menu"
            slot="right" 
            @click.native="click_item__close" 
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
          >
						<mu-flat-button
							slot="left"
							:title="title"
							tooltip="Go to Homepage"
							tooltip-position="bottom-center"
							to="/"
						>
							<!--
							<img
								src="/src/assets/img/SVG/logo.svg"
								alt="CMWD"
							/>
							-->
							<svg version="1.1" role="presentation" height="28" viewBox="0 0 165 35">
								<path d="M92.4608157,34.7292984 L98.8629154,34.7292984 L98.8629154,23.3328799 L111.012598,34.7292984 L117.193867,34.7292984 L117.193867,4.22697099 L147.697931,4.22697099 C147.697931,4.22697099 160.203535,4.32690416 160.203535,17.4242053 C160.203535,17.4242053 160.407915,30.5215065 147.631631,30.5215065 L121.799909,30.5215065 L121.799909,34.7298031 L147.631631,34.7298031 C147.631631,34.7298031 164.934199,34.8489154 164.934199,17.4252148 C164.931707,0 147.629139,0 147.629139,0 L112.561903,0 L112.561903,30.5225159 L94.5574622,13.0190707 L94.5574622,30.5225159 L62.8610121,0 L56.5217221,0 L92.4608157,34.7292984 Z"></path>
								<path d="M84.8223487,11.9352271 L72.4718882,6.22424882e-15 L66.0697885,6.22424882e-15 L66.0697885,11.3964185 L53.9206042,6.22424882e-15 L47.7393353,6.22424882e-15 L47.7393353,30.5028321 L17.2352719,30.5028321 C17.2352719,30.5028321 4.73066465,30.4039084 4.73066465,17.3066072 C4.73066465,17.3066072 4.52628399,4.20829662 17.302568,4.20829662 L43.13429,4.20829662 L43.13429,6.22424882e-15 L17.302568,6.22424882e-15 C17.302568,6.22424882e-15 0,-0.118607544 0,17.3055978 C0,34.7298031 17.302568,34.7292984 17.302568,34.7292984 L52.3698036,34.7292984 L52.3698036,4.2077919 L70.3742447,21.7112372 L70.3742447,4.2077919 L102.070196,34.7298031 L108.409486,34.7298031 L84.8223487,11.9352271 Z"></path>
							</svg>
						</mu-flat-button>
					</slot>
				</div>
			</mu-appbar>
			<mu-list 
        @itemClick="click_item__link"
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
                  :key="idxItem"
                  :to="item.route"
                  :tooltip="item.tooltip"
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
                </mu-list-item>
              </mu-list>
          </mu-list-item>
        </mu-list>
			</mu-list>
		</mu-drawer>
</template>
<script>
export default {
	name: 'cmwd-sidebar',
	methods: {
		click_item__close() {
			this.close()
		},
		click_item__link() {
			if (this.docked) this.toggle()
		},
		toggle(bool) {
			bool = bool ? bool : !this.open
			this.open = bool
		},
		open() {
			this.toggle(true)
		},
		close() {
			this.toggle(false)
		}
	},
	data() {
		return {
			loading: false,
			open: true,
			docked: true,
			title: 'CMWD Tools',
			subtitle: 'eCommerce, Marketing, Web Development & Design',
			items: {
				ecommerce: {
					route: { path: '#/ecommerce' },
					name: 'eCommerce',
					icon: '',
					tooltip: 'Coming Soon',
					disabled: true
				},
				marketing: {
					route: { path: '#/marketing' },
					name: 'Marketing',
					tooltip: 'Coming Soon',
					disabled: true
				},
				webdev: {
					route: { path: '/webdev' },
					name: 'Web Development',
					icon: '',
					children: {
						tools: {
							route: { path: '#/webdev/tools' },
							name: 'Tools',
							icon: 'filter_list',
							children: {
								devices: {
									route: { path: '/webdev/tools/devices' },
									name: 'Devices',
									icon: 'devices_other',
									switch: true
								},
								api: {
									route: { path: '/webdev/tools/api' },
									name: 'API',
									icon: 'dns',
									switch: true
								},
								snippets: {
									route: { path: '/webdev/tools/code-snippets' },
									name: 'Code Snippets',
									icon: 'code'
								},
								cms: {
									route: { path: '/webdev/tools/cms' },
									name: 'CMS',
									icon: 'gesture',
									children: {
										wordpress: {
											route: { path: '/webdev/tools/cms/wordpress' },
											name: 'Wordpress'
										}
									}
								}
							}
						}
					}
				},
				design: {
					route: { path: '/design' },
					name: 'Design',
					icon: 'opacity',
					children: {
						tools: {
							route: { path: '#/design/tools' },
							name: 'Tools',
							icon: 'filter_list',
							children: {
								icons: {
									route: { path: '/design/tools/icons' },
									name: 'Icons'
								},
								colors: {
									route: { path: '/design/tools/colors' },
									name: 'Colors'
								}
							}
						}
					}
				},
				activity: {
					route: { path: '/activity' },
					name: 'Activity',
					icon: 'weekend',
					switch: true
				},
				settings: {
					route: { path: '/settings' },
					name: 'Settings',
					icon: 'tune'
				}
			}
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
