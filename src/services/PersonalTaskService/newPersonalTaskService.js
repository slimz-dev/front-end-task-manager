import request from '~/utils/request';

export const newPersonalTask = async (userId, data) => {
	try {
		const result = await request.post(`/personaltask/${userId}`, data);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
