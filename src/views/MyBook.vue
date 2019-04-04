<template>
  <div>
    <van-nav-bar title="我的书架">
      <van-icon name="search" slot="right" @click-right="onClickRight" />
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="row-book" v-for="(item,index) in books" :key="index">
        <img class="book-img" :src=" 'http://statics.zhuishushenqi.com'+item.bookInfo.cover ">
        <div class="book" >
          <p><span class="book-title">{{item.bookInfo.title}}</span></p>
          <p><span class="book-info">{{item.isFineBook ? '完结':'连载中'}}</span></p>
          <p>
            <span class="book-info">{{item.updatedStr }}</span>
            <span class="book-new-chapter">
            {{item.lastChapter|lastChapter}}
          </span>
          </p>
        </div>
      </div>
    </van-pull-refresh>
  </div>

</template>

<script>
import { Toast } from 'vant';

export default {
  name: 'myBook',
  data() {
    return {
      count: 0,
      isLoading: false,
      books: '',
      ids: '53e56ee335f79bb626a496c9,5b0d28378659ea1aab8ca218,59e2c2b08bde16e66f9e3b85,5816b415b06d1d32157790b1',
    };
  },
  mounted() {
    this.refresh('');
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.refresh('刷新成功');
      }, 500);
    },
    onClickRight() {
      Toast('按钮');
    },
    refresh(msg) {
      this.$fetch('/update_book', {
        ids: this.ids,
      })
        .then((data) => {
          this.books = data.data; // 存数据
          if (msg && msg !== '') {
            this.$toast(msg);
            this.isLoading = false;
          }
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
  .van-pull-refresh{
    background-color: #f7f7f7;

  }
  .row-book{
    margin-top: 1rem;
    height: 6rem;
  }
  .book-img{
    width: 4.5rem;
    height: 6rem;
    float: left;
    margin-left: 1rem;
  }
  .book-title{
    margin-left: 1rem;
  }
  .book-info{
    margin-left: 1rem;
    font-size: 0.7rem;
  }
  .book{
    display: inline;
    background-color: #fa0c29;
  }
  .book-new-chapter{
    float: right;
    font-size: 0.6rem;
  }
</style>
