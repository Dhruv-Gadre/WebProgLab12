import React from 'react';

function PrimeChecker({ number }) {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      {number} is {isPrime(number) ? 'a Prime Number' : 'not a Prime Number'}
    </div>
  );
}

export default PrimeChecker;