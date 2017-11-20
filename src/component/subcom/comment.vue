<template>
<article>

    <div class="mint-cell-wrapper"><div class="mint-cell-title"><!----> <span class="mint-cell-text"><h4>提交评论</h4></span> <!----></div> <div class="mint-cell-value"><span></span></div></div>

    <textarea placeholder="请输入..." rows="4" class="mint-field-core" v-model='userComment'></textarea>
    <button class="mint-button mint-button--primary mint-button--large" @click='postReview'> <!----> <label class="mint-button-text">发表</label></button>
  



<!-- 评论区 -->
<div>
    <!-- 评论头 -->
  <div class="mint-cell-wrapper"><div class="mint-cell-title"><!----> <span class="mint-cell-text"><h4>评论列表</h4></span> <!----></div> <div class="mint-cell-value"><span>{{ reviews.length }}条评论</span></div></div>
  <!-- 评论列表 -->
    <ul class='rDistrct'>
      <li v-for="item in reviews" v-bind:key="item.id">
        <h5>{{ item.content }}</h5>
        <span>{{ item.add_time | Date }}</span>
        <span>{{ item.user_name }}</span>
      </li>
    </ul>
</div>
    <button class="mint-button mint-button--danger mint-button--large is-plain" @click='addMore'><!----> <label class="mint-button-text" >加载更多</label></label></button>
</article>
  
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      userComment: "",
      artid: "",
      pageindex: 1
    };
  },
  methods: {
    postReview() {
      console.log(this.userComment);

      this.axios
        .post(
          this.api.postRV + this.$route.params.id,
          {
            artid: this.$route.params.id,
            content: this.userComment
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => this.getReview(1));
    },
    getReview(pageindex) {
      this.axios
        .get(this.api.getRV + this.$route.params.id, {
          params: {
            pageindex: pageindex
          }
        })
        .then(res => {
          this.reviews = res.data.message;
          console.log(res.data.message.length);
        });
    },
    addMore(){
      this.pageindex++;
      this.getReview(this.pageindex)
    }
  },
  created() {
    this.getReview(1);
  }
};
</script>

<style lang='less'>
@Maincolor:rebeccapurple;
article {
   .mint-button--primary{
      background-color: @Maincolor!important;
   }
   .mint-button--danger.is-plain {
    border: 1px solid @Maincolor!important;
    color:@Maincolor
}

  .rDistrct {
    margin: 0px;
    padding: 0 6px;

    li {
      list-style: none;
      border-bottom: 1px solid #cecece;
      padding: 4px 0;
      &:first-child {
        border-top: 1px solid #555;
      }
      h5 {
        font-size: 15px;
        font-weight: normal;
        color: black;
      }
      span {
        margin-right: 226px;
        color: #555;
      }
    }
  }
}
</style>
