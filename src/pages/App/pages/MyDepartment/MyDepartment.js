import AllUsers from './components/AllUsers';
import TotalUsersProvider from './context/TotalUsersProvider';

function MyDepartment() {
	return (
		<main className="content">
			<div className="container-fluid p-0">
				<h1 className="h3 mb-3">Members</h1>
				<div className="row">
					<TotalUsersProvider>
						<div className="col-xl-12">
							<AllUsers />
						</div>
					</TotalUsersProvider>
				</div>
			</div>
		</main>
	);
}

export default MyDepartment;
