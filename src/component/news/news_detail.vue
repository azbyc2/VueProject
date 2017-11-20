<template>
  <article>
    <!-- 父传子 -->
    <app-subheader :subtitle="tName"></app-subheader>
    <section>
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
import sHeadComponent from "../common/sub-header.vue";
import comment from "../subcom/comment.vue";
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
  components: {
    "app-subheader": sHeadComponent,
    "app-comment": comment
  },
  created() {
    this.getNewsDetail();
  }
};
</script>

<style lang='less'>
@fontcolor: blueviolet;
section {
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100%;
  color: @fontcolor;
  margin: 50px 0 10px 0;
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