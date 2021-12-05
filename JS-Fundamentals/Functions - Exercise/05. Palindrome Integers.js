function palindrome(input) {
  for (let i = 0; i < input.length; i++) {
    let num = [];
    let palindrome = [];
    num.push(input[i]);
    palindrome = String(num).split("").reverse().join("");

    if (String(num) === palindrome) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
}
palindrome([123, 323, 421, 121]);
