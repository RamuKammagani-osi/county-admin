import React from 'react';
import { shallow } from 'enzyme';
import UsersList from './UsersList.jsx';

describe('UsersList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UsersList />);
  });

  describe('renders components', () => {
    it('renders card component', () => {
      expect(wrapper.find('Cards').length).toBeGreaterThan(0);
    });

    it('renders GlobalHeader component', () => {
      expect(wrapper.find('GlobalHeader').length).toBe(1);
    });

    it('renders PageHeader component', () => {
      expect(wrapper.find('PageHeader').length).toBe(1);
    });
  });

  it('#displayList function defined', () => {
    const instance = wrapper.instance();
    expect(instance.displayList()).toBeDefined();
  });

  describe('#displayList output', () => {
    it('displays table', () => {
      expect(wrapper.find('BootstrapTable').length).toBe(1);
      expect(wrapper.find('TableHeaderColumn').length).toBe(5);
    });
  });
});
