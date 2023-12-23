import AllUsers from './components/AllUsers';
import SingleInfo from './components/SingleInfo';
import TotalUsersProvider from './context/TotalUsersProvider';
function Member() {
	return (
		<main className="content">
			<div className="container-fluid p-0">
				<h1 className="h3 mb-3">Members</h1>
				<div className="row">
					<TotalUsersProvider>
						<div className="col-xl-8">
							<AllUsers />
						</div>

						<div className="col-xl-4">
							<SingleInfo />
						</div>
					</TotalUsersProvider>
				</div>
			</div>
		</main>
	);
}

export default Member;
