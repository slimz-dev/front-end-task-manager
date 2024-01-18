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
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IgEtQ-dvj9mk-LwmuXOqW1e95iFhtC3A3g&usqp=CAU"
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
