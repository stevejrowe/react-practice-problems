import React from 'react';

export default function DescriptionText() {
  return (
    <>
      <h1>Anagram Explorer</h1>
      <p>
        Enter a word in the search box, and a list of anagrams should appear in
        section below.
      </p>
      <p>
        For example, "live" should have five anagrams, and "queen" should have
        none.
      </p>
      <h2>To Do List</h2>
      <ol>
        <li>
          When a user searches something with a capital letter, the application
          tells them there are no anagrams for the word. Please correct this.
        </li>
        <li>
          The search should not occur when there are less than three letters in
          the input. Please make it so that the loading state and results do not
          display in this case. For example, the message should not read out
          "Loading..." when a user clears out all of the text from the input.
        </li>
      </ol>
    </>
  );
}
