<template>
    <div>
        <TopNav />
        Search
    </div>
</template>
<script>
import TopNav from "@/components/TopNav"
export default {
    name:"Search",
    components:{
        TopNav
    },
    mounted(){
        this.$api.search.searchList({
            method:"baidu.ting.search.catalogSug",
            query:"海阔天空"
        })
        .then(res =>{
            console.log(res.data);
            
        })
        
    }
}
</script>
<style scoped>

</style>
