<template>
	<div
		:data-slug="slug"
	>
		<page-header
			:title="title"
			:subtitle="subtitle"
		></page-header>
		<mu-content-block>
			<mu-row>
				<mu-col
					width="100"
					desktop="50"
					tablet="50"
				>
					<mu-card>
						<mu-card-title 
							:title="title" 
							:subtitle="subtitle"
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
							<mu-flat-button label="Endpoints" icon="https" />
							<mu-flat-button label="Requests" icon="https" />
						</mu-card-actions>
					</mu-card>
				</mu-col>
			</mu-row>
		</mu-content-block>
	</div>
</template>
<script>
import api from '/plugins/Api'
import PageHeader from '/components/PageHeader'

export default {
	components: {
		api,
		PageHeader
	},
	data() {
		return {
			slug: 'cmwd-tools-overview',
			title: 'Overview',
			subtitle: 'CMWD > Tools'
		}
	}
}
</script>
