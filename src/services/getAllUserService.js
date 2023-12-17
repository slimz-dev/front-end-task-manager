import request from '~/utils/request';

export const getAll = async () => {
	const result = await request.get('/users');
	return {
		statusCode: result.status,
		data: result.data.data,
		meta: result.data.meta,
	};
};
