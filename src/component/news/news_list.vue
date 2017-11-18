<template>
  <section>新闻列表</section>
</template>


<script>
// 默认导出去 这里写的是该组件的配置
export default {
  data(){
    return{

    }
  },
  methods:{
    getNews(){
      this.axios
      .get('http://vue.studyit.io/api/getnewslist')
      .then(
        rep => console.log(rep)
      )
    }
  },
  created(){
    this.getNews();
  }
};
</script>

<style>

</style>