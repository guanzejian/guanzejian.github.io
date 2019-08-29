<style scoped>
    .layout{
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
    transition: all .3s;
    }
    .rotate-icon{
        /* transform: rotate(-90deg); */
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .ivu-layout.ivu-layout-has-sider {
        height: 100vh
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-0" theme="dark" width="auto" :class="menuitemClasses">
                    <router-link to="/" name='1-0' v-show="false"></router-link>
                    <MenuItem name="1-1" @click.native="getBread"  class="flex-box flex-col-c"  to="/companyinfomanage">
                        <Icon type="ios-navigate"></Icon>
                        <span>企业信息管理</span>
                    </MenuItem>
                    <MenuItem name="1-2" @click.native="getBread" class="flex-box flex-col-c" to="/loadmessage">
                        <Icon type="ios-search"></Icon>
                        <span>员工资料上传</span>
                    </MenuItem>
                    <MenuItem name="1-3" class="flex-box flex-col-c">
                        <Icon type="ios-settings"></Icon>
                        <span>当前用户列表</span>
                    </MenuItem>
                    <MenuItem name="1-4" class="flex-box flex-col-c">
                        <Icon type="ios-settings"></Icon>
                        <span>任务单上传</span>
                    </MenuItem>
                    <MenuItem name="1-5" class="flex-box flex-col-c">
                        <Icon type="ios-settings"></Icon>
                        <span>任务单付款</span>
                    </MenuItem>
                    <MenuItem name="1-6" class="flex-box flex-col-c">
                        <Icon type="ios-settings"></Icon>
                        <span>任务单付款</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="flex-box flex-col-c flex-b layout-header-bar">
                    <div class="flex-box flex-col-c">
                        <Icon @click.native="collapsedSider" :style="{margin: '0 20px'}" type="md-menu" size="36"></Icon>
                        <img style="width:120px" src="../assets/images/logo_01.png" alt="">
                    </div>
                    <headerBar></headerBar>
                </Header>
                <Content :style="{margin: '5px', background: '#fff', minHeight: '260px' , overflow: 'auto' }">
                    <breadCrumb :currentPage="bread"></breadCrumb>
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>

import headerBar from "./Index/headerBar"
import breadCrumb from "./Index/breadcrumb"
    export default {
        data () {
            return {
                isCollapsed: false,
                bread:"企业信息管理"
            }
        },
        computed: {
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            getBread(e){
                this.bread = e.path[0].innerText
            }
        },
        components:{
            headerBar,
            breadCrumb,
        },
        created() {


        },
    }
</script>
