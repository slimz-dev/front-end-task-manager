import { useContext } from 'react';
import Password from './components/Password';
import Info from './components/Info';
import { SelectContext } from '../../contexts/selectProvider';

function Selected() {
	const select = useContext(SelectContext);
	return (
		<div className="col-md-9 col-xl-10">
			<div className="tab-content">{select.content ? <Info /> : <Password />}</div>
		</div>
	);
}

export default Selected;
