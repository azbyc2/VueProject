<template>
  <article>
    
 <app-subheader :subtitle="tName"></app-subheader>

      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" v-bind:key="item.id">
					<router-link v-bind="{to:`/news/detail/${item.id}`}">
						<img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
						<div class="content">
              	<p> {{ item.zhaiyao }}</p>
             
                  <span class="mui-ellipsis time">发表时间：{{ item.add_time | Date}}</span>
                  <span class="click">点击数：{{ item.click }}</span>
            
						</div>
					</router-link>
				</li>
			</ul>

  </article>
</template>


<script>
import sHeadComponent from "../common/sub-header.vue";
// 默认导出去 这里写的是该组件的配置
export default {
  data() {
    return {
      tName: "图文资讯",
      newsList: []
    };
  },
  methods: {
    getNewsList() {
      this.axios.get(this.api.getNL).then(rep => {
        this.newsList = rep.data.message;
      });
    }
  },
    components: {
    "app-subheader": sHeadComponent
  },
  created() {
    this.getNewsList();
  }
};
</script>

<style lang='less' scoped>
@fontColor: blueviolet;
article {
  
  ul {
    top: 40px;
    height: 100%;
    margin-bottom: 50px;
    li {
      .content {
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: black;
          font-size: 16px;
        }
        margin-top: 2px;
        line-height: 16px;
      }
      span {
        font-size: 10px;
        color: @fontColor;
        line-height: 35px;
      }
      .click {
        margin-left: 110px;
      }
    }
  }
}
</style>