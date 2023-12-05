import request from '~/utils/request';

export const userRegistration = async (data) => {
	const res = await request.post('users/register', data);
	return res.data;
};
