exports.convertPhoneNumber = function(number){

  if (!number) return '';

  number = number.replace(/\([a-zA-Z0-9_]\)|[^0-9+]/g, '');

  var zeros = '00';
  var plus = '+';

  if (number.substr(0, zeros.length) === zeros){
    number = plus + number.substring(zeros.length);
  } else {
    if (number.charAt(0) !== plus){
      return 'Missing international code';
    }
  }

  // ignore subsequent numbers
  number = plus + number.split(/\+/)[1]; 
  number = number.split(/00/)[0];

  return number;
}