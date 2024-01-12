import request from '~/utils/request';
export const updateTaskState = async (userId, data) => {
	try {
		const result = await request.patch(`/personaltask/${userId}`, data);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
