<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{files}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      files: [],
      nowPlay: '',
    };
  },
  components: {
    HelloWorld,
  },
  mounted() {
    // get或者post , api为接口地址
    this.$axios.get('http://localhost:8085/test', {
      params: { // post不需要params:这部分
        // 请求参数
      },
    })
      .then((res) => { // res是返回结果
        // 你的下一步操作 例:
        this.files = res.data; // 存数据
      })
      .catch((err) => { // 请求失败就会捕获报错信息
        this.files = err; // 存数据
      });
  },
};
</script>
