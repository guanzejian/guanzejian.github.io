<template>
    <div class="container">
        <form action="">
        <div class="contents">
            <span class="label-span">
            单位性质
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
            <span class="label-span">
            单位所属区域
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
        </div>
        <div class="contents">
            <span class="label-span">
            单位证件类型
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
            <span class="label-span">
            单位证件号码
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
        </div>

        <div class="contents">
            <span class="label-span">
            统一社会信用代码/注册号/组织机构代码
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
            <span class="label-span">
            主办单位证件住所
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
        </div>
        <div class="contents">
            <span class="label-span">
            负责人名称
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
            <span class="label-span">
            负责人证件类型
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
        </div>
        <div class="contents">
            <span class="label-span">
            负责人证件号码
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
            <span class="label-span">
            经营期限至
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
        </div>
        <div class="contents">
            <span class="label-span">
            联系电话
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
            <span class="label-span">
            传真
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
        </div>
        <div class="contents">
            <span class="label-span">
                联系邮箱
            </span>
            <Input placeholder="Enter something..." style="width: auto" />
        </div>
        <div class="contents">
            <span class="label-span">
                详细地址
            </span>
            <Input placeholder="Enter something..." style="width: 480px" />
        </div>
        <div class="contents">
            <span class="label-span">
                主要行业应用
            </span>
            <Input placeholder="Enter something..." style="width: 480px" />
        </div>
        <div class="contents">
            <span class="label-span">
                主营业务
            </span>
            <Input placeholder="Enter something..." style="width: 480px" />
        </div>
        <div class="flex-box flex-a infomana-imgs">
            <dl class="flex-box flex-col flex-col-c">
                <dt>
                    <UploadImg></UploadImg>
                </dt>
                <dd>公司的营业执照副本照片</dd>
            </dl>
            <dl class="flex-box flex-col flex-col-c">
                <dt> <Icon type="ios-camera" size="30"></Icon></dt>
                <dd>法人身份证正面照片</dd>
            </dl>
            <dl class="flex-box flex-col flex-col-c">
                <dt> <Icon type="ios-camera" size="30"></Icon></dt>
                <dd>法人身份证反面照片</dd>
            </dl>
        </div>

        </form>
    </div>
</template>
<script>

import UploadImg from "./Index/upload"
export default {
    created() {
    
    },  
    methods: {

    },
    components:{
        UploadImg
    }
}
</script>

<style scoped>
.container{
    padding: 20px 0 50px 200px;
}
.contents{
    margin: 25px 0;
}

.label-span{
    display: inline-block;
    width: 150px;
    height: 25px;
    word-break: break-all;
    text-align: right;
    vertical-align: middle;
    padding-right: 10px;
}
.infomana-imgs{
    width: 800px;
}
.infomana-imgs dl dt{
    width: 200px;
    height: 100px;
    background: #a6a6a6;
    border-radius: 8px;
    text-align: center;
    line-height: 100px;
    overflow: hidden;
}
</style>