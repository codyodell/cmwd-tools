<template>
  <div 
		:data-slug="slug" 
		:data-layout="layout"   
	>
  	<mu-appbar>
			<mu-icon-button 
				slot="left"
				icon="menu" 
				@click="toggle()"
			/>
			<slot name="logo">
				<mu-icon-button
					slot="left"
					class="logo"
					title="CMWD"
					tooltip="Go to Homepage"
					to="/"
				>
					<svg version="1.1" role="presentation" height="28" viewBox="0 0 165 35">
						<path d="M92.4608157,34.7292984 L98.8629154,34.7292984 L98.8629154,23.3328799 L111.012598,34.7292984 L117.193867,34.7292984 L117.193867,4.22697099 L147.697931,4.22697099 C147.697931,4.22697099 160.203535,4.32690416 160.203535,17.4242053 C160.203535,17.4242053 160.407915,30.5215065 147.631631,30.5215065 L121.799909,30.5215065 L121.799909,34.7298031 L147.631631,34.7298031 C147.631631,34.7298031 164.934199,34.8489154 164.934199,17.4252148 C164.931707,0 147.629139,0 147.629139,0 L112.561903,0 L112.561903,30.5225159 L94.5574622,13.0190707 L94.5574622,30.5225159 L62.8610121,0 L56.5217221,0 L92.4608157,34.7292984 Z"></path>
						<path d="M84.8223487,11.9352271 L72.4718882,6.22424882e-15 L66.0697885,6.22424882e-15 L66.0697885,11.3964185 L53.9206042,6.22424882e-15 L47.7393353,6.22424882e-15 L47.7393353,30.5028321 L17.2352719,30.5028321 C17.2352719,30.5028321 4.73066465,30.4039084 4.73066465,17.3066072 C4.73066465,17.3066072 4.52628399,4.20829662 17.302568,4.20829662 L43.13429,4.20829662 L43.13429,6.22424882e-15 L17.302568,6.22424882e-15 C17.302568,6.22424882e-15 0,-0.118607544 0,17.3055978 C0,34.7298031 17.302568,34.7292984 17.302568,34.7292984 L52.3698036,34.7292984 L52.3698036,4.2077919 L70.3742447,21.7112372 L70.3742447,4.2077919 L102.070196,34.7298031 L108.409486,34.7298031 L84.8223487,11.9352271 Z"></path>
					</svg>
				</mu-icon-button>
			</slot>
		</mu-appbar>
		<mu-drawer 
			:open="sidebar_open" 
			@close="toggle()"
		>
			<mu-list
				@itemClick="sidebar_docked ? '' : toggle()"
			>
				<mu-list-item title="Wordpress Tools">
					<mu-icon-button 
						slot="right" 
						@click.native="sidebar_open = false" 
						title="Close"
					>
						<mu-icon value="close" />
					</mu-icon-button>
				</mu-list-item>
				<mu-list-item title="Explore">
					<mu-icon slot="left" value="explore"/>
				</mu-list-item>
				<mu-list-item title="Snippets">
					<mu-icon slot="left" value="code"/>
				</mu-list-item>
				<mu-list-item title="API">
					<mu-icon slot="left" value="dns"/>
				</mu-list-item>
				<mu-divider />
				<mu-sub-header>
					<mu-icon value="settings" size="14" />
					<span>Settings</span>
				</mu-sub-header>
				<mu-list-item title="Theme">
					<mu-icon slot="left" value="opacity" />
					<mu-switch slot="right" />
				</mu-list-item>
			</mu-list>
		</mu-drawer>
		<main 
			class="content"
			role="main"
		>
			<mu-sub-header>
				<span>{{ subtitle }}</span>
			</mu-sub-header>
			<mu-content-block>
				<mu-row
					gutter
				>
					<mu-col
						width="100"
					>
						<h1>
							<span>{{ title }}</span>
						</h1>
					</mu-col>
					<router-view />
				</mu-row>
			</mu-content-block>
		</main>
  </div>  	
</template>
<script>
export default {
	name: 'layout-default',
	methods: {
		toggle(flag) {
			this.sidebar_open = !this.sidebar_open
			this.sidebar_docked = !flag
		}
	},
	Data() {
		return {
			layout: 'default',
			title: 'Overview',
			subtitle: 'Wordpress Tools',
			sidebar_open: true,
			sidebar_docked: false
		}
	}
}
</script>
