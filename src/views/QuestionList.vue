<template>
  <div class="detail">
    <div class="header">
      <i class="icon iconfont icon-fanhui" @click="goback"></i>
      <p>题目</p>
    </div>
    <div class="container">
      <table>
        <tr>
          <td>
            <div @click="goQuestion">
              1
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goQuestion() {
      this.$router.push({
        path: "detail"
      });
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
  p {
    color: white;
    position: relative;
    left: 2.35rem;
  }
}

.container {
  div {
    margin: 0.15rem;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border: #d4d4d4 solid 1px;
    background-color: #eceef0;
    color: #aab1ba;
    font-size: 0.4rem;
  }
}

.icon,
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
