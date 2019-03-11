import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const PageEleven = props => (
	<div className="page">
		<pre style={{"white-space":"pre-line", "margin-bottom":"20px"}}>Optional</pre>
		<label htmlFor="gender">Gender</label>
		<RadioGroup onChange={(value) => {props.setFieldValue("gender", value);}}  
		style={{"maxWidth":"500px","margin":"auto","textAlign":"left"}}
		value={props.values["gender"] ? props.values["gender"].length > 0 ? props.values["gender"] : undefined : undefined}>
			<RadioButton value="Male" pointColor="#C8102E">
				Male
  			</RadioButton>
			<RadioButton value="Female" pointColor="#C8102E">
				Female
  			</RadioButton>
		</RadioGroup>
		<br/>
		<label htmlFor="RUID">Party</label>
		<RadioGroup onChange={(value) => {
			props.setFieldValue("political-party", "yes");
			if(value === "d"){
				props.setFieldValue("Party Name", "Democrat");
				props.setFieldValue("otherParty", "false");
			}
			else if(value === "r"){
				props.setFieldValue("Party Name", "Republican");
				props.setFieldValue("otherParty", "false");
			}
			else{
				props.setFieldValue("Party Name", "");
				props.setFieldValue("otherParty", "true");
			}}}  
		style={{"maxWidth":"500px","margin":"auto","textAlign":"left"}}
		value={props.values["Party Name"] ? props.values["Party Name"].length > 0 ? 
			   props.values["Party Name"] : undefined : undefined}>
			<RadioButton value="d" pointColor="#C8102E">
				Democrat
  			</RadioButton>
			<RadioButton value="r" pointColor="#C8102E">
				Republican
  			</RadioButton>
			<RadioButton value="o" pointColor="#C8102E">
				Other
  			</RadioButton>
		</RadioGroup>
		{props.values["otherParty"] ? props.values["otherParty"] === "true" ? 
		<div>Enter your party below:
			<input 
			id={"otherParty"}
			onChange={(event) => {props.setFieldValue("Party Name", event.target.value)}}
			value={props.values["Party Name"]}></input>
		</div>
		: null : null}
		<button
			type="button"
			onClick={() => {props.setFieldValue("gender","");
			props.setFieldValue("political-party","2");
			props.setFieldValue("Party Name","");
			props.setFieldValue("otherParty", "false"); props.navigateBack();}}
			disabled={props.pageIndex === 0}
		>
			Back
		</button>
		<button
			type="button"
			onClick={props.navigateNext}
			disabled={props.values["otherParty"] === "true" ? !(props.values["Party Name"].length > 0) : false}
		>
			Next
		</button>
	</div>
);

export default PageEleven;
