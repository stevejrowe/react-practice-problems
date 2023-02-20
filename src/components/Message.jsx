import React from 'react'

export default function Message({ anagramCount, inputWord, isLoading }) {
  if (isLoading) {
    return 'Loading...';
  }
  if (inputWord.length < 3) {
    return 'Please enter a word in the search box.';
  }

  if (anagramCount === 0) {
    return `No anagrams found for ${inputWord}.`;
  }

  return `Anagrams for ${inputWord} include:`;
}
