import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/weatherStation";

@connect((store) => {
	return {
		status: store.weatherStation.status
	}
})
export default class Dashboard extends Component {

	_updateCity = () => {
		const city = this.__cityInput.value;
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
