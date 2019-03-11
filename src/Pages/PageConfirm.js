import React from 'react';

class PageConfirm extends React.Component {

	render() {
		return(
		<div>
		<div style={{"fontWeight":"bold"}}>Please Confirm Entered Values:</div>
		<pre>{JSON.stringify(this.props.values, null, 2)}</pre>
		<button
			type="button"
			onClick={this.props.navigateBack}
			disabled={this.props.pageIndex === 0}
		>
			Back
		</button>
		<button
		type="button"
		onClick={this.props.navigateNext}
		disabled={!(true)}
	>
		Submit
	</button>
	</div>
		);
	}
};

export default PageConfirm;
