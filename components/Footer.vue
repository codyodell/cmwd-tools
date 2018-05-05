<template>
  <footer 
    id="footer"
  >
    <mu-appbar
      title="CMWD Tools"
    >
      <mu-menu-item
        slot="right"
        v-if="text_copyright"
      >
        <p 
          v-if="text_copyright"
          v-html="text_copyright"
        ></p>
      </mu-menu-item>
    </mu-appbar>
  </footer>
</template>
<script>
export default {
	name: 'cmwd-footer',
	data() {
		return {
			text_copyright: `<mu-icon value="copyright" /> Copyright 2018`
		}
	}
}
</script>
