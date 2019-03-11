import React from 'react';
import Cleave from 'cleave.js/react';


const PageTwo = props => (
	<div className="page">
		<pre style={{"white-space":"pre-line", "margin-bottom":"20px"}}>Contact Info</pre>
		<label htmlFor="RUID">Last 4 Digits of RUID</label>
		<Cleave
			value={props.values["RUID"]}
			style={{"marginBottom":"20px"}}
			id="RUID"
			type="tel"
			options={{blocks:[4], numericOnly:true}}
			onChange={(event) => {props.setFieldValue("RUID", event.target.value)}}
		/>
		<label htmlFor="number">Phone Number</label>
		<Cleave
			value={props.values["Phone Number"]}
			style={{"marginBottom":"20px"}}
			id="Phone Number"
			type="tel"
			options={{numericOnly: true,
				blocks: [0, 3, 3, 4],
				delimiters: ["(", ") ", "-"]}}
			onChange={(event) => {props.setFieldValue("Phone Number", event.target.value)}}
		/>
		<label htmlFor="Email">Email</label>
		<input
			id="Email"
			onChange={props.handleChange}
			value={props.values["Email"]}
		/>
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
			disabled={!(props.values["RUID"].length === 4
						&& props.values["Phone Number"].length === 14
						&& validateEmail(props.values["Email"]))}
		>
			Next
		</button>
	</div>
);

function validateEmail(email) {
	//  eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default PageTwo;
