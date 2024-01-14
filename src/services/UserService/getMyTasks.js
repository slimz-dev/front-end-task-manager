import request from '~/utils/request';

export const getMyTasks = async () => {
	try {
		const result = await request.get('/users/me/tasks');
		return {
			statusCode: result.status,
			data: result.data.data,
			meta: result.data.meta,
		};
	} catch (error) {
		return error;
	}
};
