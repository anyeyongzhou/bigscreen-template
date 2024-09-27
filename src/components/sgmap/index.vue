<template>
  <div
    class="mapBox"
    element-loading-text="正在加载地图..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(212, 227, 241, 0.5)"
    v-loading="vm.loadEnd"
  >
    <div :id="vm.id" style="width: 100%; height: 100%; cursor: default"></div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";

// 定义父组件传过来的值
const props = defineProps({
  mapAddress: {
    type: String,
    default: () => "",
  },
  mapPlaceName: {
    type: String,
    default: () => "",
  },
  longitude: {
    type: Number,
    default: null,
  },
  latitude: {
    type: Number,
    default: null,
  },
});

var geocodingTask, movePointMarker;

const vm = reactive({
  id: "sgmap",
  loadEnd: true,
  map: null, // map 实例
  popupDOM: null,
  center: [120.2521517, 30.24324889],
  zoom: 15,
  appkey: "4b9985a37eef391f9ff32c696819f605",
  appsecret: "ee7b92c92455300896b732377a662077",
});
const emit = defineEmits(["initEnd", "handleSetLatLon"]);
onMounted(() => {
  SGMap.tokenTask.login(vm.appkey, vm.appsecret).then(() => {
    loadPlugin();
  });
  window.handleReturnLatitudeAndLongitude = handleReturnLatitudeAndLongitude;
  window.closeInfo = closeInfo;
});
onUnmounted(() => {
  removeMap();
});
// 拖动
const vDrag = {
  mounted(el) {
    el.onmousedown = function (e) {
      var disx = e.pageX - el.offsetLeft;
      var disy = e.pageY - el.offsetTop;
      document.onmousemove = function (e) {
        el.style.left = e.pageX - disx + "px";
        el.style.top = e.pageY - disy + "px";
      };
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    };
  },
};
// 初始化地图
const init = () => {
  vm.map = new SGMap.Map({
    // 地图绑定的DOM元素ID
    container: vm.id,
    // 地图样式
    style: "aegis://styles/aegis/StreetsLight",
    // 默认缩放层级
    zoom: vm.zoom,
    // 地图中心点
    center: vm.center,
    // 地图默认字体
    localIdeographFontFamily: "Microsoft YoHei",
  });

  // 初始化Popup
  vm.popupDOM = new SGMap.Popup({
    // 是否显示关闭按钮
    closeButton: false,
    // 是否在点击地图其他任意地方的时候关闭信息窗体
    closeOnClick: true,
    // 窗体主体部分固定位置，如果设置此项，信息窗体避让效果以及offset将失效
    // anchor: "bottom-left",
    // 信息窗体偏移设置，bottom意思为底部为校准线，第一个数字正负代表右左，第二个数字正负代表下上
    offset: {
      bottom: [2, -15],
    },
  });
  drawPoint();
  vm.map.on("style.load", e => {
    vm.loadEnd = false;
    emit("initEnd", true);
  });
};
const removeMap = () => {
  if (vm.map) {
    vm.map.remove();
    vm.map = null;
  }
};
// 加载插件
const loadPlugin = () => {
  SGMap.plugin("SGMap.GeocodingTask").then(res => {
    geocodingTask = new SGMap.GeocodingTask();
    init();
  });
};
// 通过地址进行经纬度搜索
const flyToSelectedPlace = () => {
  let address = props.mapAddress;
  vm.loadEnd = true;
  if (props.mapAddress && props.longitude && props.latitude) {
    //地址和坐标都存在的时候,根据坐标查询位置;只有地址没有坐标的时候根据地址查询位置
    let param = { location: [props.longitude * 1, props.latitude * 1] };
    geocodingTask.getAddress(param).then(res => {
      vm.loadEnd = false;
      let lnglat = param.location;
      let optsn = {
        type: "asdasd",
        center: lnglat,
      };
      let parm = {
        type: "asdasd",
        circleType: "image",
        list: [
          {
            id: "000161ab2c17d5de7749c45bcf0d",
            type: "Feature",
            geometry: {
              type: "point",
              coordinates: lnglat,
            },
            properties: {
              popup: {
                palceName: props.mapPlaceName,
                addrs: address,
                lat: lnglat[0],
                lon: lnglat[1],
              },
              popupName: {
                lat: "经度",
                lon: "纬度",
                addrs: "地址",
                palceName: "场所名称",
              },
            },
          },
        ],
      };
      flyTo(optsn);
      openInfo(parm);
    });
  } else {
    geocodingTask
      .getLocation({
        address: address, // 结构化地址信息
        region: address,
        isEncode: false,
      })
      .then(res => {
        vm.loadEnd = false;
        let lnglat = res.location;
        let optsn = {
          type: "asdasd",
          center: lnglat,
        };
        let parm = {
          type: "asdasd",
          circleType: "image",
          list: [
            {
              id: "000161ab2c17d5de7749c45bcf0d",
              type: "Feature",
              geometry: {
                type: "point",
                coordinates: lnglat,
              },
              properties: {
                popup: {
                  palceName: props.mapPlaceName,
                  addrs: address,
                  lat: lnglat[0],
                  lon: lnglat[1],
                },
                popupName: {
                  lat: "经度",
                  lon: "纬度",
                  addrs: "地址",
                  palceName: "场所名称",
                },
              },
            },
          ],
        };
        flyTo(optsn);
        openInfo(parm);
      });
  }
};
// 给地图绑定点击事件画点
const bindMapClickEvent = async () => {
  vm.map.on("click", e => {
    vm.loadEnd = true;
    // let url = new URL('/@/assets/sgmap/pointRed.png', import.meta.url).href;
    // 逆地理编码
    geocodingTask
      .getAddress({
        location: [e.lngLat.lng, e.lngLat.lat],
      })
      .then(result => {
        let parm = {
          type: "adssa",
          circleType: "image",
          // imgUrl: url,
          list: [
            {
              id: "000161ab2c17d5de7749c45bcf0d",
              type: "Feature",
              geometry: {
                type: "point",
                coordinates: [e.lngLat.lng, e.lngLat.lat],
              },
              properties: {
                popup: {
                  palceName: props.mapPlaceName,
                  addrs: result.formattedAddress,
                  lat: e.lngLat.lng,
                  lon: e.lngLat.lat,
                },
                popupName: {
                  lat: "经度",
                  lon: "纬度",
                  addrs: "地址",
                  palceName: "场所名称",
                },
              },
            },
          ],
        };
        vm.loadEnd = false;
        openInfo(parm);
      });
  });
};
// 画点
const drawPoint = () => {
  var movePointDom = document.createElement("div");
  movePointDom.className = "marker";
  movePointMarker = new SGMap.Marker(movePointDom);
};
// 定位
const flyTo = opt => {
  let opts = {
    center: opt.center || this.center,
    zoom: 7,
    // speed: opt.speed || 0.5,
  };
  vm.map.panTo(opts.center, {
    // 动画执行时长, 单位毫秒
    duration: 300,
    // 过渡程度
    easing: function (t) {
      return t * (2 - t);
    },
    // 是否启用动画
    animate: true,
  });
};
// 打开地图弹框信息
const openInfo = data => {
  let popup = data.list[0].properties.popup;
  let popupName = data.list[0].properties.popupName;
  let str = "";
  let list = [];
  for (let i in popupName) {
    let value = popup[i];
    let keyName = popupName[i];
    str =
      str +
      `
            <div class="popupBox">
              <span class="keyBox">${keyName}：</span>
              <span class="valueBox">${value}</span>
            </div>
          `;

    let obj = {
      key: keyName,
      value: value,
    };
    list.push(obj);
  }
  let latAndLonData = JSON.stringify([popup.lat, popup.lon]);
  str =
    str +
    `<div class="popupBox" style="justify-content: right;display: flex;margin-top: 10px">
              <div class="keyBox"
              onclick="handleReturnLatitudeAndLongitude('${latAndLonData}')"
               style="color: #FFFFFF;background-color: #2d8bc5;border-radius: 5px;padding: 0 5px;margin-right: 5px;cursor: pointer">确 认</div>
              <div class="valueBox"
              onclick="closeInfo()"
              style="color: #333333;border-color: #8e9896;padding: 0 5px;cursor: pointer">取消</div>
            </div>`;
  vm.popupDOM.setLngLat([popup.lat, popup.lon]).setHTML(str).addTo(vm.map);
  movePointMarker.setLngLat([popup.lat, popup.lon]).addTo(vm.map);
};
const closeInfo = () => {
  movePointMarker.remove();
  vm.popupDOM.remove();
};
const handleReturnLatitudeAndLongitude = data => {
  emit("handleSetLatLon", data);
};

defineExpose({
  bindMapClickEvent,
  flyTo,
  openInfo,
  closeInfo,
  flyToSelectedPlace,
});
watch(
  () => props.mapAddress,
  () => {
    flyToSelectedPlace();
  }
);
</script>

<style>
.marker {
  width: 23px;
  height: 30px;
  background: url("/@/assets/sgmap/redPoint.svg");
  background-size: 100% 100%;
}
</style>
