import request from '~/utils/request';

export const deleteCalender = async (userId, data) => {
	try {
		const result = await request.patch(`/calendars/${userId}`, data);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
