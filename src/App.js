import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchData } from "./actions/weatherStation";

import WeatherForecast from './components/WeatherForecast';

const mapStateToProps = function (store){
	return {
		forecast: store.weatherStation.data
	}
}

// @connect(store => {
// 	return {
// 		forecast: store.weatherStation.data
// 	}
// })
export  class App extends Component {

	componentDidMount() {
		const detectLocation = new Promise((resolve, reject) => {
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition((position) => {
					resolve(position.coords);
				}, (error) => {
					if (error.code === error.PERMISSION_DENIED) {
						reject("Error detecting location.");
					}
				});
			}
		});

		detectLocation.then((location) => {
			this.props.dispatch(fetchData(location));
		}).catch(() => {
			this.props.dispatch(fetchData("london"));
		});
	}

	render() {
		const { forecast } = this.props;

		return (
			forecast === null ? (
				<div className="loading">
					<div className="spinner"></div>
				</div>
			) : (
					<div>
						<WeatherForecast data={forecast} />
					</div>
				)
		);
	}
}

export default connect(mapStateToProps)(App)