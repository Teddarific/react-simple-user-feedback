import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BinaryFeedback } from '../BinaryFeedback';

import './index.scss';

// const App = () => (
//   <div>
//     <BinaryFeedback />
//   </div>
// );


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="doc-home">
        <div className="doc-title">
        React Simple Feedback
        </div>
        <div className="doc-subtitle">
          <a href="https://github.com/Teddarific/react-simple-feedback" target="_blank" rel="noopener noreferrer"> Github Repository </a>
        </div>
        <div className="doc-subtitle">
        Author: <a href="https://github.com/Teddarific" target="_blank" rel="noopener noreferrer"> Teddy Ni </a>
        </div>
        <div className="doc-subtitle">
        Licensed under MIT
        </div>
        <div className="doc-components">
          <div className="doc-component">
            <div className="doc-component-title">
            Binary Feedback
            </div>
            <div className="doc-component-component">
              <BinaryFeedback />
            </div>
            <div className="doc-component-component">
              <BinaryFeedback singleSelect />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="doc-home">
//       <div className="doc-title">
//       React Simple Feedback
//       </div>
//       <div className="doc-subtitle">
//         <a href="https://github.com/Teddarific/react-simple-feedback" target="_blank" rel="noopener noreferrer"> Github Repository </a>
//       </div>
//       <div className="doc-subtitle">
//       Author: <a href="https://github.com/Teddarific" target="_blank" rel="noopener noreferrer"> Teddy Ni </a>
//       </div>
//       <div className="doc-subtitle">
//       Licensed under MIT
//       </div>
//       <div className="doc-components">
//         <div className="doc-component">
//           <div className="doc-component-title">
//           Binary Feedback
//           </div>
//           <div className="doc-component-component">
//             <BinaryFeedback />
//           </div>
//           <div className="doc-component-component">
//             <BinaryFeedback singleSelect />
//           </div>
//         </div>
//
//       </div>
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById('root'));
