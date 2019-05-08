<template>
    <div>
        <TopNav />
        <HomeList :musicType="todayRecommand" :title="todayRecommand_title" />
        <HomeList :musicType="hotMusicList" :title="hotMusicList_title" />
        <HomeList :musicType="RockMusicList" :title="RockMusicList_title"/>
        <Slider :imgs="imgs"/>
        <TabList/>
        <HomeList :musicType="TuiMusicList" :title="TuiMusicList_title"/>

    </div>
</template>
<script>

import TopNav from "@/components/TopNav"
import HomeList from "./homesub/HomeList"
import Slider from "@/components/Slider"
import TabList from "./homesub/TabList" 

export default {
    name:"Home",
    data(){
        return{
            todayRecommand:{
                method:"baidu.ting.billboard.billList",
                type:1,
                size:6,
                offset:0
            },
            todayRecommand_title:"今日推荐",
            hotMusicList:{
                method:"baidu.ting.billboard.billList",
                type:2,
                size:6,
                offset:0
            },
            hotMusicList_title:"热门歌单",
            RockMusicList:{
                method:"baidu.ting.billboard.billList",
                type:11,
                size:3,
                offset:0
            },
            RockMusicList_title:"摇滚歌单",
            imgs:[
                require("../assets/img/b1.jpg"),
                require("../assets/img/b2.jpg"),
                require("../assets/img/b3.jpg")
            ],
             TuiMusicList:{
                method:"baidu.ting.billboard.billList",
                type:20,
                size:3,
                offset:0
            },
            TuiMusicList_title:"推荐歌单",
        }
    },
    components:{
        TopNav,
        HomeList,
        Slider,
        TabList
    }
}
</script>
<style scoped>

</style>
