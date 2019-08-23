<template>
    <Breadcrumb>
        <BreadcrumbItem> {{ currentPage }} </BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
       props:{
           currentPage: String
       },
       data() {
           return {
               
           }
       }, 

    }
</script>
