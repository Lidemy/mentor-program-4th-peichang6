function join(arr, concatStr) {
  var result = ''
  for (var i = 0; i < arr.length; i += 1) {
    result += arr[i] + concatStr
  }
  return result
}


function repeat(str, times) {
	var result =''
  for(i = 0; i < times; i++) {
  	result += str
  }
  return result
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));



