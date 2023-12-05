import { useState } from 'react';
import { createContext } from 'react';

export const Toggle = createContext();

function ToggleProvider({ children }) {
	const [isToggled, setIsToggled] = useState(false);
	function handleToggled() {
		setIsToggled(!isToggled);
	}
	const data = {
		isToggled,
		handleToggled,
	};
	return <Toggle.Provider value={data}>{children}</Toggle.Provider>;
}

export default ToggleProvider;
