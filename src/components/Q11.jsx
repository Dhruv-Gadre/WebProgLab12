import React from 'react';

function LeapYearChecker({ year }) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  return (
    <div>
      {year} is {isLeapYear ? 'a Leap Year' : 'not a Leap Year'}
    </div>
  );
}

export default LeapYearChecker;