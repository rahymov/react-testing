import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root'
import App from 'components/App';

ReactDOM.render(
  <Root store={createStore(reducers, {})} >
    <App />
  </Root>,
  document.querySelector('#root')
)
