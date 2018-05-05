<template>
  <header>
    <mu-sub-header
      v-if="subtitle"
    >
      <span>{{ subtitle }}</span>
    </mu-sub-header>
    <h1
      v-if="title"
    >
      <span>{{ title }}</span>
    </h1>
  </header>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: () => {
				return ''
			}
		},
		subtitle: {
			type: String,
			default: () => {
				return ''
			}
		}
	} /*,
	data() {
		return {
			title: this.title,
			subtitle: this.subtitle
		}
	}*/
}
</script>
