<template>
<section>
<!-- <mt-navbar v-for="item in PCList" v-bind:key="item.id">
  <mt-tab-item id="item.id">{{ item.title }}</mt-tab-item>
</mt-navbar> -->

<!-- 顶部导航 -->
<div class='nav-out'>
<nav-bar class='nav' v-for="item in PCList" v-bind:key="item.id">
  <a class="mint-tab-item">
    <div class="mint-tab-item-label" id="item.id">{{ item.title }}
    </div>
  </a>
</nav-bar>
</div>

<!-- 内容图片列表 -->
<div class="mui-card" v-for="items in PList" v-bind:key='items.id'>
				<router-link v-bind="{to:`/photo/detail/${items.id}`}">
        <img class="mui-card-header mui-card-media"  :key='items.img_url' v-lazy="items.img_url"></img>
         </router-link>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class='xiangqing'><h4>{{items.title}}</h4></p>
						<p class='zhaiyao' style="color: #333;">{{items.zhaiyao}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<router-link class="more" v-bind="{to:`/photo/detail/${items.id}`}">了解详情</router-link>
				</div>
</div>
</section>
  
</template>


<script>
import { Navbar, TabItem } from "mint-ui";

// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// 默认导出去 这里写的是该组件的配置
export default {
  // 数据写在这里
  data() {
    return {
      PCList: [],
      PList: []
    };
  },
  methods: {
    getPCList() {
      this.axios.get(this.api.getPC).then(rep => {
        this.PCList = rep.data.message;
      });
    },
    getPList() {
      this.axios.get(this.api.getPL + 0).then(rep => {
        this.PList = rep.data.message;
        console.log(this.PList);
      });
    }
  },
  components: {
    "nav-bar": Navbar
  },
  created() {
    this.getPCList();
    this.getPList();
  }
};
</script>

<style lang='less'>
section {
  .nav-out {
    overflow: hidden;
    height: 46px;
    position: fixed;
    top: 40px;
    z-index: 99;
    .nav {
      width: 100px;

      float: left;
    }
  }

  .mui-card-header {
    width: 100%;
  }
  .xiangqing {
  }
  .zhaiyao {
    overflow: hidden;
    text-indent: 2rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .more {
    color: blueviolet;
  }
}
</style>