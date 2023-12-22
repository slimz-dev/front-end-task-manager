import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
	return (
		<footer className={cx('footer', 'footer-pos')}>
			<div className="container-fluid">
				<div className="row text-muted">
					<div className="col-12 text-right">
						<p className="mb-0">
							&copy; 2023 -{' '}
							<a href="index.html" className="text-muted">
								TaskManager
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
