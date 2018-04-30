<template>
	<div>
		<mu-sub-header>{{ subtitle }}</mu-sub-header>
		<mu-content-block>
			<mu-row>
				<mu-col
					width="100"
				>
					<h1>
						<span>{{ title }}</span>
					</h1>
				</mu-col>
				<mu-col
					width="100"
					desktop="50"
					tablet="50"
				>
					<mu-card>
						<mu-card-title 
							title="API" 
							subtitle="www.codyodell.net/"
						>
							<mu-avatar slot="avatar">
								<mu-icon value="https" />
							</mu-avatar>
						</mu-card-title>
						<mu-content-block>
							<mu-list>
								<mu-list-item title="New Request" />
							</mu-list>
						</mu-content-block>
					</mu-card>
				</mu-col>
				<mu-col
					width="100"
					desktop="50"
					tablet="50"
				>
					<mu-card>
						<mu-card-title 
							title="Recent Activity" 
						>
							<mu-avatar slot="avatar">
								<mu-icon value="https" />
							</mu-avatar>
						</mu-card-title>
						<mu-card-actions>
							<mu-flat-button label="Endpoints"/>
							<mu-flat-button label="Requests"/>
						</mu-card-actions>
					</mu-card>
				</mu-col>
			</mu-row>
		</mu-content-block>
	</div>
</template>
<script>
import Wordpress from '/components/Api'

export default {
	components: {
		Wordpress
	},
	data() {
		return {
			title: 'Overview',
			subtitle: 'Wordpress Tools'
		}
	}
}
</script>
