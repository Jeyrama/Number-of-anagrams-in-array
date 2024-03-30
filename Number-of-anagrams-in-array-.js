/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. 
An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, 
and returns the total number of distinct pairs of anagramic words inside it.

Examples:
  There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
  There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/


// Solution

function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex)=>{
    for(let i = theIndex+1; i < sortedWords.length; i++){
      if(word === sortedWords[i]){
        numberOfAnagrams++
      }
    }
  })
  return numberOfAnagrams
}