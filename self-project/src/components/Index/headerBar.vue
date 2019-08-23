<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            user
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                admin
            </template>
            <!-- <MenuGroup title=""> -->
                <MenuItem name="3-1">个人信息</MenuItem>
                <MenuItem name="3-2">退出</MenuItem>
            <!-- </MenuGroup> -->
        </Submenu>
    </Menu>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
