<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <mpHtml :content="html"></mpHtml>
    {{ targetColumn }}
    <u-button type="primary" @click="show = true">这是一个按钮</u-button>
    <u-picker
      :show="show"
      :columns="columns"
      @confirm="confirm"
      @cancel="show = false"
      @close="show = false"
      closeOnClickOverlay
    ></u-picker>
  </view>
</template>

<script>
import mpHtml from "mp-html/dist/uni-app/components/mp-html/mp-html";
export default {
  components: {
    mpHtml,
  },
  data() {
    return {
      title: "Hello",
      html: "<div>Hello World!</div>",
      show: false,
      columns: [["中国", "美国", "日本"]],
      targetColumn: "",
    };
  },
  onLoad() {
    this.title = this.$env.REPORT_URL;
  },
  methods: {
    confirm(e) {
      this.show = false;
      this.targetColumn = e;
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
