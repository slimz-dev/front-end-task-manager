import { Link } from 'react-router-dom';
import config from '~/config';
function Password() {
	return (
		<div className="tab-pane fade active show" id="password" role="tabpanel">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Password</h5>

					<form>
						<div className="form-group">
							<label htmlFor="inputPasswordCurrent">Current password</label>
							<input
								type="password"
								className="form-control"
								id="inputPasswordCurrent"
							/>
							<small>
								<Link to={config.routes.ResetPass}>Forgot your password?</Link>
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="inputPasswordNew">New password</label>
							<input type="password" className="form-control" id="inputPasswordNew" />
						</div>
						<div className="form-group">
							<label htmlFor="inputPasswordNew2">Verify password</label>
							<input
								type="password"
								className="form-control"
								id="inputPasswordNew2"
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Save changes
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Password;
