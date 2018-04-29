<template>
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
            <mu-list-item 
              title="New Request" 
            />
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
</template>
<script>
import Wordpress from '/components/Wordpress'

export default {
	components: {
		Wordpress
	},
	data() {
		return {
			title: 'API',
			subtitle: 'Wordpress Tools'
		}
	}
}
</script>
