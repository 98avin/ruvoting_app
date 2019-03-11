import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const campusOptions = ['College Ave', 'Busch', 'Livingston', 'Cook/Douglass'];

const collegeAveOptions = ['Brett Hall',
'Campbell Hall', 'Clothier Hall', 'Demarest Hall',
'Frelinghuysen Hall', 'Hardenburgh Hall', 
'Honors College', 'Leupp Hall', 'Mettler Hall',
'Pell Hall', 'Sojourner Truth Apts',
'Stonier Hall', 'Tinsley Hall', 'Easton Ave Apts',
'Wessels Hall'];
const buschOptions = ['Allen Hall', 'Barr Hall',
'Buell Apts', 'B.E.S.T. Hall', 'Crosby Suites',
'Johnson Apts', 'Judson Suites', 'Marvin Apts',
'Mattia Hall', 'McCormick Suites', 'Metzger Hall',
'Morrow Suites', 'Nichols Apts', 'Richardson Apts',
'Silvers Apts', 'Thomas Suites', 'Winkler Suites'];
const liviOptions = ['Livingston Apts', 'Lynston North',
'Lynston South', 'Quad I', 'Quad II', 'Quad III'];
const cookDougOptions = ['Henderson Apts', 
'Jameson Hall', 'Katzenbach Hall', 'Lippincott Hall',
'New Gibbons Hall', 'Old Gibbons Houses',
'Woodybury Bunting-Cobb Hall', 'Heylar House',
'Newell Apts', 'Nicholas Hall', 'Perry Hall', 
'Starkey Apts', 'Voorhees Hall'];

let currentOptions = [];

const campusSpecificList = (campus) => {
	switch(campus){
		case 'College Ave':
		return collegeAveOptions;

		case 'Busch':
		return buschOptions;

		case 'Livingston':
		return liviOptions;

		case 'Cook/Douglass':
		return cookDougOptions;

		default:
		return [];
	}
}

const PageEight = props => (
	<div className="page">
		<pre style={{"white-space":"pre-line", "margin-bottom":"20px"}}>Previous Address (on-campus)</pre>
		<div style={{"textAlign":"center"}}>
		<div style={{"margin":"auto","maxWidth":"500px"}}>
		<label htmlFor="prevCampus">Campus</label>
		<Dropdown options={campusOptions} 
		onChange={(event) => 
			{props.setFieldValue("prevCampus", event.value); 
			props.setFieldValue("prevDorm", "");
			currentOptions=campusSpecificList(event.value)}} 
		value={props.values["prevCampus"]} placeholder="Select a campus" />
		<br/>
		<label htmlFor="prevDorm">Dormitory</label>
		<Dropdown options={currentOptions} 
		onChange={(event) => {props.setFieldValue("prevDorm", event.value)}} 
		value={props.values["prevDorm"]} placeholder="Select a building" />
		</div>
		</div>
		<button
			type="button"
			onClick={props.regrBack}
			disabled={props.pageIndex === 0}
		>
			Back
		</button>
		<button
			type="button"
			onClick={props.navigateNext}
			disabled={props.values["prevCampus"] ? !(props.values["prevCampus"].length > 0
					  && props.values["prevDorm"].length > 0) : true}
		>
			Next
		</button>
	</div>
);

export default PageEight;
