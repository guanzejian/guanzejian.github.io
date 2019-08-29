<template>
    <div class="container">
        <Form ref="formData" :model="formData" :rules="ruleInline" label-position="right" :label-width="150">
        <div class="contents">
            <!-- <span class="label-span">
            单位性质
            </span> -->
            <FormItem label="单位性质" prop="unitnature" style="display:inline-block">
                <Input placeholder="Enter something..." v-model="formData.unitnature" style="width: auto" clearable />
            </FormItem>
            <!-- <span class="label-span">
            单位所属区域
            </span> -->
            <FormItem label="单位所属区域" prop="unitarea" style="display:inline-block">
                <Input placeholder="Enter something..." v-model="formData.unitarea" style="width: auto" clearable />
            </FormItem>
        </div>
        <div class="contents">
            <span class="label-span">
            单位证件类型
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
            <span class="label-span">
            单位证件号码
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
        </div>

        <div class="contents">
            <span class="label-span">
            统一社会信用代码/注册号/组织机构代码
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
            <span class="label-span">
            主办单位证件住所
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
        </div>
        <div class="contents">
            <span class="label-span">
            负责人名称
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
            <span class="label-span">
            负责人证件类型
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
        </div>
        <div class="contents">
            <span class="label-span">
            负责人证件号码
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
            <span class="label-span">
            经营期限至
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
        </div>
        <div class="contents">
            <span class="label-span">
            联系电话
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
            <span class="label-span">
            传真
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
        </div>
        <div class="contents">
            <span class="label-span">
                联系邮箱
            </span>
            <Input placeholder="Enter something..." style="width: auto" clearable />
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
                    <uploadImg :Format="format" ref="files1"></uploadImg>
                </dt>
                <dd>公司的营业执照副本照片</dd>
            </dl>
            <dl class="flex-box flex-col flex-col-c">
                <dt><uploadImg uploadId="上传" ref="files2"></uploadImg></dt>
                <dd>法人身份证正面照片</dd>
            </dl>
            <dl class="flex-box flex-col flex-col-c">
                <dt><uploadImg uploadId="上传" ref="files3"></uploadImg></dt>
                <dd>法人身份证反面照片</dd>
            </dl>
        </div>
        <Button type="success" long style="width:800px;margin:50px 0;" @click.native="upload('formData')" :loading="loadingStatus">{{ loadingStatus ? '正在上传' : '提交' }}</Button>
        </Form>
    </div>
</template>
<script>
import uploadImg from "./Index/upload.vue"
export default {
    data() {
        return {
            format:['jpg','jpeg','png'],
            loadingStatus:false,
            fileList:[],
            formData:{
                unitnature:"",
                unitarea:""
            },
            ruleInline:{
                unitnature:[
                    {required: true, message:"请输入单位性质！" , trigger: 'blur'}
                ],
                unitarea:[
                    {required: true, message:"请输入单位所属区域！" , trigger: 'blur'}
                ]
            }            
        }
    },
    created() {

    },  
    methods: {
        upload(name){
            this.$refs[name].validate((valid) => {
                console.log(valid)  // 布尔值 ，成功为true 
                if (valid) {
                    this.$Notice.success({
                        title: 'Notification title',
                    });
                } else {
                    // this.$Message.error('Fail!');
                }
            })
            let file1 = this.$refs.files1.file,
                file2 = this.$refs.files2.file,
                file3 = this.$refs.files3.file;
            if(file1 == null || file1 == undefined || file2 == null || file2 == undefined || file3 == null || file3 == undefined){
                this.$Message.warning('请将照片上传完整！');
            }else{
                this.loadingStatus = true
                setTimeout(()=>{this.loadingStatus = false},1500)
                    this.fileList.push(this.$refs.files1.file);
                    this.fileList.push(this.$refs.files2.file);
                    this.fileList.push(this.$refs.files3.file);
                    console.log(this.fileList);
            }
           
        }
    },
    components:{
        uploadImg
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
    border-radius: 8px;
    text-align: center;
    line-height: 100px;
    border: 1px dashed #ccc;
    overflow: hidden;
}
.ivu-form-item {
    margin: 0
}

</style>