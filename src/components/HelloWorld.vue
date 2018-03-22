<template>
	<div @click="go" class="colorRed">
		Hello
	</div>
</template>

<script>
	export default {
		name:'demo',
		methods:{
			go(){
				this.$router.push({path: '/Demo'})
			}
		}
	}
</script>
