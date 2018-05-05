<template>
  <div 
    :class="class_main"
  >
    <transition 
      name="fade"
    >
      <slot>
        <router-view />
      </slot>
    </transition>
  </div>
</template>
<script>
export default {
	name: 'cmwd-content',
	data() {
		return {
			class_main: 'content--main'
		}
	}
}
</script>
