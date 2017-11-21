<template>
  <article class="goods-detail outSidebox">
     <app-subheader :subtitle="tName"></app-subheader>
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header" v-html="goodsMsg.title">小米666</div>
       <!-- 轮播图 -->
      <lunbos :lunbos='lunbos'></lunbos>
        <!-- 价格 -->    
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥{{goodsInfo.market_price}}</s> <span>销售价: </span> <em>￥{{goodsInfo.sell_price}}</em> </div>
        <div> <span>购买数量：{{ goodsInfo.stock_quantity }}</span>
          <!--数字输入框 -->
          <div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus">-</button>
          	<input class="mui-input-numbox" type="number">
          	<button class="mui-btn mui-btn-numbox-plus">+</button>        
          </div>
          <div>
            
            <h4>产品参数</h4>
            <hr>
            <p>商品货号：{{goodsInfo.goods_no}}</p>
            <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
            <p>上架时间：{{goodsInfo.add_time | date}}</p>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn borderColorChange mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="borderColorChange mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
      <!-- 利用value值选取子元素 -->
		  <mt-navbar v-model='navbarSelector' >
			  <mt-tab-item id="comment" class="cChange">商品评论</mt-tab-item>
			  <mt-tab-item id="intro" class="cChange">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容 -->
		  <mt-tab-container v-model="navbarSelector" > 
			  <mt-tab-container-item id='comment'>
			    <app-comment  ></app-comment>
			  </mt-tab-container-item>
		
        <mt-tab-container-item id='intro'>
			    <mt-cell v-html="goodsMsg.content"></mt-cell>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>

  </article>
</template>

<script>
export default {
  data() {
    return {
      navbarSelector: "comment",
      tName: "商品详情",
      goodsMsg: {},
      goodsInfo: {},
      id: this.$route.params.id,
      showID: "",
      lunbos: [],
      select: ""
    };
  },
  methods: {
    getGoodsDetail() {
      this.axios.get(this.api.getGD + this.id).then(res => {
        this.goodsMsg = res.data.message[0];
        // console.log(res.data.message);
      });
    },
    getGoodsInfo() {
      this.axios.get(this.api.getGI + this.id).then(res => {
        this.goodsInfo = res.data.message[0];
        // console.log(res.data.message);
      });
    },
    getLunbos() {
      this.axios.get(this.api.getGH + this.id).then(res => {
        this.lunbos = res.data.message;
      });
    }
  },
  created() {
    this.getGoodsDetail();
    this.getGoodsInfo();
    this.getLunbos();
  }
};
</script>

<style lang="less">
@height: 260px;
.goods-detail .mint-tab-item.is-selected {
  border-bottom-color: rebeccapurple !important;
}

.mint-tab-item-label {
  color: blueviolet !important;
}
.mint-swipe {
  height: 355px !important;
  img {
    width: 100%;
  }
}
.goods-detail {
  .mui-card-content {
    .price {
      color: rgb(51, 51, 51);
      margin-bottom: 4px;
      span {
        margin-left: 6px;
      }
      em {
        font-size: 18px;
        color: red;
      }
    }
  }
  .mui-card-footer {
    div {
      width: 100%;
    }
    .mui-btn {
      padding: 8px 0;
      font-size: 16px;
    }
  }
  .mint-tab-item {
    &.is-selected {
      margin-bottom: 0;
      border-bottom: 3px solid #2ce094;
      color: #2ce094;
    }
  }
  .mint-tab-item-label {
    font-size: 18px;
    color: #2ce094;
  }
  .mui-card {
    .mint-cell table {
      width: 100% !important;
    }
    .gomeImgLoad {
      width: 100% !important;
    }
  }
}
</style>