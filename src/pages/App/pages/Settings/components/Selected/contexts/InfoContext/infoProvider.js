import { createContext, useState, useContext, useEffect } from 'react';
import { UserContext } from '~/contexts/userProvider';
import { changeInfo } from '~/services/changeInfoService';
export const InfoContext = createContext();

function InfoProvider({ children }) {
	const user = useContext(UserContext);
	const [currentUser, setCurrentUser] = useState({});
	const [img, setImg] = useState('');
	useEffect(() => {
		setCurrentUser(user.info);
	}, [user]);

	useEffect(() => {
		setImg(currentUser.img);
	}, [currentUser]);

	function handleChange(e) {
		const propName = e.target.name;
		setCurrentUser((prev) => ({
			...prev,
			[propName]: e.target.value,
		}));
	}
	function handleSubmitPublic() {
		const fetchApi = async () => {
			const result = await changeInfo({
				userName: currentUser.userName,
				biography: currentUser.biography,
				img: currentUser.img,
				phone: currentUser.phone,
			});
			console.log(result);
			window.location.reload();
		};
		fetchApi();
	}
	function handleSubmitPrivate() {
		const fetchApi = async () => {
			const result = await changeInfo({
				firstName: currentUser.firstName,
				lastName: currentUser.lastName,
				secondEmail: currentUser.secondEmail,
				address: currentUser.address,
			});
			console.log(result);
			window.location.reload();
		};
		fetchApi();
	}

	function handleSetImg(e) {
		const currentImg = e.target.files[0];
		const imgUrl = URL.createObjectURL(currentImg);
		setImg(imgUrl);
		const propName = e.target.name;
		if (currentImg instanceof Blob) {
			const imgReader = new FileReader();
			imgReader.readAsDataURL(currentImg);
			imgReader.onload = () => {
				setCurrentUser((prev) => ({
					...prev,
					[propName]: imgReader.result,
				}));
			};
			imgReader.onerror = () => {
				console.log('error');
			};
		}
	}
	const value = {
		img,
		setImg,
		handleChange,
		handleSubmitPublic,
		handleSubmitPrivate,
		handleSetImg,
		currentUser,
	};

	return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
}

export default InfoProvider;
