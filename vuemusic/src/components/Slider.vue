<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in imgs" :key="index">
      <div class="banner">
        <img :src="item" alt>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 3000
        }
      }
    };
  },
  props: {
    imgs: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {}
};
</script>
<style scoped>
.banner {
  padding: 10px;
}

.banner img {
  border-radius: 10px;
}
</style>
