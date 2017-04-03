import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';
import  Link from './Movie';


describe('Movie Component', () => {
  it('should contain a Link section', () => {
      const wrapper = shallow( <Link/> )

      expect(wrapper.find('.movie-card')).toHaveLength(2)
    });
});
