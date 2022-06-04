<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" :fixed="true">
      <template #right> <van-icon name="more" size="20" /> </template
    ></van-nav-bar>

    <!-- 评论的主要内容 -->
    <!-- <PingContext :name="" :author="" :picUrl=""></PingContext> -->
    <PingContext></PingContext>
  </div>
</template>

<script>
import PingContext from "@/components/PingContext.vue";
import { getCommentList } from "@/api";
export default {
  props: {},
  data() {
    return {
      // 获取到的列表数据
      commoentList: [],
    };
  },
  methods: {
    onClickLeft: function () {
      this.$router.back();
    },
  },
  components: {
    PingContext,
  },
  async created() {
    const res = await getCommentList({
      id: this.$route.query.id,
      limit: 20,
      //   offset 分页
    });
    console.log(res);
    this.commoentList = res;
  },
};
</script>

<style scoped lang="scss">
</style>
