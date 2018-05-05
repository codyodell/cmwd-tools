<template>
  <nav>
    <mu-list>
      <navigation-item
        v-if="show_items"
        v-for="(itemNav, idxItemNav) in items"
        :key="idxItemNav"
        :name="itemNav.name"
        :route="itemNav.route"
        :children="itemNav.children"
        :is_open="is_first_item(idxItemNav"
      ></navigation-item>
      <mu-list-item 
        v-else
      >
        <p>No nav items.</p>
      </mu-list-item>
    </mu-list>
  </nav>
</template>
<script>
export default {
	computed: {
		show_items() {
			return this.items && this.items.length
		}
	},
	methods: {
		is_first_item(idx) {
			return idx === 0
		}
	},
	data() {
		items: []
	}
}
</script>
