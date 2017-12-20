<template>
    <div class="tmpl">
        <div class="body">

        <!-- <nav-bar title="明星面对面"></nav-bar> -->
        <div class="upl">
            <upload :id="id" :multiple="false" :url.sync="urls"  @select-type="onSelectType"  @select-url="onSelectUrl"  :url="wurl"  v-bind:class="{ active: isHide }"></upload>
            <img :src="reply" class="upimg" v-bind:class="{ active: !isHide }"></img>

        </div>

    <!-- MUI 图文列表 -->
        <mt-button type="primary" class="testBtn"  @click="onSub">测试</mt-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            newsList:[],//新闻列表数据
            id:'operationProjectDatas',
                urls:[],
                wurl:[],
                deviceId:'123',
                clientId:'59f6e1064467027c0c1c786f',
                sex:'0',
                file:"",
                isHide:false,
                reply:""
        }
    },
    created(){
        
    },methods:{
        onSelectType (type) {
            console.log(type)
            
          },onSelectUrl(url){
            
            console.log(url)
            this.file = url[0]
            this.reply = url[0]
            this.isHide = true

        },onSub(){
            this.$ajax.post('http://test.legle.cc:82/starTestUrl',{clientId:this.clientId,deviceId:this.deviceId,sex:this.sex,file:this.file})
        .then(res=>{
            if(res.data.code == 1){
                let data = res.data.starsData
                console.log(data)
            }else{
                console.log(res.data.err)
                Toast(res.data.err);
                
            }
            
        }).catch((err) => {
            console.log(err)
        })
        }
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
.upimg{
        max-width: 10rem;
        max-height: 10rem;
        margin-left: -1.6rem;
      }
      .active {
        display: none;
    }
    .body {
        width:100%;
        height: 84%;
        background-size:contain;
        background-image: url(../../static/img/vstartbg.png) !important
    }
    .upl{
        position: absolute;
        top:34%;
        left: 34%;
    }
    .testBtn{
        position: absolute;
        top:54%;
        left: 37%;
        width: 5rem;
    }
</style>
