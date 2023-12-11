import request from '~/utils/request';

export const userLogin = async (data) => {
	try {
		const res = await request.post('users/login', data);
		return {
			statusCode: res.status,
			data: res.data.data,
		};
	} catch (error) {
		return {
			statusCode: error.response.status,
			msg: error.response.statusText,
		};
	}
};
