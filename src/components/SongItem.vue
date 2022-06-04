<template>
  <van-cell center :title="name" :label="author + ' - ' + name" :icon="picUrl">
    <!--   @click="$router.push({ path: '/pinglun', query: { id: id } })" -->
    <!-- <van-image width="10rem" height="10rem" fit="cover" :src="picUrl" /> -->
    <template #right-icon>
      <van-icon name="play-circle-o" size="0.6rem" @click="playFn" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String, // 歌名
    author: String, // 歌手
    id: Number, // 歌曲id (标记这首歌曲-为将来跳转播放页做准备)\
    picUrl: String,
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id, // 歌曲id, 通过路由跳转传递过去
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}

.van-cell {
  display: flex;
  justify-content: space-between;
}

.van-icon__image {
  width: 1.2rem !important;
  height: 1.2rem !important;
  display: block;
  // width: 1em;
  // height: 1em;
  object-fit: contain;
}
.van-cell__left-icon {
  height: max-content !important;
  padding: 0.1rem;
  border-radius: 0.08rem;
  background: white;
}
</style>
