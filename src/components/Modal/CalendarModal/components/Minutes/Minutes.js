import { useState } from 'react';

function Minutes() {
	const [array, setArray] = useState([]);
	const [firstTime, SetIsFirstTime] = useState(false);
	let transferArray = [];
	for (let i = 0; i <= 59; i++) {
		if (i <= 9) {
			transferArray.push(`0${i}`);
		} else {
			transferArray.push(i);
		}
	}

	if (transferArray.length && !firstTime) {
		SetIsFirstTime(true);
		setArray(transferArray);
	}

	return (
		<>
			{array.map((e, index) => {
				return <option key={index}>{e}</option>;
			})}
		</>
	);
}

export default Minutes;
