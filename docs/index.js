import React from 'react';
import ReactDOM from 'react-dom';
import { BinaryFeedback } from '../src/BinaryFeedback';

const App = () => (
  <div>
    <BinaryFeedback singleSelect />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
