<template>
    <div class="container">
        <p>上传说明： xxxxxxxxxxxx</p>
        <p>导入格式下载： XXXX.xlsx</p>
        <div class="upload-content">
            <Upload :Format="format"></Upload>
        </div>
    </div>
</template>
<script>
import Upload from "./Index/upload"
export default {
    data() {
        return {
            format:['xlsx']
        }
    },
    components:{
        Upload
    }
}
</script>

<style scoped>
.container{
    padding-left: 150px;
    line-height: 50px;
}
.upload-content{
    width: 260px;
    height: 140px;
    border: 1px dashed #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    line-height: 140px;
}

.ivu-upload-select {
    display: inline-block;
    width: 100% ;
    height: 100%
}
</style>
