export default [
   {
      path: '/',
      redirect: {name: 'hello'}
   },
   {
      path:'/hello',
      name:"hello",
      component:() => import('./components/HelloWorld.vue')
   },
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
