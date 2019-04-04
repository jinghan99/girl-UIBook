<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style>
  body {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;  /*抗锯齿很好 */
  }
</style>
