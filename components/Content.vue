<template>
  <main 
    class="content"
    role="main"
  >
    <transition name="fade">
      <slot>
        <router-view />
      </slot>
    </transition>
  </main>
</template>
<script>
export default {
	name: 'cmwd-content'
}
</script>
<style>

</style>
