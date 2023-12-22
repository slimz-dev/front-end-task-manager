import { createContext, useState } from 'react';

export const ModalContext = createContext();

function ModalProvider({ children }) {
	const [show, setShow] = useState(false);
	const value = {
		show,
		setShow,
	};
	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export default ModalProvider;
