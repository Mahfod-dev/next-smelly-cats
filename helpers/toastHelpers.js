import { toast } from 'react-toastify';

export const showToast = (type, message) => {
	switch (type) {
		case 'success':
			toast.success(message, {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000,
			});
			break;
		case 'error':
			toast.error(message, {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000,
			});
			break;
		default:
			toast(message, {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000,
			});
			break;
	}
};
