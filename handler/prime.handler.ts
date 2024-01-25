import { Request, Response } from "express";

function genPrime(req: Request, res: Response) {
  const input: any = req.query.input;

  if (Number.isNaN(input)) {
    res.status(400).send({
      status: "Failed",
      message: "Input is non a number",
    });
  }

  const tmp = [];
  for (let i = 2; i < parseInt(input); i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime) tmp.push(i);
  }

  res.status(200).send({
    status: "Success",
    data: tmp.join(","),
  });
}

export default genPrime;
