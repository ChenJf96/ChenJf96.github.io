<script>
export default {
  //	当uni-app初始化完成时触发(全局只触发一次)
  onLaunch: function() {
    document.addEventListener("DOMContentLoaded", function() {
      document.documentElement.style.fontSize = "14px";
    });
    const system = uni.getSystemInfoSync();
    if (system.screenWidth >= 768) {
      uni.hideTabBar();
    }
  },
  // 	当uni-app启动,或从后台进入前台显示
  onShow: function() {
    console.log("App Show");
  },
  // 	当uni-app从前台进入后台
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style lang="scss">
/*每个页面公共css */
.resume_qrcode_popup {
  .uni-popup__wrapper-box {
    padding: 10px !important;
  }
}
</style>
