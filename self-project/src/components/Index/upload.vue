<template>
    <div class="upload-box" @click="toggleUploadStatus">
        <template v-if="file !== null">
            <span v-show="formatError == false">{{ file.name }}</span>
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(file.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(file)"></Icon>
            </div>
        </template>
        <Upload
            
            :before-upload="handleUpload"
            :format="Format"
            :on-format-error="handleFormatError"
            action="//jsonplaceholder.typicode.com/posts/">
            <Icon v-show="file == null" type="ios-camera" class="camera-i" size="50"></Icon>
            <img v-show="file !== null" :src="imgurl" alt="" width="200">
        </Upload>

         <Modal title="View Image" v-model="visible" width='70%'>
            <img :src="imgurl" v-if="visible" style="width: 100%">
        </Modal>
    </div>
</template>
<script>
    export default {
        props:{
            Format: Array
        },
        data () {
            return {
                file: null,
                loadingStatus: false,
                imgurl:'',
                visible:false,
                formatError:false
            }
        },
        methods: {
            handleView (name) {
                this.visible = true
            },
            handleRemove (file) {
                this.imgurl = '';
                this.file = null;
                this.visible = false;
                this.$Notice.success({title:'删除成功！'})

            },
            toggleUploadStatus(e){
                this.formatError = false
            },
            async handleFormatError(file){
                await this.$Notice.warning({
                    title: '选取文件格式有误',
                });
                this.formatError = true
            },
            handleUpload (file) {
                //图片上传前事件
                setTimeout(()=>{
                    if(this.formatError == false){
                        this.file = file //需要传给后台的file文件
                        const reader = new FileReader()
                        reader.readAsDataURL(file)
                        reader.onload = () => {
                            const _base64 = reader.result
                            this.imgurl = _base64 //将_base64赋值给图片的src，实现图片预览
                        }
                        // 返回promise 或者 false 都会停止上传
                        return false//阻止图片继续上传，使得form表单提交时统一上传
                    }
                },0)
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
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
        vertical-align: middle;
    }
    .ivu-upload{
        width: 100%;
        height: 100%;
    }
    .ivu-upload-select {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
    .upload-box:hover .demo-upload-list-cover{
        /* display: block; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>

