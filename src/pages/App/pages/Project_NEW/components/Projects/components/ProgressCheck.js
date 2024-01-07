function ProgressCheck({ data }) {
	let count = 0;
	data.forEach((job) => {
		if (job.state) {
			count++;
		}
	});
	const jobLength = data.length;

	const progressPercent = jobLength ? Math.floor(count / jobLength) : 0;
	return <>{`${progressPercent}%`}</>;
}

export default ProgressCheck;
