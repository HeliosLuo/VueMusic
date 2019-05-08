<template>
  <div>
    <TopNav/>Artists
  </div>
</template>
<script>
import TopNav from "@/components/TopNav";
export default {
  name: "Artists",
  components: {
    TopNav
  },
  mounted() {
      this.getArtistInfo();
  },
  methods: {
    getArtistInfo() {
      this.$api.artist
        .artistInfo({
          method: "baidu.ting.artist.getInfo",
          tinguid: 2517
        })
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>
<style scoped>
</style>
       
            