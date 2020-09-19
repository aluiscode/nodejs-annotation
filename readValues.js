process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = '';
let inputArray = [];
let currentLine = 0;

process.stdin.on('data', (chunk) => {
  inputString += chunk;
});

process.stdin.on('end', () => {
  inputArray = inputString.split("\n");
  main();
});

function readLine(){
  return inputArray[currentLine++];
}

function main(){
  let a = parseInt(readLine());
  let b = parseInt(readLine());

  console.log(a);
  console.log(b);
}
