Frontend Assignment

Respected Sir/Ma'am,

I am pleased to inform you that I have completed my assignment and have incorporated all the necessary changes as per the requirements. I have implemented additional features in this web application, along with a user-friendly graphical user interface (UI). I am eagerly looking forward to receiving your valuable feedback.

Live Link: https://64443704788e667bf9de8d3f--jazzy-gumption-887a2d.netlify.app/

Sincerely,

Nikhil Kumar Kataria

BTech IT

Reg ID: 12001995



# React Component Code Solution Review

## Introduction

Based on the code below answer the following queries:
1. Explain what the simple `List` component does.

Ans: The simple List component is a React functional component that displays a list of items passed as props. Each item is rendered using the SingleListItem component, which can be toggled between selected and unselected states by clicking on it.
The List component receives an array of objects as its 'items' prop. Each object in the array must have a 'text' property, which is used to display the item's text in the UI. It consists of two sub-components "SingleListItem" and "WrappedListComponent". The SingleListItem component is a containment component that represents a single item in a list. It takes four arguments:
Uses index, isSelected, onClickHandler, and text to render list item items with a background color based on their selection state. "WrappedListComponent" is also a stored functional component that uses a "SingleListItem" component to create a list of items. It takes an array of objects with attributes 'text' as the 'item' parameter. Components use the useState and useEffect hooks to track the index of the currently selected item. The List component iterates through an array of items and renders a SingleListItem component for each item. Pass relevant props to the SingleListItem component to handle the display and behavior of each item. The List component also maintains the selected index state using the useState hook. This allows you to keep track of the currently selected item in the list. User clicks are handled by the handleClick function, which updates the selected index based on the user's action. In this way, the List component provides a dynamic, interactive list of selectable items that users can interact with on your site. 

2. What problems / warnings are there with code?

Ans:  There was an error in declaring the selectedIndex variable. The error was related to the usage of useEffect hook, which complained about a missing dependency, specifically setSelectedIndex and The error "Invalid prop 'isSelected' of type string supplied to WrappedSingleListItem, expected boolean" occurs because the propType of 'isSelected' has been set as boolean, but it is being assigned a value of string type, resulting in a type mismatch and  There are issues with PropTypes usage in the code, specifically the incorrect use of "shapeOf" instead of "shape" to define the shape of an object prop. However, "arrayOf" is being used correctly to specify an array prop. It's crucial to rectify the usage of "shapeOf" to "shape" to ensure proper validation of PropTypes in the componentand The function "onClickHandler" is being invoked as a regular function, causing the rendered color to always be green as it takes the initial value of the passed index. To correct this behavior, "onClickHandler" should be called as an arrow function to ensure it receives the updated value of the index


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

![image](https://user-images.githubusercontent.com/71307854/233803985-220b04b5-f590-4ee2-8a39-78d2c548cf36.png)
## List.jsx

![image](https://user-images.githubusercontent.com/71307854/233803938-b78df18b-a286-4d78-bf13-9bb7d982dcd8.png)

![image](https://user-images.githubusercontent.com/71307854/233803954-27fce2dd-0c7e-4658-a250-4302fbae5e1b.png)

![image](https://user-images.githubusercontent.com/71307854/233803962-04494bf2-b75c-48f2-b8af-15b74a3b530c.png)

![image](https://user-images.githubusercontent.com/71307854/233803971-78f74525-6c5c-4cb6-83a4-2b74d258cb7d.png)

## SingleListItem.jsx


![image](https://user-images.githubusercontent.com/71307854/233803852-69ccf4dc-120f-4d0c-b70a-5fa9dacc6f8a.png)

![image](https://user-images.githubusercontent.com/71307854/233803862-a8eb2204-584d-40e7-bf08-f69315545634.png)


## Here is the review of page 

![image](https://user-images.githubusercontent.com/71307854/233803884-b3c57090-12aa-457c-a1e5-7f56481a025e.png)


