function ProgressCheck({ data }) {
	let count = 0;
	data.forEach((job) => {
		if (job.state) {
			count++;
		}
	});
	const jobLength = data.length;

	const progressPercent = jobLength ? Math.floor(jobLength / count) : 0;
	return <>{`${progressPercent}%`}</>;
}

export default ProgressCheck;
