/* 
*  Most of the algo problems come from https://leetcode.com
*
*  I have tried to solve some of the problems without resorting to brute force,
*  but most of them are solved by brute force.
*
*  Feel free to add your own solutions.
*/

// Two Sum
// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++) {
      for(let j = 0; j < nums.length; j++) {
          if(nums[i] + nums[j] === target && i !== j) {
              return[i, j];
          };
      };
  };
};


// Palindrome Number
// https://leetcode.com/problems/palindrome-number/

isPalindrome = x => {
  var str = x.toString();
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - i - 1]) {
          return false;
      }
  };
  return true;
};


// Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = prices => {
  let maxProfit = 0;
  let cheapestPrice = prices[0];

  for(let i = 1; i < prices.length; i++) {
      const price = prices[i];
      if(price < cheapestPrice) cheapestPrice = price;

      const currentProfit = price - cheapestPrice;
      maxProfit = Math.max(currentProfit, maxProfit);
  };
  return maxProfit;
};


// Longest Substring Without Repeating Character
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = s => {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let endChar = s[i];

    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    };

    windowCharsMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  };

  return maxLength;
};


// Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

const romanToInt = str => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;
  let previousNum = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let value = romanNumerals[str[i]];
    if (value < previousNum) {
      result -= value;
    } else {
      result += value;
    };
    previousNum = value;
  };
  return result;
};


// Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = s => {
  let words = s.split(' ');
  let filteredWords = words.filter(Boolean);
  let lastWord = filteredWords[filteredWords.length - 1];

  return lastWord.length;
};


// Reverse an Array in Place
// Not a leetcode problem, but an idea from a friend

const reverseArrayInPlace = array => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  };
  return array;
};


// Find a Duplicate in an array 
// Not a leetcode problem, but an idea from a friend

const findDuplicate = array => {
  let set = new Set();
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
      if (set.has(array[i])) counter++;
      set.add(array[i]);
  }
  return counter;
};

// Find a Duplicate in an array (same as above)
// One liner solution (Thanks and credits to Miomir)

function findDuplicate(array) {
  return array.length - (new Set(array)).size;
};

