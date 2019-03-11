import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const PageFive = props => (
	<div className="page">
		<pre style={{"white-space":"pre-line", "margin-bottom":"20px"}}>Registration Status</pre>
		<label htmlFor="citizen">Status</label>
		<div style={{"textAlign":"center"}}>
		<RadioGroup onChange={(value) => {props.setFieldValue("regr", value)}}  
		style={{"maxWidth":"500px","margin":"auto","textAlign":"left"}}
		value={props.values["regr"].length > 0 ? props.values["regr"] : undefined}>
			<RadioButton value="nr" pointColor="#C8102E">
				Not registered (or registered in another state)
  			</RadioButton>
			<RadioButton value="arh" pointColor="#C8102E">
				Already registered (at home/off campus)
  			</RadioButton>
			<RadioButton value="arc" pointColor="#C8102E">
				Already registered (on campus)
  			</RadioButton>
			<RadioButton value="ns" pointColor="#C8102E">
				Not sure
  			</RadioButton>
		</RadioGroup>
		</div>
		<button
			type="button"
			onClick={props.citizenBack}
			disabled={props.pageIndex === 0}
		>
			Back
		</button>
		<button
			type="button"
			onClick={props.regrNext}
			disabled={props.values["regr"] ? !(props.values["regr"].length > 0) : true}
		>
			Next
		</button>
	</div>
);

export default PageFive;
