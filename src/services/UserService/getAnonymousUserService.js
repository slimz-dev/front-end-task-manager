import request from '~/utils/request';

export const getAnonymous = async () => {
	try {
		const result = await request.get('/users/anonymous');
		return {
			statusCode: result.status,
			data: result.data.data,
			meta: result.data.meta,
		};
	} catch (error) {
		return error;
	}
};
