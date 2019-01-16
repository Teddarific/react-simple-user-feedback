# React-Lib-Starter

##### A React Library starter pack

![alt text](https://img.shields.io/github/license/teddarific/react-lib-starter.svg "MIT License")

## Getting Started

To get started, simply clone this repo:

```
git clone https://github.com/Teddarific/react-lib-starter.git
```

Rename the new repo to the name of your library, and go through the ````package.json```` to fill out your own details as well. 

Install all the dependencies by running
```yarn```

To run the library, ```yarn start```

To build the library, ```yarn build```

To build the docs, ```yarn build:docs```

To publish your library, ```yarn publish``` or ```npm publish```

## Directory Structure

Here's a peek of what the file structure looks like:

```
.
├── LICENSE
├── README.md
├── docs
│   ├── index.html
│   └── index.js
├── package.json
├── src
│   ├── ExampleComponent
│   │   ├── index.js
│   │   └── index.scss
│   └── index.js
├── webpack.config.js
└── yarn.lock
```

Inside ```src``` is where your library will go, and where you can create your own custom React components!

Inside ```docs``` is where you can test your library, and ideal for a demo website that you can show off your cool components. It is what gets hosted when ```yarn start``` runs.

## Disclaimer

This is by no means the perfect starter pack. This is not set up for testing, nor set up for more complex Redux-based components. This is my personal vision for a simple starter pack to get a simple React component shared with the world!
