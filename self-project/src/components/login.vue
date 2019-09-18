<template>
    <div class="login-box">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem class="flex-box flex-c">
                <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        name:"login",
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        this.$Message.success('Success!');
                        this.$router.push("/companyinfomanage")
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
<style scoped>
.login-box{
    width: 400px;
    border: 1px solid #ddd;
    margin: 200px auto;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ddd;
}
i{
    color: #333;
    
}
</style>
