import type { App } from "vue";
import { setResize } from "/@/directive/resize";
import { setStopEvent } from "/@/directive/stopWheel";

/**
 * 导出指令方法：v-xxx
 */
export function directive(app: App) {
  // 自定义改变窗口大小
  setResize(app);
  // 停止元素的所有原生事件
  setStopEvent(app);
}
