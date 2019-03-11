import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PageOne from './Pages/1';
import PageTwo from './Pages/2';
import PageThree from './Pages/3';
import PageFour from './Pages/4';
import PageFive from './Pages/5';
import PageSix from './Pages/6';
import PageSeven from './Pages/7';
import PageEight from './Pages/8';
import PageNine from './Pages/9';
import PageTen from './Pages/10';
import PageEleven from './Pages/11';
import PageTwelve from './Pages/12';
import PageSubmitted from './Pages/PageSubmitted';
import PageConfirm from './Pages/PageConfirm';
import Wiz from './Wiz';
import { Persist } from 'formik-persist'

const initialValues = {
	"First Name":"",
	"Last Name":"",
	"Email":"",
	"Phone Number":"",
	"RUID":"",
	"citizen":"",
	"regr":"",
	"Last Registered address":"",
	"Municipality3":"",
	"County3":"",
	"State3":"",
	"Zipcode3":"",
	"prevCampus":"",
	"prevDorm":"",
	"currCampus":"",
	"currDorm":"",
	"idType":"",
	"dl":"",
	"ssn":"",
	"gender":"",
	"political-party":"",
	"Party Name":"",
	"otherParty":"false"
};

class Wizard extends Component {
	state = {
		pageIndex: 0
	};

	render() {
		return (
			<Wiz pages={[PageOne, PageTwo, PageThree,
			PageFour, PageFive, PageSix, PageSeven, PageEight,
			PageNine, PageTen, PageEleven, PageTwelve, PageConfirm, 
			PageSubmitted]}>
				{wizProps => (
					<div>
						<Formik
							initialValues={initialValues}
							validationSchema={Yup.object().shape({
								first: Yup.string().required('Required')
							})
							}
							onSubmit={(values, { setSubmitting, resetForm }) => {
								wizProps.navigateNext();
								resetForm();
								setTimeout(() => {
									//alert(JSON.stringify(values, null, 2));
									setSubmitting(false);
								}, 1000);
							}}
						>
							{props => {
								const { handleSubmit } = props;
								return (
									<form onSubmit={handleSubmit}>
										{wizProps.renderPage(props)}
										<Persist name="voting-form" />
									</form>
								);
							}}
						</Formik>
					</div>
				)}
			</Wiz>
		);
	}

	_navigateBack = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex - 1 >= 0 ? prevState.pageIndex - 1 : 0
		}));
	};

	_navigateNext = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex + 1
		}));
	};

	_renderPage(props) {
		const { pageIndex } = this.state;
		const pageHash = {
			0: PageOne,
			1: PageTwo,
			2: PageThree,
			3: PageFour,
			4: PageFive,
			5: PageSix,
			6: PageSeven,
			7: PageEight,
			8: PageNine,
			9: PageTen,
			10: PageEleven,
			11: PageTwelve,
			12: PageConfirm,
			13: PageSubmitted
		};

		const Page = pageHash[pageIndex];

		return (
			<Page
				{...props}
				navigateBack={this._navigateBack}
				navigateNext={this._navigateNext}
				pageIndex={pageIndex}
			/>
		);
	}
}

export default Wizard;
