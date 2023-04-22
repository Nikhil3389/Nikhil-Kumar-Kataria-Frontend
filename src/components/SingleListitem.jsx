import React from "react";
import PropTypes from "prop-types";

// Single List Item
const SingleListItem = ({
  index,
  isSelected,
  text,
  currBtn,
  onClickHandler,
  selectedItems,
}) => {
  if (currBtn === "single") {
    //Single Selection Mode
    return (
      <>
        <li
          style={{
            backgroundColor: isSelected ? "green" : "red",
            letterSpacing: "0.8",
            border: "2px solid black",
            listStyleType: "none",
            margin: "5px",
            height: "35px",
            textAlign: "center",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: 10,
          }}
          onClick={() => onClickHandler(index)} // Checking if the item is selected , we need to set the background to green
        >
          {text}
        </li>
      </>
    );
  } else {
    //Clear Selection Mode
    return (
      <>
        <li
          style={{
            backgroundColor: "red",
            letterSpacing: "0.8",
            border: "2px solid black",
            margin: "5px",
            height: "35px",
            textAlign: "center",
            listStyleType: "none",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: 10,
          }}
          onClick={() => onClickHandler(index)} // This puts all the item's background to red since every thing is deselected
        >
          {text}
        </li>
      </>
    );
  }
};

SingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  selectedItems: PropTypes.array,
  text: PropTypes.string.isRequired,
};

export default SingleListItem;
