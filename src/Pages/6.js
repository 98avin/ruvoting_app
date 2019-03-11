import React from 'react';

const PageSix = props => (
	<div className="page">
		<pre style={{"white-space":"pre-line", "margin-bottom":"20px"}}>
		<a target="_blank" rel="noopener noreferrer" href="https://voter.njsvrs.com/PublicAccess/servlet/com.saber.publicaccess.control.PublicAccessNavigationServlet?USERPROCESS=PublicSearch">
		Click here to check whether you are registered in NJ</a>
		<br/>
		<br/>
		<br/>
		<a target="_blank" rel="noopener noreferrer" href="https://voter.njsvrs.com/PublicAccess/servlet/com.saber.publicaccess.control.PublicAccessNavigationServlet?USERPROCESS=VoterSearch">
		Click here to lookup the address you were previously registered at</a>
		</pre>
		<button
			type="button"
			onClick={props.regrBack}
			disabled={props.pageIndex === 0}
		>
			Back
		</button>
	</div>
);

export default PageSix;
