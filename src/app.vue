<template>
	<div>
		<mt-button type="primary">primary</mt-button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
			}
		},created(){
			//用户登录
			this.$ajax.post('clientLogin',
				{username:'jige',password:123321}
			).then(function(res){
				
				}).catch(function (error) {
			    console.log(error);
			  });
			//获取图片
			this.$ajax.get('getAdvertisementList',
			).then(function(res){
				if(res.data.code == 1){
					console.log(res.data.results)
				}
			}).catch(function (error) {
			    console.log(error);
			  });
		}
	}
</script>
<style></style>