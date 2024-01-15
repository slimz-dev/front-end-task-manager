import request from '~/utils/request';

export const changeStateNotification = async (userId, data) => {
	try {
		const result = await request.post(`/notification/${userId}`, data);
		return {
			num: result.data.meta.numbers,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
