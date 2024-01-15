import request from '~/utils/request';

export const getNotification = async (userId) => {
	try {
		const result = await request.get(`/notification/${userId}`);
		return {
			num: result.data.meta.numbers,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
