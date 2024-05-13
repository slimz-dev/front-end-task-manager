import { useContext } from 'react';
import ReactTimeago from 'react-timeago';
import VietStrings from 'react-timeago/lib/language-strings/vi';
import en from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import Img from '~/components/Img/Img';
import useClass from '~/hooks/useClass';
import { TaskModalContext } from '../../context/TaskModalProvider';
import styles from '../../projectModal.module.scss';
function CommentsRender() {
	const modal = useContext(TaskModalContext);
	const cx = useClass(styles);
	const formatter = buildFormatter(en);
	return (
		<div className={cx('comment-container')}>
			{modal.taskInfo.comment.map((comment, index) => {
				return (
					<div
						className={cx('d-flex', 'align-items-center', 'w-100', 'mg-bottom-10px')}
						key={index}
					>
						<Img src={comment.createBy.img} className={cx('img-sizing')} />
						<div className={cx('comment')}>{comment.content}</div>
						<span className={cx('hour')}>
							<ReactTimeago date={comment.createAt} formatter={formatter} />
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default CommentsRender;
