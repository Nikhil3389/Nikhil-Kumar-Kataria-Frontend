import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import "./List.css";
import SingleListItem from './SingleListitem'
import Button from "react-bootstrap/Button";
const WrappedListComponent = ({ items }, props) => {
  const [setSelectedIndex, selectedIndex] = useState(); //list of selected Items when multiple selection mode is on
  const [currBtn, setcurrBtn] = useState("single");
  const onClickSingle = () => {
    //changes the mode to single selection
    setcurrBtn("single");
    console.log("single");
  };
  const onClickClear = () => {
    // changes the mode to clear selection
    setcurrBtn("clear");
    setSelectedItems([]); // clearing the selectedItems list
    selectedIndex(null);
    console.log(props);
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const handleItemSelect = (itemId) => {
    if (selectedItems.includes(itemId) && currBtn === "multiple") {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else if (currBtn === "multiple") {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleClick = (index) => {
    console.log(index);
    handleItemSelect(index);
    setSelectedIndex === index ? selectedIndex(null) : selectedIndex(index);
    console.log(setSelectedIndex);
  };

  return (
    <>
      <ul
        style={{ textAlign: "left", marginTop: "40px", paddingRight: "35px" }}
      >
        {items.map((item, index) => (
          <SingleListItem
            key={index} //added
            text={item.text} //added
            index={index}
            isSelected={setSelectedIndex === index} //added
            currBtn={currBtn} //added
            selectedItems={selectedItems} //added
            onClickHandler={() => handleClick(index)}
          />
        ))}
      </ul>
      <div
        className="container"
        style={{
          margin: "auto",
          width: "20%",
          marginRight: "auto",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="primary"
          type="button"
          onClick={onClickSingle}
          id="singleBtn"
          style={
            currBtn === "single"
              ? { border: "6px solid black", borderRadius: 10 }
              : { borderRadius: 10 }
          }
          class="btn btn-success mx-2"
        >
          Select
        </Button>
        <button
          type="button"
          onClick={onClickClear}
          style={
            currBtn === "clear"
              ? { border: "6px solid black", borderRadius: 10 }
              : { borderRadius: 10 }
          }
          id="clearBtn"
          class="btn btn-warning mx-2 bg-green"
        >
          Clear
        </button>
      </div>
      <div className="cont"></div>
    </>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};
const List = memo(WrappedListComponent);

export default List;
