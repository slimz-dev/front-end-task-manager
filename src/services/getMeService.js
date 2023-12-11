import request from '~/utils/request';

export const getMe = async (token) => {
	try {
		const res = await request.get('users/me', {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		});
		return {
			statusCode: res.status,
			data: res.data.data,
		};
	} catch (error) {
		return error;
	}
};
