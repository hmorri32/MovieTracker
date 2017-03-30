import { shallow } from 'enzyme';

import App from './App';

describe('app', () => {
  it.only('should work', () => {
    let wrapper = shallow( <App /> )
    expect(wrapper.length).toBe(1)
  })
})