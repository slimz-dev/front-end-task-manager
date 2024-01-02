import request from '~/utils/request';

export const changeInfo = async (data) => {
	try {
		const res = await request.patch('users/me', data);
		return {
			statusCode: res.status,
			data: res.data.data,
		};
	} catch (error) {
		console.log(error.response.status);
		return error;
	}
};

request.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
