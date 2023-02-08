import React from 'react';
import ReactDOM from 'react-dom';
import Hejhej from './hejhej';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hejhej />, div);
  ReactDOM.unmountComponentAtNode(div);
});