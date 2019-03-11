// Helper styles for demo
import './helper.css';

import React from 'react';
import { render } from 'react-dom';

import HttpsRedirect from 'react-https-redirect';

import Wizard from './Wizard';

const App = () => (
	<HttpsRedirect>
	<div className="app">
		<h1>RU Registered Wizard</h1>
		<Wizard />
	</div>
	</HttpsRedirect>
);

render(<App />, document.getElementById('root'));
