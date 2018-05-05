<template>
  <main 
    :class="class_main"
    role="main"
  >
    <transition 
      name="fade"
    >
      <slot>
        <router-view />
      </slot>
    </transition>
  </main>
</template>
<script>
export default {
	name: 'cmwd-content',
	data() {
		return {
			class_main: 'content'
		}
	}
}
</script>
