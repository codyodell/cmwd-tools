<template>
  <mu-content-block>
    <p>Test</p>
    <p>{{ url }}</p>
  </mu-content-block>
</template>
<script>
export default {
  computed: {
    url () {
      return this.protocol + '://' + this.url + '/' + this.path
    }
  },
  methods: {
    request () {
      console.log(this.$http)
    }
  },
  mounted () {
    this.$nextTick(function(){
      console.log('Api.vue > Mounted > $nextTick')
    })
  },
  data () {
    return {
    protocol: 'https',
    url: 'codyodell.net',
    path: 'wp-json'
    }
  },
  created () {
    this.request()
    console.log(this.url)
  }
}
</script>