// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0); // Return the filtered array directly
}; 
/**
 * Write your description here, why the function is not working?
 * The filterOddNumber function is not working as expected because it converts the filtered array to a string using the toString() method. 
 * This conversion turns the array [2, 4] into the string "2,4", which is not the desired result according to the provided example.
 * To fix this, i should return the filtered array directly instead of converting it to a string.
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
