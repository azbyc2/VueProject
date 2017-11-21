<template>
  <article>
    <!-- 父传子 -->
    <app-subheader :subtitle="tName"></app-subheader>
    <section class="outSidebox">
      <h1>{{ item.title }}</h1>
      <span>{{ item.add_time| Date }}</span>
      <span>{{ item.click }}次浏览</span>
      <hr>
    <div v-html='item.content'>
    
    </div>
    <app-comment></app-comment>
    </section>
  </article>
</template>


<script>
// 默认导出去 这里写的是该组件的配置
export default {
  data() {
    return {
      tName: "资讯详情",
      item: ""
    };
  },
  methods: {
    getNewsDetail() {
      this.axios.get(this.api.getND + this.$route.params.id).then(res => {
        this.item = res.data.message[0];
      });
    }
  },
  created() {
    this.getNewsDetail();
  }
};
</script>

<style lang='less'>
@fontcolor: blueviolet;
section {
  overflow-x: hidden;
  color: @fontcolor;
  padding:0 10px !important;
  h1 {
    font-size: 20px;
    line-height: 24px;
  }
  span {
    font-size: 10px;
    color: #555;
    margin-right: 16px;
  }
  div {
    p {
      img {
        width: 100% !important;
      }
    }
  }
}
</style>