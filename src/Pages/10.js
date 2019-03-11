import React from 'react';
import Cleave from 'cleave.js/react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


const PageTen = props => (
	<div className="page">
		<pre style={{"white-space":"pre-line", "margin-bottom":"20px"}}>Identification</pre>
		<label htmlFor="RUID">Type</label>
		<RadioGroup onChange={(value) => {props.setFieldValue("idType", value);}}  
		style={{"maxWidth":"500px","margin":"auto","textAlign":"left"}}
		value={props.values["idType"] ? props.values["idType"].length > 0 ? 
			   props.values["idType"] : undefined : undefined}>
			<RadioButton value="dl" pointColor="#C8102E">
				Driver's License (NJ only)
  			</RadioButton>
			<RadioButton value="ssn" pointColor="#C8102E">
				Last 4 Digits of SSN
  			</RadioButton>
			<RadioButton value="no" pointColor="#C8102E">
				Do not have either of the above
  			</RadioButton>
		</RadioGroup>
		{(props.values["idType"] !== "no" && props.values["idType"] !== "") ?
		props.values["idType"] === "dl" ?
		<div>
			<label htmlFor="dl">Driver's License</label>
			<input
			style={{"marginBottom":"20px","textTransform":"uppercase"}}
			id={"dl"}
			maxLength={15}
			onChange={(event) => {props.setFieldValue("dl", event.target.value)}}
			value={props.values["dl"]}
			/>
		</div> : 
		<div>
			<label htmlFor="ssn">Last 4 Digits of SSN</label>
			<Cleave
			style={{"marginBottom":"20px"}}
			id="ssn"
			type="tel"
			options={{blocks:[4], numericOnly:true}}
			onChange={(event) => {props.setFieldValue("ssn", event.target.value)}}
			value={props.values["ssn"]}
			/>
		</div>
		: null
		}
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
			disabled={props.values["idType"] ? !(props.values["idType"] === "no" || 
					   (props.values["idType"] === "dl" && props.values["dl"].length === 15) || 
					   (props.values["idType"] === "ssn" && props.values["ssn"].length === 4))
					: true}
		>
			Next
		</button>
	</div>
);

export default PageTen;
