<template>
  <div 
    :class="class_main"
  >
    <transition 
      name="fade"
    >
      <router-view>
        <slot></slot>
      </router-view>
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
