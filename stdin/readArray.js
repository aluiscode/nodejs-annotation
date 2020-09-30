process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = '';
let inputArray = [];
let currentLine= 0;

process.stdin.on('data', (chunk) =>{
  inputString += chunk;
});


process.stdin.on('end', () => {
  inputArray = inputString.trim().split('\n').map(str => str.trim());
  main();
});

function readLine(){
  return inputArray[currentLine++];
}

function main(){
  /*
   *Input
   *5
   *1 2 3 4 5
   */
  let value = parseInt(readLine(), 10);
  let arr = readLine().split(' ').map(arrTem => parseInt(arrTem));

  console.log(value);
  console.log(arr);
}
