<template>
  <div class="footBar">
    <van-tabbar v-model="active"  >
      <van-tabbar-item  icon="home-o" to="/" >书架-{{active}}</van-tabbar-item>
      <van-tabbar-item icon="search" to="/rank" >书城</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/info">信息</van-tabbar-item>
    </van-tabbar>
    <router-view  />
  </div>
</template>

<script>
export default {
  name: 'footBar',
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>

</style>
