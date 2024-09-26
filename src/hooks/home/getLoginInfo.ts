// pinia中的storeToRefs是将值转化为响应式的
// 该文件获取的是用户信息。填报、汇总的时候用
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useUserInfo } from '/@/stores/userInfo';
const stores = useUserInfo();
const { userInfos } = storeToRefs(stores);

// 按钮权限
const useAuthBtn = (str: string, array: Array<any> = userInfos.value.authBtnList) => {
	return array.find((it) => str === it.busicode);
};
// 实现 useObjneed 双向绑定实时更新
let useObjneed: any = computed({
	set(value) {
		return value;
	},
	get: () => {
		let obj: any = {};
		if (userInfos.value.currentRole) {
			userInfos.value.sysSpRoles.forEach((it: any) => {
				if (it.code.includes(userInfos.value.currentRole)) {
					obj = it;
				}
			});
		}
		return obj;
	},
});

console.log('user===>', userInfos.value);
export { userInfos, useObjneed, useAuthBtn };
