<template>
	<div class="all">
		<canvas ref="canvas" height="300" width="900" id="canvas"></canvas>
		<div class="list">
			<vxe-table
				align="center"
				:data="props.progress"
				stripe
				header-row-class-name="tableHeader"
				:row-config="{ isHover: true, keyField: 'wid' }"
			>
				<vxe-column type="seq" width="60" title="序号" show-overflow="tooltip" show-header-overflow></vxe-column>
				<vxe-column field="ownerName" title="处理人" show-overflow="tooltip" show-header-overflow></vxe-column>
				<vxe-column field="result" title="处理结果" show-overflow="tooltip" show-header-overflow></vxe-column>
				<vxe-column field="advise" title="处理意见" show-overflow="tooltip" show-header-overflow></vxe-column>
				<vxe-column field="endTime" title="处理时间" show-overflow="tooltip" show-header-overflow></vxe-column>
			</vxe-table>
		</div>
	</div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { useDrawLine } from '/@/hooks/canvas/drawLine';
import { useDrawRect, useDrawDiamond } from '/@/hooks/canvas/drawRect';
// 区提交
import { line } from '/@/hooks/canvas/line';
import { rect1, diamond1, diamond2, diamond3, rect2 } from '../../hooks/canvas/drawQUMainPro';
// 市提交
import { lines } from '/@/hooks/canvas/lineSHI';
import { rect1s, diamond1s, diamond3s, rect2s } from '../../hooks/canvas/drawSHIMainPro';
// 省提交
import { linesheng } from '/@/hooks/canvas/lineSHENG';
import { rect1sheng, diamond1sheng, rect2sheng } from '../../hooks/canvas/drawSHENGMainPro';

// 图例
import { rect3, rect4, egLine } from '/@/hooks/canvas/imgEtc';

// 注意：
// 请一定要将下面这段代码拷贝到获取 canvas 元素的上面，即document.getElementById("canvas")前面
// 否则vscode无法设置Canvas命令的智能提示
/** @type {HTMLCanvasElement} */
const canvas = ref<any>();

// 传入进程状态
const props = defineProps({
	// 进程
	progress: {
		type: Array<any>,
		default: () => [],
	},
	// 任务状态
	taskStatus: {
		type: String,
		default: '',
	},
});
console.log('props===>', props.progress, props.taskStatus);

