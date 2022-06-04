<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- <p class="title">推荐歌单</p> -->
      <van-cell is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #right-icon>
          <van-icon name="ellipsis" size="20" />
        </template>
        <template #title>
          <span class="custom-title">推荐歌单</span>
          <van-icon name="fire-o" color="#ee0a24" />
        </template>
      </van-cell>
      <van-row gutter="6">
        <van-col span="8" v-for="obj in reList" :key="obj.id">
          <van-image width="100%" height="3rem" :src="obj.picUrl" />
          <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>
      <p class="title">最新音乐</p>
      <!-- name author id 向子组件 传值 -->

      <SongItem
        v-for="obj in songList"
        :key="obj.id"
        :name="obj.name"
        :id="obj.id"
        :picUrl="obj.picUrl"
      ></SongItem>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
import { recommendMusicAPI, newMusicAPI } from "@/api";
import SongItem from "@/components/SongItem";
export default {
  data() {
    return {
      reList: [], // 推荐歌单数据
      songList: [], // 最新音乐数据
      isLoading: false, //加载完毕
    };
  },
  methods: {
    onRefresh() {
      setTimeout(async () => {
        // 请求新的数据
        this.reList = [];
        this.songList = [];
        if (this.sendList()) {
          Toast("刷新成功");
        } else {
          Toast("刷新失敗");
        }
      }, 1000);
      // console.log(this.$route);
    },

    // 发送请求获取数据
    sendList: async function () {
      const res = await recommendMusicAPI({
        limit: 6,
      });
      const res2 = await newMusicAPI({
        limit: 20,
      });
      if (res.status === 200) {
        this.reList = res.data.result;
        console.log(res);
      }
      if (res2.status === 200) {
        this.songList = res2.data.result;
        this.isLoading = false;
        return 1;
      }
    },
  },
  async mounted() {
    this.sendList();
  },

  components: {
    SongItem,
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}

.van-cell {
  background-color: #eee;
  color: #333;
}
</style>
