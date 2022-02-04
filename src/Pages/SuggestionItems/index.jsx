import React, { useState } from "react";
import Suggestion from "../../Componenets/Suggestion";
import "./styles.scss";

SugesstionItems.propTypes = {};

function SugesstionItems(props) {
  const initItemsList = [
    {
      id: 1,
      pic: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
      name: "Cheese Cake",
      price: "$10",
      sug: "sug",
    },
    {
      id: 2,
      pic: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
      name: "Cheese Cake",
      price: "$10",
      sug: "sug",
    },
    {
      id: 3,
      pic: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
      name: "Cheese Cake",
      price: "$10",
      sug: "sug",
    },
    {
      id: 4,
      pic: "https://tubikitchen.com/wp-content/uploads/2019/01/banh-bong-lan-cam-orange-chiffon-000.jpg",
      name: "Cheese Cake",
      price: "$10",
      sug: "sug",
    },
  ];
  const [itemsList, setItemsList] = useState(initItemsList);
  const [filteredSug, setFilteredSug] = useState("sug");
  const sugChoice = () => {
    setFilteredSug("sug");
  };
  const sugChoice2 = () => {
    setFilteredSug("");
  };
  const newList = itemsList.filter(
    (item) => filteredSug === item.sug || filteredSug === "sug"
  );
  const handleClick = (itm, idx) => {
    //clone current aray
    const newItemsList = [...itemsList];
    //toggle array
    newItemsList[idx] = {
      ...newItemsList[idx],
      sug: newItemsList[idx].sug === "sug" ? "" : "sug",
    };
    //update new array
    itemsList(newItemsList);
  };

  return (
    <div className="suggestion">
      <div className="sug__title">
        <li
          onClick={sugChoice}
          className={`sugChoice ${filteredSug === "sug" ? "active" : ""}`}
        >
          <i class="fas fa-lightbulb"></i>
          <p>Suggest for you</p>
        </li>

        <li
          onClick={sugChoice2}
          className={`sugChoice2 ${filteredSug === "" ? "active" : "sug"}`}
        >
          <i class="fas fa-street-view"></i>
          <p>Near you</p>
        </li>
      </div>

      <Suggestion item={newList} onSugClick={handleClick} />
    </div>
  );
}

export default SugesstionItems;
