import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/weatherStation";


const mapStateToProps = function(store){
	console.log(store)
	return {
		status: store.weatherStation.status
	}
	
}

// @connect((store) => {
// 	return {
// 		status: store.weatherStation.status
// 	}
// })
export class Dashboard extends Component {

	_updateCity = () => {
		const city = this.__cityInput.value;
		console.log(this)
		city.length !== 0 ? this.props.dispatch(fetchData(city)) : null;
	}

	_onkeyPress = e => {
		e.key === "Enter" ? this._updateCity() : null
	}

	render() {

		const { city, status } = this.props;
		const wrapperClass = (status === "failed") ? "weather-dashboard invalid-city" : "weather-dashboard";

		return (
			<div className={wrapperClass}>
				<header>
					<h1 className="heading">5-Day Weather Forecast</h1>
				</header>
				<section className="controls">
					<div className="container">
						<input
							type="text"
							className="form-control"
							id="city-name"
							ref={input => {
								this.__cityInput = input;
								return this.__cityInput;
							}}
							onKeyPress={this._onkeyPress}
							placeholder={city}
						/>
						<button
							className="btn btn-primary"
							onClick={this._updateCity}
							id="change-city-btn"
						> Get Weather</button>
					</div>
				</section>
				<span className="error">Please enter valid city name!</span>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Dashboard)