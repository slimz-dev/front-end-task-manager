import request from '~/utils/request';

export const deletePersonalTask = async (userId, taskId) => {
	try {
		const result = await request.patch(`/personaltask/${userId}/${taskId}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
