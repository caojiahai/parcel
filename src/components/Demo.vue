<template>
	<div @click="go">
		Demo
	</div>
</template>

<script>
	export default {
		name:'demo',
		methods:{
			go(){
				this.$router.push({path: '/'})
			}
		}
	}
</script>
