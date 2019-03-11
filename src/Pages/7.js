import React from 'react';
import Cleave from 'cleave.js/react';

const PageSeven = props => (
	<div className="page">
		<pre style={{"white-space":"pre-line", "margin-bottom":"20px"}}>Previous Address (home/off campus)</pre>		
		<label htmlFor="Last Registered address">Street Address (e.g. 2020 Rutgers Way)</label>
		<input
			id="Last Registered address"
			onChange={props.handleChange}
			value={props.values["Last Registered address"]}
		/>
		<label htmlFor="Apt#3">Apt# (if applicable)</label>
		<Cleave
			value={props.values["Apt#3"]}
			style={{"marginBottom":"20px"}}
			id="Apt#3"
			type="tel"
			onChange={(event) => {props.setFieldValue("Apt#3", event.target.value)}}
		/>
		<label htmlFor="Municipality3">Town</label>
		<input
			id="Municipality3"
			onChange={props.handleChange}
			value={props.values["Municipality3"]}
		/>
		<label htmlFor="County3">County (e.g. Middlesex)</label>
		<input
			id="County3"
			onChange={props.handleChange}
			value={props.values["County3"]}
		/>
		<label htmlFor="State3">State (e.g. NJ)</label>
		<Cleave
			id="State3"
			options={{blocks:[2], uppercase:"true"}}
			onChange={props.handleChange}
			value={props.values["State3"]}
		/>
		<label htmlFor="Zipcode3">Zip Code (e.g. 08901)</label>
		<Cleave
			value={props.values["Zipcode3"]}
			style={{"marginBottom":"20px"}}
			id="Zipcode3"
			type="tel"
			options={{blocks:[5], numericOnly:true}}
			onChange={(event) => {props.setFieldValue("Zipcode3", event.target.value)}}
		/>
		<button
			type="button"
			onClick={props.regrBack}
			disabled={props.pageIndex === 0}
		>
			Back
		</button>
		<button
			type="button"
			onClick={props.navigateCurrAdd}
			disabled={props.values["Last Registered address"] ?
				!(props.values["Last Registered address"].length > 0
						&& props.values["Municipality3"].length > 0
						&& props.values["County3"].length > 0
						&& props.values["State3"].length === 2
						&& props.values["Zipcode3"].length === 5)
					: true}
		>
			Next
		</button>
	</div>
);

export default PageSeven;
