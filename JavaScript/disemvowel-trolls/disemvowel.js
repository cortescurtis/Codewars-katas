/**
 * 
 * @param {string} str 
 * @returns 
 */
function disemvowel(str) {
  const vowelsRegex = new RegExp('[aeiou]+');

  let disemvoweledString = '';

  [...str].forEach(c => disemvoweledString = disemvoweledString.concat(c.toLowerCase().match(vowelsRegex) ? '' : c));

  return disemvoweledString;
}

console.log(disemvowel('This is a biiiiiig test'));