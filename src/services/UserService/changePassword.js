import request from '~/utils/request';

export const changePassword = async (data) => {
	try {
		const result = await request.patch('users/me/password', data);
		if (result.status === 200) {
			return {
				statusCode: result.status,
				data: result.data.data,
			};
		}
	} catch (error) {
		return error;
	}
};
