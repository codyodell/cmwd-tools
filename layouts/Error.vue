<template>
  <div 
    :data-slug="slug"
    :data-layout="layout" 
  >
    <main 
      class="content"
      role="main"
    >
      <mu-sub-header>
        <span>{{ subtitle }}</span>
      </mu-sub-header>
      <mu-content-block>
        <mu-row
          gutter="true"
        >
          <mu-col
            width="100"
          >
              <h1>
                <span>{{ title }}</span>
              </h1>
              <p>{{ description }}</p>
          </mu-col>
        </mu-row>
      </mu-content-block>
    </main>
  </div>
</template>
<script>
export default {
	name: 'layout-error',
	Data() {
		return {
			layout: 'error',
			slug: 'error-404',
			error_code: 404,
			title: 'Page not Found',
			subtitle: 'Error [404]',
			description:
				'Page does not exist, or was corrupted in an accident involving monkeys and aliens.  With spoons.'
		}
	}
}
</script>
<style lang="scss">

</style>
