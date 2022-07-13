import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Annona_muricata_1.jpg"
        className="food-img"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktFEDQF1-1s18QZN7rOMXbiie5cUWDFFzCg&usqp=CAU"
        className="food-img"
      />
      <img
        src="https://www.gardeningknowhow.com/wp-content/uploads/2015/07/dragon-fruit.jpg"
        className="food-img"
      />
    </div>
  </div>,
  document.getElementById("root")
);
