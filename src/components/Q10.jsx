import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  return (
    <div>
      <button onClick={generateNumber}>Generate Random Number</button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
}

export default RandomNumberGenerator;