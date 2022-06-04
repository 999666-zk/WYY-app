<template>
  <van-cell center title="name" label="lalall" icon="chat-o">
    <!-- <van-image width="10rem" height="10rem" fit="cover" :src="picUrl" /> -->
    <template #right-icon> time </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String,
    author: String,
    picUrl: String,
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
.van-cell {
  border-bottom: 1px solid lightgray;
  margin-top: 1.4rem;
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
