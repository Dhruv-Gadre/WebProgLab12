import React from 'react';

function CurrentDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();

  return (
    <div>
      Today is {days[today]}
    </div>
  );
}

export default CurrentDay;