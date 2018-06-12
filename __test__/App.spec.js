import React, { Component } from "react";
import { Provider } from "react-redux";
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import {App} from "../src/App";
import store from "../src/store";
import { fetchData } from "../src/actions/weatherStation";

describe('>>> --- Snapshot', () => {

	const forecast = {
		city: "Thane",
		list: []
	}

	// it('+++capturing Snapshot of App', () => {
	// 	const renderedValue = renderer.create(<App forecast={forecast}/>).toJSON()
	// 	expect(renderedValue).toMatchSnapshot();
	// });


	it('renders without crashing', () => {
		const app = shallow(<App />)
		expect(app).toBeDefined()
	});


});





