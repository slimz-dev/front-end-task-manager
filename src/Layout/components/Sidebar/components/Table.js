import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';

const cx = classNames.bind(styles);

function Table() {
	return (
		<a href="#atables" className="sidebar-link">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				width="24"
				fill="currentColor"
				viewBox="0 0 512 512"
				className="feather feather-users align-middle"
			>
				<path d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
			</svg>
			<span className="align-middle">Table</span>
		</a>
	);
}

export default Table;
