<template>
    <div class="yi">
        <ListView v-if="song_list.length>0" :songList="song_list" :title="title"/>
    </div>
</template>
<script>

import ListView from "@/components/ListView"

export default {
    name:"HomeList",
    data(){
        return{
            song_list:[]
        }
    },
    components:{
        ListView
    },
    props:{
        musicType:{
            type:Object,
            default:function(){
                return{}
            }
        },
        title:{
            type:String,
            default:"歌曲列表"
        }
    },
    mounted(){
        this.$axios.get(this.Baidu_Host+"/v1/restserver/ting",{
            params:this.musicType
        })
        .then(res => {
            this.song_list = res.data.song_list
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>
<style scoped>
</style>
