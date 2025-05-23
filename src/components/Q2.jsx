import React from "react";

const FruitList = () => {
  const fruits = ["Papaya", "Green Apple", "Apricot"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li> 
      ))}
    </ul>
  );
};

export default FruitList;