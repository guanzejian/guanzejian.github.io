<template>
    <div class="upload-box">
        <template v-if="file !== null">
        <div class="demo-upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(file.name)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleRemove(file)"></Icon>
        </div>
        </template>
        <Upload
            :before-upload="handleUpload"
            action="//jsonplaceholder.typicode.com/posts/">
            <!-- <Button icon="ios-cloud-upload-outline">{{ uploadId }}</Button> -->
          
            <Icon v-show="file == null" type="ios-camera" size="50"></Icon>
            <img v-show="file !== null" :src="imgurl" alt="" width="200">
        </Upload>
        <!-- <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div> -->
    </div>
</template>
<script>
    export default {
        props:{
            uploadId:String
        },
        data () {
            return {
                file: null,
                loadingStatus: false,
                imgurl:''
            }
        },
        methods: {
            handleView (name) {
                console.log(name)
                // this.imgName = name;
                // this.visible = true;
            },
            handleRemove (file) {
                console.log(file)
                // const fileList = this.$refs.upload.fileList;
                // this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleUpload (file) {
                console.log(file)
                //图片上传前事件
                this.file = file //需要传给后台的file文件
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                    const _base64 = reader.result
                    this.imgurl = _base64 //将_base64赋值给图片的src，实现图片预览
                }
                return false//阻止图片继续上传，使得form表单提交时统一上传
  
            },
            // upload () {
            //     this.loadingStatus = true;
            //     setTimeout(() => {
            //         this.file = null;
            //         this.loadingStatus = false;
            //         this.$Message.success('Success')
            //     }, 1500);
            // }
        }
    }
</script>
<style>
.upload-box{
   width: 100%;
   position: relative;
}
.ivu-upload-select {
    display: inline-block;
    width: 100%;
    height: 100%
}

 .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>

