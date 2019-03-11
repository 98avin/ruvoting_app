import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const PageTwelve = props => (
	<div className="page">
		<pre style={{"white-space":"pre-line", "margin-bottom":"20px"}}>Last steps</pre>
		<label htmlFor="station">I am currently at...</label>
		<RadioGroup onChange={(value) => {props.setFieldValue("station", value);}}  
		style={{"maxWidth":"500px","margin":"auto","textAlign":"left"}}
		value={props.values["station"] ? props.values["station"].length > 0 ? props.values["station"] : undefined : undefined}>
			<RadioButton value="1" pointColor="#C8102E">
				Station 1
  			</RadioButton>
			<RadioButton value="2" pointColor="#C8102E">
				Station 2
  			</RadioButton>
			<RadioButton value="3" pointColor="#C8102E">
				Station 3
  			</RadioButton>
			<RadioButton value="n" pointColor="#C8102E">
				None (I'm not at an RU Voting station, but I'll print and turn in my form myself)
  			</RadioButton>
		</RadioGroup>
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
			disabled={props.values["station"] ? !(props.values["station"].length > 0) : true}
		>
			Done
		</button>
	</div>
);


export default PageTwelve;
