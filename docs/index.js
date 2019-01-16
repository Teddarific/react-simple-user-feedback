import React from 'react';
import ReactDOM from 'react-dom';
import { ExampleComponent } from '../src/ExampleComponent';

const App = () => (
  <div>
    <ExampleComponent />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
