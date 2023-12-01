function Sidebar() {
	return (
		<nav id="sidebar" className="sidebar">
			<div className="sidebar-content ">
				<a className="sidebar-brand" href="index.html">
					<i className="align-middle" data-feather="box"></i>
					<span className="align-middle">AppStack</span>
				</a>

				<ul className="sidebar-nav">
					<li className="sidebar-header">Main</li>
					<li className="sidebar-item active">
						<a href="#dashboards" data-toggle="collapse" className="sidebar-link">
							<i className="align-middle" data-feather="sliders"></i>{' '}
							<span className="align-middle">Dashboard</span>
						</a>
						<ul
							id="dashboards"
							className="sidebar-dropdown list-unstyled collapse show"
							data-parent="#sidebar"
						>
							<li className="sidebar-item active">
								<a className="sidebar-link" href="dashboard-default.html">
									Default
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="dashboard-analytics-1.html">
									Analytics
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="dashboard-e-commerce.html">
									E-commerce
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="dashboard-social.html">
									Social
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="dashboard-crypto.html">
									Crypto{' '}
									<span className="sidebar-badge badge badge-primary">New</span>
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#pages" data-toggle="collapse" className="sidebar-link collapsed">
							<i className="align-middle" data-feather="layout"></i>{' '}
							<span className="align-middle">Pages</span>
						</a>
						<ul
							id="pages"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-profile.html">
									Profile
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-settings.html">
									Settings
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-clients.html">
									Clients
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-projects.html">
									Projects{' '}
									<span className="sidebar-badge badge badge-primary">New</span>
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-invoice.html">
									Invoice
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-pricing.html">
									Pricing
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-tasks.html">
									Tasks{' '}
									<span className="sidebar-badge badge badge-primary">New</span>
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-blank.html">
									Blank Page
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#auth" data-toggle="collapse" className="sidebar-link collapsed">
							<i className="align-middle" data-feather="users"></i>{' '}
							<span className="align-middle">Auth</span>
							<span className="sidebar-badge badge badge-secondary">12/24</span>
						</a>
						<ul
							id="auth"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-sign-in.html">
									Sign In
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-sign-up.html">
									Sign Up
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-reset-password.html">
									Reset Password
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-404.html">
									404 Page
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="pages-500.html">
									500 Page
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a
							href="#layouts"
							data-toggle="collapse"
							className="sidebar-link collapsed"
						>
							<i className="align-middle" data-feather="monitor"></i>{' '}
							<span className="align-middle">Layouts</span>
						</a>
						<ul
							id="layouts"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="layouts-sidebar-sticky.html">
									Sticky Sidebar
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="layouts-sidebar-collapsed.html">
									Collapsed Sidebar
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="layouts-boxed.html">
									Boxed Layout
								</a>
							</li>
							<li className="sidebar-item">
								<a
									className="sidebar-link"
									href="dashboard-analytics.html?theme=classNameic"
								>
									ClassNameic Theme
								</a>
							</li>
							<li className="sidebar-item">
								<a
									className="sidebar-link"
									href="dashboard-analytics-2.html?theme=corporate"
								>
									Corporate Theme{' '}
									<span className="sidebar-badge badge badge-primary">New</span>
								</a>
							</li>
							<li className="sidebar-item">
								<a
									className="sidebar-link"
									href="dashboard-analytics-3.html?theme=modern"
								>
									Modern Theme{' '}
									<span className="sidebar-badge badge badge-primary">New</span>
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a
							href="#documentation"
							data-toggle="collapse"
							className="sidebar-link collapsed"
						>
							<i className="align-middle" data-feather="book-open"></i>{' '}
							<span className="align-middle">Documentation</span>
						</a>
						<ul
							id="documentation"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="docs-introduction.html">
									Introduction
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="docs-installation.html">
									Getting Started
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="docs-plugins.html">
									Plugins
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="docs-changelog.html">
									Changelog
								</a>
							</li>
						</ul>
					</li>

					<li className="sidebar-header">Components</li>
					<li className="sidebar-item">
						<a href="#ui" data-toggle="collapse" className="sidebar-link collapsed">
							<i className="align-middle" data-feather="grid"></i>{' '}
							<span className="align-middle">UI Elements</span>
						</a>
						<ul
							id="ui"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-alerts.html">
									Alerts
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-buttons.html">
									Buttons
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-cards.html">
									Cards
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-general.html">
									General
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-grid.html">
									Grid
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-modals.html">
									Modals
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-notifications.html">
									Notifications
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-tabs.html">
									Tabs
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="ui-typography.html">
									Typography
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#charts" data-toggle="collapse" className="sidebar-link collapsed">
							<i className="align-middle" data-feather="pie-chart"></i>{' '}
							<span className="align-middle">Charts</span>
							<span className="sidebar-badge badge badge-primary">New</span>
						</a>
						<ul
							id="charts"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="charts-chartjs.html">
									Chart.js
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="charts-apexcharts.html">
									ApexCharts{' '}
									<span className="sidebar-badge badge badge-primary">New</span>
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#forms" data-toggle="collapse" className="sidebar-link collapsed">
							<i className="align-middle" data-feather="check-square"></i>{' '}
							<span className="align-middle">Forms</span>
						</a>
						<ul
							id="forms"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="forms-layouts.html">
									Layouts
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="forms-basic-elements.html">
									Basic Elements
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="forms-advanced-elements.html">
									Advanced Elements
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="forms-input-groups.html">
									Input Groups
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="forms-editors.html">
									Editors
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="forms-validation.html">
									Validation
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="forms-wizard.html">
									Wizard
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#tables" data-toggle="collapse" className="sidebar-link collapsed">
							<i className="align-middle" data-feather="list"></i>{' '}
							<span className="align-middle">Tables</span>
						</a>
						<ul
							id="tables"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="tables-bootstrap.html">
									Bootstrap
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="tables-datatables.html">
									DataTables
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#icons" data-toggle="collapse" className="sidebar-link collapsed">
							<i className="align-middle" data-feather="heart"></i>{' '}
							<span className="align-middle">Icons</span>
							<span className="sidebar-badge badge badge-info">Special</span>
						</a>
						<ul
							id="icons"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="icons-feather.html">
									Feather
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="icons-font-awesome.html">
									Font Awesome
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a className="sidebar-link" href="calendar.html">
							<i className="align-middle" data-feather="calendar"></i>{' '}
							<span className="align-middle">Calendar</span>
							<span className="sidebar-badge badge badge-primary">New</span>
						</a>
					</li>
					<li className="sidebar-item">
						<a href="#maps" data-toggle="collapse" className="sidebar-link collapsed">
							<i className="align-middle" data-feather="map-pin"></i>{' '}
							<span className="align-middle">Maps</span>
						</a>
						<ul
							id="maps"
							className="sidebar-dropdown list-unstyled collapse "
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a className="sidebar-link" href="maps-google.html">
									Google Maps
								</a>
							</li>
							<li className="sidebar-item">
								<a className="sidebar-link" href="maps-vector.html">
									Vector Maps
								</a>
							</li>
						</ul>
					</li>
					<li className="sidebar-item">
						<a href="#multi" data-toggle="collapse" className="sidebar-link">
							<i className="align-middle" data-feather="share-2"></i>{' '}
							<span className="align-middle">Multi Level</span>
						</a>
						<ul
							id="multi"
							className="sidebar-dropdown list-unstyled collapse"
							data-parent="#sidebar"
						>
							<li className="sidebar-item">
								<a
									href="#multi-2"
									data-toggle="collapse"
									className="sidebar-link collapsed"
								>
									Two Levels
								</a>
								<ul
									id="multi-2"
									className="sidebar-dropdown list-unstyled collapse"
								>
									<li className="sidebar-item">
										<a className="sidebar-link" href="#">
											Item 1
										</a>
										<a className="sidebar-link" href="#">
											Item 2
										</a>
									</li>
								</ul>
							</li>
							<li className="sidebar-item">
								<a
									href="#multi-3"
									data-toggle="collapse"
									className="sidebar-link collapsed"
								>
									Three Levels
								</a>
								<ul
									id="multi-3"
									className="sidebar-dropdown list-unstyled collapse"
								>
									<li className="sidebar-item">
										<a
											href="#multi-3-1"
											data-toggle="collapse"
											className="sidebar-link collapsed"
										>
											Item 1
										</a>
										<ul
											id="multi-3-1"
											className="sidebar-dropdown list-unstyled collapse"
										>
											<li className="sidebar-item">
												<a className="sidebar-link" href="#">
													Item 1
												</a>
												<a className="sidebar-link" href="#">
													Item 2
												</a>
											</li>
										</ul>
									</li>
									<li className="sidebar-item">
										<a className="sidebar-link" href="#">
											Item 2
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>

				<div className="sidebar-bottom d-none d-lg-block">
					<div className="media">
						<img
							className="rounded-circle mr-3"
							src=".\assets\img\avatars\avatar.jpg"
							alt="Chris Wood"
							width="40"
							height="40"
						/>
						<div className="media-body">
							<h5 className="mb-1">Chris Wood</h5>
							<div>
								<i className="fas fa-circle text-success"></i> Online
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Sidebar;
