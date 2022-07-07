/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4bbcd3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  const str5 = "abbbbbbbbbbbbbbbbb"
  const expected5 = "ab17"
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  
  
// function encodeStr(str) {
//     var expected = "";  
//     var count = 0;
//     var letter = "";
//     for(const char of str){
//         if (char == letter){
//             count += 1;
//         }
//         else{
//             if(count != 0){
//                 expected += count;
//             }
//             letter = char;
//             count = 1;
//         }
//         if(count < 2){
//             expected += char;
//         }
//     }
//     return expected
// }

// function encodeStr(str) {
//     encoded = ""
//     for(var i = 0; i < str.length; i++){
//         var count = 1
//         while(i + 1 < str.length && str.charAt(i) == str.charAt(i+1)){
//             i++;
//             count++;
//         }
//         encoded += str.charAt(i) + count;
//     }
//     return encoded
// }

function encodeStr(str) {
    let encoded = "";

    for(let i = 0; i < str.length; i++){
        let currChar = str[i];
        let dupeCount = 1;

        while(str[i+1] === currChar){
            dupeCount++;
            i++;
        }

        if(dupeCount == 1){
            encoded += currChar
        }
        else if (dupeCount == 2){
            encoded += currChar + currChar
        }
        else{
            encoded += currChar + dupeCount;
        }
    }
    return encoded;
}


  console.log(encodeStr(str1)) // Expected: a4bbcd3
  console.log(encodeStr(str2)) // Expected: ""
  console.log(encodeStr(str3)) // Expected: a
  console.log(encodeStr(str4)) // Expected: bbcc
  console.log(encodeStr(str5)) // Expected: ab17
  
  const strA = "a3b2c1d3";
  const expectedA = "aaabbcddd";
  
  const strB = "a3b2c12d10";
  const expectedB = "aaabbccccccccccccdddddddddd";
  
  /**
   * Decodes the given string by duplicating each character by the following int
   * amount if there is an int after the character.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str An encoded string with characters that may have an int
   *    after indicating how many times the character occurs.
   * @returns {string} The given str decoded / expanded.
   */
  //helpful built-ins : isNaN() .repeat() parseInt() 
  function decodeStr(str) {
    let decoded = "";
    let i = 0;

    while (i < str.length){
        let char = str[i];
        i++;
        let isNumber = isNaN(parseInt(str[i])) === false;
        
        while (i < str.length && isNumber){
            numStr += str[i++];
            isNumber = isNan(parseInt(str[i])) === false;
        }
        decoded += char.repeat(numStr);
        //          a    // 3 repeated that many times
    }
    return decoded;
  }
  
  console.log(decodeStr(strA)) // Expected: aaabbcddd
  console.log(decodeStr(strB)) // Expected: aaabbccccccccccccdddddddddd