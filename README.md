# React Simple Feedback

##### The library that makes gathering user feedback simple

## Resources

* [Github](https://github.com/Teddarific/react-simple-feedback)
* [Demos / Examples](http://teddyni.com/react-simple-feedback)

## Installation

To add to your React app,

```
npm install react-simple-feedback
```

or with Yarn,

```
yarn add react-simple-feedback
```

## Usage

See the following example live [here](http://teddyni.com/react-simple-feedback)

````js
import React, { Component } from 'react';
import { BinaryFeedback } from 'react-simple-feedback';

class Example extends Component {
    constructor(props){
        this.state = {
            positiveCount: 0,
            negativeCount: 0
        }
    }

    onPositiveClick = () => {
        this.setState(prevState => {
            return { positiveCount: prevState.positiveCount + 1 }
        });
    }

    onNegativeClick = () => {
        this.setState(prevState => {
            return { negativeCount: prevState.negativeCount + 1 }
        });
    }

    render(){
        return (
            <div>
                <BinaryFeedback
                    onPositiveClick={this.onPositiveClick}
                    onNegativeClick={this.onNegativeClick}
                />
            </div>
        );
    }
}

````

## API

### Binary Feedback

The Binary Feedback component is used to gather feedback in which there are two options. Default look is the "thumbs up" and "thumbs down" format.

This component takes the following props:

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| onPositiveClick | Function | Required | Callback function called when positive button is clicked |
| onNegativeClick | Function | Required | Callback function called when negative button is clicked |
| singleSelect | Boolean | `false` | When the user selects a response, disable the other button to disable potentially multiple responses. |
| positiveContent | String, JSX | Thumbs Up SVG | Content that goes on the positive button |
| negativeContent | String, JSX | Thumbs Down SVG | Content that goes on the negative button |


## Contributors

Built from [react-library-starter](https://github.com/Teddarific/react-library-starter). Check it out for an easy way to turn a React component into a NPM package!

##### Authors:
* Teddy Ni

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
