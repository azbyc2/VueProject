<template>
<article>

    <div class="mint-cell-wrapper">
      <div class="mint-cell-title"><!----> <span class="mint-cell-text"><h4>提交评论</h4></span> <!----></div> <div class="mint-cell-value"><span></span></div>
    </div>
      <textarea id='tc' placeholder="请输入您的评论..." rows="4" class="mint-field-core" v-model='userComment'></textarea>
    <button class="mint-button mint-button--primary mint-button--large bgcChange" @click='postReview'> <!----> <label class="mint-button-text">发表</label></button>
  



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
    <button class="mint-button mint-button--danger mint-button--large is-plain borderColorChange" @click='addMore'><!----> <label class="mint-button-text " >加载更多</label></label></button>
</article>
  
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
      userComment: "",
      artid: "",
      pageindex: 1,
      isEmpty: false //后台数据是否为空
    };
  },
  methods: {
    postReview() {
      console.log(this.userComment);

      this.axios
        .post(
          this.api.postRV + this.$route.params.id,
          // {
          //   artid: this.$route.params.id,
          //   content: this.userComment
          // },
          // 能以对象的方式发送，而是以字符串的方式传递。anxios不自动帮你转字符串所以要自己手动转
          `artid=${this.$route.params.id}&content=${this.userComment}`
        )
        .then(res => {
          this.getReview(1);
          this.userComment = "";
        });
    },
    getReview(pageindex) {
   
      if (!this.isEmpty) {
           console.log(1);
      
        this.axios
          .get(this.api.getRV + this.$route.params.id, {
            params: {
              pageindex: pageindex
            }
          })
          .then(res => {
            this.reviews=res.data.message;
            // 如果数据没有了，就不再加载
            if (res.data.message.length == 0) {
              this.isEmpty = true;
            }
          });
      }
    },
    addMore() {
      this.pageindex++;
      this.getReview(this.pageindex);
    }
  },
  created() {
    this.getReview(1);
  }
};
</script>

<style lang='less'>
@Maincolor: rebeccapurple;
article {
  #tc {
    border: 1px solid #cecece;
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
