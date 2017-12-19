<template>
	<div>
		<!-- home swip -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a :href="img.adUrl"><img :src="img.imgUrl" class="scollImg"></a></mt-swipe-item>
		</mt-swipe>
		<!-- 9 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">微整百科</div>
		                </router-link>
		            </li>
		   	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		                <router-link :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">明星面对面</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品展示</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<router-link :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<a :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索资讯</div>
		                </a>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            	<a :to="{name:'news.list'}">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div>
		                </a>
		            </li>
		            
		        </ul> 
		</div>

	</div>
</template>
<script>
	export default {
		data(){
			return {
					imgs:[]
			}
		},created(){
			//获取图片
			this.$ajax.get('getAdvertisementList',
			).then(res=>{

				if(res.data.code == 1){
					this.imgs = res.data.results
					if(this.imgs.length == 0){
						this.imgs = [{imgUrl:"http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/yNT8z4xrac.jpg"},{imgUrl:"http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/Kc7D6PD45E.jpg"},{imgUrl:"http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/6KYKjZJR7T.jpg"}]
					}
					console.log(this.imgs)

					
				}
			}).catch(error=> {
			    console.log(error);
			  });
		}
	}
</script>
<style scoped>
/*轮播图*/
	.mint-swipe{
		max-height: 8.2rem;
	}
	.mint-swipe img{
		height: 100%;
	}
	/*九宫格*/
	.mui-table-view .mui-grid-view .mui-grid-9 {

	}
	/*九宫格清除字体图标*/
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
	    content: '';
	}
	/*九宫格背景图片*/
.mui-icon-home{
    background-image: url('../../static/img/news.png');
    background-repeat: round;
}
.mui-icon-email{
    background-image: url('../../static/img/picShare.png');
    background-repeat: round;
}
.mui-icon-chatbubble{
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
}
.mui-icon-location{
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
}
.mui-icon-search{
    background-image: url('../../static/img/search.png');
    background-repeat: round;
}
.mui-icon-phone{
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
}
/*九宫格图标宽高*/
.mui-icon{
    height: 50px;
    width:50px;
}
.scollImg{
	width: 100%;
}
</style>