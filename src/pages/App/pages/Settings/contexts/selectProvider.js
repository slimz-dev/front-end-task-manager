import { createContext, useState } from 'react';

export const SelectContext = createContext();

function SelectProvider({ children }) {
	const [content, setContent] = useState(true);
	const data = {
		content,
		setContent,
	};
	return <SelectContext.Provider value={data}>{children}</SelectContext.Provider>;
}

export default SelectProvider;
