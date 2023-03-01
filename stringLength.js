function strLength(str) {
  if(str.length >= 1 && str.length <= 10){
    return str.length;    
  } else {
    throw new Error("String length should be in the inclusive range 1 - 10");
  }
}

module.exports = strLength;