<template>
    <div  class="upload" ref="doUp">
      <div class="oss_file">
        <input type="file" :id="id" :multiple="multiple" @change="doUpload" />
      </div>
      <!-- <div v-for="(item,index) in url">
        <img v-bind:src="item" class="image">
    </div> -->
          


    </div>
</template>

<script>

  export default{
    props:{
      multiple:{
        type: Boolean,
      },
      id:{
        type: String,
      },
      bucketUrl:{
        type: String,
      },url: Array,text: Array
    },
    data(){
      return{
        region:'oss-cn-shenzhen',
        bucket:'azz-test',
        selectType: 0,
        targetFlag:false,
        input:"",
        loading:false
      }
    },
    created(){
      // console.log("props",this.url)
      // console.log("text",this.text)
    },
    methods:{
      handleClose(item){
        this.$message({
            showClose: true,
            message: '此功能还没开放哦',
            type: 'warning'
        });
      },focusInput(e){
        e.path[0].value = ""
      },
      async doUpload(e){
        this.loading = true

        this.getid = e.target.id
        const _this = this;
        
        //发起请求
        this.$ajax.get('http://test.legle.cc:82/getStsQc')
        .then(res=>{
            let result = res.data
            this.selectType = e.target.id
        this.$emit('select-type', e.target.id)
          const client = new OSS.Wrapper({
            region:_this.region,
            accessKeyId: result.token.AccessKeyId,
            accessKeySecret: result.token.AccessKeySecret,
            stsToken: result.token.SecurityToken,
            bucket:_this.bucket
          })

          const files = document.getElementById(_this.id);
            const resultUpload = []   
          if(files.files){
            const fileLen = document.getElementById(_this.id).files
            //随机
            let len =  32;
            var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
            var maxPos = chars.length;
            var pwd = '';
            for (let i = 0; i < len; i++) {
            　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            for (let i = 0; i < fileLen.length; i++) {
              const file = fileLen[i]

              const storeAs = "admin/"+pwd+file.name

              if(this.selectType == "videoUrl"){
                if(storeAs.indexOf(".mp4") != "-1"){
                  // console.log(storeAs.indexOf(".mp4"))
                }else{
                  this.loading = false
                  return this.$message({
                    message: '只能上传mp4',
                    type: 'warning'
                  });

                }
              }
              client.multipartUpload(storeAs, file, {

              }).then((results) => {

                if(results.res){

                  _this.url.push(results.res.requestUrls[0].split("?")[0]);
                  // console.log('1',results.res.requestUrls[0].split("?")[0])
                  // console.log('1',results.res.requestUrls[0])
                  // _this.url = resultUpload
                  // console.log("url",_this.url)
                  // console.log('13541351',this.url)
                console.log("results.res.requestUrls",results.res.requestUrls[0].split("?")[0])
                console.log("这是ref",_this.$refs.doUp.style.backgroundImage)
                _this.$refs.doUp.style.backgroundImage
= results.res.requestUrls[0].split("?")[0]
                  // 
                }else{
                  if(results.name === file.name){
                    _this.url.push(this.bucketUrl+ file.name)
                    // resultUpload.push(url);
                  }
                }
                // _this.url = resultUpload
                // console.log("last url",_this.url)
                this.$emit('select-url', _this.url)
                this.loading = false
                
              }).catch((err) => {
                console.log(err)
              })
            }
            

          } 
        })
        .catch(err=>{
            console.log(err);
        })
        // console.log(result)
          
      }
    }
  }
</script>
<style type="text/css">
  .oss_file {
    height: 100px;
    width: 100%;
    /*margin: -2rem 0 1rem 8rem;*/

  }
  .oss_file  input {
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  
  .finish_room{
      width: 430px;
      height: auto;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100px;
    height: 100px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .close{
    width: 100%
  }
  .el-tag .el-icon-close {
    right: -32px;
}
.upload{
        border: 1px solid #ddd;
        width: 100px;
        height: 100px;
        border-radius: 4px;
        background: url('../../static/img/add_upload.png');
        background-size: contain;
        float:left;
      }
</style>