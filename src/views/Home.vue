<template>
  <div class="home">
    <div class="moduleTop">
      <div class="moduleTopBg" @click="goDetail">
        <p style="background:#5CCBB7">
          <i class="icon iconfont icon-shu"></i>
        </p>
        <span>順序聯係</span>
        <div class="moduleSamllOne moduleSize"></div>
      </div>
      <div class="moduleTopBg" @click="goDetail">
        <p style="background:#51BBE1">
          <i class="icon iconfont icon-wenzi"></i>
        </p>
        <span>文字題</span>
        <div class="moduleSamllTwo moduleSize"></div>
      </div>
      <div class="moduleTopBg" @click="goDetail">
        <p style="background:#85A8DD">
          <i class="icon iconfont icon-honglvdeng"></i>
        </p>
        <span>標志題</span>
        <div class="moduleSamllThree moduleSize"></div>
      </div>
    </div>
    <div class="moduleCenter">
      <div class="moduleCenterBg moduleFour" @click="goDetail">
        <p>
          <i class="icon iconfont icon-shoucang"></i>
        </p>
        <span>收藏</span>
        <div class="moduleSamllFour"></div>
      </div>
      <div class="moduleCenterBg moduleFive" @click="goDetail">
        <p style="background:#AAB1BA">
          <i class="icon iconfont icon-cuoti"></i>
        </p>
        <div class="number">1</div>
        <span>錯題</span>
        <div class="moduleSamllFive"></div>
      </div>
    </div>
    <div class="moduleBottom">
      <div class="moduleBottomBg" @click="goDetail">
        <p>
          <i class="icon iconfont icon-ceshi"></i>
        </p>
        <span style="color:white">模擬測試</span>
        <div class="moduleSamllSix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goDetail() {
      this.$router.push({
        path: "detail"
      });
    }
  }
};
</script>


<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}

html {
  background: #f3f3f3;
}

.home {
  margin: 0.5rem;
  font-size: 0.28rem;
  color: #5E5E5E;
}

.moduleTop {
  position: relative;

  .moduleTopBg {
    height: 2.5rem;
    width: 1.6rem;
    background: #fff;
    float: left;
    margin: 0.1rem;

    span {
      position: relative;
      float: left;
      top: 70%;
      left: 50%;
      transform: translate(-50%);
    }

    p {
      position: absolute;
      height: 1rem;
      width: 1rem;
      float: left;
      border: 2px solid white;
      border-radius: 100%;
      margin: 0.5rem 0.28rem;

      .icon {
        display: block;
        position: absolute;
        margin: 0.06rem 0.09rem;
        font-size: 0.8rem;
      }
    }
  }
}

.moduleSize {
  width: 100%;
  height: 1rem;
}

.moduleSamllOne {
  background: #5CCBB7;
}

.moduleSamllTwo {
  background: #51BBE1;
}

.moduleSamllThree {
  background: #85A8DD;
}

.moduleCenter {
  position: relative;

  .moduleCenterBg {
    height: 2rem;
    width: 2.4rem;
    background: #fff;
    margin: 0.1rem;
    margin-top: 0.3rem;

    p {
      position: absolute;
      height: 1rem;
      width: 1rem;
      float: left;
      background: #F2D97F;
      border: 2px solid white;
      border-radius: 100%;
      margin: 0.45rem 0.3rem;

      .icon {
        display: block;
        position: absolute;
        margin: 0.07rem 0.1rem;
        font-size: 0.8rem;
      }
    }
  }

  .moduleFour {
    float: left;
  }

  .moduleFive {
    float: right;

    .number {
      position: absolute;
      right: 0.3rem;
      width: 0.6rem;
      height: 0.4rem;
      background: #AAB1BA;
      color: #fff;
      text-align: center;
    }
  }

  span {
    position: relative;
    float: left;
    top: 50%;
    left: 60%;
    transform: translate(0, -50%);
  }
}

.moduleBottom {
  position: relative;

  .moduleBottomBg {
    background: #00AE8E;
    height: 2rem;
    width: 96.7%;
    float: left;
    margin: 0.1rem;
    margin-top: 0.3rem;

    p {
      position: absolute;
      height: 1rem;
      width: 1rem;
      float: left;
      border: 2px solid white;
      border-radius: 100%;
      margin: 0.5rem 1.2rem;

      .icon {
        display: block;
        position: absolute;
        margin: 0.07rem 0.1rem;
        font-size: 0.8rem;
      }
    }
  }

  span {
    position: relative;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);
  }
}

.icon, .iconfont {
  font-family: 'iconfont' !important;
  // font-size: 0.6rem;
  font-style: normal;
  color: white;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
