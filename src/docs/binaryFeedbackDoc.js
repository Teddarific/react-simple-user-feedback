import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import { BinaryFeedback } from '../BinaryFeedback';

const ex1 = `
\`\`\`js
<BinaryFeedback
  onPositiveClick={this.onPositiveClick}
  onNegativeClick={this.onNegativeClick}
/>
\`\`\`
`;

const ex2 = `
\`\`\`js
<BinaryFeedback
  onPositiveClick={this.onPositiveClick}
  onNegativeClick={this.onNegativeClick}
  singleSelect
/>
\`\`\`
`;

const ex3 = `
\`\`\`js
<BinaryFeedback
  onPositiveClick={this.onPositiveClick}
  onNegativeClick={this.onNegativeClick}
  positiveContent="Useful"
  negativeContent="Not useful"
/>
\`\`\`
`;

const ex4 = `
\`\`\`js
<BinaryFeedback
  onPositiveClick={this.onPositiveClick}
  onNegativeClick={this.onNegativeClick}
  positive
/>
\`\`\`
`;

const ex5 = `
\`\`\`js
<BinaryFeedback
  onPositiveClick={this.onPositiveClick}
  onNegativeClick={this.onNegativeClick}
  positiveContent={<span> Useful <span>}
  negativeContent={<span> Not useful <span>}
  singleSelect
  negative
/>
\`\`\`
`;

class BinaryFeedbackDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positiveCount: 0,
      negativeCount: 0,
    };

    this.onPositiveClick = this.onPositiveClick.bind(this);
    this.onNegativeClick = this.onNegativeClick.bind(this);
  }

  onPositiveClick() {
    console.log('click');
    this.setState((prevState) => {
      return { positiveCount: prevState.positiveCount + 1 };
    });
  }

  onNegativeClick() {
    this.setState((prevState) => {
      return { negativeCount: prevState.negativeCount + 1 };
    });
  }

  render() {
    return (
      <div>
        <div className="binary-counter">
          <div> Total Positives Clicked: {this.state.positiveCount} </div>
          <div> Total Negatives Clicked: {this.state.negativeCount} </div>
        </div>
        <div className="example-container">
          <div className="example-title"> Code: </div>
          <ReactMarkdown source={ex1} />
          <div className="example-title"> Result: </div>
          <BinaryFeedback
            onPositiveClick={this.onPositiveClick}
            onNegativeClick={this.onNegativeClick}
          />
        </div>
        <div className="example-container">
          <div className="example-title"> Code: </div>
          <ReactMarkdown source={ex2} />
          <div className="example-title"> Result: </div>
          <BinaryFeedback
            onPositiveClick={this.onPositiveClick}
            onNegativeClick={this.onNegativeClick}
            singleSelect
          />
        </div>
        <div className="example-container">
          <div className="example-title"> Code: </div>
          <ReactMarkdown source={ex3} />
          <div className="example-title"> Result: </div>
          <BinaryFeedback
            onPositiveClick={this.onPositiveClick}
            onNegativeClick={this.onNegativeClick}
            positiveContent="Useful"
            negativeContent="Not useful"
          />
        </div>
        <div className="example-container">
          <div className="example-title"> Code: </div>
          <ReactMarkdown source={ex4} />
          <div className="example-title"> Result: </div>
          <BinaryFeedback
            onPositiveClick={this.onPositiveClick}
            onNegativeClick={this.onNegativeClick}
            positive
          />
        </div>
        <div className="example-container">
          <div className="example-title"> Code: </div>
          <ReactMarkdown source={ex5} />
          <div className="example-title"> Result: </div>
          <BinaryFeedback
            onPositiveClick={this.onPositiveClick}
            onNegativeClick={this.onNegativeClick}
            positiveContent={<span> Useful </span>}
            negativeContent={<span> Not useful </span>}
            singleSelect
            negative
          />
        </div>
      </div>
    );
  }
}

export default BinaryFeedbackDoc;
