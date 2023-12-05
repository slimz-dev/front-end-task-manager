//context
import SelectProvider from './contexts/selectProvider';
//component render
import SettingSelect from './components/SettingSelect/SettingSelect';
import Selected from './components/Selected/Selected';

function Settings() {
	return (
		<main className="content">
			<div className="container-fluid p-0">
				<h1 className="h3 mb-3">Settings</h1>

				<div className="row">
					<SelectProvider>
						<SettingSelect />
						<Selected />
					</SelectProvider>
				</div>
			</div>
		</main>
	);
}

export default Settings;
