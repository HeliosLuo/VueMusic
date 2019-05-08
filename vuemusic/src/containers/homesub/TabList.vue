<template>
  <div>
    <TabListView v-if="tabsList.length>0" :tabsList="tabsList"/>
  </div>
</template>
<script>
import TabListView from "@/components/TabListView"
export default {
  name: "TabList",
  data() {
    return {
        tabsList:[]
    };
  },
  components:{
    TabListView
  },
  mounted() {
      const _this=this;
    function newsMusicList() {
     return _this.$axios.get(_this.Baidu_Host + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.billboard.billList",
          type: 1,
          size: 5,
          offset: 0
        }
      });
    }
    function hotMusicList() {
     return _this.$axios.get(_this.Baidu_Host + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.billboard.billList",
          type: 2,
          size: 5,
          offset: 0
        }
      });
    }
    function classicalMusicList() {
      return _this.$axios.get(_this.Baidu_Host + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.billboard.billList",
          type: 22,
          size: 5,
          offset: 0
        }
      });
    }
    this.$axios.all([newsMusicList(),hotMusicList(),classicalMusicList()])
    .then(this.$axios.spread(function(newsList,hotList,classicalList){
        _this.tabsList.push(newsList.data,hotList.data,classicalList.data)
        // console.log(_this.tabsList);
        
    }))
  }
};
</script>
<style scoped>
</style>


