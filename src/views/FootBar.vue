<template>
  <div class="footBar">
    <div class="tabBar">
      <router-view/>
    </div>
    <div class="bar">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/">书架-{{active}}</van-tabbar-item>
        <van-tabbar-item icon="search" to="/rank">书城</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/info">信息</van-tabbar-item>
      </van-tabbar>
    </div>
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
  .footBar {
    height: 100%;
  }

  .tabBar {
    height: 92%;
  }

  .bar {
    height: 8%;
  }
</style>
