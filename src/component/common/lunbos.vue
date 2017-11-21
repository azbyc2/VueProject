<template>
  <div class='lbt'>
      <mt-swipe class="l1" :auto="4000" v-if="$route.path=='/index'">
        <mt-swipe-item v-for="item in lunbos" v-bind:key="item.img">
          <img v-bind:src="item.img">
      </mt-swipe-item>
    </mt-swipe>


    <mt-swipe class="l2":auto="4000" v-if="$route.path!='/index'">
        <mt-swipe-item v-for="item in lunbos" v-bind:key="item.src">
          <img v-bind:src="item.src">
      </mt-swipe-item>
    </mt-swipe>
  </div>

</template>

<script>
export default {
  props: ["lunbos"],
  data() {
    return {
      item: {}
    };
  },
  methods: {}
};
</script>

<style lang='less'>
@heightH: 260px;
@heightG: 355px;
.lbt {
  .l1 {
    height: @heightH;
    img {
      height: @heightH;
      width: 100%;
    }

    .l2 {
      height: @heightG;
      img {
        height: @heightG;
        width: 100%;
      }
    }
  }
}
</style>
