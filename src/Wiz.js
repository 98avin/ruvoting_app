import React, { Component } from 'react';

import { Line } from 'rc-progress';

class Wiz extends Component {
	state = {
		pageIndex: 0
	};

	render() {
		const renderProps = {
			navigateBack: this._navigateBack,
			navigateNext: this._navigateNext,
			navigateSubmitted: this._navigateSubmitted,
			pageIndex: this.state.pageIndex,
			renderPage: this._renderPage
		};
		return this.props.children(renderProps);
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

	_navigateCurrAdd = () => {
		this.setState(prevState => ({
			pageIndex: 8
		}));
	};

	_renderPage = formProps => {
		const { pageIndex } = this.state;

		const Page = this.props.pages[pageIndex];

		const _citizenNext = () => {
			if(formProps.values.citizen === "yes"){
				this.setState(prevState => ({
					pageIndex: 4
				}));
			}
			else{
				this.setState(prevState => ({
					pageIndex: 3
				}));	
			}
		};

		const _citizenBack = () => {
			this.setState(prevState => ({
				pageIndex: 2
			}));
		};

		const _regrNext = () => {
			switch(formProps.values.regr){
				case "nr":
				this.setState(prevState => ({
					pageIndex: 8
				}));
				break;

				case "arh":
				this.setState(prevState => ({
					pageIndex: 6
				}));
				break;

				case "arc":
				this.setState(prevState => ({
					pageIndex: 7
				}));
				break;

				case "ns":
				this.setState(prevState => ({
					pageIndex: 5
				}));
				break;

				default:
				break;
			}
		};

		const _regrBack = () => {
			this.setState(prevState => ({
				pageIndex: 4
			}));
		};

		//0,1,2,4/5,6/7,8,9,10,11,12,3/end
		const calcPercent = (val) => {
			switch(val){
				case 0:
				return '1';

				case 1:
				return '15';
				
				case 2:
				return '30';

				case 4:
				return '40';

				case 5:
				return '40';

				case 6:
				return '50';

				case 7:
				return '50';

				case 8:
				return '70';

				case 9:
				return '75';

				case 10:
				return '90';

				case 11: 
				return '95';

				case 12:
				return '99';

				case 3:
				return '100';

				case 13:
				return '100';

				default:
				return '0';
			}
		}

		return (
			<div>
			<Page
				{...formProps}
				navigateBack={this._navigateBack}
				navigateNext={this._navigateNext}
				navigateCurrAdd={this._navigateCurrAdd}
				citizenNext={_citizenNext}
				citizenBack={_citizenBack}
				regrNext={_regrNext}
				regrBack={_regrBack}
				pageIndex={pageIndex}
			/>
			<Line percent={calcPercent(this.state.pageIndex)} strokeWidth="1" strokeColor="#C8102E" 
			style={{"width":"98.7%", "position":"absolute", "bottom":"10"}} strokeLinecap="square"/>
			</div>
		);
	};
}

export default Wiz;
