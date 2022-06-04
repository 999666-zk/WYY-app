<template>
  <div>
    <!-- <van-nav-bar :title="activeTitle" fixed title=""></van-nav-bar> -->
    <van-nav-bar
      :title="activeTitle"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    >
      <template #right>
        <van-icon name="search" size="20" @click="onClickRight" /> </template
    ></van-nav-bar>

    <div class="main">
      <!-- 二级路由-挂载点 -->
      <router-view></router-view>
    </div>
    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      // test
      count: 0,
      activeTitle: this.$route.meta.title, // "默认"顶部导航要显示的标题 (默认获取当前路由对象里的meta中title值)
    };
  },
  // 路由切换 - 侦听$route对象改变
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title; // 提取切换后路由信息对象里的title显示
    },
  },
  methods: {
    onClickRight: function () {
      if (this.$route.fullPath !== "/layout/search") {
        this.$router.push("/layout/search");
      }
    },
    onClickLeft: function () {
      if (this.$route.fullPath === "/layout/home") {
        Toast("已经到头了");
      } else {
        this.$router.go(-1);
      }
      // this.$router.push("/layout/home");
    },
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>