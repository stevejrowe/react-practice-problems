import React, { useState, useEffect } from 'react';
import './style.css';
import isAnagram from './utils/isAnagram';
import words from './data/words.json';

import FancyList from './components/FancyList';
import Message from './components/Message';
import DescriptionText from './components/DescriptionText';

export default function App() {
  const [inputWord, setInputWord] = useState('');
  const [anagrams, setAnagrams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sanitizedInput = inputWord.trim();
    if (sanitizedInput.length < 3) {
      setAnagrams([]);
    }
    setIsLoading(true);

    const searchAnagram = setTimeout(() => {
      const anagrams = words
        .filter((word) => isAnagram(word, sanitizedInput))
        .filter((word) => word !== sanitizedInput);

      setAnagrams(anagrams);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(searchAnagram);
  }, [inputWord]);

  return (
    <>
      <DescriptionText />
      <label for="search-box">Search Box</label>
      <br />
      <input
        id="search-box"
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
      />
      <p>
        <Message
          anagramCount={anagrams.length}
          inputWord={inputWord}
          isLoading={isLoading}
        />
      </p>
      <FancyList items={anagrams} />
    </>
  );
}
