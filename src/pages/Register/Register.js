import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { UserContext } from '~/contexts/userProvider';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
function Register() {
	const navigate = useNavigate();
	const isLogin = localStorage.getItem('token');
	useEffect(() => {
		if (isLogin) {
			navigate(config.routes.App);
		}
	}, [isLogin]);
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
