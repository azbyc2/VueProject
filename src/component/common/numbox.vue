<template>

<div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus" @click='sub'>-</button>
          	<input class="mui-input-numbox" type="number" v-model='val'>
          	<button @click="add"  class="mui-btn mui-btn-numbox-plus">+</button>        
          </div>
</template>
<script>
export default {
    props:['initVal'],
    data(){
        return{
            val:this.initVal||0, //优先使用父指令的默认值
        };
    },
    methods:{
        // -- 最小值为0
        sub(){
            this.val>0 && this.val--;
        },
        // ++
        add(){
            this.val++
        }
    },
    watch:{
        // 监听值发生变化，通过事件的方式传给父
        val(){
            this.$emit('change',this.val)
        }
    }
};
</script>
<style>
</style>