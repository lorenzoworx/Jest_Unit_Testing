function capital(str){
  let strArray = str.split('');
  strArray[0] = strArray[0].toUpperCase();
  strArray = strArray.join('');
  return strArray;
};
module.exports = capital;