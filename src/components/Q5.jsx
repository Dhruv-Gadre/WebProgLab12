import React from 'react';

function Greeting({ isMorning }) {
  return (
    <div>
      {isMorning ? 'Good Morning' : 'Good Evening'}
    </div>
  );
}

export default Greeting;