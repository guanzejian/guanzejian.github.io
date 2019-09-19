<template>
    <div class="container">
        <p class="uploadExplain">上传说明： xxxxxxxxxxxx</p>
        <p class="uploadExplain">导入格式下载： XXXX.xlsx</p>
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
    },
    created() {
        console.log(this.$store.state.token)
        this.$store.commit('change',10)
        console.log(this.$store.state.token)
    },
}
</script>

<style scoped>
.container{
    padding-left: 150px;
}
.uploadExplain{
    margin: 20px;
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
