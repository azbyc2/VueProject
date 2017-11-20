<template>
  <article>
    <!-- 父传子 -->
    <app-subheader :subtitle="tName"></app-subheader>
    <section>
      <h1>{{ item.title }}</h1>
      <span>{{ item.add_time| Date }}</span>
      <span>{{ item.click }}次浏览</span>
      <hr>
      <div  class="sImg">
      
            <img class="preview-img" v-for="(item, index) in imgs" :src="item.src" height="100" @click="$preview.open(index, imgs)" v-bind:key='item.src'>  
      </div>
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
      tName: "图片详情",
      item: "",
      imgs: []
    };
  },
  methods: {
    getPhotosDetail() {
      this.axios.get(this.api.getPD + this.$route.params.id).then(res => {
        //   console.log(res);
        this.item = res.data.message[0];
      });
    },
    getImgs() {
      this.axios.get(this.api.getPS + this.$route.params.id).then(res => {
        res.data.message.forEach(function(v) {
          v.w = 600;
          v.h = 400;
        });
        this.imgs = res.data.message;
      });
    }
  },
  components: {
    "app-subheader": sHeadComponent,
    "app-comment": comment
  },
  created() {
    this.getPhotosDetail();
    this.getImgs();
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
  margin: 50px 0 80px 0;
  padding: 0 10px !important;
  .sImg {
    display: block;
    height: auto;
    overflow: hidden;
    margin-left: 10px;
    img {
      width: 100px;
      height: 100px;
      float: left;
      margin: 4px;
    }
  }
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