import request from '~/utils/request';

export const getTotalGroups = async () => {
	try {
		const result = await request.get('/groups');
		return {
			statusCode: result.status,
			data: result.data.data,
			meta: result.data.meta,
		};
	} catch (error) {
		return error;
	}
};
