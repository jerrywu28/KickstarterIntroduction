import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Introduction from '../client/Components/introduction.jsx';
import NavBar from '../client/Components/navbar.jsx';
import Header from '../client/Components/header.jsx';
import Player from '../client/Components/player.jsx';
import Status from '../client/Components/status.jsx';

Enzyme.configure({adapter: new Adapter()});

describe('<Introduction />', () => {
  describe('render()', () => {
    test('renders the main introduction component', () => {
      const wrapper = shallow(<Introduction />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<NavBar />', () => {
  describe('render()', () => {
    test('renders the component for NavBar', () => {
      const wrapper = shallow(<NavBar />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<Header />', () => {
  describe('render()', () => {
    test('renders the component for header', () => {
      const wrapper = shallow(<Header />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<Player />', () => {
  describe('render()', () => {
    test('renders the component for player', () => {
      const wrapper = shallow(<Player />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<Status />', () => {
  describe('render()', () => {
    test('renders the component for status', () => {
      const wrapper = shallow(<Status />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});