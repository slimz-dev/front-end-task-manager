import request from '~/utils/request';

export const getGroup = async (group) => {
	try {
		const result = await request.get(`/groups/${group}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
