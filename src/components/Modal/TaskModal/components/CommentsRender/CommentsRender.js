import { useContext } from 'react';
import Img from '~/components/Img/Img';
import useClass from '~/hooks/useClass';
import { TaskModalContext } from '../../context/TaskModalProvider';
import styles from '../../projectModal.module.scss';
function CommentsRender() {
	const modal = useContext(TaskModalContext);
	const cx = useClass(styles);
	return (
		<div className={cx('comment-container')}>
			{modal.taskInfo.comment.map((comment, index) => {
				return (
					<div
						className={cx('d-flex', 'align-items-center', 'w-100', 'mg-bottom-10px')}
						key={index}
					>
						<Img src={comment.userId.img} className={cx('img-sizing')} />
						<div className={cx('comment')}>{comment.content}</div>
						<span className={cx('hour')}>{comment.date}</span>
					</div>
				);
			})}
		</div>
	);
}

export default CommentsRender;
