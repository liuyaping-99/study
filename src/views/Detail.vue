<template>
  <div class="detail">
    <div class="header">
      <i class="icon iconfont icon-fanhui" @click="goback"></i>
      <i class="icon iconfont icon-gengduo" @click="goMore"></i>
    </div>
    <div class="container">
      <div class="question">
        <p class="title">1.多少歲或以下的幼童在前座必須使用合規格的兒童乘車束縛設備？</p>
        <p class="shoucang" @click="collect">
          <i class="icon iconfont icon-shoucang-copy" v-show="isCollected"></i>
          <i class="icon iconfont icon-shoucang" v-show="isCollect"></i>
          收藏
        </p>
      </div>

      <ul>
        <li @click="choose" :class="ischoose?answer1:''">
          <p>
            <i class="icon iconfont icon-cuo" v-show="answered"></i>
            <i class="icon iconfont icon-A" v-show="answereded"></i>
            <span>1嵗</span>
          </p>
        </li>
        <li @click="choose" :class="isCorrect?answer2:''">
          <p>
            <i class="icon iconfont icon-dui" v-show="correct"></i>
            <i class="icon iconfont icon-B" v-show="noCorrect"></i>
            <span @click="choose">2嵗</span>
          </p>
        </li>
        <li @click="choose" :class="ischoose?answer1:''">
          <p>
            <i class="icon iconfont icon-cuo" v-show="answered"></i>
            <i class="icon iconfont icon-C" v-show="answereded"></i>
            <span @click="choose">3嵗</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="footer">下一題</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollect: true,
      isCollected: false,
      answer: "2嵗",
      answered: false,
      answereded: true,
      ischoose: false,
      answer1: "answer",
      answer2: "answered",
      correct: false,
      noCorrect: true,
      isCorrect: false
    };
  },
  methods: {
    goback() {
       this.$router.push({
        path: "/",
      });
    },
    goMore() {
      this.$router.push({
        path: "questionList",
      });
    },
    collect() {
      this.isCollect = !this.isCollect;
      this.isCollected = !this.isCollected;
    },
    choose(e) {
      // console.log(e.target.innerText);
      if (e.target.innerText == this.answer) {
        this.correct = true;
        this.noCorrect = false;
        this.isCorrect = true;
      } else {
        this.answered = true;
        this.answereded = false;
        this.correct = true;
        this.noCorrect = false;
        this.ischoose = true;
        this.isCorrect = true;
      }
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
  .icon-shoucang-copy {
    color: #f4ea2a;
  }
  .shoucang {
    color: #babfc7;
    font-size: 0.3rem;
  }
  ul {
    margin-top: 2.5rem;
    .answer {
      border: 1px solid black;
    }
    .answered {
      border: 1px solid #00ae8e;
    }
    li {
      list-style: none;
      background: #eceef0;
      height: 1.2rem;
      margin: 0.3rem;
      line-height: 1.2rem;
      padding: 0 0.3rem;

      .icon-A,
      .icon-B,
      .icon-C {
        color: #909095;
        font-size: 0.5rem;
        vertical-align: middle;
      }
      .icon-dui {
        color: #00ae8e;
        font-size: 0.5rem;
        vertical-align: middle;
      }
      .icon-cuo {
        color: #909095;
        font-size: 0.5rem;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
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
  // color: white;
  // fill: currentColor;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
