import request from '~/utils/request';

export const getMyCalendar = async (userId) => {
	try {
		const result = await request.get(`/calendars/${userId}`);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
