<template>
  <header>
  	<mu-appbar fullWidth>
			<mu-icon-button 
				slot="left"
				icon="menu" 
				@click="toggle_sidebar()"
			/>
			<mu-circular-progress
				slot="left"
			/>
			<mu-list-item
				slot="right"
			>
				<mu-raised-button 
					label="Login with Github"
					to="login" 
				>
					<mu-icon
						value="github"
						width="14"
					/>
				</mu-raised-button>
			</mu-list-item>
		</mu-appbar>
  </header>
</template>
<script>
export default {
	name: 'cmwd-header'
}
</script>
<style>

</style>
