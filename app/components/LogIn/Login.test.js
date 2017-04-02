import { shallow } from 'enzyme';
import React from 'react';
import fetchMock from 'fetch-mock';
import LogIn from './LogIn';



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
  <LogIn signIn={jest.fn()} user={mockUser}/>
)

  it('displays error', async (done) => {
    fetchMock.post('https://api.themoviedb.org/3/movie/now_playing?api_key=e918cc56cafd311d7955d426f4da1685&language=en-US&page=1', { status: 500, body: {} })

    let emailInput = wrapper.find('input[name: "email"]');
    let submitBtn = wrapper.find('button');

    emailInput.simulate('change', {
      target: {
        name: 'email',
        value: 'buttz'
      }
    })

    submitBtn.simulate('click');

    await wrapper.update();

    let expectedErrorMessage = 'invalid credentials';

    expect(wrapper.state().error).toEqual(expectedErrorMessage);

    done();
  })
})
