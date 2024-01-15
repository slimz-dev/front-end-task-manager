import Img from '~/components/Img/Img';

function Calendar() {
	return (
		<div className="col-12 col-lg-6 col-xl-6 d-flex">
			<div className="card flex-fill">
				<div className="card-header"></div>
				<div className="card-body d-flex">
					<div className="align-self-center w-100">
						<div className="chart">
							<div id="datetimepicker-dashboard"></div>
							<div>
								<Img
									width="100%"
									src="https://cdn1.vectorstock.com/i/1000x1000/38/15/motivation-slogan-and-quote-work-so-hard-that-one-vector-33223815.jpg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calendar;
