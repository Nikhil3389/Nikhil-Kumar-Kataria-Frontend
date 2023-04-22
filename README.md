SteelEye - Frontend Developer Assignment

Respected Sir/Ma'am,

I am pleased to inform you that I have completed my assignment and have incorporated all the necessary changes as per the requirements. I have implemented additional features in this web application, along with a user-friendly graphical user interface (UI). I am eagerly looking forward to receiving your valuable feedback.

Live Link: https://keshav-steeleye.netlify.app/

Drive Link: https://docs.google.com/document/d/1-HcKmwfLxQ8t9yHdmON-2fR3OncHS_YoLr-54VlZdys/edit?usp=sharing

Sincerely,
Keshav Verma
BTech IT
Reg ID: 12011798
Email: keshavverma532@gmail.com
Phone No: 7973068960S


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# React Component Code Solution Review

## Introduction

Based on the code below answer the following queries:
1. Explain what the simple `List` component does.

Ans: The simple List component is a React functional component that displays a list of items passed as props. Each item is rendered using the SingleListItem component, which can be toggled between selected and unselected states by clicking on it.

The List component receives an array of objects as its 'items' prop. Each object in the array must have a 'text' property, which is used to display the item's text in the UI.

2. What problems / warnings are there with code?

Ans: The code has one problem: The 'isSelected' prop passed to the SingleListItem component should be a boolean value indicating whether the current item is selected or not. However, in the current implementation, it is passed the selectedIndex state variable, which is initially undefined and then set to the index of the selected item. This will cause the isSelected prop to be truthy, regardless of whether the item is actually selected or not. To fix this issue, isSelected should be set to a boolean value based on a comparison between the current item index and the selectedIndex state variable.


3. Please fix, optimize, and/or modify the component as much as you think is necessary.

Ans: To fix this issue, we need to change the isSelected prop to be a boolean value that indicates whether the current item is selected or not. We can do this by comparing the current index prop with the selectedIndex state variable and return true if they match, and false otherwise. Here's the updated code for the SingleListItem component:

## Code

```javascript

const SingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red',
    padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px'
}}
      onClick={() => onClickHandler(index)}
    > 
      {text}
    </li>
  );
};

```
## data.js
```javascript
export const items = [
  {
    text: 'Nikhil Kumar Kataria',
  },
  {
    text: 'Subh',
  },
  {
    text: 'aakarshit',
  },
];
```
## List.jsx
```javascript


import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import SingleListItem from './SingleListItem.jsx';

// List Component
const List = ({ items = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = useCallback(index => {
    setSelectedIndex(index);
  }, []);

  const memoizedItems = useMemo(
    () =>
      items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
        />
      )),
    [items, handleClick, selectedIndex]
  );

  return (
    <ul style={{ textAlign: 'left', listStyleType: 'none', padding: 0 }}>
      {memoizedItems}
      <style>
        {`
          li:hover {
            cursor: pointer;
            background-color: #f8f8f8;
          }
        `}
      </style>
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

export default List;
```
## SingleListItem.jsx

```javascript
import React from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red',
    padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px'
}}
      onClick={() => onClickHandler(index)}
    > 
      {text}
    </li>
  );
};



SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleListItem;

```

## Here is the review of page 

![image](https://user-images.githubusercontent.com/71307854/233766029-db36357f-07fd-48c4-bbfd-10f320545438.png)

# React Component Code Solution Review

## Introduction

Based on the code below answer the following queries:
1. Explain what the simple `List` component does.

Ans: The simple List component is a React functional component that displays a list of items passed as props. Each item is rendered using the SingleListItem component, which can be toggled between selected and unselected states by clicking on it.

The List component receives an array of objects as its 'items' prop. Each object in the array must have a 'text' property, which is used to display the item's text in the UI.

2. What problems / warnings are there with code?

Ans: The code has one problem: The 'isSelected' prop passed to the SingleListItem component should be a boolean value indicating whether the current item is selected or not. However, in the current implementation, it is passed the selectedIndex state variable, which is initially undefined and then set to the index of the selected item. This will cause the isSelected prop to be truthy, regardless of whether the item is actually selected or not. To fix this issue, isSelected should be set to a boolean value based on a comparison between the current item index and the selectedIndex state variable.


3. Please fix, optimize, and/or modify the component as much as you think is necessary.

Ans: To fix this issue, we need to change the isSelected prop to be a boolean value that indicates whether the current item is selected or not. We can do this by comparing the current index prop with the selectedIndex state variable and return true if they match, and false otherwise. Here's the updated code for the SingleListItem component:

## Code

```javascript

const SingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red',
    padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px'
}}
      onClick={() => onClickHandler(index)}
    > 
      {text}
    </li>
  );
};

```
## data.js
```javascript
export const items = [
  {
    text: 'Nikhil Kumar Kataria',
  },
  {
    text: 'Subh',
  },
  {
    text: 'aakarshit',
  },
];
```
## List.jsx
```javascript


import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import SingleListItem from './SingleListItem.jsx';

// List Component
const List = ({ items = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = useCallback(index => {
    setSelectedIndex(index);
  }, []);

  const memoizedItems = useMemo(
    () =>
      items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
        />
      )),
    [items, handleClick, selectedIndex]
  );

  return (
    <ul style={{ textAlign: 'left', listStyleType: 'none', padding: 0 }}>
      {memoizedItems}
      <style>
        {`
          li:hover {
            cursor: pointer;
            background-color: #f8f8f8;
          }
        `}
      </style>
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

export default List;
```
## SingleListItem.jsx

```javascript
import React from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red',
    padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px'
}}
      onClick={() => onClickHandler(index)}
    > 
      {text}
    </li>
  );
};



SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleListItem;

```

## Here is the review of page 

![image](https://user-images.githubusercontent.com/71307854/233766029-db36357f-07fd-48c4-bbfd-10f320545438.png)

