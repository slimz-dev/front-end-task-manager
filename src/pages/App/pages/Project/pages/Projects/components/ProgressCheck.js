function ProgressCheck({ data }) {
	let count = 0;
	data.forEach((job) => {
		if (job.state) {
			count++;
		}
	});
	const jobLength = data.length;

	const progressPercent = jobLength ? Math.floor((count / jobLength) * 100) : 0;
	const width = progressPercent.toString();
	return <>{`${width}%`}</>;
}

export default ProgressCheck;
