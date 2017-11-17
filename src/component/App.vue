<template>
    <main>
        <p>{{msg}}</p>
        <router-view></router-view>
    </main>
  
</template>


<script>
// 过去Vue.comnent('name'{})
//这里vue要求我们对外暴露一个组件的配置项
// 因为template已经在上面独立编写，vue-loader可以帮我们处理，所以就不用再写template
export default {
  data() {
    // 还是得写成函数return对象
    return {
      msg: "测试vue文件是否可用！"
    };
  }
};
</script>
    

<style scoped>
/* scoped唯一标识 */
p {
  font-size: 30px;
  color: red;
}
</style>
