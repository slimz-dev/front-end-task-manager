import request from '~/utils/request';

export const newCalendar = async (userId, data) => {
	try {
		const result = await request.post(`/calendars/${userId}`, data);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
