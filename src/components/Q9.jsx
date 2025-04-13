import React from 'react';

function StringReverser({ text }) {
  const reversed = text.split('').reverse().join('');
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();

  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{text} is {isPalindrome ? 'a Palindrome' : 'not a Palindrome'}</p>
    </div>
  );
}

export default StringReverser;