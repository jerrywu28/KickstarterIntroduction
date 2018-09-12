const React = require('react');
const ReactDOM = require('react-dom');
import { shallow } from 'enzyme';
const Introduction = require('./../client/index.jsx');

it('renders without crashing', () => {
  shallow(<Introduction />);
});