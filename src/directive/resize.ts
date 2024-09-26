import type { App } from 'vue';

let map = new WeakMap();
const ob = new ResizeObserver((entries: any) => {
	for (const entry of entries) {
		let handler = map.get(entry.target);
		if (handler) {
			handler({
				width: entry.borderBoxSise ? entry.borderBoxSise[0].inlineSize : null,
				height: entry.borderBoxSise ? entry.borderBoxSise[0].blockSize : null,
				target: entry.target,
			});
		}
	}
});

const vResize = {
	mounted: (el: HTMLElement, binding: any) => {
		// console.log(el, binding);
		map.set(el, binding.value);
		ob.observe(el);
	},
	unmounted: (el: HTMLElement) => {
		ob.unobserve(el);
	},
};

export function setResize(app: App) {
	app.directive('dyxResize', vResize);
}
