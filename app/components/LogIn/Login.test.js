import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import LogIn from './LogIn';
import createHistory from 'history/createBrowserHistory';
import { browserHistory } from 'react-router'
import ReactTestUtils from 'react-addons-test-utils';


describe('LogIn Component', () => {


  const mockUser ={
    user: {
      id: 1,
      name: 'Taylor',
      password:'password',
      email: 'tman2272@aol.com'
    }
  }

  const wrapper = shallow(
    <LogIn signIn={jest.fn()} user={mockUser} signOut={jest.fn()}/>
  )


  it('displays error', async (done) => {

    fetchMock.post('/api/users', { status: 500, body: {} })

    const emailInput = wrapper.find('input[name="email"]');
    const submitBtn = wrapper.find('#signin-btn');

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'buttz'
      }
    })

    submitBtn.simulate('click');
    await wrapper.update();

    let expectedErrorMessage = 'Email and Password do not match';

    expect(wrapper.state().error).toEqual(expectedErrorMessage);

    done();

  })

  it.skip('should route to home when a login is successful', async() => {

    // const wrapper = shallow(
    //   <LogIn user={mockUser} signOut={jest.fn()}/>
    // )

    LogIn.prototype.signIn = jest.genMockFunction();

    let component = ReactTestUtils.mockComponent(<LogIn user={mockUser} />);

    ReactTestUtils.Simulate.change(component.refs.field);

    expect(logIn.prototype.signIn).toBeCalled();
    //
    // const history = createHistory();
    //
    // spyOn(history, 'push')
    //
    // fetchMock.post('http://localhost:3000/api/users', {
    //   status: 200,
    //   ok: true,
    //   body: mockUser
    // })
    //
    // const emailInput    = wrapper.find('input[name="email"]')
    // const passwordInput = wrapper.find('input[name="password"]')
    // const submitBtn     = wrapper.find('#signin-btn')
    //
    // emailInput.simulate('change', {
    //   target: {
    //     name: 'email',
    //     value: 'tman2272@aol.com'
    //   }
    // })
    //
    // passwordInput.simulate('change', {
    //   target: {
    //     name: 'password',
    //     value: 'password'
    //   }
    // })
    //
    // submitBtn.simulate('click')
    //
    // await wrapper.update();
    //
    // expect(jest.fn()).toHaveBeenCalled()
    //
    // done()
  })



})
