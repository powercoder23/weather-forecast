import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

configure({ adapter: new Adapter() });