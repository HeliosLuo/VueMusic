<template>
  <div class="play">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-shouye left"></i>
        </router-link>
        <div class="music-info">
          <!-- {{ this.$route.params.music_id }} -->
          <!-- {{music_id}} -->
          <p v-if="songinfo.songinfo">{{ songinfo.songinfo.title }}</p>
          <p v-if="songinfo.songinfo" class="author">{{ songinfo.songinfo.author }}</p>
        </div>
        <a href="#">
          <i class="iconfont icon-sousuo right"></i>
        </a>
      </div>
    </div>

    <div class="song-info">
      <div class="song-info-img">
        <img v-if="songinfo.songinfo" :src="songinfo.songinfo.pic_big">
      </div>
      <div class="iconbox">
        <i class="iconfont icon-shoucang2 left"></i>
        <i class="box"></i>
        <i class="iconfont icon-xiazai right"></i>
      </div>
    </div>
	<div class="song">
      <audio ref="player" v-if="songinfo.bitrate" :src="songinfo.bitrate.file_link" controls></audio>
    </div>
  </div>
</template>
<script>
export default {
  name: "Player",
  data() {
    return {
      songinfo: {}
    };
  },
  props: ["music_id"],
  mounted() {
    this.$axios
      .get(this.Baidu_Host + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.song.play",
          songid: this.music_id
        }
      })
      .then(res => {
        console.log(res.data);
        this.songinfo = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.header {
  padding: 15px;
}

.music-info {
  flex: 1;
  font-size: 20px;
}

.title {
  display: flex;
  text-align: center;
}

.left {
  font-size: 30px;
}

.ca {
  color: red;
}

.right {
  font-size: 30px;
}

.song-info {
  padding: 15px;
}

.song-info-img {
  text-align: center;
}

.song-info-img img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
  margin-top: 10px;
  min-height: 50px;
}

.iconbox {
  display: flex;
  margin-top: 30px;
}

.iconbox .box {
  flex: 1;
}

.song {
  width: 100%;
  text-align: center;
}

.song audio {
  width: 80%;
}

.active {
  color: #222;
}

.author {
  font-size: 12px;
  color: #999;
}
</style>
