import request from '~/utils/request';

export const sendEmail = async (data) => {
	try {
		const result = await request.post(`/email/send`, data);
		return {
			statusCode: result.status,
			data: result.data.data,
		};
	} catch (error) {
		return error;
	}
};