onMounted(() => {
	nextTick(() => {
		let context = canvas.value.getContext('2d');

		// 绘制图例
		useDrawRect(context, rect3, '#9dcce9');
		useDrawRect(context, rect4, '#fff');
		context.save();
		context.font = '14px 微软雅黑';
		context.textAlign = 'center';
		context.fillStyle = '#000'; // 字的颜色
		context.fillText('当前位置', 700, 240);
		context.fillText('未完成', 700, 280);
		context.restore();
		useDrawLine(context, egLine, 13, 3, 6, ['#000', '#00a']);
		context.save();
		context.font = '14px 微软雅黑';
		context.fillStyle = '#000'; // 字的颜色
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText('未流转', 870, 240);
		context.restore();
		context.save();
		context.font = '14px 微软雅黑';
		context.fillStyle = '#00a'; // 字的颜色
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText('已流转', 870, 280);
		context.restore();
		// //////////////////

		// 根据流程节点判断流程图样式
		if (props.taskStatus === '5') {
			if (props.progress[0].title.includes('区')) {
				// 流程线
				useDrawLine(context, line, 13, 3, 6, ['#000', '#00a', '#00a', '#00a', '#00a', '#000', '#000']);
				// 四边形
				useDrawRect(context, rect1, '#9dcce9');
				useDrawDiamond(context, diamond1, '#9dcce9', 14, '汇总');
				useDrawDiamond(context, diamond2, '#9dcce9', 14, '汇总');
				useDrawDiamond(context, diamond3, '#9dcce9', 14, '汇总');
				useDrawRect(context, rect2, '#9dcce9');
			} else if (props.progress[0].title.includes('市')) {
				// 流程线
				useDrawLine(context, lines, 13, 3, 6, ['#000', '#00a', '#00a', '#000', '#00a']);
				// 四边形
				useDrawRect(context, rect1s, '#9dcce9');
				useDrawDiamond(context, diamond1s, '#9dcce9', 14, '汇总');
				useDrawDiamond(context, diamond3s, '#9dcce9', 14, '汇总');
				useDrawRect(context, rect2s, '#9dcce9');
			} else if (props.progress[0].title.includes('省')) {
				// 流程线
				useDrawLine(context, linesheng, 13, 3, 6, ['#000', '#00a', '#00a']);
				// 四边形
				useDrawRect(context, rect1sheng, '#9dcce9');
				useDrawDiamond(context, diamond1sheng, '#9dcce9', 14, '汇总');
				useDrawRect(context, rect2sheng, '#9dcce9');
			}
		} else {
			if (props.progress[0].title.includes('区')) {
				console.log("props.progress", props.progress);
				props.progress.forEach((it: any) => {
					if (it.stateName === '运行') {
						switch (it.title) {
							case '区县部门 上报数据':
								// 流程线
								useDrawLine(context, line, 13, 3, 6);
								// 四边形
								useDrawRect(context, rect1, '#9dcce9');
								useDrawDiamond(context, diamond1, '#fff', 14, '汇总');
								useDrawDiamond(context, diamond2, '#fff', 14, '汇总');
								useDrawDiamond(context, diamond3, '#fff', 14, '汇总');
								useDrawRect(context, rect2s, '#fff');
								break;
							case '区县发建部 汇总':
								// 流程线
								useDrawLine(context, line, 13, 3, 6, ['#000', '#00a', '#000', '#000', '#000', '#000', '#000']);
								// 四边形
								useDrawRect(context, rect1, '#9dcce9');
								useDrawDiamond(context, diamond1, '#9dcce9', 14, '汇总');
								useDrawDiamond(context, diamond2, '#fff', 14, '汇总');
								useDrawDiamond(context, diamond3, '#fff', 14, '汇总');
								useDrawRect(context, rect2s, '#fff');
								break;
							case '地市发策部 汇总':
								// 流程线
								useDrawLine(context, line, 13, 3, 6, ['#000', '#00a', '#00a', '#000', '#000', '#00a', '#000']);
								// 四边形
								useDrawRect(context, rect1, '#9dcce9');
								useDrawDiamond(context, diamond1, '#9dcce9', 14, '汇总');
								useDrawDiamond(context, diamond2, '#9dcce9', 14, '汇总');
								useDrawDiamond(context, diamond3, '#fff', 14, '汇总');
								useDrawRect(context, rect2s, '#fff');
								break;
							case '省发策部 汇总':
								// 流程线
								useDrawLine(context, line, 13, 3, 6, ['#000', '#00a', '#00a', '#00a', '#000', '#00a', '#00a']);
								// 四边形
								useDrawRect(context, rect1, '#9dcce9');
								useDrawDiamond(context, diamond1, '#9dcce9', 14, '汇总');
								useDrawDiamond(context, diamond2, '#9dcce9', 14, '汇总');
								useDrawDiamond(context, diamond3, '#9dcce9', 14, '汇总');
								useDrawRect(context, rect2s, '#fff');
								break;
							default:
								break;
						}
					}
				});
			} else if (props.progress[0].title.includes('市')) {
				props.progress.forEach((it: any) => {
					if (it.stateName === '运行') {
						switch (it.title) {
							case '地市部门 上报数据':
								// // 流程线
								useDrawLine(context, lines, 13, 3, 6);
								// turnround(props.progress, context, "市")
								// 四边形
								useDrawRect(context, rect1s, '#9dcce9');
								useDrawDiamond(context, diamond1s, '#fff', 14, '汇总');
								useDrawDiamond(context, diamond3s, '#fff', 14, '汇总');
								useDrawRect(context, rect2s, '#fff');
								break;
							case '地市发策部 汇总':
								// 流程线
								useDrawLine(context, lines, 13, 3, 6, ['#00a', '#00a', '#000', '#000', '#000']);
								// 四边形
								useDrawRect(context, rect1s, '#9dcce9');
								useDrawDiamond(context, diamond1s, '#9dcce9', 14, '汇总');
								useDrawDiamond(context, diamond3s, '#fff', 14, '汇总');
								useDrawRect(context, rect2s, '#fff');
								break;
							case '省发策部 汇总':
								// 流程线
								useDrawLine(context, lines, 13, 3, 6, ['#00a', '#00a', '#00a', '#00a', '#000']);
								// 四边形
								useDrawRect(context, rect1s, '#9dcce9');
								useDrawDiamond(context, diamond1s, '#9dcce9', 14, '汇总');
								useDrawDiamond(context, diamond3s, '#9dcce9', 14, '汇总');
								useDrawRect(context, rect2s, '#fff');
								break;
							default:
								break;
						}
					}
				});
			} else if (props.progress[0].title.includes('省')) {
				props.progress.forEach((it: any) => {
					if (it.stateName === '运行') {
						switch (it.title) {
							case '省部门 上报数据':
								// 流程线
								useDrawLine(context, linesheng, 13, 3, 6);
								// 四边形
								useDrawRect(context, rect1sheng, '#9dcce9');
								useDrawDiamond(context, diamond1sheng, '#fff', 14, '汇总');
								useDrawRect(context, rect2sheng, '#fff');
								break;
							case '省发策部 汇总':
								// 流程线
								useDrawLine(context, linesheng, 13, 3, 6, ['#00a', '#00a', '#000']);
								// 四边形
								useDrawRect(context, rect1sheng, '#9dcce9');
								useDrawDiamond(context, diamond1sheng, '#9dcce9', 14, '汇总');
								useDrawRect(context, rect2sheng, '#fff');
								break;
							default:
								break;
						}
					}
				});
			}
		}
	});
});

// 退回函数
/**
 * arr 进度数组
 * context canvas.value.getContext('2d')
 * flag 区分 省、市、区
 */
function turnround(arr: Array<any>, context: any, flag: string) {
	if (arr.length < 2) {
		return false;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[arr.length - 2].resultValue === 'Y') {
				// 倒数第二项是退回
				switch (arr[i].title) {
					case '省发策部 汇总':
						if (flag == '省') {
							useDrawLine(context, linesheng, 13, 3, 6, ['#00a', '#00a', '#000']);
						} else if (flag == '市') {
							useDrawLine(context, lines, 13, 3, 6, ['#000', '#00a', '#00a', '#00a', '#000']);
						} else if (flag == '区') {
							useDrawLine(context, line, 13, 3, 6, ['#000', '#00a', '#00a', '#00a', '#000', '#000', '#00a']);
						}
						break;
					case '地市发策部 汇总':
						if (flag == '市') {
							useDrawLine(context, lines, 13, 3, 6, ['#00a', '#00a', '#00a', '#000', '#000']);
						}
						break;
					case '区县发建部 汇总':
						if (flag == '区') {
							useDrawLine(context, line, 13, 3, 6, ['#00a', '#00a', '#000', '#000', '#000', '#000', '#000']);
						}
						break;

					default:
						break;
				}
			}
		}
	}
}
</script>
<style lang="scss" scoped>
#canvas {
	display: block;
	margin: 15px auto;
}
.all {
	overflow: auto;
}
.list {
	width: 100%;
	min-height: 150px;
	max-height: 350px;
}
</style>
