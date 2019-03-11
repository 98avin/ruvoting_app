import React from 'react';

const PageOne = props => (
	<div className="page">
		<div style={{"text-align":"center","display":"inline-block","margin-bottom":"25px","max-width":"500px"}}>
		<pre style={{"white-space":"pre-line"}}>This form is to register at your new on-campus address so you can vote
			here at Rutgers. If you would like to do something else, please use a paper form.
		</pre>
		</div>
		<label htmlFor="First Name">First Name</label>
		<input
			id="First Name"
			onChange={props.handleChange}
			value={props.values["First Name"]}
		/>
		<label htmlFor="Last Name">Last Name</label>
		<input id="Last Name" onChange={props.handleChange} value={props.values["Last Name"]} />
		<button
			type="button"
			onClick={props.navigateBack}
			disabled={props.pageIndex === 0}
		>
			Back
		</button>
		<button
			type="button"
			onClick={props.navigateNext}
			disabled={
				props.values["First Name"] ? 
				!(props.values["First Name"].length > 0 && props.values["Last Name"].length > 0)
			: true}
		>
			Next
		</button>
	</div>
);

export default PageOne;
