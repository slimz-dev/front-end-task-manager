import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
function Register() {
	return (
		<main className="main d-flex w-100">
			<div className="container d-flex flex-column">
				<div className="row h-100">
					<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
						<div className="d-table-cell align-middle">
							<Header />
							<Content />
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</main>
	);
}

export default Register;
