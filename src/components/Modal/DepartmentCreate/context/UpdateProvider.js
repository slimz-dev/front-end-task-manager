import { createContext, useState } from 'react';
export const UpdateContext = createContext();
function UpdateProvider({ children }) {
	const [name, setName] = useState({});
	function handleSetName(e) {
		setName({ name: e.target.value });
	}

	const value = {
		name,
		handleSetName,
	};
	return <UpdateContext.Provider value={value}>{children}</UpdateContext.Provider>;
}

export default UpdateProvider;
