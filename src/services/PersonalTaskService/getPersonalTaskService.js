import request from '~/utils/request';

export const getPersonalTask = async (userId) => {
	try {
		const result = await request.get(`/personaltask/${userId}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
