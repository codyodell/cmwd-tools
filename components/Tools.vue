<template>
	<div class="tools">
    <mu-appbar title="CMWD">
      <mu-icon-button icon="menu" slot="left"/>
      <img src="./assets/Images/SVG/logo.svg" alt="CMWD" slot="left" />
    </mu-appbar>
    <mu-sub-header>Subtite</mu-sub-header>
    <mu-content-block>
      <p>
        <mu-switch v-model="switchVal" @change="switchChange"/>
      </p>
      <p>
        <input type="checkbox" v-model="checkboxVal" @change="checkboxChange">
      </p>
    </mu-content-block>
	</div>
</template>

<script>
export default {
	name: "tools",
	data() {
		return {
			checkboxVal: true,
			switchVal: true
		}
	},
	methods: {
		switchChange(newVal) {
			console.log("change switchVal", this.switchVal, newVal)
		},
		checkboxChange(evt) {
			console.log("change checkboxVal", this.checkboxVal, evt.target.checked)
		}
	},
	watch: {
		switchVal() {
			console.log("watch", this.switchVal)
		},
		checkboxVal() {
			console.log("watch", this.checkboxVal)
		}
	}
}
</script>
