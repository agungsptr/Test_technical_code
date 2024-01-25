import { Request, Response } from "express";

function genOdd(req: Request, res: Response) {
  const input: any = req.query.input;

  if (Number.isNaN(input)) {
    res.status(400).send({
      status: "Failed",
      message: "Input is non a number",
    });
  }

  let tmp = [];
  for (let i = 1; i < input; i++) {
    if (i % 2 !== 0) tmp.push(i);
  }

  res.status(200).send({
    status: "Success",
    data: tmp.join(","),
  });
}

export default genOdd;
