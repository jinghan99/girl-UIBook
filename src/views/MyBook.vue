<template>
  <div class="myBook">
    <!--<div class="row-book" v-for="(item,index) in books" :key="index">-->
      <!--<img class="book-img">-->
      <!--<div class="book" >-->
        <!--<p><span class="book-title">{{item.author}}</span></p>-->
        <!--<p><span class="book-info">连载中</span></p>-->
        <!--<p>-->
          <!--<span class="book-info">一天前</span>-->
          <!--<span class="book-new-chapter">{{item.lastChapter}}</span>-->
        <!--</p>-->
      <!--</div>-->
    <!--</div>-->

    {{books}}
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'myBook',
  data() {
    return {
      test_url: 'localhost:8085/test',
      update_url: '/book?id=53e56ee335f79bb626a496c9,5b0d28378659ea1aab8ca218,59e2c2b08bde16e66f9e3b85,5816b415b06d1d32157790b1&view=updated',
      imageURL: 'http://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
      ids: '53e56ee335f79bb626a496c9,5b0d28378659ea1aab8ca218,59e2c2b08bde16e66f9e3b85,5816b415b06d1d32157790b1',
      books: '',
    };
  },
  created() {

  },
  mounted() {
    alert('mounted');
    this.$fetch('http://localhost:8085/test')
      .then((data) => {
        this.books = data; // 存数据
      }).catch((err) => {
        alert(err);
      });
  },
};
</script>
<style>
  .row-book{
    background-color: azure;
    margin-top: 1em;
  }
  .book-img{
    width: 4.5rem;
    height: 6rem;
    background-color: bisque;
    float: left;
    margin-left: 1rem;
  }
  .book-title{
    margin-left: 1rem;
  }
  .book-info{
    margin-left: 1rem;
    font-size: 0.8rem;
  }
  .book{
    display: inline;
    background-color: #fa0c29;
  }
  .book-new-chapter{
    float: right;
    font-size: 0.8rem;
  }
</style>
