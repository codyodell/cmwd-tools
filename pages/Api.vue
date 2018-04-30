<template>
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
      </mu-card>
    </mu-col>
    <mu-col
      width="100"
      desktop="50"
      tablet="50"
    >
      <mu-card>
        <mu-card-header 
          title="Recent Activity" 
        >
          <mu-avatar slot="avatar">
            <mu-icon value="https" />
          </mu-avatar>
        </mu-card-header>
      </mu-card>
    </mu-col>
  </mu-row>
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
