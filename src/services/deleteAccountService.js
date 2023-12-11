import request from '~/utils/request';

export const deleteMe = async () => {
	try {
		// const res = await request.delete('users/me', {
		// 	headers: {
		// 		Authorization: 'Bearer ' + localStorage.getItem('token'),
		// 	},
		// });
		// return {
		// 	statusCode: res.status,
		// 	data: res.data.data,
		// };
		return 'hi';
	} catch (error) {
		return {
			statusCode: error.response.status,
			msg: error.response.statusText,
		};
	}
};
