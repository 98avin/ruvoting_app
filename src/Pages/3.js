import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const PageThree = props => (
	<div className="page">
		<pre style={{ "white-space": "pre-line", "margin-bottom": "20px" }}>Citizenship</pre>
		<label htmlFor="citizen">Are you a U.S. Citizen?</label>
		<div style={{"textAlign":"center"}}>
		<RadioGroup onChange={(value) => {props.setFieldValue("citizen", value)}}  
		style={{"maxWidth":"500px","margin":"auto","textAlign":"left"}}
		value={props.values["citizen"].length > 0 ? props.values["citizen"] : undefined}>
			<RadioButton value="yes" pointColor="#C8102E">
				Yes
  			</RadioButton>
			<RadioButton value="no" pointColor="#C8102E">
				No
  			</RadioButton>
		</RadioGroup>
		</div>
		<button
			type="button"
			onClick={props.navigateBack}
			disabled={props.pageIndex === 0}
		>
			Back
		</button>
		<button
			type="button"
			onClick={props.citizenNext}
			disabled={!(props.values["citizen"].length > 0)}
		>
			Next
		</button>
	</div>
);

export default PageThree;
