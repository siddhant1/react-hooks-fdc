import React from "react";
import "./styles.css";

function counter() {
  return (
    <div className="container">
      <div onClick={() => dispatch({ type: "increment" })} className="btn">
        +
      </div>
      <div className="count">{"0"}</div>
      <div onClick={() => dispatch({ type: "decrement" })} className="btn">
        -
      </div>
    </div>
  );
}

export default counter;
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//   }
// };
