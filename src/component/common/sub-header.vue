<template>
<article>
    <div class="mui-bar mui-bar-nav" >
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click='goback'
     >返回
      </a>
			<h1 class="mui-title">{{ subtitle }}</h1>
		</div>
</article>
  
</template>

<script>
export default {
  props:['subtitle'],
  data() {
    return {
      title: ''
    };
  },
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
@fontColor: blueviolet;

  div {
    height: 40px;
    line-height: 40px;
    a {
      font-size: 17px !important;
      color: @fontColor;
      margin-top: 4px;
    }
    top: 40px;
}
</style>
