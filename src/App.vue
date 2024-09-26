<template>
  <div id="app" ref="appRef">
    <router-view />
  </div>
</template>

<script setup>
// const { $jsonp } = getCurrentInstance().appContext.app.config.globalProperties;

const appRef = ref();

//默认缩放值
const scale = {
  width: "1",
  height: "1",
};

//设计稿尺寸（px）
const baseWidth = 1920;
const baseHeight = 1080;

//需保持的比例（默认1.77778）
const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5));

//定时函数
let drawTiming = null;

//根据实际的宽高比和默认的宽高比比较，决定scale的比例
const calcRate = () => {
  if (!appRef) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  // 当前宽高比
  const currentRate = parseFloat((width / height).toFixed(5));
  if (width != 0 && height != 0) {
    if (currentRate > baseProportion) {
      //宽度更宽(宽度没有填满)，需要以高度比例为基准，更改宽度的数值
      scale.width = ((height * baseProportion) / baseWidth).toFixed(5);
      scale.height = (height / baseHeight).toFixed(5);
      appRef.value.style.transform = `scale(${scale.width},${scale.height}) translate(-50%, -50%)`;
    } else {
      //高度更高(高度没有填满)，需要以宽度比例为基准，更改高度的数值
      scale.width = (width / baseWidth).toFixed(5);
      scale.height = (width / baseProportion / baseHeight).toFixed(5);
      appRef.value.style.transform = `scale(${scale.width},${scale.height}) translate(-50%, -50%)`;
    }
  } else {
    return false;
  }
};

//调整屏幕大小
const resize = () => {
  clearTimeout(drawTiming);
  setTimeout(() => {
    calcRate();
  }, 200);
};

onBeforeMount(() => {
  // $jsonp("http://20.46.77.225/maps?v=3.0.0").then(res => {
  //   console.log("err", res);
  // });
});

onMounted(() => {
  calcRate();
  window.addEventListener("resize", resize);
});

onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
</script>

<style lang="scss" scoped>
#app {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  overflow: hidden;
}
</style>
