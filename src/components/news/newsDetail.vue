<template>
    <div class="tmpl">
        <nav-bar title="项目详情"></nav-bar>
        <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <img class="mui-media-object mui-pull-left img" :src="url">
                        <div class="mui-media-body method">
                            方法
                            <p class='mui-ellipsis'>{{newsDetail.method}}</p>
                        </div>
                        <div class="mui-media-body name">
                            项目名称
                            <p class='mui-ellipsis'>{{newsDetail.name}}</p>
                        </div>
                        

                    </a>
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsDetail:{}, //就是为了象征性的表示其数据类型
            url:"",
        }
    },created(){
        //1:获取路由参数
        let id = this.$route.query.id;
        //2:拼接路由参数成为后台请求的URL
        this.$ajax.get('http://test.legle.cc:82/getOperation?id='+ id)
        .then(res=>{

             //3:响应回来渲染页面
             this.newsDetail = res.data.operations; 
             if(res.data.operations && res.data.operations.collationschematic && res.data.operations.collationschematic[0]){
                this.url = res.data.operations.collationschematic[0].url
             }else{
                this.url = "http://arpt-user.oss-cn-shenzhen.aliyuncs.com/user/ZDa3EmJBYJ.png"
             }
            console.log(this.newsDetail)

        })
        .catch(err=>{
            console.log(err);
        })
       
    }
}

</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}

.method {
    float:right;
    margin-right:2rem
}
.name {
    float:left;
    margin-left:2rem
}
.img {
    height: 4.2rem;
    width: 4.2rem;
    max-width:4.2rem;
}
.mui-ellipsis{
    margin-top:.6rem 
}
</style>
