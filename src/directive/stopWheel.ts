import type { App } from 'vue';

const vStopEvent = {
	mounted: (el: HTMLElement) => {},
	beforeUpdate: (el: HTMLElement, binding: any) => {
		el.querySelector('input')!.type = 'number'
		let u = el.querySelector('input');
		const newNode = u?.cloneNode(true);
		u?.parentNode?.replaceChild(newNode as HTMLElement, u);
	},
};

export function setStopEvent(app: App) {
	app.directive('dyxClearAllEvent', vStopEvent);
}
