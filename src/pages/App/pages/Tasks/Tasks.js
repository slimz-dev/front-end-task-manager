import { useRef, useState, useEffect } from 'react';
import Img from '~/components/Img/Img';

let fakeApi = [
	{
		state: 'Upcoming',
		id: 0,
		description: 'View task 0',
	},
	{
		state: 'Upcoming',
		id: 1,
		description: 'View task 1',
	},
	{
		state: 'Upcoming',
		id: 2,
		description: 'View task 2',
	},
	{
		state: 'In progress',
		id: 3,
		description: 'View task 3',
	},
	{
		state: 'On hold',
		id: 4,
		description: 'View task 4',
	},
	{
		state: 'On hold',
		id: 5,
		description: 'View task 5',
	},
	{
		state: 'Completed',
		id: 6,
		description: 'View task 6',
	},
];

function Tasks() {
	const [dragItem, setDragItem] = useState('');
	const [data, setData] = useState(fakeApi);
	const stateRef = useRef([]);

	function handleDragOver(e) {
		e.preventDefault();
	}
	function handleStart(e) {
		setDragItem(e.target);
	}

	function handleDrop(e) {
		e.preventDefault();
		for (let index = 0; index <= 3; index++) {
			const thisState = stateRef.current[index];
			if (thisState.contains(e.target)) {
				let stateChange;
				switch (index) {
					case 0:
						stateChange = 'Upcoming';
						break;
					case 1:
						stateChange = 'In progress';
						break;
					case 2:
						stateChange = 'On hold';
						break;
					default:
						stateChange = 'Completed';
						break;
				}
				if (data[dragItem.id]) {
					data[dragItem.id].state = stateChange;
				}
				const newArray = data.map((task) => {
					return task;
				});
				setData(newArray);
			}
		}
	}

	return (
		<main className="content">
			<div className="container-fluid p-0">
				<a href="#a" className="btn btn-primary float-right mt-n1">
					<i className="fas fa-plus"></i> New task
				</a>
				<h1 className="h3 mb-3">Tasks</h1>
				<div className="row">
					<div
						className="col-12 col-lg-6 col-xl-3"
						ref={(element) => (stateRef.current[0] = element)}
						onDragOver={(e) => handleDragOver(e)}
						onDrop={(e) => handleDrop(e)}
					>
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Upcoming</h5>
							</div>
							<div className="card-body p-3">
								<div>
									{data.map((task, id) => {
										return task.state === 'Upcoming' ? (
											<div
												id={task.id}
												key={id}
												className="card mb-3 bg-light cursor-grab border"
												draggable
												onDragStart={handleStart}
											>
												<div className="card-body p-3">
													<div className="float-right mr-n2">
														<label className="custom-control custom-checkbox">
															<input
																type="checkbox"
																className="custom-control-input"
															/>
															<span className="custom-control-label text-hide">
																Checkbox
															</span>
														</label>
													</div>
													<p>{task.description}</p>
													<div className="float-right mt-n1">
														<Img
															src="img\avatars\avatar.jpg"
															width="32"
															height="32"
															className="rounded-circle"
															alt="Avatar"
														/>
													</div>
													<a className="btn btn-primary btn-sm" href="#a">
														View
													</a>
												</div>
											</div>
										) : (
											''
										);
									})}
								</div>
								<a href="#a" className="btn btn-primary btn-block">
									Add new task
								</a>
							</div>
						</div>
					</div>
					<div
						className="col-12 col-lg-6 col-xl-3"
						ref={(element) => (stateRef.current[1] = element)}
						onDragOver={(e) => handleDragOver(e)}
						onDrop={(e) => handleDrop(e)}
					>
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">In progress</h5>
							</div>
							<div className="card-body p-3">
								<div>
									{data.map((task, id) => {
										return task.state === 'In progress' ? (
											<div
												id={task.id}
												key={id}
												className="card mb-3 bg-light cursor-grab border"
												draggable
												onDragStart={handleStart}
											>
												<div className="card-body p-3">
													<div className="float-right mr-n2">
														<label className="custom-control custom-checkbox">
															<input
																type="checkbox"
																className="custom-control-input"
															/>
															<span className="custom-control-label text-hide">
																Checkbox
															</span>
														</label>
													</div>
													<p>{task.description}</p>
													<div className="float-right mt-n1">
														<Img
															src="img\avatars\avatar.jpg"
															width="32"
															height="32"
															className="rounded-circle"
															alt="Avatar"
														/>
													</div>
													<a className="btn btn-primary btn-sm" href="#a">
														View
													</a>
												</div>
											</div>
										) : (
											''
										);
									})}
								</div>
								<a href="#a" className="btn btn-primary btn-block">
									Add new task
								</a>
							</div>
						</div>
					</div>
					<div
						className="col-12 col-lg-6 col-xl-3"
						ref={(element) => (stateRef.current[2] = element)}
						onDragOver={(e) => handleDragOver(e)}
						onDrop={(e) => handleDrop(e)}
					>
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">On hold</h5>
							</div>
							<div className="card-body p-3">
								<div>
									{data.map((task, id) => {
										return task.state === 'On hold' ? (
											<div
												id={task.id}
												key={id}
												className="card mb-3 bg-light cursor-grab border"
												draggable
												onDragStart={handleStart}
											>
												<div className="card-body p-3">
													<div className="float-right mr-n2">
														<label className="custom-control custom-checkbox">
															<input
																type="checkbox"
																className="custom-control-input"
															/>
															<span className="custom-control-label text-hide">
																Checkbox
															</span>
														</label>
													</div>
													<p>{task.description}</p>
													<div className="float-right mt-n1">
														<Img
															src="img\avatars\avatar.jpg"
															width="32"
															height="32"
															className="rounded-circle"
															alt="Avatar"
														/>
													</div>
													<a className="btn btn-primary btn-sm" href="#a">
														View
													</a>
												</div>
											</div>
										) : (
											''
										);
									})}
								</div>
								<a href="#a" className="btn btn-primary btn-block">
									Add new task
								</a>
							</div>
						</div>
					</div>
					<div
						className="col-12 col-lg-6 col-xl-3"
						ref={(element) => (stateRef.current[3] = element)}
						onDragOver={(e) => handleDragOver(e)}
						onDrop={(e) => handleDrop(e)}
					>
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Completed</h5>
							</div>
							<div className="card-body p-3">
								<div>
									{data.map((task, id) => {
										return task.state === 'Completed' ? (
											<div
												id={task.id}
												key={id}
												className="card mb-3 bg-light cursor-grab border"
												draggable
												onDragStart={(e) => handleStart(e)}
											>
												<div className="card-body p-3">
													<div className="float-right mr-n2">
														<label className="custom-control custom-checkbox">
															<input
																type="checkbox"
																className="custom-control-input"
															/>
															<span className="custom-control-label text-hide">
																Checkbox
															</span>
														</label>
													</div>
													<p>{task.description}</p>
													<div className="float-right mt-n1">
														<Img
															src="img\avatars\avatar.jpg"
															width="32"
															height="32"
															className="rounded-circle"
															alt="Avatar"
														/>
													</div>
													<a className="btn btn-primary btn-sm" href="#a">
														View
													</a>
												</div>
											</div>
										) : (
											''
										);
									})}
								</div>
								<a href="#a" className="btn btn-primary btn-block">
									Add new task
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Tasks;
