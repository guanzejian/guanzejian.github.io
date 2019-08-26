export default [
    {
       path:'/companyinfomanage',
       name:'company',
       component: ()=> import('./components/companyInfoManage.vue') 
    },
    {
        path:'/loadmessage',
        name:'loadmessage',
        component: ()=> import('./components/loadmessage.vue') 
     }
]