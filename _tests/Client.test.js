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
import BackProjectModal from '../client/Components/backprojectmodal.jsx';
import OwnerModal from '../client/Components/ownermodal.jsx';

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
      const ownerObj = {avatar: 'url here'}
      const projectObj = {name: 'something'}
      const wrapper = shallow(<Header owner={ownerObj} project={projectObj}/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<BackProjectModal />', () => {
  describe('render()', () => {
    test('renders the component for header', () => {
      const ownerObj = {name: 'Jerry'};
      const projectObj = {name: 'Hahaha'};
      const wrapper = shallow(<BackProjectModal project={projectObj} owner={ownerObj}/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<OwnerModal />', () => {
  describe('render()', () => {
    test('renders the component for header', () => {
      const ownerObj = {name: 'Jerry'};
      const playerObj={source: 'http://www.youtube.com/', location: 'Athens, GA'}
      const wrapper = shallow(<OwnerModal owner={ownerObj} player={playerObj}/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<Player />', () => {
  describe('render()', () => {
    test('renders the component for player', () => {
      const playerObj={source: 'http://www.youtube.com/', location: 'Athens, GA'}
      const wrapper = shallow(<Player player={playerObj}/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('<Status />', () => {
  describe('render()', () => {
    test('renders the component for status', () => {
      const statsObj={currentRaised: 505, targetGoal: 1000}
      const wrapper = shallow(<Status stats={statsObj}/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
