<template>
    <div class="tmpl">
    

        <nav-bar title="手术项目"></nav-bar>
    <!-- MUI 图文列表 -->
        <ul class="mui-table-view">
            <li v-for="news in newsList" :key="news.id" class="mui-table-view-cell mui-media">
                <router-link :to="{name:'news.detail',query:{id:news.id} }">
                    <img class="mui-media-object mui-pull-left" :src="news.img_url">
                    <div class="mui-media-body">
                        <span v-text="news.name"></span>
                        <div class="news-desc">
                            <p>{{news.price}}</p>
                            <p>功能:{{news.effect}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        

    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[],//新闻列表数据
        }
    },
    created(){
        //发起请求
        this.$ajax.get('http://test.legle.cc:82/getOperation')
        .then(res=>{
            if(res.data.code == 1){
                let result = res.data.operations
                for(let item in result){
            if(result[item].parentid == 0){
                for(let items in result){
                  if(result[items].parentid == result[item].id){
                      for(let lastitem in result){ 
                          if(result[lastitem].parentid == result[items].id){
                              this.newsList.push(result[lastitem])
                          }
                      }
                  }
                }
            }

          }
            }
        })
        .catch(err=>{
            console.log(err);
        })
        console.log(this.newsList)
    }
}

</script>
<style scoped>
.mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
</style>
