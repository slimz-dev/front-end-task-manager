import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { UserContext } from '~/contexts/userProvider';
import { getNotification } from '~/services/NotificationService/getNotification';
import { socket } from '~/socket';

export const NotificationContext = createContext();

function NotificationProvider({ children }) {
	const [data, setData] = useState([]);
	const [isOpenNoti, setIsOpenNoti] = useState(true);
	const user = useContext(UserContext);

	useEffect(() => {
		const fetchNotification = async () => {
			const result = await getNotification(user.info._id);
			setData(result);
		};
		if (user.info._id) {
			fetchNotification();
		}
		socket.on('notification', () => {
			const reRenderNotify = async () => {
				const result = await getNotification(user.info._id);
				console.log(result);
				setIsOpenNoti(true);
				setData(result);
			};
			reRenderNotify();
		});
		return () => {
			socket.off('notification');
		};
	}, [user.info]);
	const value = {
		data,
		setData,
		isOpenNoti,
		setIsOpenNoti,
	};
	return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}

export default NotificationProvider;
