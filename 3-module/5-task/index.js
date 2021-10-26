function getMinMax(str) {
  let ArrOfNumbers = [];
  let ArrOfStr = str.split(' ');
  for(let key of ArrOfStr){
    if (!isNaN(key)){
      ArrOfNumbers.push(+key);
    };
  } 
  let max  = ArrOfNumbers[0], min  = ArrOfNumbers[0];

  for (let key of ArrOfNumbers) {
    if (key > max) max = key;
    if (key < min) min = key;
  }

  let result = {
    min: null,
    max: null
  }

  result.max=max;
  result.min=min;

  return result;
}
