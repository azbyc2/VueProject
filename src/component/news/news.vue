<template>
  <section @click="clickHandler">新闻</section>
</template>


<script>
// 默认导出去 这里写的是该组件的配置
export default {
  // 数据写在这里
  data() {
    return {};
  },

  // 方法写在这里
  methods: {
    clickHandle() {
      alert("新闻被点击！！！");
    }
  }
};
</script>

<style>

</style>