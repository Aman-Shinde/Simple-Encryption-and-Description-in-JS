# Simple-Encryption-and-Description-in-JS #

In Crypto.js file you can see two functions are defined Encryption and Decryption, both of them take a string as an argument and return the Encrypted and Decrypted text.

## Encryption method ##

- Takes the password as an input string.
- Convert each element to its ascii value.
- Add a specific number to that value. (32)
  - If the total value exceeds 126, subtract that value from 126 and push that value in an array.
     - If the value is less than 10 then add 0 as prefix and push it in an array.
- If total value does not exceed value 126, then convert that ascii value to character and store it in an array.
- Join all array elements as a string. 
- Encrypted string is ready.


## Description method ##

- Take Encrypted string as an input string.
- First we need to separate characters and numbers.
- Iterate input string and check each character of that string.
  - Check each element of the array is number or not, if it's not then push that character in a new array.
  - If an element is a number then join that element with the subsequent element which is also going to be number and push that into the array.
- Now we have a new array of characters and numbers.
- Iterate that array and if the element is a character then find its ascii value and subtract 32 from that value and find a letter for that ascii value then push it   into new array
- If the element is a number then add 94 in that number and find a letter for that ascii value and push it into an array.
- Join all letters from that array and that is Original string that you are looking for.
