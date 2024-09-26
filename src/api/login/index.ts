import request from '/@/utils/request';

/**
 *
 * 登录api接口集合
 */
export function useLoginApi() {
	return {
		// 登录
		signIn: (data: object) => {
			return request({
				url: '/api/v1/oauth/login',
				method: 'post',
				data,
			});
		},
	};
}
