function genNumTriangle(num: number) {
  const strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    console.log(`${strNum[i]}${"0".repeat(i + 1)}`);
  }
}

function genOdd(num: number) {
  for (let i = 1; i < num; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}

function genPrime(num: number) {
  const tmp = [];
  for (let i = 2; i < num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime) tmp.push(i);
  }
  console.log(tmp.join(","));
}