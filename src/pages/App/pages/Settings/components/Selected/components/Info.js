//render component
import PublicInfo from './infoComponents/PublicInfo';
import PrivateInfo from './infoComponents/PrivateInfo';

//context
import InfoProvider from '../contexts/InfoContext/infoProvider';

function Info() {
	return (
		<div className="tab-pane fade show active" id="account" role="tabpanel">
			<InfoProvider>
				<PublicInfo />
				<PrivateInfo />
			</InfoProvider>
		</div>
	);
}

export default Info;
