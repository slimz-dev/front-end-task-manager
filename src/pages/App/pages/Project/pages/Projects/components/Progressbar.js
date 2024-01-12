function ProgressBar({ data }) {
	let count = 0;
	data.forEach((job) => {
		if (job.state) {
			count++;
		}
	});
	const jobLength = data.length;
	const progressPercent = jobLength ? Math.floor((count / jobLength) * 100) : 0;
	const width = progressPercent.toString();
	return (
		<div
			className="progress-bar"
			role="progressbar"
			aria-valuenow="100"
			aria-valuemin="0"
			aria-valuemax="100"
			style={{ width: `${width}%` }}
		></div>
	);
}

export default ProgressBar;
