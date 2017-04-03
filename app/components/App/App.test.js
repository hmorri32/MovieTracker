import { shallow, mount } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import createHistory from 'history/createBrowserHistory';

import stubMovies from '../../helpers/newMoviesStub.json'

import App from './App.jsx';
import AppContainer from './AppContainer.js';

const mockStore = configureMockStore()({})



// need to test if state was passed down to props
// const setup = () => {
//   const Container = mount(
//     <Provider store={mockStore}>
//       <AppContainer />
//     </Provider>
//   );





describe.skip('app', () => {

  const { Container, Component } = setup();


  it.only('should work', () => {
    // fetchMock.post('https://api.themoviedb.org/3/movie/now_playing?api_key=e918cc56cafd311d7955d426f4da1685&language=en-US&page=1', stubMovies )
    let wrapper = Component;

    // await wrapper.update()
    console.log(wrapper);


    // done()

  })
})
