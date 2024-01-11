import { useContext } from 'react';
import useClass from '~/hooks/useClass';
import { TaskModalContext } from '../../context/TaskModalProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../projectModal.module.scss';
import { deleteJob } from '~/services/ProjectService/deleteJobService';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function JobsRender({ setData }) {
	const cx = useClass(styles);
	const modal = useContext(TaskModalContext);
	function handleCheckJob(e) {
		const checked = e.target.checked;
		const id = e.target.id;
		let thisIndex;
		let thisJob = modal.taskInfo.smallJob.find((job, index) => {
			if (job._id === id) {
				thisIndex = index;
			}
			return job._id === id;
		});

		thisJob = {
			...thisJob,
			state: checked,
		};
		setData((prev) => {
			const copyJobs = prev;
			copyJobs.splice(thisIndex, 1, thisJob);
			return copyJobs;
		});
	}

	async function handleDeleteJob(e) {
		let thisElement = e.target;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		await deleteJob(thisElement.id, modal.taskInfo._id, modal.taskInfo.department);
	}
	return (
		<div className={cx('job-container', 'flex-column', 'd-flex', 'justify-content-between')}>
			{modal.taskInfo.smallJob.map((job, index) => {
				return (
					<div
						className={cx('job-element', 'd-flex', 'justify-content-between')}
						key={index}
					>
						<label htmlFor={job._id} className={cx('job-label')}>
							{job.title}
						</label>
						<div className={cx('d-flex', 'align-items-center', 'hover')}>
							<input
								id={job._id}
								type="checkbox"
								defaultChecked={job.state}
								onChange={(e) => handleCheckJob(e)}
								className={cx('job-checkbox')}
							/>
							<span id={job._id} onClick={(e) => handleDeleteJob(e)}>
								<FontAwesomeIcon icon={faXmark} />
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default JobsRender;
