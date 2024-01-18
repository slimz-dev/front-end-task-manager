import { toast } from 'react-toastify';

export default function toastDenied() {
	toast.warn('Permission denied !', {
		position: 'top-center',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	});
}
