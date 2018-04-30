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
					<mu-stepper :activeStep="1">
						<mu-step>
							<mu-step-label>
								选择活动地点
							</mu-step-label>
						</mu-step>
						<mu-step>
							<mu-step-button>
								创建一个群组
							</mu-step-button>
						</mu-step>
						<mu-step>
							<mu-step-label>
								宣传活动
							</mu-step-label>
						</mu-step>
					</mu-stepper>
				</mu-col>
				<mu-col
					width="100"
					desktop="50"
					tablet="50"
				>
					<mu-card>
						<mu-card-title 
							title="API" 
							subtitle="https://www.codyodell.net/"
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
import { Wordpress } from '/components/Wordpress/index.js'

export default {
	components: {
		Wordpress
	},
	data() {
		return {
			slug: 'overview',
			title: 'Overview',
			subtitle: 'Wordpress Tools'
		}
	}
}
</script>
