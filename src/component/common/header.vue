<template>
  <header>
      <mt-header @dblclick = 'toTop' fixed title="大买卖"></mt-header>
      <i></i>
  </header>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    toTop(){
      document.body.scrollTop=0;
    }
  }
};
</script>

<style lang='less' scoped>
header {
  position: relative;
  z-index: 999;
  background-color: blueviolet;
  font-size: 20px;
  i {
    display: block;
    height: 40px;
  }
}
</style>
