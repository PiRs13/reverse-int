function reverseNumber(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    return num < 0 ? -reversed : reversed;
  }
  
  module.exports = reverseNumber;