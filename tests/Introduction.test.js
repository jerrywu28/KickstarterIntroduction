import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Introduction from '../client/index.jsx';

describe('<Introduction />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Introduction />);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});