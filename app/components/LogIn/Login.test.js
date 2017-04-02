import { shallow } from 'enzyme';
import React from 'react';
import fetchMock from 'fetch-mock';
import LogIn from './LogIn';
import createHistory from 'history/createBrowserHistory';




describe('LogIn Component', () => {

  const history = createHistory;
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

    fetchMock.post('http://localhost:3000/api/users', { status: 500, body: {} })

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

  it('should route to home when a login is successful', async() => {
    spyOn(history(), 'push')

    fetchMock.post('http://localhost:3000/api/users', {
      status: 200,
      ok: true,
      body: mockUser
    })

    const emailInput = wrapper.find('input[name="email"]')
    const passwordInput = wrapper.find('input[name="password"]')
    const submitBtn = wrapper.find('#signin-btn')

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'tman2272@aol.com'
      }
    })

    passwordInput.simulate('change', {
      target: {
        name: 'password',
        value: 'password'
      }
    })

    submitBtn.simulate('click')

    await wrapper.update()

    expect(history().push()).toHaveBeenCalledWith('/');
  })



})
