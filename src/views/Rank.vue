<template>
  <div class="rank">
    <van-tabs  v-model="active" sticky swipeable>
      <van-tab v-for="(tab,index) in tabs" :key="index" :title="tab.ranking.title">
        <div class="row-book" v-for="(book,index) in tab.ranking.books" :key="index">
          <img class="book-img" :src=" 'http://statics.zhuishushenqi.com'+book.cover ">
          <div class="book" >
            <p><span class="book-title">{{book.title}}</span></p>
            <p class="rank-auth">
              <span class="book-author">
                <van-tag plain  type="success">{{book.author}}</van-tag>
                </span>
              <span class="book-author">
                <van-tag plain  > {{book.minorCate}}</van-tag>
               </span>
            </p>
            <p class="book-shortIntro">
              <span >
              {{book.shortIntro|shortIntro}}
              </span>
            </p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'rank',
  data() {
    return {
      tabs: [],
      active: '',
    };
  },
  mounted() {
    this.refresh('');
  },
  methods: {
    onClick(index, title) {
      this.$toast(title);
    },
    refresh(msg) {
      this.$fetch('/rank', {
        ids: this.ids,
      }).then((data) => {
        this.tabs = data.data; // 存数据
        console.log(data.data);
        if (msg && msg !== '') {
          this.$toast(msg);
          this.isLoading = false;
        }
      });
    },
  },
};
</script>
<style>
  .van-tab__pane{
    background-color: #f7f7f7;

  }
  .rank-auth{
    margin-top: -0.5rem;
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
  .book-shortIntro{
    margin-top: -0.5rem;
  }
  .book-shortIntro span{
    margin-left: 1rem;
    font-size: 0.7rem;
  }
  .book-author{
    margin-left: 1rem;
    font-size: 0.7rem;
  }
  .book{
    display: inline;
  }
</style>
