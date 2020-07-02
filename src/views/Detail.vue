<template>
  <div class="detail">
    <div class="header">
      <i class="icon iconfont icon-fanhui" @click="goback"></i>
      <i class="icon iconfont icon-gengduo"></i>
    </div>
    <div class="container">
      <div class="question">
        <p class="title">1.多少歲或以下的幼童在前座必須使用合規格的兒童乘車束縛設備？</p>
        <p class="shoucang">
          <i class="icon iconfont icon-shoucang"></i>
          收藏
        </p>
      </div>

      <ul>
        <li>
          <p class="answer">
            <i class="icon iconfont icon-A"></i>
           <span>1嵗</span> 
          </p>
        </li>
        <li>
          <p class="answer">
            <i class="icon iconfont icon-B"></i>
            <span>2嵗</span>
          </p>
        </li>
        <li>
          <p class="answer">
            <i class="icon iconfont icon-C"></i>
            <span>3嵗</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="footer">下一題</div>
  </div>
</template>

<script>
export default {
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  font-size: 0.35rem;
}
.header {
  background: #344c61;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  .icon-fanhui {
    float: left;
    margin-left: 0.2rem;
  }
  .icon-gengduo {
    float: right;
    margin-right: 0.2rem;
  }
}
.container {
  margin: 0.3rem;
  .question {
    display: flex;
    .title {
      flex: 9;
    }
  }
  .icon-shoucang {
    color: #babfc7;
  }
  .shoucang {
    color: #babfc7;
    font-size: 0.3rem;
  }
  ul {
    margin-top: 2.5rem;
    li {
      list-style: none;
      border: 1px solid #E1E1E1;
      background: #eceef0;
      height: 1.2rem;
      margin: 0.1rem;
      line-height: 1.2rem;
      padding: 0 0.3rem;
      .icon-A,
      .icon-B,
      .icon-C {
        color: #909095;
        font-size: 0.5rem;
        vertical-align:middle;

      }
      span{
        vertical-align:middle;
      }
    }
  }
}
.footer {
  position: absolute;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #00ae8e;
  color: white;
  text-align: center;
  bottom: 0;
}
.icon,
.iconfont {
  font-family: "iconfont" !important;
  // font-size: 0.6rem;
  font-style: normal;
  color: white;
  // fill: currentColor;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
