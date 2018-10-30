import React, {Component,} from 'react';
import {Provider} from 'react-redux';

import store from './src/store';
import News from './src/container/News/News';

export default class App extends Component{
render(){
  return (
    <Provider store={store}>
       <News />
    </Provider>
  );
}
}