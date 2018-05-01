<template>
  <header>
    <h1
      v-if="title"
    >
      <span>{{ title }}</span>
    </h1>
    <h4
      v-if="subtitle"
    >
      <span>{{ subtitle }}</span>
    </h4>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () {
        return ''
      },
    title: {
      type: String,
      default: () {
        return ''
      }
    },
    subtitle: {
      type: String,
      default: () {
        return ''
      }
    }
  },
  data () {
    title: this.title,
    subtitle: this.subtitle
  }
}
</script>
<style>

</style>
