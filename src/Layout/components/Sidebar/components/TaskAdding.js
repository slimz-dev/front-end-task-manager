import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';

const cx = classNames.bind(styles);

function TaskAdding() {
	return (
		<a href="#a" className={cx('sidebar-link', 'center-button', 'not-hover')}>
			<button
				className={cx('btn btn-primary btn-lg btn-pill', 'btn-width')}
				data-toggle="button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="img"
					className={cx('icon-width-height')}
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						fillRule="evenodd"
						d="M15.358 4.464a8.25 8.25 0 104.892 7.54v-.827a.75.75 0 011.5 0v.828a9.751 9.751 0 01-17.93 5.302A9.75 9.75 0 0115.969 3.094a.75.75 0 01-.61 1.37Zm6.172-.195a.75.75 0 010 1.061l-9 9.01a.75.75 0 01-1.06 0l-2.7-2.7a.75.75 0 111.06-1.061l2.17 2.17 8.47-8.48a.75.75 0 011.06 0Z"
						clipRule="evenodd"
					></path>
				</svg>
				<span>Add task</span>
			</button>
		</a>
	);
}

export default TaskAdding;
