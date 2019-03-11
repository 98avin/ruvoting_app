import React from 'react';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';

class PageSubmitted extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 0,//0=generating,1=success,2=fail
			message: ''
		}
	}

	componentDidMount() {
		let master = this;
		axios.post('https://pdffillerserver.me/generate', this.props.values).then(function (response) {
			if (response.status === 200) {
				master.setState({
					status: 1,
					message: 'The generated form has been sent to you and your table!'
				})
			}
			else {
				master.setState({
					status: 2,
					message: 'Please notify the table, refresh, and try again!'
				})
			}
		})
			.catch(function (error) {
				master.setState({
					status: 2,
					message: error.message
				})
			});
	}

	render() {
		return (
			<div>
				{this.state.status === 0 ? <pre style={{ "display": "flex", "justifyContent": "center" }}>
					<PacmanLoader
						color={'#C8102E'}
						loading={true}
						style={{ "position": "absolute", "left": "50%" }}
					/>
					<div style={{ "margin-top": "75px" }}>Generating...</div>
				</pre> :
					this.state.status === 1 ? <div>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
							<circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
							<polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
						</svg>
						<div style={{ "margin-top": "42px" }}></div>
						<div style={{ "text-align": "center", "display": "inline-block", "margin-bottom": "25px", "max-width": "500px" }}>
					<pre style={{ "white-space": "pre-line" }}>
						{this.state.message}
					</pre>
				</div>
					</div> : <div>
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
								<circle class="path circle" fill="none" stroke="#C8102E" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
								<line class="path line" fill="none" stroke="#C8102E" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
								<line class="path line" fill="none" stroke="#C8102E" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2" />
							</svg>
							<div style={{ "margin-top": "42px" }}></div>
							<div style={{ "text-align": "center", "display": "inline-block", "margin-bottom": "25px", "max-width": "500px" }}>
					<pre style={{ "white-space": "pre-line" }}>
						{this.state.message}
					</pre>
				</div>
						</div>}
			</div>
		);
	}
};

export default PageSubmitted;
